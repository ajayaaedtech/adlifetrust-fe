"use client";
import React, { useState, useEffect } from 'react';
import { Users, Target, Eye, Heart, BookOpen, Briefcase, Handshake, Search, MapPin, Phone, Mail } from 'lucide-react';

// Animated Feature Card for Priority Areas
const FeatureCard = ({ icon: Icon, title, description, color, index }) => {
  const colorClasses = {
    rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  };
  const selectedColor = colorClasses[color] || colorClasses.blue;

  return (
    <div
      className={`bg-white p-6 rounded-lg border ${selectedColor.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-12 h-12 ${selectedColor.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
        <Icon size={20} className={selectedColor.text} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) {
      const timer = setTimeout(() => setHasStarted(true), 500);
      return () => clearTimeout(timer);
    }

    if (hasStarted) {
      const increment = end / (duration / 50);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(counter);
    }
  }, [end, duration, hasStarted]);

  return (
    <span className="text-2xl font-bold text-white">
      {prefix}{count}{suffix}
    </span>
  );
};

// Animated Impact Stats Component
const ImpactStat = ({ number, label, icon: Icon, delay = 0, isAnimated = false }) => {
  return (
    <div
      className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon size={24} className="text-orange-200 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">
        {isAnimated ? (
          <AnimatedCounter end={parseInt(number.toString().replace(/\D/g, ''))} suffix={number.toString().includes('+') ? '+' : ''} />
        ) : (
          number
        )}
      </div>
      <div className="text-sm text-orange-100">{label}</div>
    </div>
  );
};

const ADLifeProfilePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const establishedYear = 2005;
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - establishedYear;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const priorityAreas = [
    {
      text: 'Health and Nutrition',
      icon: Heart,
      color: 'rose',
      description: ''
    },
    {
      text: 'Education',
      icon: BookOpen,
      color: 'blue',
      description: ''
    },
    {
      text: 'Livelihoods and Skill Development',
      icon: Briefcase,
      color: 'green',
      description: ''
    },
    {
      text: 'Humanitarian Efforts',
      icon: Handshake,
      color: 'orange',
      description: ''
    },
    {
      text: 'Research and Documentation',
      icon: Search,
      color: 'purple',
      description: ''
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">

      {/* <section className="text-center bg-gradient-to-br from-orange-100 to-yellow-50 py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-4 leading-tight animate-fade-in-up">
          About AD Life Trust
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Empowering communities through health, education, and sustainable development since 2005.
        </p>
      </section> */}

      {/* Header/Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="block">Our Mission, Our Impact</span>
          <span className="block bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text">
            Adding Value to Life
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Discover the story behind AD Life Trust and our unwavering commitment to creating a world of hope, dignity, and equality.
        </p>
      </div>


      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* About Us Section */}
        <section className={`bg-white rounded-lg shadow-sm p-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '500ms' }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <Users size={24} className="text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">About AD Life Trust</h2>
              <p className="text-gray-500">Our commitment to social development</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                AD Life Trust, established in 2005, is dedicated to improving the lives of people in India. Our tagline, &apos;Adding Value to Life&apos; , reflects our commitment to making a meaningful difference for marginalized and vulnerable individuals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We work with communities to address their most pressing challenges through sustainable, locally-driven solutions that create lasting positive change.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-green-800 mb-3">Our Focus Areas -</h3>
              <p className="text-green-700 leading-relaxed">
                We put <strong>women and girls</strong> at the center of our work because we know that we cannot overcome poverty until all people have equal rights and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={`grid md:grid-cols-2 gap-6 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Target size={24} className="text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              AD Life works in India to save lives and defeat poverty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Eye size={24} className="text-orange-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We seek a world of hope and equality, where poverty has been overcome, and all people live with dignity and security.
            </p>
          </div>
        </section>

        {/* Priority Areas */}
        <section className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '700ms' }}>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Priority Areas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are making a difference through our work on those aspects that bring about a sustainable change in the lives of people            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorityAreas.map((area, index) => (
              <FeatureCard
                key={area.text}
                icon={area.icon}
                title={area.text}
                description={area.description}
                color={area.color}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className={`bg-white rounded-lg shadow-sm p-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '800ms' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users size={28} className="text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Community-Centered</h3>
              <p className="text-gray-600 text-sm">Working directly with communities to understand their needs and build local capacity.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target size={28} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Sustainable Impact</h3>
              <p className="text-gray-600 text-sm">Creating lasting change through programs that communities can sustain long-term.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart size={28} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Inclusive Development</h3>
              <p className="text-gray-600 text-sm">Ensuring equal opportunities for all, with special focus on women and marginalized groups.</p>
            </div>
          </div>
        </section>


      </main>
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #ffffff 0%, transparent 50%)`
          }}></div>
        </div>

        <div className={`relative max-w-6xl mx-auto px-4 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>


          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <ImpactStat number={establishedYear} label="Established Year" icon={MapPin} delay={100} isAnimated={true} />
            <ImpactStat number={`${yearsOfOperation}+`} label="Years of Service" icon={Target} delay={200} isAnimated={true} />
            <ImpactStat number="50,000+" label="Lives Impacted" icon={Users} delay={300} />
            <ImpactStat number="5" label="Focus Areas" icon={Heart} delay={400} />
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        /* Ensure elements are invisible until animation starts */
        .animate-fade-in-up {
          opacity: 0;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default ADLifeProfilePage;