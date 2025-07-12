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
  const activeLinkClass = "text-blue-600 font-medium";
  const normalLinkClass = "text-gray-700 hover:text-blue-600 transition-colors";

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-2xl">Bloom</span>
              <span className="text-gray-800 font-bold text-2xl">PointX</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/') ? activeLinkClass : normalLinkClass}>Home</Link>
            <Link to="/about" className={isActive('/about') ? activeLinkClass : normalLinkClass}>About</Link>
            <Link to="/programs" className={isActive('/programs') ? activeLinkClass : normalLinkClass}>Programs</Link>
            <Link to="/contact" className={isActive('/contact') ? activeLinkClass : normalLinkClass}>Contact</Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="#" className="text-gray-700 hover:text-blue-600 transition-colors">Log In</Link>
            <Link to="#" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg py-2">
            <Link 
              to="/" 
              className={`block py-2 px-4 ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 px-4 ${isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`block py-2 px-4 ${isActive('/programs') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 px-4 ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-gray-200 mt-2 pt-2">
              <Link to="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsOpen(false)}>Log In</Link>
              <Link to="#" className="block py-2 px-4 text-blue-600 font-medium hover:bg-blue-50" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
