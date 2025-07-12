import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InternshipCard from './InternshipCard';
import TestimonialCard from './TestimonialCard';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';
import { FaCode, FaLaptopCode, FaChartLine, FaPalette, FaDatabase, 
         FaProjectDiagram, FaUserTie, FaCertificate, FaClock } from 'react-icons/fa';

const Home = () => {
  // Sample data for internships
  const internships = [
    {
      id: 1,
      title: "MERN Stack",
      icon: <FaCode className="text-4xl text-blue-500" />,
      description: "Build full-stack web applications using MongoDB, Express, React and Node.js",
      className: "internship-card-mern"
    },
    {
      id: 2,
      title: ".NET Development",
      icon: <FaLaptopCode className="text-4xl text-purple-500" />,
      description: "Learn enterprise application development with .NET Core and C#",
      className: "internship-card-dotnet"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      icon: <FaChartLine className="text-4xl text-red-500" />,
      description: "Master DSA concepts and ace technical interviews with confidence",
      className: "internship-card-dsa"
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <FaPalette className="text-4xl text-teal-500" />,
      description: "Create user-centered designs that solve real business problems",
      className: "internship-card-uiux"
    },
    {
      id: 5,
      title: "Data Analytics",
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      description: "Transform raw data into actionable insights using modern tools",
      className: "internship-card-data"
    },
  ];

  // Sample data for why choose us
  const benefits = [
    {
      id: 1,
      title: "Real Projects",
      description: "Work on actual industry projects with real-world applications",
      icon: <FaProjectDiagram className="text-4xl text-blue-600" />,
      bgColor: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Mentorship",
      description: "1-on-1 guidance from experienced industry professionals",
      icon: <FaUserTie className="text-4xl text-purple-600" />,
      bgColor: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Certificates",
      description: "Earn recognized certificates to boost your resume",
      icon: <FaCertificate className="text-4xl text-green-600" />,
      bgColor: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Flexibility",
      description: "Learn at your own pace with flexible scheduling options",
      icon: <FaClock className="text-4xl text-red-600" />,
      bgColor: "from-red-500 to-red-700"
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "MERN Stack Intern",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "BloomPointX transformed my theoretical knowledge into practical skills. I built a full-stack app within 3 months and landed a job right after!",
    },
    {
      id: 2,
      name: "Alex Johnson",
      role: ".NET Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The mentorship I received was incredible. My mentor not only helped me with coding but also prepared me for interviews and industry expectations.",
    },
    {
      id: 3,
      name: "Mei Lin",
      role: "UI/UX Design Intern",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "As a career switcher, I was worried about breaking into tech. BloomPointX's structured approach made it possible for me to transition smoothly.",
    },
  ];

  // Technologies we specialize in
  const technologies = [
    {
      id: 1,
      name: "React Native",
      category: "Mobile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "tech-card-react",
      textColor: "text-[#61dafb]"
    },
    {
      id: 2,
      name: "TypeScript",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "tech-card-typescript",
      textColor: "text-[#007acc]"
    },
    {
      id: 3,
      name: "Node.js",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "tech-card-node",
      textColor: "text-[#43853d]"
    },
    {
      id: 4,
      name: "Python",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      className: "tech-card-python",
      textColor: "text-[#ffd43b]"
    },
    {
      id: 5,
      name: ".NET",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      className: "tech-card-dotnet",
      textColor: "text-[#512bd4]"
    },
    {
      id: 6,
      name: "Java",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      className: "tech-card-java",
      textColor: "text-[#f8981d]"
    },
    {
      id: 7,
      name: "AWS",
      category: "Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      className: "tech-card-aws",
      textColor: "text-[#ff9900]"
    }
  ];

  // Duplicate technologies for infinite scroll effect
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="font-sans min-h-screen w-full">
      {/* Navbar will be placed here */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white w-full overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col items-center relative z-10 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-6 animate-float">
            Bloom Your Tech Journey with Real Internships
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-10 text-blue-100">
            Learn by doing with MERN, .NET, DSA, UI/UX & more
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 btn-shiny animate-pulse-glow">
              Apply Now
            </button>
            <button className="glass-effect text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Explore Tracks
            </button>
          </div>
        </div>
        <div id="three-hero" className="absolute inset-0 z-0 opacity-30">
          {/* Future Three.js animation will be placed here */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full wave-animation">
            <path fill="#ffffff" fillOpacity="0.1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute bottom-0 left-0 right-0">
            <path fill="#000" fillOpacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Technologies We Specialize In */}
      <section className="py-16 w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">TECHNOLOGIES WE SPECIALIZE IN</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="relative">
            <div className="animate-marquee flex space-x-8">
              {duplicatedTechnologies.map((tech, index) => (
                <div key={`${tech.id}-${index}`} className="flex-none w-44">
                  <div className={`${tech.className} rounded-lg p-5 flex flex-col items-center hover:bg-opacity-50 transition-all animate-float`} style={{animationDelay: `${index * 0.2}s`}}>
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-3" />
                    <h3 className={`text-lg font-semibold ${tech.textColor}`}>{tech.name}</h3>
                    <p className="text-sm text-white opacity-80">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Categories */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Internship Tracks</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your path and build industry-relevant skills with our specialized internship tracks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {internships.map((internship, index) => (
              <div 
                key={internship.id} 
                className={`${internship.className} rounded-lg p-6 glass-effect hover:translate-y-[-5px] transition-all duration-300 animate-float`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="flex justify-center mb-4">
                  {internship.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{internship.title}</h3>
                <p className="text-gray-300 text-center">{internship.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our internship program is designed to give you the skills, experience, and confidence needed to excel in tech
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="glass-effect rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-float"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`bg-gradient-to-r ${benefit.bgColor} p-4 flex justify-center`}>
                  {benefit.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-300 text-center">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Network Animation Section */}
      <section className="py-16 md:py-24 w-full bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden neural-network-section">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <NeuralNetworkAnimation />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from our alumni who transformed their careers through our internship program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                  text={testimonial.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white w-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Add animated circles in the background */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 text-center max-w-7xl relative z-10">
          <div className="glass-effect p-8 md:p-12 rounded-xl max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-float bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Ready to grow with us?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Take the first step towards building a successful career in technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-10 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 btn-shiny animate-pulse-glow">
                Get Started
              </button>
              <button className="glass-effect border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-10 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer will be placed here */}
      <Footer />
    </div>
  );
};

export default Home; 