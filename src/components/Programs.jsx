import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaMobile, FaDesktop, FaPalette, FaChartLine, FaCloud } from 'react-icons/fa';

const Programs = () => {
  // Sample data for internship tracks
  const tracks = [
    {
      id: 1,
      title: "MERN Stack",
      icon: <FaCode className="text-4xl text-blue-500" />,
      description: "Build full-stack web applications using MongoDB, Express, React and Node.js",
      duration: "12 weeks",
      features: [
        "Frontend development with React",
        "Backend APIs with Express and Node.js",
        "MongoDB database integration",
        "Authentication and authorization",
        "Deployment strategies"
      ]
    },
    {
      id: 2,
      title: ".NET Development",
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      description: "Learn enterprise application development with .NET Core and C#",
      duration: "12 weeks",
      features: [
        "C# fundamentals and advanced concepts",
        "ASP.NET Core MVC development",
        "Web API development",
        "Entity Framework Core",
        "Azure deployment"
      ]
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      description: "Master DSA concepts and ace technical interviews with confidence",
      duration: "8 weeks",
      features: [
        "Arrays, LinkedLists, Trees, Graphs",
        "Sorting and searching algorithms",
        "Dynamic programming",
        "Problem solving strategies",
        "Mock interviews and feedback"
      ]
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <FaPalette className="text-4xl text-blue-500" />,
      description: "Create user-centered designs that solve real business problems",
      duration: "10 weeks",
      features: [
        "User research and persona creation",
        "Wireframing and prototyping",
        "UI design fundamentals",
        "Usability testing",
        "Design systems"
      ]
    },
    {
      id: 5,
      title: "Data Analytics",
      icon: <FaDatabase className="text-4xl text-blue-500" />,
      description: "Transform raw data into actionable insights using modern tools",
      duration: "12 weeks",
      features: [
        "Data cleaning and preparation",
        "Statistical analysis",
        "Data visualization with Tableau",
        "SQL and database management",
        "Python for data analysis"
      ]
    },
    {
      id: 6,
      title: "DevOps & Cloud",
      icon: <FaCloud className="text-4xl text-blue-500" />,
      description: "Build and deploy applications with modern CI/CD pipelines",
      duration: "10 weeks",
      features: [
        "Docker and containerization",
        "Kubernetes orchestration",
        "AWS/Azure cloud services",
        "CI/CD pipeline setup",
        "Infrastructure as Code"
      ]
    },
    {
      id: 7,
      title: "Backend Engineering",
      icon: <FaServer className="text-4xl text-blue-500" />,
      description: "Build scalable and robust backend systems to power modern applications",
      duration: "12 weeks",
      features: [
        "API design and development",
        "Database architecture",
        "Authentication and security",
        "Microservices architecture",
        "Performance optimization"
      ]
    },
    {
      id: 8,
      title: "Mobile Development",
      icon: <FaMobile className="text-4xl text-blue-500" />,
      description: "Create cross-platform mobile applications using React Native",
      duration: "10 weeks",
      features: [
        "React Native fundamentals",
        "State management with Redux",
        "Native APIs integration",
        "UI component libraries",
        "App store deployment"
      ]
    },
  ];

  // State to track which track is selected for viewing details
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [isVisible, setIsVisible] = useState({});
  
  // Animation trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="font-sans min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-float">Our Internship Programs</h1>
            <p className="text-xl text-blue-100 animate-float" style={{ animationDelay: '0.2s' }}>
              Practical, industry-focused programs designed to give you real-world experience
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full wave-animation">
            <path fill="rgba(10, 10, 42, 0.5)" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-16 md:py-24 w-full animate-on-scroll" id="internship-tracks">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 text-white ${isVisible['internship-tracks'] ? 'animate-float' : 'opacity-0'} transition-all duration-700`}>
              Specialized Internship Tracks
            </h2>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isVisible['internship-tracks'] ? 'animate-float' : 'opacity-0'} transition-all duration-700`} style={{ animationDelay: '0.2s' }}>
              Choose the path that aligns with your interests and career goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tracks.map((track, index) => (
              <div 
                key={track.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-500 hover:shadow-lg transform hover:-translate-y-2 ${
                  selectedTrack.id === track.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-blue-900 bg-opacity-20 border border-blue-400 text-white hover:bg-blue-900 hover:bg-opacity-40'
                } ${isVisible['internship-tracks'] ? 'animate-float' : 'opacity-0 translate-y-10'} transition-all duration-700`}
                onClick={() => setSelectedTrack(track)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`mr-4 ${selectedTrack.id === track.id ? 'text-white' : 'text-blue-400'} transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {track.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{track.title}</h3>
                </div>
                <p className={selectedTrack.id === track.id ? 'text-blue-100' : 'text-gray-300'}>
                  {track.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Selected Track Details */}
          <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-8 transform transition-all duration-500 ${isVisible['internship-tracks'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4 animate-float">
                    {selectedTrack.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedTrack.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{selectedTrack.description}</p>
                <div className="mb-6">
                  <span className="inline-block bg-blue-600 text-white text-sm py-1 px-3 rounded-full">
                    {selectedTrack.duration} duration
                  </span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 btn-shiny">
                  Apply for this track
                </button>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white">What you'll learn:</h4>
                <ul className="space-y-3">
                  {selectedTrack.features.map((feature, index) => (
                    <li key={index} className="flex items-start animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                      <svg className="h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 md:py-24 w-full animate-on-scroll" id="program-structure">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 text-white ${isVisible['program-structure'] ? 'animate-float' : 'opacity-0'} transition-all duration-700`}>
              Program Structure
            </h2>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isVisible['program-structure'] ? 'animate-float' : 'opacity-0'} transition-all duration-700`} style={{ animationDelay: '0.2s' }}>
              Our internships are designed to provide a comprehensive learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible['program-structure'] ? 'animate-float' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0s' }}>
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 1: Foundation</h3>
              <p className="text-gray-300 mb-4">
                Build a solid understanding of core concepts and tools used in your chosen track.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Guided learning path with expert mentors</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Interactive sessions and hands-on practice</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Weekly assignments and challenges</span>
                </li>
              </ul>
            </div>
            
            <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible['program-structure'] ? 'animate-float' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 2: Application</h3>
              <p className="text-gray-300 mb-4">
                Apply your knowledge to real-world scenarios and build practical skills.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Mini-projects to apply concepts learned</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Code reviews and feedback sessions</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Collaborative team exercises</span>
                </li>
              </ul>
            </div>
            
            <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible['program-structure'] ? 'animate-float' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 3: Capstone</h3>
              <p className="text-gray-300 mb-4">
                Showcase your skills by building a significant project for your portfolio.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-500 mr-2"></div>
                  <span>End-to-end project development</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-500 mr-2"></div>
                  <span>Industry mentor guidance</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-500 mr-2"></div>
                  <span>Final presentation and project showcase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 w-full animate-on-scroll" id="application-process">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 text-white ${isVisible['application-process'] ? 'animate-float' : 'opacity-0'} transition-all duration-700`}>
              Application Process
            </h2>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isVisible['application-process'] ? 'animate-float' : 'opacity-0'} transition-all duration-700`} style={{ animationDelay: '0.2s' }}>
              Simple steps to start your journey with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible['application-process'] ? 'animate-float' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0s' }}>
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Apply Online</h3>
              <p className="text-gray-300">
                Fill out our application form with your background and interests
              </p>
            </div>
            
            <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible['application-process'] ? 'animate-float' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Initial Assessment</h3>
              <p className="text-gray-300">
                Complete a brief technical assessment relevant to your chosen track
              </p>
            </div>
            
            <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible['application-process'] ? 'animate-float' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Interview</h3>
              <p className="text-gray-300">
                Meet with our team to discuss your goals and expectations
              </p>
            </div>
            
            <div className={`bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible['application-process'] ? 'animate-float' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.6s' }}>
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow-strong">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Get Started</h3>
              <p className="text-gray-300">
                Receive your acceptance and begin your internship journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 animate-float">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl mb-8 animate-float" style={{ animationDelay: '0.2s' }}>
            Apply now and take the first step towards a successful future in technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl btn-shiny">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs; 