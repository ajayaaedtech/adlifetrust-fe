"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { ChevronRight } from "lucide-react";

const policyLinks = [
  { name: "Privacy Policy", href: "/our-policies/privacy-policy" },
  { name: "Terms & Conditions", href: "/our-policies/terms-and-conditions" },
  { name: "Refund Policy", href: "/our-policies/refund-policy" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Activities', href: '/activities' }
  ];

  const activityLinks = [
    { name: 'Mind Over Miles', href: '/activities/mental-health' },
    { name: 'Bridge To Brilliance', href: '/activities' },
    { name: 'Livelihood Programs', href: '/activities' }
  ];

  return (
    <footer className="w-full font-sans overflow-hidden border-t ">
      <div className="flex flex-col md:flex-row w-full min-h-[450px]">

        {/* 1. Left Section (Brand & Mission) */}
        {/* 1. Left Section */}
        <div
          className="w-full md:w-[35%] p-10 md:p-14 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10"
          style={{ backgroundColor: '#C4950A' }}
        >
          {/* Logo Container */}
          <div className="bg-white p-4 rounded-2xl shadow-xl mb-6 transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/ad_life_adding_value_to_life_logo.png"
              alt="AD Life Logo"
              width={120}
              height={60}
              priority
            />
          </div>

          {/* Decorative Line */}
          <div className="w-16 h-0.5 bg-white/40 mb-6 rounded-full"></div>

          {/* Mission Statement (IMPORTANT) */}
          <div className="mb-10 max-w-xs">
            <p className="text-white text-sm md:text-[15px] leading-relaxed font-medium italic opacity-90">
              "AD Life Trust focuses on creating quality life for women and children across the globe. We aim to provide better lives to marginalized and vulnerable people through interventions and support in health, education, livelihoods and humanitarian efforts."
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-white space-y-3 text-sm font-semibold">
            {/* <a href="tel:+918019037799" className="flex items-center justify-center gap-3 hover:text-blue-900 transition-colors">
              <Phone size={16} /> <span>+91 8019037799</span>
            </a> */}
            <a href="mailto:director@adlifetrust.org.in" className="flex items-center justify-center gap-3 hover:text-blue-900 transition-colors">
              <Mail size={16} /> <span className="break-all">director@adlifetrust.org.in</span>
            </a>
          </div>
        </div>

        {/* 2. Right Section (Links & Socials) */}
        <div
          className="w-full md:w-[65%] p-10 md:p-20 flex flex-col justify-center"
          style={{ backgroundColor: '#2A2A8E' }}
        >
          <div className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">

            {/* Column 1: Quick Links */}
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-xl tracking-wider mb-2" style={{ color: '#F1D43B' }}>
                  Quick Links
                </h4>
                <div className="h-1.5 w-12 rounded-full" style={{ backgroundColor: '#F1D43B' }} />
              </div>

              <ul className="space-y-5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="relative flex items-center justify-center w-4 h-4">
                        {/* Dot: Hidden on hover */}
                        <span className="h-2 w-2 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
                        {/* Arrow: Shown on hover */}
                        <ChevronRight
                          size={18}
                          className="absolute text-red-500 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        />
                      </span>
                      <span className="text-lg font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* col 3 */}

            {/* end col 3 */}

            {/* Column 2: Our Activities */}
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-xl tracking-wider mb-2" style={{ color: '#F1D43B' }}>
                  Our Activities
                </h4>
                <div className="h-1.5 w-12 rounded-full" style={{ backgroundColor: '#F1D43B' }} />
              </div>

              <ul className="space-y-5">
                {activityLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="relative flex items-center justify-center w-4 h-4">
                        <span className="h-2 w-2 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
                        <ChevronRight
                          size={18}
                          className="absolute text-red-500 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        />
                      </span>
                      <span className="text-lg font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-4xl mx-auto w-full mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Links */}
            <div className="flex gap-8">
              <Link
                href="https://www.instagram.com/adlife_trust_2005"
                target="_blank"
                className="text-white/60 hover:text-[#F1D43B] transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-[#F1D43B] transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={24} />
              </Link>
            </div>

            {/* Copyright & Tagline */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-[11px] tracking-[0.3em] text-white/40 font-bold uppercase">
                © {currentYear} AD LIFE TRUST
              </p>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] tracking-widest text-white/50 uppercase font-semibold">
                  Adding Value to Lives
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;