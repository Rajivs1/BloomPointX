import React from 'react';

const TestimonialCard = ({ name, role, text, color = 'blue' }) => {
  // Define color schemes based on the color prop
  const colorSchemes = {
    blue: {
      border: 'border-blue-500',
      gradient: 'from-blue-500 to-blue-700',
      text: 'text-blue-300'
    },
    purple: {
      border: 'border-purple-500',
      gradient: 'from-purple-500 to-purple-700',
      text: 'text-purple-300'
    },
    green: {
      border: 'border-green-500',
      gradient: 'from-green-500 to-green-700',
      text: 'text-green-300'
    },
    teal: {
      border: 'border-teal-500',
      gradient: 'from-teal-500 to-teal-700',
      text: 'text-teal-300'
    },
    red: {
      border: 'border-red-500',
      gradient: 'from-red-500 to-red-700',
      text: 'text-red-300'
    },
    orange: {
      border: 'border-orange-500',
      gradient: 'from-orange-500 to-orange-700',
      text: 'text-orange-300'
    },
    amber: {
      border: 'border-amber-500',
      gradient: 'from-amber-500 to-amber-700',
      text: 'text-amber-300'
    }
  };

  const scheme = colorSchemes[color] || colorSchemes.blue;

  return (
    <div className={`glass-effect p-5 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col border-t-4 ${scheme.border}`}>
      <div className="flex-grow">
        <div className={`bg-gradient-to-r ${scheme.gradient} bg-clip-text text-transparent text-4xl font-bold mb-4`}>"</div>
        <p className="text-gray-300 italic mb-4 text-sm sm:text-base">{text}</p>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4">
        <h4 className="font-semibold text-white text-base sm:text-lg">{name}</h4>
        <p className={`${scheme.text} text-xs sm:text-sm`}>{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
