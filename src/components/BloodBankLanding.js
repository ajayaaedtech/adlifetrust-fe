'use client'

import React, { useState, useEffect } from 'react';
import { Heart, Shield, Users, Droplet, Clock, Scan } from 'lucide-react';

const BloodBankLanding = () => {
  const [participantCount, setParticipantCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // counter
  useEffect(() => {
    setIsVisible(true);
    const target = 3500;
    const steps = 60;
    const inc = target / steps;
    let now = 0;

    const timer = setInterval(() => {
      now += inc;
      now >= target
        ? (setParticipantCount(target), clearInterval(timer))
        : setParticipantCount(Math.floor(now));
    }, 2000 / steps);

    return () => clearInterval(timer);
  }, []);

  // const qrImageUrl = "/qr-code.jpg";
  const qrImageUrl = "/qr-code.jpeg";
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdAUUeVGV3MXTG7wtQRM-mTvcDjy1k065eN3VTlryVMBipCYA/viewform?usp=header";

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-screen mt-28 overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2016&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-red-800/80 to-blue-900/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

          {/* Announcement Banner */}
          <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-300 to-orange-400 text-gray-900 px-8 py-3 rounded-full font-bold shadow-xl">
              <Droplet className="w-6 h-6 text-red-600 fill-red-600 rotate-9" />
               Blood Donation Drive – 2026 
              <Droplet className="w-6 h-6 text-red-600 fill-red-600 " />
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* LEFT BLOCK */}
              <div className="lg:w-3/5 lg:text-left text-center">

                {/* DATE TICKET */}
                <div className="inline-block mb-10 bg-white/10 border border-white/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
                  <div className="flex items-center">

                    <div className="px-6 py-4 text-center border-r border-white/30">
                      <p className="text-white text-xs tracking-widest">MONTH</p>
                      <p className="text-2xl font-bold text-yellow-300">FEB</p>
                    </div>

                    <div className="px-8 py-4 text-center border-r border-white/30">
                      <p className="text-white text-xs tracking-widest">DAY</p>
                      <p className="text-4xl font-extrabold text-white">05</p>
                    </div>

                    <div className="px-8 py-4 text-center">
                      <p className="text-white text-xs tracking-widest">YEAR</p>
                      <p className="text-2xl font-bold text-blue-300">2026</p>
                    </div>

                  </div>

                  <div className="w-full h-1 bg-gradient-to-r from-red-300 via-yellow-200 to-blue-300 animate-pulse"></div>
                </div>

                {/* Title */}
                <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-6">
                  Blood Bank Program
                  <span className="block text-yellow-300 mt-3">Save Lives Together</span>
                </h1>

                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                  A noble tradition carried forward with purpose.  
                  Each drop a quiet pledge to safeguard someone’s tomorrow.
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-10">

                  <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/30 backdrop-blur-md shadow-xl">
                    <p className="text-4xl font-bold text-yellow-300">{participantCount.toLocaleString()}+</p>
                    <p className="text-white/90 text-sm">Participants Expected</p>
                  </div>

                  <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/30 backdrop-blur-md shadow-xl">
                    <p className="text-4xl font-bold text-green-300">10,000+</p>
                    <p className="text-white/90 text-sm">Lives To Save</p>
                  </div>

                </div>

                {/* CTA */}
                <a
                  href={formUrl}
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition"
                >
                  <Heart className="w-6 h-6" />
                  Register Now
                </a>

              </div>

              {/* RIGHT BLOCK — DESKTOP: Mobile Phone Frame */}
              <div className="hidden lg:block lg:w-2/5">
                <div
                  className="relative mx-auto bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                  style={{ width: "330px", height: "640px" }}
                >
                  {/* Speaker */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-full"></div>

                  {/* Camera dot */}
                  <div className="absolute top-5 left-[60%] w-3 h-3 bg-gray-700 rounded-full"></div>

                  {/* Screen */}
                  <div className="absolute inset-0 mt-14 mb-8 mx-4 bg-white rounded-[2rem] shadow-inner p-6 overflow-hidden">

                    <p className="text-center font-bold text-gray-900 text-lg mb-2">Scan to Register</p>
                    <p className="text-center text-gray-600 text-sm mb-4">Quick access</p>

                    <div className="relative border-2 border-gray-300 rounded-xl p-4 shadow-xl">
                      <img src={qrImageUrl} alt="QR" className="w-full h-full object-contain rounded-md" />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan"></div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-6">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600">Active Registration</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* RIGHT BLOCK — MOBILE: Premium Compact QR */}
              <div className="lg:hidden w-full max-w-xs mx-auto">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl shadow-2xl border border-gray-200">

                  <p className="text-center font-extrabold text-gray-900 text-xl mb-1">
                    Scan & Join the Mission
                  </p>
                  <p className="text-center text-gray-600 text-sm mb-4 leading-relaxed">
                    Step into a legacy of service.  
                    Your moment today becomes someone’s strength tomorrow.
                  </p>

                  <div className="relative border-2 border-gray-300 rounded-xl p-5 shadow-inner bg-white">
                    <img src={qrImageUrl} className="w-full h-full object-contain rounded-md" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan"></div>
                  </div>

                  <div className="mt-5 text-center">
                    <p className="text-xs text-gray-500 tracking-wide">
                      Verified Registration • Active Status
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400">
                      Trusted by donors across the community
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Animation */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: .4; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: .4; }
        }
        .animate-scan { animation: scan 2s linear infinite; }
      `}</style>

    </div>
  );
};

export default BloodBankLanding;
