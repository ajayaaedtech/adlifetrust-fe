"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden mt-20 bg-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Dynamic gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-2xl w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Glitch effect 404 */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-violet-400 animate-pulse select-none">
              404
            </h1>
            <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black text-red-500/20 animate-ping select-none" style={{animationDuration: '2s'}}>
              404
            </h1>
          </div>

          {/* Floating elements */}
          <div className="relative mb-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-violet-400/50 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute -top-2 -right-8 w-4 h-4 bg-pink-400/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 left-1/4 w-6 h-6 border border-violet-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Lost in transforming <br/><span className='text-yellow-400'>lives through education, livelihood development</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto">
              The page you&apos;re searching for has drifted into the digital cosmos. 
              Let&apos;s navigate you back to familiar territory.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/"
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Return Home
                </span>
              </Link>

              <button 
                onClick={() => window.history.back()}
                className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  Go Back
                </span>
              </button>
            </div>

            {/* Additional help links */}
           
          </div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center space-x-8 opacity-50">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.5s' }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-violet-400/30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-violet-400/30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-violet-400/30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-violet-400/30"></div>
    </div>
  );
}