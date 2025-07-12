import React from 'react';

const InternshipCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>
        <p className="text-gray-600 text-center mb-5 text-sm">{description}</p>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-300">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
