import { useState, useEffect } from 'react'
import { Search, Loader2 } from 'lucide-react'
import axios from 'axios';

export default function Component() {
  const [mapData, setMapData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMapData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await axios.get("http://localhost:4000/api/map/list?city=agra");
        let data = response.data;
        console.log(data.maps[0].city);
        setMapData(data.maps)
      } catch (err) {
        setError('An error occurred while fetching map data. Please try again later.')
        console.error('Error fetching map data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMapData()
    console.log(mapData.map((e)=> ( e.city)));
  }, [])

  const filteredMapData = Array.isArray(mapData)
  ? mapData.filter(map =>
      map.city.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Available Maps</h1>
      
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search by city name"
          className="w-full p-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-blue-500" size={48} />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 mt-4">{error}</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Map ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Secret</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMapData.map((map, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{map.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{map.mapId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{map.secret}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{map.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {!isLoading && !error && filteredMapData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No maps found matching your search.</p>
      )}
    </div>
  )
}
