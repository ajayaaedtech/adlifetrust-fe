'use client'

import React from 'react';

const BloodBankLanding = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/shcolrship.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1b1e5cc2]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-white">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
           Bridge to  
            <span className="text-yellow-300"> Brilliance</span>
          </h1>

          <p className="text-2xl text-white/90 mb-8">
            Because every dream deserves a chance
          </p>

          {/* Scholarship Badge + Button (Vertical Stack) */}
          <div className="flex flex-col items-center gap-4 mt-6">
            
            <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg">
              🎓 An Initiative by AD Life Trust
            </div>

            <button
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-xl cursor-not-allowed opacity-80"
              disabled
            >
              Coming Soon
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default BloodBankLanding;