// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to contact page
      navigate("/contact");
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const navigation = [
    { name: "Home", href: "/", isContact: false },
    { name: "About Us", href: "/about", isContact: false },
    { name: "Services", href: "/services", isContact: false },
    { name: "Web Hosting", href: "/hosting", isContact: false },
    { name: "Contact Us", href: "/contact", isContact: true },
  ];

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img
                className="h-32 w-auto"
                src="/assets/images/logo.png"
                alt="Zazitech"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-950 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) =>
              item.isContact ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleContactClick}
                  className={`px-2 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.href
                      ? "text-primary-600" // Active link always primary colored
                      : isScrolled
                      ? "text-white hover:text-primary-400" // Non-active links white when scrolled
                      :"text-white hover:text-primary-400" // Non-active links white when not scrolled
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.href
                      ? "text-primary-600" // Active link always primary colored
                      : isScrolled
                      ? "text-white hover:text-primary-400" // Non-active links white when scrolled
                      :"text-white hover:text-primary-400" // Non-active links white when not scrolled
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) =>
              item.isContact ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleContactClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? "text-primary-600" // Active link always primary colored
                      : isScrolled
                      ? "text-white hover:text-primary-400" // Non-active links white when scrolled
                      : "text-white hover:text-primary-400" // Non-active links white when not scrolled
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? "text-primary-600" // Active link always primary colored
                      : isScrolled
                      ? "text-white hover:text-primary-400" // Non-active links white when scrolled
                      : "text-white hover:text-primary-400" // Non-active links white when not scrolled
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
