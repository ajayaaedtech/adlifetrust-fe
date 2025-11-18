"use client";
import React, { useEffect, useState } from "react";

const MindOverMilesHeroV2 = ({ imageSrc = "/mind_over_miles_bg.jpg" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">

      {/* Main Wrapper */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">

        {/* Blurred Decorative Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-rose-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">

          {/* Top Badge */}
          <div
            className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
          >

          </div>

          {/* Main Card */}
          <div
            className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            {/* Image Header */}
            <div className="relative w-full h-[690px] overflow-hidden rounded-2xl">
              <img
                src={imageSrc}
                alt="Mind Over Miles"
                className="w-full h-full object-cover object-center md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            </div>
            <div className="flex flex-col items-center justify-end p-6 sm:p-8 md:p-10 text-center">
              <h1 className="text-md sm:text-md md:text-4xl lg:text-2xl font-black text-yellow-300 mb-3 leading-tight max-w-5xl drop-shadow-xl">
                Every step counted — we made Mind Over Miles a{" "}
                <span className="text-orange-400">huge success!</span>
              </h1>

            </div>
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white">

              {/* Card 1 */}
              <div className="
                text-center p-4 sm:p-6 rounded-2xl bg-white border-2 border-orange-200
                transition-all cursor-pointer
           md:hover:scale-105

                md:hover:border-orange-400 md:hover:shadow-xl
              ">
                <div className="text-3xl sm:text-5xl md:text-6xl font-black text-orange-600 mb-2">
                  2800+
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-gray-700 uppercase tracking-wide">
                  Participants
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Amazing turnout!</div>
              </div>



              {/* Card 3 */}
              <div className="
                  text-center p-4 sm:p-6 rounded-2xl bg-white border-2 border-purple-200
                transition-all cursor-pointer
           md:hover:scale-105
              ">
                <div className="text-3xl sm:text-5xl md:text-6xl font-black text-purple-600 mb-2">
                  15
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-gray-700 uppercase tracking-wide">
                  Charities
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Lives impacted!</div>
              </div>
              <div className="
                  text-center p-4 sm:p-6 rounded-2xl bg-white border-2 border-orange-200
                transition-all cursor-pointer
           md:hover:scale-105
                md:hover:border-yellow-400 md:hover:shadow-xl
              ">
                <div className="text-3xl sm:text-5xl md:text-6xl font-black text-yellow-600 mb-2">
                  25K
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-gray-700 uppercase tracking-wide">
                  Miles Run
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Incredible distance!</div>
              </div>
            </div>
            {/* Card 2 */}

            {/* Message Section */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center border-t border-gray-200">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                Together, We Made a Difference
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Every step taken was a step toward breaking the stigma around mental health.
                Thank you to every runner, volunteer, sponsor, and supporter who made this possible.
              </p>



              {/* Social */}
              <div className="pt-8 border-t border-gray-200">
                {/* CTA */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                  <a
                    href="https://orangehub.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-full sm:w-auto px-8 sm:px-10 py-3.5
                    bg-white border-2 border-orange-300 rounded-full
                    text-gray-800 text-base sm:text-lg font-bold shadow-md
                    transition-all
                    active:scale-95 focus-visible:scale-105
                    md:hover:border-gray-500 md:hover:bg-gray-50 md:hover:scale-105
                    flex items-center justify-center gap-2.5
                  "
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Support the Cause <span className="text-orange-600">orangehub.co.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}

        </div>
      </div>
    </div>
  );
};

export default MindOverMilesHeroV2;
