"use client";
import React, { useState, useEffect } from 'react';

export default function GandhiQuoteHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#181838]">
      {/* Mahatma Gandhi Portrait Background - Subtle and Properly Integrated */}
      <div className="absolute inset-0 opacity-[0.10]">
        <div
          className="w-full h-full mt-[-200px] md:mt-[0px] sm:mt-20 bg-[url('/ghandhi.png')] 
    bg-contain  bg-center md:bg-right bg-no-repeat mix-blend-lighten"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)'
          }}
        ></div>
      </div>

      {/* Animated Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              background: `rgba(107, 127, 232, ${Math.random() * 0.3 + 0.1})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#4A5FD4" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 -left-20 w-[600px] h-[600px] rounded-full mix-blend-soft-light filter blur-[150px] opacity-10 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #4A5FD4 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-32 -right-20 w-[500px] h-[500px] rounded-full mix-blend-soft-light filter blur-[150px] opacity-10 animate-float-slow delay-2000"
          style={{ background: 'radial-gradient(circle, #6B7FE8 0%, transparent 70%)' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-7xl mx-auto">

          {/* Quote Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative mb-8">
              <div className="relative inline-block">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-relaxed mb-8 max-w-5xl mx-auto relative z-10">
                  <span className="font-[var(--handwriting)] tracking-tight text-white/90" style={{
                    fontFamily: "'Dancing Script', cursive, var(--font-sans)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}>
                    <blockquote className="max-w-4xl mx-auto">
                      <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-tight text-shadow-lg">
                        "The best way to find yourself is to lose yourself in the service of others."
                      </p>
                    </blockquote>
                  </span>
                </h1>
                <div className="absolute -inset-4 -z-10 opacity-30 blur-xl"
                  style={{ background: 'linear-gradient(90deg, #4A5FD4, #6B7FE8)' }}></div>
              </div>

              {/* Animated Divider */}
              <div className="flex justify-center mb-8">
                <div className="relative w-40 h-px overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-grow"></div>
                </div>
              </div>

              {/* Attribution */}
              <div className="inline-block">
                <p className="text-2xl md:text-3xl font-light tracking-wide relative group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-200">
                    - Mahatma Gandhi
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-blue-200 transition-all duration-500 group-hover:w-full"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Content Cards */}
          <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-all duration-500"
                style={{ background: 'linear-gradient(135deg, #4A5FD4 0%, #6B7FE8 100%)' }}></div>
              <div className="relative bg-gradient-to-br from-[#0A0B21]/90 to-[#1B1E5B]/90 rounded-xl p-8 border border-white/5 transition-all duration-500 hover:shadow-2xl hover:border-white/10"
                style={{ backdropFilter: 'blur(12px)' }}>

                {/* Icon with glow effect */}
                <div className="flex justify-start mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500"
                    style={{ background: 'linear-gradient(135deg, #4A5FD4 0%, #6B7FE8 100%)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: '0 0 30px 8px rgba(74, 95, 212, 0.6)' }}></div>
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-200">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                    AD Life is an 18-year-old Trust that is passionate about making a difference in the lives of people who are marginalized or vulnerable. This passion is reflected in our motto, 'Adding Value to Life'.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Card */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-all duration-500"
                style={{ background: 'linear-gradient(135deg, #6B7FE8 0%, #4A5FD4 100%)' }}></div>
              <div className="relative bg-gradient-to-br from-[#0A0B21]/90 to-[#1B1E5B]/90 rounded-xl p-8 border border-white/5 transition-all duration-500 hover:shadow-2xl hover:border-white/10"
                style={{ backdropFilter: 'blur(12px)' }}>

                {/* Icon with glow effect */}
                <div className="flex justify-start mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500"
                    style={{ background: 'linear-gradient(135deg, #6B7FE8 0%, #4A5FD4 100%)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: '0 0 30px 8px rgba(107, 127, 232, 0.6)' }}></div>
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-200">Our Impact</h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                    We are making a difference through our work on those aspects that bring about sustainable change. Our initiatives in education, healthcare, and community development create lasting impact for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative inline-flex items-center px-10 py-4 text-white font-medium rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #4A5FD4 0%, #6B7FE8 100%)',
                  boxShadow: '0 8px 30px rgba(74, 95, 212, 0.5)'
                }}>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6B7FE8] to-[#4A5FD4] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Join Our Mission
                  <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-white/30 group-hover:bg-white/50 transition-all duration-500"></span>
              </button>

              <button className="group relative inline-flex items-center px-8 py-3.5 text-blue-200 font-medium rounded-xl overflow-hidden transition-all duration-500"
                style={{
                  border: '1px solid rgba(107, 127, 232, 0.5)',
                  background: 'rgba(11, 13, 45, 0.5)'
                }}>
                <span className="absolute inset-0 bg-gradient-to-r from-[#1B1E5B]/30 to-[#2A2F7A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Learn More
                  <svg className="ml-3 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-300 group-hover:w-full transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full animate-float"
        style={{
          backgroundColor: 'rgba(74, 95, 212, 0.9)',
          boxShadow: '0 0 20px 3px rgba(74, 95, 212, 0.7)'
        }}></div>
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full animate-float delay-1s"
        style={{
          backgroundColor: 'rgba(107, 127, 232, 0.9)',
          boxShadow: '0 0 15px 2px rgba(107, 127, 232, 0.7)'
        }}></div>
    </div>
  );
}