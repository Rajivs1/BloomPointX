import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InternshipCard from './InternshipCard';
import TestimonialCard from './TestimonialCard';
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
    },
    {
      id: 2,
      title: ".NET Development",
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      description: "Learn enterprise application development with .NET Core and C#",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      description: "Master DSA concepts and ace technical interviews with confidence",
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <FaPalette className="text-4xl text-blue-500" />,
      description: "Create user-centered designs that solve real business problems",
    },
    {
      id: 5,
      title: "Data Analytics",
      icon: <FaDatabase className="text-4xl text-blue-500" />,
      description: "Transform raw data into actionable insights using modern tools",
    },
  ];

  // Sample data for why choose us
  const benefits = [
    {
      id: 1,
      title: "Real Projects",
      description: "Work on actual industry projects with real-world applications",
      icon: <FaProjectDiagram className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      title: "Mentorship",
      description: "1-on-1 guidance from experienced industry professionals",
      icon: <FaUserTie className="text-4xl text-blue-600" />,
    },
    {
      id: 3,
      title: "Certificates",
      description: "Earn recognized certificates to boost your resume",
      icon: <FaCertificate className="text-4xl text-blue-600" />,
    },
    {
      id: 4,
      title: "Flexibility",
      description: "Learn at your own pace with flexible scheduling options",
      icon: <FaClock className="text-4xl text-blue-600" />,
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
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      id: 2,
      name: "TypeScript",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      id: 3,
      name: "Node.js",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      id: 4,
      name: "Python",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      id: 5,
      name: ".NET",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
    },
    {
      id: 6,
      name: "Java",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      id: 7,
      name: "AWS",
      category: "Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
    }
  ];

  return (
    <div className="font-sans min-h-screen w-full">
      {/* Navbar will be placed here */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full">
        <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col items-center relative z-10 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-6">
            Bloom Your Tech Journey with Real Internships
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-10 text-black">
            Learn by doing with MERN, .NET, DSA, UI/UX & more
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Explore Tracks
            </button>
          </div>
        </div>
        <div id="three-hero" className="absolute inset-0 z-0 opacity-30">
          {/* Future Three.js animation will be placed here */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Technologies We Specialize In */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">TECHNOLOGIES WE SPECIALIZE IN</h2>
          <div className="flex overflow-x-auto pb-4 space-x-8 no-scrollbar">
            {technologies.map((tech) => (
              <div key={tech.id} className="flex-none w-40">
                <div className="bg-blue-900 bg-opacity-20 border border-blue-400 rounded-lg p-4 flex flex-col items-center hover:bg-blue-800 hover:bg-opacity-30 transition-all">
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-3" />
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Categories */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Internship Tracks</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your path and build industry-relevant skills with our specialized internship tracks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {internships.map((internship) => (
              <InternshipCard
                key={internship.id}
                title={internship.title}
                icon={internship.icon}
                description={internship.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our internship program is designed to give you the skills, experience, and confidence needed to excel in tech
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from our alumni who transformed their careers through our internship program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow with us?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Take the first step towards building a successful career in technology
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-10 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer will be placed here */}
      <Footer />
    </div>
  );
};

export default Home; 