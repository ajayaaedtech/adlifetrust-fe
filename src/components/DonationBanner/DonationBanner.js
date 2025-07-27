import React from 'react';

const DonationBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-400 py-8 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-4 right-20 w-6 h-6 bg-teal-300/60 rounded-full"></div>
        <div className="absolute top-8 right-32 w-4 h-4 bg-teal-300/40 rounded-full"></div>
        <div className="absolute top-12 right-40 w-3 h-3 bg-teal-300/30 rounded-full"></div>
        <div className="absolute top-16 right-48 w-2 h-2 bg-teal-300/20 rounded-full"></div>
        <div className="absolute bottom-4 right-10 w-8 h-8 bg-teal-300/50 rounded-full"></div>
        <div className="absolute bottom-8 right-24 w-5 h-5 bg-teal-300/35 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Icon and text */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Icon placeholder - you can replace with actual icon */}
          <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </div>
          
          {/* Text content */}
          <div className="text-white">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">
            A small contribution today could save a life tomorrow.
            </h2>
            {/* <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">
              Idli Hub program plate Idli for just 
              <span className="font-bold text-yellow-200">@5Rs</span>.
            </p> */}
          </div>
        </div>
        
        {/* Right side - Donate button */}
        <div className="flex-shrink-0 ml-8">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange-500">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationBanner;