// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/18WUXhTt7U/' },
    // { name: 'Twitter', icon: Twitter, href: '#' },
    // { name: 'Instagram', icon: Instagram, href: '#' },
    // { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:info@zazitech.co.za' },
  ]

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Web Hosting', href: '/hosting' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Graphics Design', href: '/services#graphics-design' },
        { name: 'Web Development', href: '/services#web-development' },
        { name: 'Computer Training', href: '/services#web-development' },
        { name: 'Internet Cafe', href: '/services#internet-cafe' },
      ],
    }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1 me-10">
            <img
              className="h-60 w-auto"
              src="/assets/images/logo.png"
              alt="Zazitech Logo"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Innovative technology solutions for modern businesses.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1 mt-28">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} Zazitech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}