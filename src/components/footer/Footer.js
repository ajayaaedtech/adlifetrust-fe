// components/Footer.js
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Activities', href: '/activities' },
    // { name: 'Contact', href: '/contact' },
  ];

  const initiativeLinks = [
    { name: 'Mind Over Miles', href: '/activities/mental-health' },
    { name: 'Bridge To Brilliance', href: '/activities' },
    { name: 'Livelihood Programs', href: '/activities' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* 1. Brand & Contact (Left) */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white inline-block p-2 rounded-lg shadow-sm">
              <Image
                src="/ad_life_adding_value_to_life_logo.png"
                alt="AD Life Logo"
                width={80}
                height={40}
                style={{ height: 'auto' }}
              />
            </div>
            <div className="space-y-4">
              <a href="tel:+919505051521" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 transition-all">
                  <Phone size={14} className="text-red-500" />
                </div> 
                +91 95050 51521
              </a>
              <a href="mailto:director@adlifetrust.org.in" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 transition-all">
                  <Mail size={14} className="text-red-500" />
                </div>
                director@adlifetrust.org.in
              </a>
              <div className="flex items-center gap-3 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={14} className="text-red-500" />
                </div>
                Hyderabad, Telangana
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
                <Linkedin size={16} />
              </Link>
            </div>
          </div>

          {/* 2. Navigation (Animated List) */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Quick Links</h4>
              <div className="h-0.5 w-8 bg-red-500 mt-2 rounded-full" />
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm hover:text-white transition-all duration-300 hover:translate-x-2">
                    <ChevronRight size={12} className="text-red-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-red-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Initiatives (Animated List) */}
          <div className="md:col-span-3 space-y-5">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Our Current Activities</h4>
              <div className="h-0.5 w-8 bg-red-500 mt-2 rounded-full" />
            </div>
            <ul className="space-y-3">
              {initiativeLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm hover:text-white transition-all duration-300 hover:translate-x-2">
                    <ChevronRight size={12} className="text-red-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-red-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Vision (Right Most) */}
          <div className="md:col-span-4 space-y-5 md:border-l md:border-white/10 md:pl-10">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Our Vision</h4>
            <p className="text-sm leading-relaxed text-slate-500 font-light italic">
              "AD Life Trust focuses on creating quality life for women and children across the globe. We aim to provide better lives to marginalized and vulnerable people through interventions and support in health, education, livelihoods and humanitarian efforts."
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Adding Value to Lives</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
            © {new Date().getFullYear()} AD LIFE TRUST
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-slate-600">Active Impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;