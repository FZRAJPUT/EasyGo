import { FaAndroid, FaDownload, FaApple } from 'react-icons/fa'

const Download = () => {
  return (
    <div id="download" className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Download Our Application
        </h2>
        <p className="text-gray-600 mb-8">
          Experience easy navigation on your Android device. 
          <span className="block text-sm mt-2 text-blue-600">
            Note: This is a testing version and not the final release.
          </span>
        </p>

        <div className="relative mb-12">
          <div className="w-64 h-[500px] mx-auto bg-gray-800 rounded-3xl p-2 shadow-2xl transform transition-all duration-500 hover:scale-105">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              {/* Replace with actual screenshot or mockup */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                EasyGo
              </div>
            </div>
          </div>
          <div title='IOS' className="absolute top-[30%] -right-4 transform -translate-y-1/2 bg-[#232323] text-white p-4 rounded-full shadow-lg cursor-pointer">
            <FaApple size={24} />
          </div>
          <div title='Android' className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#1fe66e] text-white p-4 rounded-full shadow-lg cursor-pointer">
            <FaAndroid size={24} />
          </div>
        </div>

        <a 
          href='./assets/EasyGo.apk' 
          download 
          className="inline-flex items-center px-6 py-3 bg-[#000000] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FaDownload className="mr-2" />
          Download for Android
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Compatible with Android 5.0 and above
        </p>
      </div>
    </div>
  )
}

export default Download