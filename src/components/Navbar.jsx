import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to add shadow and background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Style for active links
  const activeLinkClass = "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-medium";
  const normalLinkClass = "text-white hover:text-blue-300 transition-colors";

  // Mobile navigation links with icons
  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome size={18} /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle size={18} /> },
    { path: '/programs', label: 'Programs', icon: <FaGraduationCap size={18} /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope size={18} /> }
  ];

  return (
    <header className="h-[60px]">
      <nav className={`h-[60px] py-0 flex items-center fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg shadow-blue-900/20' : 'bg-black/70'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center relative z-50">
            {/* Logo - increased z-index */}
            <div className="flex items-center relative z-50">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="BloomPointX Logo" className="w-10 h-10 mr-2" />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold text-2xl">Bloom</span>
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">PointX</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 ${isActive('/') ? activeLinkClass : normalLinkClass}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 ${isActive('/about') ? activeLinkClass : normalLinkClass}`}
              >
                About
              </Link>
              <Link 
                to="/programs" 
                className={`px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 ${isActive('/programs') ? activeLinkClass : normalLinkClass}`}
              >
                Programs
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 ${isActive('/contact') ? activeLinkClass : normalLinkClass}`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button 
                onClick={toggleMenu} 
                className="text-white focus:outline-none glass-effect p-2 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} className="text-blue-400" /> : <FaBars size={24} className="text-blue-400" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu - compact with auto height */}
          <div 
            className={`md:hidden fixed right-0 w-72 bg-indigo-900 shadow-xl transform transition-all duration-300 ease-in-out z-40 rounded-bl-xl ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } border-l border-b border-indigo-600`}
            style={{ top: '60px' }}
          >
            {/* Mobile Navigation Links */}
            <div className="py-4 px-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-3 p-4 mb-2 rounded-lg transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'bg-blue-600 text-white font-medium shadow-md' 
                      : 'bg-indigo-800 text-white hover:bg-indigo-700'
                  } transform hover:-translate-x-1`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`${isActive(link.path) ? 'text-white' : 'text-blue-200'}`}>
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.label}</span>
                  {isActive(link.path) && (
                    <div className="w-2 h-2 rounded-full bg-white ml-auto"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Overlay when mobile menu is open */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-30"
              onClick={() => setIsOpen(false)}
              style={{ top: '60px' }}
            ></div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
