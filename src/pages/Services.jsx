// src/pages/Services.jsx
import { ArrowRight, Palette, Code, Server, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-contain bg-center bg-[url('/assets/images/services.jpg')]">
        <div className="absolute h-full inset-0 bg-black/80" />
          <div className="relative z-40 text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-l md:text-xl mx-12">
              Comprehensive technology solutions tailored to meet your needs. From
              graphic design to web hosting, we've got you covered.
            </p>
          </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* Graphic Design */}
            <ServiceSection
              icon={Palette}
              title="Graphic Design"
              description="Professional design services for all your visual communication needs"
              features={[
                "Logo Design & Branding",
                "Marketing Materials",
                "Social Media Graphics",
                "Print Design",
                "Package Design",
                "Custom Illustrations",
              ]}
            />

            {/* IT Training */}
            <ServiceSection
              icon={Code}
              title="Microsoft Office & Programming Classes"
              description="Comprehensive training programs to enhance your technical skills"
              features={[
                "Microsoft Word, Excel, PowerPoint Training",
                "Basic to Advanced Programming Courses",
                "Web Development Fundamentals",
                "Database Management",
                "Custom Corporate Training Programs",
                "One-on-One Tutoring Available",
              ]}
            />

            {/* Web Development */}
            <ServiceSection
              icon={Server}
              title="Website Development"
              description="Transform your business with a professional, modern website tailored to your needs. From design to deployment, we've got you covered."
              features={[
                "Custom Website Design & Development",
                "E-commerce Solutions",
                "Content Management Systems (WordPress)",
                "Mobile-Responsive Design",
                "Search Engine Optimization (SEO)",
                "Website Maintenance & Support",
                "Domain & Hosting Setup",
                "SSL Certificate Installation",
              ]}
              extraContent={
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">
                    Need Hosting?
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Get your website online with our reliable hosting solutions.
                    Choose from our range of hosting packages designed for every
                    business size.
                  </p>
                  <Link
                    to="/hosting"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    View Hosting Packages{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              }
              hasLearnMore={true}
              learnMoreLink="/services#web-development"
            />
            {/* Internet Cafe */}
            <ServiceSection
              icon={MonitorSmartphone}
              title="Internet Cafe Services"
              description="Modern facilities with high-speed internet access and essential business services"
              features={[
                "High-Speed Internet Access",
                "Printing & Scanning Services",
                "Document Processing",
                "Computer Usage",
                "Technical Assistance",
                "Business Center Services",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your goals
            with our comprehensive service offerings.
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

function ServiceSection({
  icon: Icon,
  title,
  description,
  features,
  hasLearnMore,
  learnMoreLink,
  extraContent,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <div className="flex items-center mb-6">
          <Icon className="h-8 w-8 text-primary-600 mr-4" />
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        {hasLearnMore && (
          <button
            onClick={() => (window.location.href = learnMoreLink)}
            className="text-primary-600 font-semibold hover:text-primary-700"
          >
            Learn More
          </button>
        )}
      </div>
      <div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6">What We Offer</h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="h-6 w-6 text-primary-600 mr-2">•</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          {extraContent && <div className="mt-8">{extraContent}</div>}
        </div>
      </div>
    </div>
  );
}
