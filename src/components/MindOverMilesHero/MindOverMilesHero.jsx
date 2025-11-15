"use client";
import React, { useEffect, useState } from "react";

const MindOverMilesHeroV2 = ({ imageSrc = "/mind_over_miles_bg.jpg" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">

      {/* Main Hero Container */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200/10 rounded-full blur-3xl" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">

          {/* Top Badge */}
          <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg border border-orange-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wide">Mission Complete</span>
              </div>
              <div className="w-px h-5 bg-gray-300" />
              <span className="text-sm sm:text-base text-gray-600">November 2024</span>
            </div>
          </div>

          {/* Main Content Card */}
          <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

            {/* Image Section */}
            <div className="  relative h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px] overflow-hidden">
              <img
                src={imageSrc}
                alt="Mind Over Miles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              {/* Overlay Text on Image */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-8 md:p-10 text-center mt-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight max-w-5xl drop-shadow-2xl">
                  Every step counted -  we made Mind Over Miles a <span className="text-orange-400">huge success!</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-300 font-bold drop-shadow-lg">
                  Mental Health Awareness Run 2024
                </p>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-yellow-400 text-black px-5 py-2.5 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                <div className="text-xl sm:text-2xl font-black">✓</div>
                <div className="text-[11px] font-bold uppercase">Success</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white">

              <div className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl group cursor-pointer">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                  2800+
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-gray-700 uppercase tracking-wide">
                  Participants
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-gray-500 font-medium">Amazing turnout!</div>
              </div>

              <div className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-yellow-200 hover:border-yellow-400 transition-all hover:shadow-xl group cursor-pointer">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-600 mb-2 group-hover:scale-110 transition-transform">
                  25K
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-gray-700 uppercase tracking-wide">
                  Miles Run
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-gray-500 font-medium">Incredible distance!</div>
              </div>

              <div className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl group cursor-pointer col-span-2 lg:col-span-1">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                  15
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-gray-700 uppercase tracking-wide">
                  Charities
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-gray-500 font-medium">Lives impacted!</div>
              </div>
            </div>

            {/* Message Section */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                Together, We Made a Difference
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
                Every step taken was a step toward breaking the stigma around mental health.
                Thank you to every runner, volunteer, sponsor, and supporter who joined us in this
                powerful movement. Your commitment reminds us that we're never alone in this journey.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-10">


                <a
                  href="https://orangehub.co.in/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white border-2 border-orange-300 text-gray-800 text-base sm:text-lg font-bold rounded-full hover:border-gray-500 hover:bg-gray-50 transition-all hover:scale-105 flex items-center justify-center gap-2.5 shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>Support the Cause <span className="text-orange-600 font-semibold">orangehub.co.in</span></span>
                </a>
              </div>

              {/* Social Share */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-5 font-semibold">Share the Success</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.instagram.com/orange_hub_events/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-110 transform duration-300"
                    aria-label="Follow us on Instagram - @orange_hub_events"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className={`mt-10 sm:mt-12 text-center transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed font-medium">
              "Running taught us that the mind is more powerful than the body. Together, we proved it."
            </p>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-semibold">— Mind Over Miles Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindOverMilesHeroV2;