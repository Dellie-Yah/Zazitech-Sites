// src/components/Partners.jsx
import { useState, useEffect } from 'react'

const Partners = ({ showTitle = true, className = '' }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const partners = [
    {
      id: 1,
      name: 'Condorgreen',
      logo: '/assets/images/partners/condorgreen.jpg',
      alt: 'Condorgreen Infotech Logo'
    },
    {
      id: 2,
      name: 'Octotel',
      logo: '/assets/images/partners/octotel-logo-v2-blue-orange.png',
      alt: 'Octotel Logo'
    },
    {
      id: 3,
      name: 'RSA Web',
      logo: '/assets/images/partners/rsaweb_logo.png',
      alt: 'RSA Web Logo'
    },
    {
      id: 4,
      name: 'White Flag Coaching',
      logo: '/assets/images/partners/whiteflagcoaching.png',
      alt: 'White Flag Coaching Logo'
    }
  ]

  // Animation trigger every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
            <p className="mt-4 text-lg text-gray-600">
              Trusted by industry leaders - Together we deliver exceptional quality 
            </p>
          </div>
        )}
  
        <div className="relative grid grid-flow-row sm:grid-flow-col auto-cols-[minmax(0,_4fr)] gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={`flex mx-auto items-center justify-center transition-all duration-300 ${
                isAnimating ? 'transform hover:scale-110' : ''
              }`}
            >
              <div className="relative w-48 h-48">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="object-contain w-full h-full filter hover:scale-110 rounded-xl transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Partner Stats */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="10+" text="Years of Partnership" />
          <StatCard number="50+" text="Active Partners" />
          <StatCard number="1000+" text="Projects Delivered" />
          <StatCard number="99%" text="Client Satisfaction" />
        </div> */}
      </div>
    </section>
  )
}

// const StatCard = ({ number, text }) => (
//   <div className="text-center">
//     <p className="text-4xl font-bold text-primary-600">{number}</p>
//     <p className="mt-2 text-gray-600">{text}</p>
//   </div>
// )

export default Partners