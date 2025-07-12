import React from 'react';

const TestimonialCard = ({ name, role, image, text }) => {
  return (
    <div className="glass-effect p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <div className="flex-grow">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-4xl font-bold mb-4">"</div>
        <p className="text-gray-300 italic mb-6">{text}</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-glow"></div>
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 relative z-10"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-blue-300 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
