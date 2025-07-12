import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="font-sans min-h-screen bg-white w-full">
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
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                BloomPointX was founded in 2024 with a simple mission: to bridge the gap between theoretical knowledge and practical industry skills in the tech world.
              </p>
              <p className="mt-4">
                Our founder, experienced firsthand the challenges many graduates face when entering the tech industry. Despite having a computer science degree, she struggled with real-world applications, modern frameworks, and the collaborative nature of tech teams.
              </p>
              <p className="mt-4">
                This experience inspired her to create a platform where aspiring tech professionals could gain hands-on experience through structured internships guided by industry experts.
              </p>
              <p className="mt-4">
                What started as a small mentorship program has grown into a comprehensive tech internship platform that has helped over 500 students and career-switchers launch successful tech careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    To empower tech aspirants with the practical skills, mentorship, and confidence needed to thrive in the digital economy.
                  </p>
                  <p className="mt-4">
                    We believe that talent is universal, but opportunity is not. By providing structured internship experiences and connecting students with industry experts, we aim to democratize access to tech careers.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Practical Learning</h4>
                      <p className="text-gray-600">We believe in learning by doing - all our programs focus on building real projects.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Inclusion</h4>
                      <p className="text-gray-600">We strive to make tech careers accessible to people from all backgrounds.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Mentorship</h4>
                      <p className="text-gray-600">We connect the next generation with experienced professionals who guide them.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Innovation</h4>
                      <p className="text-gray-600">We constantly evolve our curriculum to keep pace with industry demands.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              The passionate individuals behind BloomPointX's mission to transform tech education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/54.jpg" 
                  alt="Jane Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">Former Google engineer with a passion for making tech education accessible to all.</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/45.jpg" 
                  alt="Robert Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Robert Chen</h3>
                <p className="text-blue-600 mb-4">CTO & Program Director</p>
                <p className="text-gray-600">15 years of industry experience developing scalable applications and mentoring junior developers.</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/23.jpg" 
                  alt="Aisha Khan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Aisha Khan</h3>
                <p className="text-blue-600 mb-4">Head of Partnerships</p>
                <p className="text-gray-600">Building bridges between students and industry leaders to create meaningful opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Whether you're a student looking to build skills or an industry professional wanting to give back, 
            there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Become an Intern
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 