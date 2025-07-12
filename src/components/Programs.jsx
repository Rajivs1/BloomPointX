import React, { useState } from 'react';
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

  return (
    <div className="font-sans min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Internship Programs</h1>
            <p className="text-xl text-blue-100">
              Practical, industry-focused programs designed to give you real-world experience
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="rgba(10, 10, 42, 0.5)" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Specialized Internship Tracks</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the path that aligns with your interests and career goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedTrack.id === track.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-900 bg-opacity-20 border border-blue-400 text-white hover:bg-blue-900 hover:bg-opacity-40'
                }`}
                onClick={() => setSelectedTrack(track)}
              >
                <div className="flex items-center mb-4">
                  <div className={`mr-4 ${selectedTrack.id === track.id ? 'text-white' : 'text-blue-400'}`}>
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
          <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4">
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
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors">
                  Apply for this track
                </button>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white">What you'll learn:</h4>
                <ul className="space-y-3">
                  {selectedTrack.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
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
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Program Structure</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our internships are designed to provide a comprehensive learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 1: Foundation</h3>
              <p className="text-gray-300 mb-4">
                Build a solid understanding of core concepts and tools used in your chosen track.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fundamentals training
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hands-on exercises
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly mentor sessions
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 2: Application</h3>
              <p className="text-gray-300 mb-4">
                Apply your knowledge to real-world projects with guidance from industry mentors.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team collaboration
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Project-based learning
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Code reviews
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 3: Portfolio</h3>
              <p className="text-gray-300 mb-4">
                Complete a capstone project that showcases your skills to potential employers.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Capstone project
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technical presentation
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Career preparation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Application Process</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Simple steps to start your journey with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Apply Online</h3>
              <p className="text-gray-300">
                Fill out our application form with your background and interests
              </p>
            </div>
            
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Initial Assessment</h3>
              <p className="text-gray-300">
                Complete a brief technical assessment relevant to your chosen track
              </p>
            </div>
            
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Interview</h3>
              <p className="text-gray-300">
                Meet with our team to discuss your goals and expectations
              </p>
            </div>
            
            <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center">
              <div className="bg-blue-600 text-white text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl mb-8">
            Apply now and take the first step towards a successful future in technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
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