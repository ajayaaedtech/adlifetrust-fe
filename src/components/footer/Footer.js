// components/Footer.js
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Activities', href: '/activities' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News & Events', href: '/news' },
  ];

  const programLinks = [
    { name: 'Education Programs', href: '#' },
    { name: 'Healthcare Initiatives', href: '#' },
    { name: 'Livelihood Projects', href: '#' },
    { name: 'Mentorship', href: '#' },
    { name: 'Community Outreach', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1B1E5B] via-[#1a1d57] to-[#151847] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Top Section with CTA */}


        {/* Main Footer Grid */}
        <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-white p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/logo.png"
                  alt="AD Trust Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                 Life 
              </span>
            </Link>

            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              AD Life Trust focuses on creating quality life for women and children across the globe. We aim to provide better lives to marginalized and vulnerable people through interventions and support in health, education, livelihoods and humanitarian efforts.
            </p>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">Follow Our Journey</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    className="bg-white/10 hover:bg-[#E51C23] text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-red-400 tracking-wider uppercase flex items-center gap-2">
              <div className="w-1 h-6 bg-red-400 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:pl-4 transition-all duration-300 block py-1 relative group"
                  >
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-red-400 tracking-wider uppercase flex items-center gap-2">
              <div className="w-1 h-6 bg-red-400 rounded-full"></div>
              Our Activities
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:pl-4 transition-all duration-300 block py-1 relative group"
                  >
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-2 justify-center">
              <div className="w-1 h-8 bg-red-400 rounded-full"></div>
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center group">
                <div className="bg-red-400/20 p-4 rounded-xl group-hover:bg-red-400/30 transition-colors duration-300 mb-4">
                  <MapPin className="w-8 h-8 text-red-400" />
                </div>
                <span className="font-semibold text-white text-lg mb-2">Our Location</span>
                <span className="text-gray-300 text-sm leading-relaxed">B-803, 10-3-163/1 Amri Central Court Apartments Old Lance Lines , Secunderabad - 500025</span>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="bg-red-400/20 p-4 rounded-xl group-hover:bg-red-400/30 transition-colors duration-300 mb-4">
                  <Mail className="w-8 h-8 text-red-400" />
                </div>
                <span className="font-semibold text-white text-lg mb-2">Email Us</span>
                <a href="mailto:info@adlifetrust.org" className="text-gray-300 hover:text-white transition-colors text-sm">
                  adlife.trust@addlifegroup.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="bg-red-400/20 p-4 rounded-xl group-hover:bg-red-400/30 transition-colors duration-300 mb-4">
                  <Phone className="w-8 h-8 text-red-400" />
                </div>
                <span className="font-semibold text-white text-lg mb-2">Call Us</span>
                <a href="tel:+91-9505051521" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91-9505051521
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} AD Life Trust. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">

              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {/* <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors duration-300">
                Accessibility
              </Link> */}
              <p className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#E51C23] rounded-full"></span>
                <span>Adding Value to Lives</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;