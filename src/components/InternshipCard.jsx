import React from 'react';

const InternshipCard = ({ title, icon, description, className }) => {
  return (
    <div className={`glass-effect rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${className || ''}`}>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 text-center">{title}</h3>
        <p className="text-gray-300 text-center mb-5 text-sm">{description}</p>
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 btn-shiny">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
