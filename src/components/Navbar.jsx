import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';

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
  const activeLinkClass = "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-medium";
  const normalLinkClass = "text-white hover:text-blue-300 transition-colors";

  return (
    <nav className="glass-effect py-4 sticky top-0 z-50 border-b border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
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
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none glass-effect p-2 rounded-lg"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg py-2 animate-float">
            <Link 
              to="/" 
              className={`block py-2 px-4 ${isActive('/') ? 'bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-400' : 'text-white hover:bg-blue-900/30 hover:text-blue-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 px-4 ${isActive('/about') ? 'bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-400' : 'text-white hover:bg-blue-900/30 hover:text-blue-300'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`block py-2 px-4 ${isActive('/programs') ? 'bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-400' : 'text-white hover:bg-blue-900/30 hover:text-blue-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 px-4 ${isActive('/contact') ? 'bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-400' : 'text-white hover:bg-blue-900/30 hover:text-blue-300'}`}
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
