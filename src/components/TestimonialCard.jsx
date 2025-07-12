import React from 'react';

const TestimonialCard = ({ name, role, image, text }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <div className="flex-grow">
        <div className="text-blue-600 text-4xl mb-4">"</div>
        <p className="text-gray-600 italic mb-6">{text}</p>
      </div>
      <div className="flex items-center mt-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
