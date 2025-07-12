import React from 'react';

const MentorCard = ({ name, domain, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden text-center">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-transparent h-20"></div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-600 text-sm">{domain}</p>
      </div>
    </div>
  );
};

export default MentorCard;
