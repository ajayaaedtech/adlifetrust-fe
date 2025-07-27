// components/Footer.js
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Work', href: '#' },
    { name: 'Volunteer', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const programLinks = [
    { name: 'Education Programs', href: '#' },
    { name: 'Healthcare Initiatives', href: '#' },
    { name: 'Livelihood Projects', href: '#' },
    { name: 'Mentorship', href: '#' },
  ];

  return (
    <footer className="bg-[#1B1E5B] text-white pt-16 pb-6">
      <div className="container mx-auto px-6 md:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo and Social */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-md">
                <Image 
                  src="/logo.png" 
                  alt="AD Trust Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-2xl">Life</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through education, health, and sustainable livelihood for a brighter future.
            </p>
            {/* <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  aria-label={link.name}
                  className="text-gray-300 hover:text-[#E51C23] hover:scale-110 transition-all duration-300"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400 tracking-wider uppercase">Get Involved</h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400 tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-red-400 flex-shrink-0" />
                <span>123 Charity Lane, Hope City, Nation 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a href="mailto:info@example.org" className="hover:text-white transition-colors">info@example.org</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a href="tel:+91-9876543210" className="hover:text-white transition-colors">+91-9876543210</a>
              </li>
            </ul>
      
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} AD Trust. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
