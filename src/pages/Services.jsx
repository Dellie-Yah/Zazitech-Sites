// src/pages/Services.jsx
import { ArrowRight, Palette, Code, Server, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("");
  
  // Refs for each section
  const graphicsRef = useRef(null);
  const trainingRef = useRef(null);
  const webDevRef = useRef(null);
  const cafeRef = useRef(null);
  
  // Add global smooth scrolling behavior
  useEffect(() => {
    // Add smooth scrolling behavior to html element
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Set up intersection observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -70% 0px", // Adjust rootMargin to trigger when section is significantly in view
      threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    
    // Observe all section elements
    const sections = [
      graphicsRef.current,
      trainingRef.current,
      webDevRef.current,
      cafeRef.current
    ];
    
    sections.forEach(section => {
      if (section) sectionObserver.observe(section);
    });
    
    // Handle direct navigation to anchor links
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setActiveSection(hash);
        
        // Add a small delay to ensure the element is available
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Get the main navbar height (which is 7rem/112px based on h-28)
            const navbarHeight = 112; // h-28 equals 7rem which is 112px
            
            // Scroll with offset for fixed header plus a little extra padding
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - (navbarHeight + 16);
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };
    
    // Check for hash on initial load
    if (window.location.hash) {
      handleHashChange();
    }
    
    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "";
      sections.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  // Custom navigation component
  const ServiceNav = () => (
    <nav className="sticky top-28 z-40 bg-white shadow-md py-3 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center space-x-1 sm:space-x-8">
          {[
            { id: "graphics-design", name: "Graphics Design", icon: Palette },
            { id: "computer-training", name: "Computer Training", icon: Code },
            { id: "web-development", name: "Web Development", icon: Server },
            { id: "internet-cafe", name: "Internet Cafe", icon: MonitorSmartphone }
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                <item.icon className="h-4 w-4 mr-1.5" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section - Add top padding to accommodate fixed navbar */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center bg-[url('/assets/images/Zazi_Tech_Services_Page.jpeg')]">
        <div className="absolute h-full inset-0 bg-black/80" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-l md:text-xl mx-12">
              Comprehensive technology solutions tailored to meet your needs. From
              graphic design to web hosting, we've got you covered.
            </p>
          </div>
      </section>

      {/* Services Navigation */}
      <ServiceNav />

      {/* Main Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {/* Graphic Design */}
            <div id="graphics-design" ref={graphicsRef} className="scroll-mt-44">
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
            </div>

            {/* IT Training */}
            <div id="computer-training" ref={trainingRef} className="scroll-mt-44">
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
                extraContent={
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary-600 mb-2">
                      Master Microsoft Office Skills
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Unlock your productivity potential with our expert-led training.
                    </p>
                    <Link
                      to="https://forms.gle/bjajTfpNDkacifBQ8"
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      Boost Your Career Today{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                }
              />
            </div>

            {/* Web Development */}
            <div id="web-development" ref={webDevRef} className="scroll-mt-44">
              <ServiceSection
                icon={Server}
                title="Website Development & Kids Coding"
                description="Transform your business with a professional, modern website tailored to your needs. Plus, introduce your kids to the world of coding with our engaging programs."
                features={[
                "Custom Website Design & Development",
                "E-commerce Solutions",
                "Content Management Systems (WordPress)",
                "Mobile-Responsive Design",
                "Search Engine Optimization (SEO)",
                "Website Maintenance & Support",
                "Domain & Hosting Setup",
                "SSL Certificate Installation",
                "Kids Coding Classes",
                "Interactive Coding Projects for Kids",
                ]}
                extraContent={
                <>
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
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">
                    Kids Coding
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Empower your kids with essential coding skills through our
                    fun and interactive coding classes designed for young learners.
                  </p>
                  <Link
                    to="https://forms.gle/8BHSo6iHYsNGde1o7"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    Enroll Your Kids Today{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  </div>
                </>
                }
                hasLearnMore={false}
              />
            </div>
            
            {/* Internet Cafe */}
            <div id="internet-cafe" ref={cafeRef} className="scroll-mt-44">
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
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-secondary-50 p-8">
            <div className="space-y-6">
              <Feature
                title="Experienced Team"
                description="Our team brings years of industry experience and expertise"
              />
              <Feature
                title="Comprehensive Solutions"
                description="One-stop shop for all your technology needs"
              />
              <Feature
                title="Customer Focus"
                description="Dedicated to providing exceptional customer service"
              />
            </div>
            <div className="space-y-6">
              <Feature
                title="Affordable Pricing"
                description="Competitive rates without compromising on quality"
              />
              <Feature
                title="Local Support"
                description="Quick and reliable local support when you need it"
              />
              <Feature
                title="Modern Facilities"
                description="State-of-the-art facilities and equipment"
              />
            </div>
          </div>
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
          <Icon className="h-8 w-8 text-primary-600 mr-2" />
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

function Feature({ title, description }) {
  return (
    <div className="flex items-start">
      <CheckCircle2 className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}