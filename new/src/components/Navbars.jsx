import { useState } from 'react'
import { FaHome, FaDownload } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')

  const navItems = [
    { id: '', icon: FaHome, text: 'Home' },
    { id: 'download', icon: FaDownload, text: 'Download' },
    { id: 'contact', icon: MdMessage, text: 'Contact' }
  ]

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer transition-colors duration-300 hover:text-blue-800">
              @EasyGo
            </h1>
          </div>
          <div className="flex items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  activeLink === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setActiveLink(item.id)}
              >
                <item.icon className={`mr-1.5 h-5 w-5 ${
                  activeLink === item.id ? 'text-blue-500' : 'text-gray-400'
                }`} />
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar