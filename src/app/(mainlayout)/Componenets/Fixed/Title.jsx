







import React from 'react';

const Title = ({ gud, voda }) => {
  return (
    <div className="w-full px-4 py-6 sm:px-6 md:px-10">
      <div className="text-center flex flex-col gap-4 sm:gap-6">
        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 transition-opacity">
          {gud}
        </p>
        <p className="text-3xl sm:text-4xl md:text-3xl font-semibold transition-shadow">
          {voda}
        </p>

        {/* Animated Line */}
        <div className="flex justify-center mt-4">
          <div className="w-24 sm:w-28 md:w-32 h-[4px] bg-green-600 rotate-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
