import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InternshipCard from './InternshipCard';
import TestimonialCard from './TestimonialCard';
import ParticleAnimation from './ParticleAnimation';
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
      text: "BloomPointX transformed my theoretical knowledge into practical skills. I built a full-stack app within 3 months and landed a job right after!",
      color: "blue"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: ".NET Developer",
      text: "The mentorship I received was incredible. My mentor not only helped me with coding but also prepared me for interviews and industry expectations.",
      color: "purple"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "UI/UX Design Intern",
      text: "As a career switcher, I was worried about breaking into tech. BloomPointX's structured approach made it possible for me to transition smoothly.",
      color: "green"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Data Analyst",
      text: "The hands-on projects helped me build a strong portfolio. I received three job offers within a month of completing my internship!",
      color: "teal"
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Full Stack Developer",
      text: "The community at BloomPointX is amazing. I learned as much from my peers as I did from the structured curriculum.",
      color: "red"
    },
    {
      id: 6,
      name: "Arjun Reddy",
      role: "Python Developer",
      text: "The DSA track prepared me thoroughly for technical interviews. I cracked interviews at top tech companies thanks to this preparation.",
      color: "orange"
    },
    {
      id: 7,
      name: "Kavita Desai",
      role: "Frontend Engineer",
      text: "I joined with zero coding experience and within 6 months I was building professional-grade React applications. Amazing journey!",
      color: "amber"
    },
    {
      id: 8,
      name: "Rajesh Kumar",
      role: "Backend Developer",
      text: "The Node.js and Express modules were comprehensive and practical. I'm now confidently building robust APIs for my company.",
      color: "blue"
    }
  ];

  // Duplicate testimonials for continuous scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Technologies we specialize in
  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "tech-card-react",
      textColor: "text-[#61dafb]"
    },
    {
      id: 2,
      name: "HTML5",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      className: "tech-card-html",
      textColor: "text-[#e34c26]"
    },
    {
      id: 3,
      name: "CSS3",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      className: "tech-card-css",
      textColor: "text-[#264de4]"
    },
    {
      id: 4,
      name: "JavaScript",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      className: "tech-card-javascript",
      textColor: "text-[#f7df1e]"
    },
    {
      id: 5,
      name: "TypeScript",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "tech-card-typescript",
      textColor: "text-[#007acc]"
    },
    {
      id: 6,
      name: "Node.js",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "tech-card-node",
      textColor: "text-[#43853d]"
    },
    {
      id: 7,
      name: "Express",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      className: "tech-card-express",
      textColor: "text-[#ffffff]"
    },
    {
      id: 8,
      name: "MongoDB",
      category: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      className: "tech-card-mongodb",
      textColor: "text-[#47A248]"
    },
    {
      id: 9,
      name: "SQL",
      category: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      className: "tech-card-sql",
      textColor: "text-[#4479A1]"
    },
    {
      id: 10,
      name: "Python",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      className: "tech-card-python",
      textColor: "text-[#ffd43b]"
    },
    {
      id: 11,
      name: ".NET",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      className: "tech-card-dotnet",
      textColor: "text-[#512bd4]"
    },
    {
      id: 12,
      name: "Java",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      className: "tech-card-java",
      textColor: "text-[#f8981d]"
    },
    {
      id: 13,
      name: "AWS",
      category: "Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      className: "tech-card-aws",
      textColor: "text-[#ff9900]"
    },
    {
      id: 14,
      name: "Git",
      category: "Tool",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      className: "tech-card-git",
      textColor: "text-[#F05032]"
    }
  ];

  // Duplicate technologies for infinite scroll effect
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="font-sans min-h-screen w-full">
      {/* Navbar will be placed here */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white w-full overflow-hidden pt-[60px]">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center relative z-10 max-w-7xl">
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
            {/* <button className="glass-effect text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Explore Tracks
            </button> */}
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
            {/* Desktop auto-scrolling version */}
            <div className="hidden md:block">
              <div className="animate-marquee-fast flex space-x-6">
                {duplicatedTechnologies.map((tech, index) => (
                  <div key={`${tech.id}-${index}`} className="flex-none w-32">
                    <div className={`${tech.className} rounded-full p-4 flex flex-col items-center hover:bg-opacity-50 transition-all animate-float`} style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-opacity-20 bg-white p-3 mb-3">
                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                      </div>
                      <h3 className={`text-base font-semibold ${tech.textColor}`}>{tech.name}</h3>
                      <p className="text-xs text-white opacity-80">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile manually scrollable version */}
            <div className="md:hidden overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex space-x-4 px-2">
                {technologies.map((tech) => (
                  <div key={tech.id} className="flex-none w-28">
                    <div className={`${tech.className} rounded-full p-4 flex flex-col items-center hover:bg-opacity-50 transition-all`}>
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-opacity-20 bg-white p-2 mb-2">
                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                      </div>
                      <h3 className={`text-sm font-semibold ${tech.textColor}`}>{tech.name}</h3>
                      <p className="text-xs text-white opacity-80">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
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

      {/* Particle Animation Section */}
      <section className="py-2 sm:py-4 md:py-6 lg:py-16 xl:py-24 w-full relative overflow-hidden particle-animation-section">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-6 sm:h-10 md:h-16 lg:h-20 bg-gradient-to-b from-[rgba(0,0,34,1)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-6 sm:h-10 md:h-16 lg:h-20 bg-gradient-to-t from-[rgba(0,0,34,1)] to-transparent z-10 pointer-events-none"></div>
        <div className="w-full mx-auto relative z-10">
          <ParticleAnimation />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 w-full overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Hear from our alumni who transformed their careers through our internship program
            </p>
          </div>
          
          <div className="relative">
            {/* Desktop auto-scrolling version */}
            <div className="hidden md:block">
              <div className="animate-marquee-slow flex space-x-6 pb-4">
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="flex-none w-[280px] sm:w-[320px] md:w-[360px]">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      text={testimonial.text}
                      color={testimonial.color}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile manually scrollable version */}
            <div className="md:hidden overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex space-x-4 px-2">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-none w-[260px]">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      text={testimonial.text}
                      color={testimonial.color}
                    />
                  </div>
                ))}
              </div>
            </div>
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