import { FaGithub, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">EasyGo</h3>
            <p className="text-gray-600 text-sm">
              Making navigation easy for everyone. Download our app and explore the world with confidence.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Download', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaGithub, label: 'GitHub', link: 'https://github.com' },
                { icon: FaEnvelope, label: 'Email', link: 'mailto:info@easygo.com' },
                { icon: FaFacebook, label: 'Facebook', link: 'https://facebook.com' },
                { icon: FaTwitter, label: 'Twitter', link: 'https://twitter.com' },
                { icon: FaInstagram, label: 'Instagram', link: 'https://instagram.com' },
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} EasyGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
