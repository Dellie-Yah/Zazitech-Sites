// src/pages/Home.jsx
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Monitor, Users, Server } from "lucide-react";

import ContactForm from "../components/common/ContactForm";
import Partners from "../components/common/Partners";

export default function Home() {
  const location = useLocation();
  const contactRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-contain bg-center bg-[url('/assets/images/home-banner.jpg')]">
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-40 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Zazitech Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering Your Digital Journey with Innovative Solutions
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Monitor}
              title="Graphic Design"
              description="Professional design services for all your branding needs"
            />
            <ServiceCard
              icon={Users}
              title="IT Training"
              description="Microsoft Office and Programming classes for all skill levels"
            />
            <ServiceCard
              icon={Server}
              title="Web Development"
              description="Modern websites for your online presence"
            />
            <ServiceCard
              icon={Monitor}
              title="Internet Cafe"
              description="Modern facilities with high-speed internet access"
            />
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/services")}
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-8">
                At Zazitech, we're passionate about bridging the digital divide
                and empowering businesses and individuals with cutting-edge
                technology solutions. With years of experience and a dedicated
                team, we provide comprehensive IT services tailored to your
                needs.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-primary-600 rounded-lg transform -rotate-6"></div>
              <img
                src="/assets/images/about-preview.jpg"
                alt="About Zazitech"
                className="relative z-10 w-full h-full object-contain hover:object-scale-down rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Web Hosting Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience reliable, secure, and scalable hosting solutions for
              your website. From small businesses to large enterprises, we have
              the perfect package for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Bronze", "Silver", "Gold", "Platinum"].map((tier) => (
              <div key={tier} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{tier} Package</h3>
                <p className="text-gray-600 mb-4">Starting from</p>
                <p className="text-3xl font-bold text-primary-600 mb-6">
                  R{getTierPrice(tier)}
                </p>
                <button
                  onClick={() => navigate("/hosting")}
                  className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Partners />
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

// Helper Components
function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="h-12 w-12 text-primary-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Helper function for pricing
function getTierPrice(tier) {
  const prices = {
    Bronze: "99",
    Silver: "199",
    Gold: "299",
    Platinum: "499",
  };
  return prices[tier];
}
