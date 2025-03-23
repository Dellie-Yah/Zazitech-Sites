// src/pages/NotFound.jsx
import { useNavigate } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        {/* 404 Header */}
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-semibold mt-8 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Go Home Button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </button>

          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">You might want to check:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Web Hosting', path: '/hosting' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className="text-primary-600 hover:text-primary-800 hover:underline"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <p className="mt-12 text-gray-600">
          If you think this is a mistake or need assistance,{' '}
          <button
            onClick={() => navigate('/contact')}
            className="text-primary-600 hover:underline"
          >
            contact our support team
          </button>
          .
        </p>
      </div>
    </div>
  )
}