import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InternshipCard from './InternshipCard';
import { FaCode, FaLaptopCode, FaChartLine, FaPalette, FaDatabase, FaServer, FaCloud, FaMobile } from 'react-icons/fa';

const Programs = () => {
  // All internship tracks data
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
    <div className="font-sans min-h-screen bg-white w-full">
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
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Tracks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of specialized internship tracks designed to build in-demand skills
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {tracks.map((track) => (
              <div 
                key={track.id} 
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${selectedTrack.id === track.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedTrack(track)}
              >
                <InternshipCard
                  title={track.title}
                  icon={track.icon}
                  description={track.description}
                />
              </div>
            ))}
          </div>
          
          {/* Selected Track Details */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  {selectedTrack.icon}
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{selectedTrack.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">{selectedTrack.description}</p>
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium">
                    Duration: {selectedTrack.duration}
                  </span>
                </div>
                <h4 className="font-semibold text-xl mb-4">What you'll learn:</h4>
                <ul className="space-y-3">
                  {selectedTrack.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-inner">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">How the program works</h4>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold mr-4 shrink-0">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Apply</h5>
                      <p className="text-gray-600">Submit your application through our online portal with your resume and statement of interest.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold mr-4 shrink-0">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Interview</h5>
                      <p className="text-gray-600">If selected, you'll have a brief technical interview with one of our mentors.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold mr-4 shrink-0">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Onboarding</h5>
                      <p className="text-gray-600">Upon acceptance, complete orientation and get matched with your mentor and project.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold mr-4 shrink-0">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Learn & Build</h5>
                      <p className="text-gray-600">Participate in workshops, one-on-one mentoring, and work on real projects.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold mr-4 shrink-0">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Showcase</h5>
                      <p className="text-gray-600">Present your work at our end-of-program showcase attended by hiring partners.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Apply for this Track
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our next cohort by following these simple steps
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 left-6 bottom-0 w-1 bg-blue-200 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-24 flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">1</div>
                    <div className="h-full w-1 bg-blue-200 md:hidden mt-4"></div>
                  </div>
                  <div className="flex-grow mt-4 md:mt-0 md:pl-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Submit Application</h3>
                    <p className="text-gray-600">
                      Fill out our online application form with your personal information, educational background, and select your preferred internship track.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Resume</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Cover Letter</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">LinkedIn Profile</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-24 flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">2</div>
                    <div className="h-full w-1 bg-blue-200 md:hidden mt-4"></div>
                  </div>
                  <div className="flex-grow mt-4 md:mt-0 md:pl-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Assessment</h3>
                    <p className="text-gray-600">
                      Complete a brief skills assessment related to your chosen track. Don't worry - it's designed to understand your current knowledge level, not to eliminate candidates.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">60 Minutes</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Track-Specific</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Online Format</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-24 flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">3</div>
                    <div className="h-full w-1 bg-blue-200 md:hidden mt-4"></div>
                  </div>
                  <div className="flex-grow mt-4 md:mt-0 md:pl-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Interview</h3>
                    <p className="text-gray-600">
                      If your application and assessment meet our requirements, you'll be invited for a video interview with one of our mentors to discuss your goals and expectations.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">30 Minutes</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Video Call</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Q&A Opportunity</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-24 flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">4</div>
                    <div className="h-full w-1 bg-blue-200 md:hidden mt-4"></div>
                  </div>
                  <div className="flex-grow mt-4 md:mt-0 md:pl-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Acceptance & Onboarding</h3>
                    <p className="text-gray-600">
                      Upon acceptance, you'll receive a detailed welcome package with all necessary information to prepare for your internship experience.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Welcome Kit</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Preparation Materials</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Schedule Overview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Cohorts */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Cohorts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Secure your spot in one of our upcoming internship cohorts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold">Spring Cohort</h3>
                <p className="text-blue-100">March 15, 2024</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>12-week program</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>All tracks available</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Application deadline: Feb 15</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform md:scale-110">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-blue-800 text-xs font-bold px-3 py-1 transform rotate-45 translate-x-2 -translate-y-1">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold">Summer Cohort</h3>
                <p className="text-blue-100">June 10, 2024</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>12-week program</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>All tracks available</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Application deadline: May 10</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold">Fall Cohort</h3>
                <p className="text-blue-100">September 5, 2024</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>12-week program</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Limited tracks available</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Application deadline: Aug 5</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our internship programs
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are the internships paid?</h3>
              <p className="text-gray-600">
                Our internships are primarily educational experiences, and while they are not paid positions, top performers may qualify for stipends based on project completion and excellence.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What is the time commitment?</h3>
              <p className="text-gray-600">
                We recommend dedicating 15-20 hours per week to get the most out of the program. The schedule is flexible, with core hours for meetings and workshops, and self-paced project work.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Do I need prior experience?</h3>
              <p className="text-gray-600">
                While basic programming knowledge is beneficial for technical tracks, we welcome beginners with a strong aptitude and willingness to learn. Our UI/UX track is accessible to complete beginners with a design interest.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Will this help me get a job?</h3>
              <p className="text-gray-600">
                Absolutely! Our program has an 85% success rate in helping participants secure industry roles within 6 months of completion. We provide portfolio development, interview preparation, and direct connections with hiring partners.
              </p>
            </div>
            <div className="text-center mt-10">
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View More FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs; 