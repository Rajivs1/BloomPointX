import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 bg-opacity-40 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-float" style={{animationDelay: '0s'}}>
            <Link to="/" className="flex items-center mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold text-2xl">Bloom</span>
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">PointX</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Empowering tech aspirants with real-world skills and industry connections through specialized internship programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-float" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-blue-500 h-1 w-1 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-blue-500 h-1 w-1 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-blue-500 h-1 w-1 rounded-full mr-2"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-blue-500 h-1 w-1 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-blue-500 h-1 w-1 rounded-full mr-2"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-blue-500 h-1 w-1 rounded-full mr-2"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-float" style={{animationDelay: '0.4s'}}>
            <h3 className="text-lg font-semibold mb-3 text-white">Programs</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-purple-500 h-1 w-1 rounded-full mr-2"></span>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-purple-500 h-1 w-1 rounded-full mr-2"></span>
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-purple-500 h-1 w-1 rounded-full mr-2"></span>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-purple-500 h-1 w-1 rounded-full mr-2"></span>
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-purple-500 h-1 w-1 rounded-full mr-2"></span>
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="bg-purple-500 h-1 w-1 rounded-full mr-2"></span>
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-float" style={{animationDelay: '0.6s'}}>
            <h3 className="text-lg font-semibold mb-3 text-white">Contact Us</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
            <ul className="space-y-3">
              <li className="flex items-start glass-effect p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Sector-79 , Faridabad , Haryana , India</span>
              </li>
              <li className="flex items-start glass-effect p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@bloompointx.com</span>
              </li>
              <li className="flex items-start glass-effect p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+91 9718535476</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BloomPointX. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
