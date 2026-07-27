'use client';

import React from 'react';
import { 
  AlertTriangle, 
  Users, 
  EyeOff, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

const StatRing = ({ percentage, label, subtext, ringColor, bgColor }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`p-4 rounded-xl ${bgColor} flex items-center space-x-4 transition-all duration-300 hover:shadow-md h-full border border-white/50`}>
      <div className="relative flex items-center justify-center flex-shrink-0">
        <svg className="w-20 h-20 transform -rotate-90">
          {/* Background Track */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="stroke-current text-slate-200/60"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress Ring */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            className={`stroke-current ${ringColor} transition-all duration-1000 ease-out`}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute text-sm font-extrabold text-[#0B0F19]">{percentage}%</span>
      </div>
      <div>
        <h4 className="font-bold text-[#0B0F19] text-sm">{label}</h4>
        <p className="text-xs text-[#6B6353] mt-1.5 leading-relaxed font-medium">{subtext}</p>
      </div>
    </div>
  );
};

export default function EducationalAnalysis() {
  return (
    <section className="bg-[#FAF7F2] text-[#0B0F19] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bridge to Brilliance · Situational Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B0F19]">
            INDIA'S CAREER GUIDANCE CRISIS
          </h2>
          <p className="text-base sm:text-[17px] text-[#6B6353] leading-relaxed font-medium">
            India stands at a historic crossroads. Home to the world's largest youth population, the country possesses an unparalleled demographic dividend. Yet a silent crisis is unfolding in classrooms across the nation: the near-total absence of structured career guidance.
          </p>
        </div>

        {/* 3 Equal-Height Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: 90% Stat (Urgent / Rose) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E7DFD1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0B0F19]">Unguided Career Choices</h3>
                <p className="text-[13px] text-[#6B6353] font-medium mt-1.5">
                  Relying on relatives, neighbours, and social trends.
                </p>
              </div>
            </div>

            <div className="my-6">
              <StatRing 
                percentage={90} 
                label="No Professional Guidance" 
                subtext="Of Indian students choose their career without any professional guidance (UN-backed BCAR 2025)." 
                ringColor="text-rose-500"
                bgColor="bg-rose-50/50"
              />
            </div>

            <div className="pt-4 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] font-bold text-[#8C816E] uppercase tracking-wider">
              <span>Source: UN-backed BCAR</span>
              <span className="text-rose-600 bg-rose-50 px-2 py-1 rounded-md">9 in 10 Students</span>
            </div>
          </div>

          {/* Card 2: 10% Stat (Trust / Indigo) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E7DFD1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0B0F19]">Expert Advice Deficit</h3>
                <p className="text-[13px] text-[#6B6353] font-medium mt-1.5">
                  Severe gap in awareness and access to career guidance.
                </p>
              </div>
            </div>

            <div className="my-6">
              <StatRing 
                percentage={10} 
                label="Expert Advice Received" 
                subtext="Only 1 in 10 students has ever received expert career advice or is even aware it exists." 
                ringColor="text-indigo-500"
                bgColor="bg-indigo-50/50"
              />
            </div>

            <div className="pt-4 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] font-bold text-[#8C816E] uppercase tracking-wider">
              <span>Awareness Benchmark</span>
              <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">1 in 10 Students</span>
            </div>
          </div>

          {/* Card 3: 93% Stat (Insight / Amber) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E7DFD1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <EyeOff className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0B0F19]">Career Blindness</h3>
                <p className="text-[13px] text-[#6B6353] font-medium mt-1.5">
                  The vast majority of viable professions remain invisible.
                </p>
              </div>
            </div>

            <div className="my-6">
              <StatRing 
                percentage={93} 
                label="Limited Career Awareness" 
                subtext="Students know fewer than 10 career options out of 250+ viable professions." 
                ringColor="text-amber-500"
                bgColor="bg-amber-50/50"
              />
            </div>

            <div className="pt-4 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] font-bold text-[#8C816E] uppercase tracking-wider">
              <span>Visibility Metric</span>
              <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-md">High Blindspot</span>
            </div>
          </div>

        </div>

        {/* PDF Highlights: Counsellor Drought & Workplace Fallout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-[#E7DFD1] shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
            <div className="px-3 py-2 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl font-black text-lg flex-shrink-0 shadow-sm">
              1:3000
            </div>
            <div>
              <h4 className="font-extrabold text-[#0B0F19] text-base mb-1.5">The Counsellor Drought</h4>
              <p className="text-[13px] text-[#6B6353] leading-relaxed font-medium">
                India's student-to-counsellor ratio. The globally recommended benchmark is 1:250. 67% of counsellors juggle teaching and administrative duties alongside counselling.
              </p>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#E7DFD1] shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
            <div className="px-3 py-2 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl font-black text-lg flex-shrink-0 shadow-sm">
              ~50%
            </div>
            <div>
              <h4 className="font-extrabold text-[#0B0F19] text-base mb-1.5">The Workplace Fallout</h4>
              <p className="text-[13px] text-[#6B6353] leading-relaxed font-medium">
                Indian graduates are unemployable by industry standards, while 65% of graduate degrees fail to match students' interests or job market demands.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner with Dynamic Registration Link */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0B0F19] text-white p-8 sm:p-10 shadow-xl shadow-orange-900/10 border border-slate-800">
          {/* Subtle Glow Effect inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2.5 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Bridge to Brilliance Initiative</h3>
              <p className="text-sm text-slate-300 max-w-xl font-medium">
                Because Every Dream Deserves a Chance. Join the pan-India initiative by AD Life Trust.
              </p>
            </div>
            <a 
              href="https://bridge-to-brilliance.register.epravesh.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-wider uppercase text-sm px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}