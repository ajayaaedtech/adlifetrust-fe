"use client";
import React, { useEffect, useState } from "react";

const MindOverMilesHeroV2 = ({ imageSrc = "/mind_over_miles_bg.jpg" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-10 w-48 h-48 sm:w-80 sm:h-80 bg-yellow-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-10 w-48 h-48 sm:w-80 sm:h-80 bg-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] bg-rose-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main Wrapper */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        {/* Main Card */}
        <div
          className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          {/* Header Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[550px] overflow-hidden">
            <img
              src={imageSrc}
              alt="Mind Over Miles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* Title */}
          <div className="p-5 sm:p-8 md:p-10 text-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-300 drop-shadow-xl leading-tight">
              Every step counted — we made Mind Over Miles a{" "}
              <span className="text-orange-400">huge success!</span>
            </h1>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8 bg-gradient-to-br from-gray-50 to-white">

            {/* Card 1 */}
            <div className="p-4 sm:p-6 text-center rounded-xl bg-white border border-orange-200 transition-all md:hover:scale-105 shadow-sm">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-orange-600">2800+</div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 uppercase mt-1">Participants</p>
              <p className="text-xs text-gray-500 mt-1">Amazing turnout!</p>
            </div>

            {/* Card 2 */}
            <div className="p-4 sm:p-6 text-center rounded-xl bg-white border border-purple-200 transition-all md:hover:scale-105 shadow-sm">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-purple-600">15</div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 uppercase mt-1">Charities</p>
              <p className="text-xs text-gray-500 mt-1">Lives impacted!</p>
            </div>

            {/* Card 3 */}
            <div className="p-4 sm:p-6 text-center rounded-xl bg-white border border-yellow-200 transition-all md:hover:scale-105 shadow-sm col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-yellow-600">25K</div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 uppercase mt-1">Miles Run</p>
              <p className="text-xs text-gray-500 mt-1">Incredible distance!</p>
            </div>

          </div>

          {/* Message */}
          <div className="p-5 sm:p-8 md:p-10 text-center border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900">
              Together, We Made a Difference
            </h2>

            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Every step taken was a step toward breaking the stigma surrounding mental health.
              Thank you to every runner, volunteer, sponsor, and supporter who helped build this journey.
            </p>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200 flex justify-center">
              <a
                href="https://orangehub.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white border-2 border-orange-300 rounded-full text-gray-800 font-bold shadow-md transition-all hover:bg-gray-50 hover:scale-105"
              >
                ❤️ Support the Cause — <span className="text-orange-600">orangehub.co.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindOverMilesHeroV2;
