import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="font-sans min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BloomPointX</h1>
            <p className="text-xl text-blue-100">
              Empowering tech aspirants with real-world skills and industry connections
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="rgba(10, 10, 42, 0.5)" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-300 mb-4">
                BloomPointX was founded in 2020 with a mission to bridge the gap between academic learning and industry requirements. We noticed that many graduates, despite having theoretical knowledge, struggled to adapt to real-world tech environments.
              </p>
              <p className="text-gray-300 mb-4">
                Starting with just 5 interns and 2 mentors, we've grown to support over 500 interns annually across multiple tech disciplines. Our focus has always been on practical, hands-on learning guided by industry professionals.
              </p>
              <p className="text-gray-300">
                Today, we're proud to have helped launch the careers of hundreds of tech professionals who are making an impact in companies around the world.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-gray-300 mb-8">
              We're on a mission to democratize access to quality tech education and real-world experience. We believe that talent is universal, but opportunity is not. BloomPointX aims to change that by providing structured, industry-relevant internships that prepare participants for successful careers in technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-lg border border-blue-400 bg-blue-900 bg-opacity-20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Practical Learning</h3>
                <p className="text-gray-300">
                  We focus on hands-on projects that simulate real workplace challenges and build portfolios.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-blue-400 bg-blue-900 bg-opacity-20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Mentorship</h3>
                <p className="text-gray-300">
                  Every intern receives guidance from experienced professionals currently working in the industry.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-blue-400 bg-blue-900 bg-opacity-20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Career Support</h3>
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
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Alex Johnson</h3>
              <p className="text-blue-300 mb-2">Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Former tech lead at Google with 15+ years of experience in software development.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Sarah Chen</h3>
              <p className="text-blue-300 mb-2">Chief Operations Officer</p>
              <p className="text-gray-300 text-sm">
                Education specialist with experience at top coding bootcamps and universities.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Michael Rodriguez</h3>
              <p className="text-blue-300 mb-2">Chief Technology Officer</p>
              <p className="text-gray-300 text-sm">
                Full-stack architect with expertise in modern web technologies and cloud platforms.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" 
                  alt="Head of Mentorship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Priya Patel</h3>
              <p className="text-blue-300 mb-2">Head of Mentorship</p>
              <p className="text-gray-300 text-sm">
                Former senior engineer at Microsoft with a passion for developing tech talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8">
            Join our internship program and gain the skills and experience needed to thrive in tech.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 