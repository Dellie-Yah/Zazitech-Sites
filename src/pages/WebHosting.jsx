// src/pages/WebHosting.jsx
import { Check, HardDrive, Mail } from "lucide-react";
import { Link } from 'react-router-dom'

export default function WebHosting() {
  const hostingPackages = [
    {
      name: "Bronze",
      price: 99,
      features: [
        "5GB Storage",
        "50GB Bandwidth",
        "5 Email Accounts",
        "Basic SSL Certificate",
        "Daily Backups",
        "24/7 Support",
      ],
    },
    {
      name: "Silver",
      price: 199,
      features: [
        "15GB Storage",
        "150GB Bandwidth",
        "15 Email Accounts",
        "Premium SSL Certificate",
        "Daily Backups",
        "24/7 Priority Support",
        "Free Domain Registration",
      ],
    },
    {
      name: "Gold",
      price: 299,
      popular: true,
      features: [
        "50GB Storage",
        "Unlimited Bandwidth",
        "50 Email Accounts",
        "Premium SSL Certificate",
        "Daily Backups",
        "24/7 Priority Support",
        "Free Domain Registration",
        "Website Builder",
        "SEO Tools",
      ],
    },
    {
      name: "Platinum",
      price: 499,
      features: [
        "Unlimited Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Premium SSL Certificate",
        "Daily Backups",
        "24/7 VIP Support",
        "Free Domain Registration",
        "Website Builder",
        "SEO Tools",
        "Dedicated IP",
        "Priority Performance",
      ],
    },
  ];

  const emailPackages = [
    {
      name: "Business Email Starter",
      price: 49,
      features: [
        "5 Email Accounts",
        "10GB Storage per Account",
        "Webmail Access",
        "Mobile Sync",
        "Spam Protection",
      ],
    },
    {
      name: "Business Email Pro",
      price: 99,
      features: [
        "20 Email Accounts",
        "25GB Storage per Account",
        "Webmail Access",
        "Mobile Sync",
        "Advanced Spam Protection",
        "Custom Domain",
        "Email Forwarding",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center bg-[url('/assets/images/hosting.jpg')]">
        <div className="absolute h-full inset-0 bg-black/80" />
          <div className="relative z-40 text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Web Hosting Solutions</h1>
            <p className="text-l md:text-xl mx-12">
              Reliable, secure, and scalable hosting solutions for your website.
              Choose the perfect package for your needs.
            </p>
          </div>
      </section>

      {/* Hosting Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Hosting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="99.9% Uptime"
              description="We guarantee your website will be available 99.9% of the time"
            />
            <FeatureCard
              title="24/7 Support"
              description="Our technical support team is available around the clock"
            />
            <FeatureCard
              title="Security First"
              description="Advanced security measures to protect your website"
            />
          </div>
        </div>
      </section>

      {/* Hosting Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Web Hosting Packages</h2>
            <p className="text-gray-600">
              Choose the package that suits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingPackages.map((pkg) => (
              <PriceCard key={pkg.name} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Email Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Business Email Solutions
            </h2>
            <p className="text-gray-600">
              Professional email hosting for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emailPackages.map((pkg) => (
              <EmailPackageCard key={pkg.name} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to set up your hosting package or discuss custom
            solutions.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PriceCard({ package: pkg }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        pkg.popular ? "ring-2 ring-primary-600" : ""
      }`}
    >
      {pkg.popular && (
        <div className="bg-primary-600 text-white text-center py-2">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
        <p className="text-4xl font-bold mb-6">
          R{pkg.price}
          <span className="text-base font-normal text-gray-600">/month</span>
        </p>
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="w-full bg-primary-600 text-white px-5 py-3 rounded-md hover:bg-primary-700 transition-colors">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function EmailPackageCard({ package: pkg }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Mail className="h-12 w-12 text-primary-600 mb-4" />
      <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
      <p className="text-4xl font-bold mb-6">
        R{pkg.price}
        <span className="text-base font-normal text-gray-600">/month</span>
      </p>
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="w-full bg-primary-600 text-white px-5 py-3 rounded-md hover:bg-primary-700 transition-colors">
        Get Started
      </Link>
    </div>
  );
}
