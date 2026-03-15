// src/pages/Contact.jsx
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';
import { getMapsKey } from '@/lib/secureConfig';
import ContactForm from '../components/common/ContactForm'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        '44 Jungle Walk',
        'Langa',
        'Cape Town, 7456',
        'South Africa'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+27 69 353 1693'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@zazitech.co.za',
        'support@zazitech.co.za'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:30 AM - 7:00 PM',
        'Saturday: 9:00 AM - 6:00 PM',
        'Sunday: 10:00 AM - 4:00 PM'
      ]
    }
  ]

  const position = {lat: -33.945465087890625, lng: 18.528385162353516};

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center bg-[url('/assets/images/contact.jpg')]">
        <div className="absolute h-full inset-0 bg-black/80" />
          <div className="relative z-40 text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-l md:text-xl mx-12">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          {/* Replace with actual map implementation */}
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <APIProvider apiKey={getMapsKey()}>
            <Map defaultCenter={position} defaultZoom={22} mapId="DEMO_MAP_ID">
              <AdvancedMarker position={position} />
            </Map>
          </APIProvider>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactCard({ icon: Icon, title, details }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="h-8 w-8 text-primary-600 mb-4" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600">{detail}</li>
        ))}
      </ul>
    </div>
  )
}