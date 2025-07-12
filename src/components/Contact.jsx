import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="font-sans min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions about our internships? We're here to help.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="rgba(10, 10, 42, 0.5)" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-400 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-400 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-400 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-400 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-white">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Our Location</h3>
                    <p className="text-gray-300 mt-1">
                      123 Tech Avenue, Suite 456<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email Us</h3>
                    <p className="text-gray-300 mt-1">
                      info@bloompointx.com<br />
                      support@bloompointx.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Call Us</h3>
                    <p className="text-gray-300 mt-1">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Office Hours</h3>
                    <p className="text-gray-300 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Find Us</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Visit our office or connect with us virtually
            </p>
          </div>
          <div className="h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462606519114!2d-122.39901068439046!3d37.78296957975826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d2a7c9e39%3A0xbe5d28e108e53bcb!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1645583227183!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="BloomPointX Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Common Questions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find quick answers to frequently asked questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How do I apply for an internship?</h3>
              <p className="text-gray-300">
                You can apply through our online application form on the Programs page. Select your preferred track and follow the instructions to submit your application.
              </p>
            </div>
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What are the requirements for joining?</h3>
              <p className="text-gray-300">
                Requirements vary by track, but generally we look for a basic understanding of programming concepts for technical tracks, and a portfolio or design interest for creative tracks.
              </p>
            </div>
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Are the internships remote or in-person?</h3>
              <p className="text-gray-300">
                We offer both remote and hybrid options. Remote interns participate fully online, while hybrid interns attend in-person sessions at our office once or twice a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 