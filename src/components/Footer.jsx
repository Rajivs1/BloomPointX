import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-blue-500 font-bold text-xl">Bloom</span>
              <span className="text-white font-bold text-xl">PointX</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering tech aspirants with real-world internship experiences and expert mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">MERN Stack</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">.NET Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">DSA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@bloompointx.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Tech Lane, Silicon Valley</li>
              <li className="text-gray-400">CA 94025, USA</li>
            </ul>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} BloomPointX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
