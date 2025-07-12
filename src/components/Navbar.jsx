import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Style for active links
  const activeLinkClass = "text-blue-400 font-medium";
  const normalLinkClass = "text-white hover:text-blue-300 transition-colors";

  return (
    <nav className="bg-transparent backdrop-blur-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-400 font-bold text-2xl">Bloom</span>
              <span className="text-white font-bold text-2xl">PointX</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/') ? activeLinkClass : normalLinkClass}>Home</Link>
            <Link to="/about" className={isActive('/about') ? activeLinkClass : normalLinkClass}>About</Link>
            <Link to="/programs" className={isActive('/programs') ? activeLinkClass : normalLinkClass}>Programs</Link>
            <Link to="/contact" className={isActive('/contact') ? activeLinkClass : normalLinkClass}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg py-2">
            <Link 
              to="/" 
              className={`block py-2 px-4 ${isActive('/') ? 'bg-blue-900 bg-opacity-50 text-blue-400' : 'text-white hover:bg-blue-900 hover:bg-opacity-30 hover:text-blue-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 px-4 ${isActive('/about') ? 'bg-blue-900 bg-opacity-50 text-blue-400' : 'text-white hover:bg-blue-900 hover:bg-opacity-30 hover:text-blue-300'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`block py-2 px-4 ${isActive('/programs') ? 'bg-blue-900 bg-opacity-50 text-blue-400' : 'text-white hover:bg-blue-900 hover:bg-opacity-30 hover:text-blue-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 px-4 ${isActive('/contact') ? 'bg-blue-900 bg-opacity-50 text-blue-400' : 'text-white hover:bg-blue-900 hover:bg-opacity-30 hover:text-blue-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
