import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="font-sans min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-20 w-full overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-float bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">About BloomPointX</h1>
            <p className="text-xl text-blue-100">
              Empowering tech aspirants with real-world skills and industry connections
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full wave-animation">
            <path fill="rgba(10, 10, 42, 0.5)" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-float" style={{animationDelay: '0.1s'}}>
              <h2 className="text-3xl font-bold mb-3 text-white">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
              <p className="text-gray-300 mb-4">
                BloomPointX was founded in 2025 with a mission to bridge the gap between academic learning and industry requirements. We noticed that many graduates, despite having theoretical knowledge, struggled to adapt to real-world tech environments.
              </p>
              <p className="text-gray-300 mb-4">
                Starting with just 5 interns and 2 mentors, we've grown to support over 500 interns annually across multiple tech disciplines. Our focus has always been on practical, hands-on learning guided by industry professionals.
              </p>
              <p className="text-gray-300">
                Today, we're proud to have helped launch the careers of hundreds of tech professionals who are making an impact in companies around the world.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl glass-effect p-2 animate-float" style={{animationDelay: '0.3s'}}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-white">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 mb-8">
              We're on a mission to democratize access to quality tech education and real-world experience. We believe that talent is universal, but opportunity is not. BloomPointX aims to change that by providing structured, industry-relevant internships that prepare participants for successful careers in technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-effect p-6 rounded-lg border-l-4 border-blue-500 animate-float" style={{animationDelay: '0.1s'}}>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Practical Learning</h3>
                <p className="text-gray-300">
                  We focus on hands-on projects that simulate real workplace challenges and build portfolios.
                  </p>
                </div>
              <div className="glass-effect p-6 rounded-lg border-l-4 border-purple-500 animate-float" style={{animationDelay: '0.3s'}}>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Mentorship</h3>
                <p className="text-gray-300">
                  Every intern receives guidance from experienced professionals currently working in the industry.
                </p>
              </div>
              <div className="glass-effect p-6 rounded-lg border-l-4 border-green-500 animate-float" style={{animationDelay: '0.5s'}}>
                <h3 className="text-xl font-semibold mb-4 text-green-300">Career Support</h3>
                <p className="text-gray-300">
                  We provide networking opportunities, interview preparation, and job placement assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-3 text-center text-white">Our Leadership Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="relative overflow-hidden rounded-xl transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 animate-float" style={{animationDelay: '0.1s'}}>
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 opacity-75 rounded-xl"></div>
              
              {/* Card content with glass effect */}
              <div className="relative m-[2px] glass-effect rounded-xl p-6 h-full flex flex-col justify-between bg-gray-900/80 backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-500">Mohd Imran</h3>
                  <p className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-medium mb-4">Founder & CEO</p>
                  <p className="text-gray-300 text-sm flex-grow">
                    Having a great Experience in MERN Stack, Devops and also a great leader.
                  </p>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="relative overflow-hidden rounded-xl transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 animate-float" style={{animationDelay: '0.3s'}}>
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 opacity-75 rounded-xl"></div>
              
              {/* Card content with glass effect */}
              <div className="relative m-[2px] glass-effect rounded-xl p-6 h-full flex flex-col justify-between bg-gray-900/80 backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-500">Rajiv Ranjan</h3>
                  <p className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-medium mb-4">Chief Operations Officer</p>
                  <p className="text-gray-300 text-sm flex-grow">
                    Education specialist with experience at top coding bootcamps and universities.
                  </p>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="relative overflow-hidden rounded-xl transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 animate-float" style={{animationDelay: '0.5s'}}>
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-green-700 opacity-75 rounded-xl"></div>
              
              {/* Card content with glass effect */}
              <div className="relative m-[2px] glass-effect rounded-xl p-6 h-full flex flex-col justify-between bg-gray-900/80 backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-green-500 transition-all duration-500">Harsh Pratap Singh</h3>
                  <p className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-medium mb-4">Chief Technology Officer</p>
                  <p className="text-gray-300 text-sm flex-grow">
                    Full-stack architect with expertise in modern web technologies and cloud platforms.
                  </p>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="relative overflow-hidden rounded-xl transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 animate-float" style={{animationDelay: '0.7s'}}>
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 opacity-75 rounded-xl"></div>
              
              {/* Card content with glass effect */}
              <div className="relative m-[2px] glass-effect rounded-xl p-6 h-full flex flex-col justify-between bg-gray-900/80 backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-amber-500 transition-all duration-500">Pradeep Nagarkoti</h3>
                  <p className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent font-medium mb-4">Head of Mentorship</p>
                  <p className="text-gray-300 text-sm flex-grow">
                    Expert in Data Analytics and Machine Learning and also a great mentor.
                  </p>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white w-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <div className="glass-effect p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 animate-float bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Ready to Start Your Tech Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our internship program and gain the skills and experience needed to thrive in tech.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 btn-shiny animate-pulse-glow">
                Apply Now
            </button>
              <button className="glass-effect border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                Learn More
            </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 