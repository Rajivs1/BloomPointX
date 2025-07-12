import React from 'react';

const InternshipCard = ({ title, icon, description, className }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 ${className || ''}`}>
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 rounded-xl"></div>
      
      {/* Card content with glass effect */}
      <div className="relative m-[2px] glass-effect rounded-xl p-6 h-full flex flex-col justify-between bg-gray-900/80 backdrop-blur-md">
        {/* Top section with icon */}
        <div className="mb-4">
          <div className="flex justify-center mb-5 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">{title}</h3>
          <p className="text-gray-300 text-center mb-5 text-sm">{description}</p>
        </div>
        
        {/* Bottom section with button */}
        <div className="text-center mt-auto">
          <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-purple-500/40 w-full">
            <span className="relative z-10">Apply Now</span>
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full hover:translate-x-0 transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default InternshipCard;
