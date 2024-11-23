import axios from 'axios'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import Loader from './Loader'

export default function Home() {
  const [data, setData] = useState({
    city: "",
    key: "",
    secret: "",
    mapId: ""
  })
  const [loading, setLoading] = useState(false)

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: name === 'city' ? value.toLowerCase() : value }))
  }

  const validateForm = () => {
    if (Object.values(data).some(field => !field)) {
      toast.error("Please fill in all the fields")
      return false
    }
    return true
  }

  const onMapUpload = async (e) => {
    
    e.preventDefault();

    if (!validateForm()) return;

    let newUrl = "http://localhost:4000/api/map/add";
    setLoading(true);

    try {
      const response = await axios.post(newUrl, data);

      if (response?.data?.success) {
        toast.success(response.data.message);
        setData({ city: "", key: "", secret: "", mapId: "" });
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Upload Your Maps</h1>
        <form onSubmit={onMapUpload} className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="p-8 space-y-6">
            {Object.keys(data).map((key) => (
              <div key={key} className="relative">
                <input
                  id={key}
                  name={key}
                  type={key === 'key' || key === 'secret' ? 'password' : 'text'}
                  required
                  className="peer w-full p-4 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={data[key]}
                  onChange={onChangeHandler}
                />
                <label
                  htmlFor={key}
                  className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              </div>
            ))}
          </div>
          <div className="px-8 pb-8">
            {
              loading ? 
              <button disabled className="border-2 text-white py-3 w-[220px] bg-[#2c2c2c] cursor-wait flex items-center justify-center "><Loader />Uploading</button> :
              <button onClick={onMapUpload} className="border-2 bg-black w-[220px] text-white py-3">Upload Map</button>
          }
          </div>
        </form>
      </div>
      <Toaster position="bottom-center" />
    </div>
  )
}