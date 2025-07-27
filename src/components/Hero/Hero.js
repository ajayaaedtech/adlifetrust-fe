// components/Hero.js
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowDown } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

const Hero = () => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
   
      
      {/* Inline styles to apply the fonts. In a real app, configure this in tailwind.config.js */}
      <style jsx global>{`
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <section className="relative h-screen flex items-center justify-center text-white font-inter">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-girl.jpg"
            alt="Happy Indian children in a rural classroom, embodying hope and education"
            className="w-full h-full object-cover"
            fill
            // Add a fallback for the background image
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src='https://placehold.co/1920x1080/1A237E/FFFFFF?text=loading';
            }}
          />
          {/* NEW: Gradient Overlay for better visibility and a lighter feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 via-[#1A237E]/40 to-transparent"></div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 container mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl mt-80 md:text-5xl font-extrabold leading-tight mb-4 font-poppins text-white uppercase"
            style={{ textShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)' }}
            variants={itemVariants}
          >
            Changing Lives, One Act of Kindness at a Time.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-100"
            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}
            variants={itemVariants}
          >
            Our activities aim to provide better outcomes for marginalized and vulnerable people through interventions and support in health (including nutrition), education, and empowerment.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/donate">
              <button className="bg-gradient-to-r from-[#E51C23] to-[#c2181e] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-red-500/50 focus:outline-none focus:ring-4 focus:ring-red-500/50 flex items-center justify-center mx-auto space-x-2">
                <Heart className="w-6 h-6" />
                <span>Donate Now</span>
              </button>
            </Link>
          </motion.div>

          <motion.p
            className="mt-8 text-md text-gray-200 italic"
            variants={itemVariants}
          >
            Everything is possible only with good health and adequate nutrition.
          </motion.p>
        </motion.div>

        {/* NEW: Animated Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/70" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
