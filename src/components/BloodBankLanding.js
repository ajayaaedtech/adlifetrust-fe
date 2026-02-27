'use client'

import React, { useEffect, useRef } from 'react';

const BloodBankLanding = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/shcolrship.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Dark navy overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(7,18,38,0.97) 0%, rgba(13,27,62,0.93) 60%, rgba(7,18,38,0.97) 100%)' }} />

        {/* Dotted grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(245,168,0,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Background scholarship image - full cover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/shcolrship.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.18,
          }}
        />

        {/* Diagonal accent bar */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(52, 51, 129, 0.04) 70%, rgba(245,168,0,0.09) 100%)',
          }}
        />

        {/* ── CONTENT ── */}
        <div className="relative z-10 max-w-3xl px-6 text-white flex flex-col items-center" style={{ animation: 'fadeInUp 0.9s ease both', paddingTop: '80px' }}>

         

          {/* Headline */}
          <h1
            className="font-black leading-tight mb-5"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(48px, 8vw, 68px)',
              animation: 'fadeInUp 0.9s ease 0.25s both',
            }}
          >
            Bridge to{' '}
            <span style={{ color: '#f5a800' }}>Brilliance</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl font-light mb-8"
            style={{
              color: 'rgb(255, 255, 255)',
              letterSpacing: '0.02em',
              animation: 'fadeInUp 0.9s ease 0.35s both',
            }}
          >
            Because every dream deserves a chance
          </p>

          {/* Divider */}
          <div
            className="mb-8"
            style={{
              width: 60,
              height: 2,
              background: 'linear-gradient(90deg, transparent, #f5a800, transparent)',
              animation: 'fadeInUp 0.9s ease 0.4s both',
            }}
          />
           {/* Tag */}
          <div
            className="inline-flex items-center gap-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              background: 'rgba(245,168,0,0.12)',
              border: '1px solid rgba(245,168,0,0.38)',
              color: '#ffc93c',
              padding: '7px 20px',
              animation: 'fadeInUp 0.9s ease 0.15s both',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f5a800', animation: 'blink 1.6s ease-in-out infinite', display: 'inline-block' }} />
            An Initiative by AD Life Trust
          </div>
          {/* Scholarship Card */}
          <div
            className="w-full flex items-center gap-5 mb-10 rounded-2xl text-left"
            style={{
            
            }}
          >
            {/* Left gold bar 
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #f5a800, #ffc93c)', borderRadius: '4px 0 0 4px' }} />
              */}
            {/* Icon 
            <div
              className="flex items-center justify-center text-2xl flex-shrink-0 rounded-xl"
              style={{
                width: 52, height: 52,
                background: 'linear-gradient(135deg, #f5a800, #ffc93c)',
              }}
            >
              🎓
            </div>*/}

            {/* Text
            <div className="flex-1">
              <div className="font-semibold text-white text-lg leading-snug">National Coaching Scholarship Test</div>
              <div className="text-md mt-1" style={{ color: 'rgb(255, 255, 255)' }}>Full coaching scholarships for deserving students across India</div>
            </div> */}

            {/* Badge 
            <div
              className="flex-shrink-0 text-sm font-bold rounded-full px-4 py-1.5"
              style={{ background: 'linear-gradient(135deg, #f5a800, #ffc93c)', color: '#071226' }}
            >
              100 Seats
            </div>*/}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-bounce"
            style={{ animation: 'fadeInUp 0.9s ease 0.65s both' }}
          >
            <button
              disabled
              className="inline-flex items-center gap-2 font-bold rounded-full cursor-not-allowed animate-bounce"
              style={{
                background: 'linear-gradient(135deg, #f5a800, #ffc93c)',
                color: '#071226',
                fontSize: 15,
                padding: '16px 36px',
                boxShadow: '0 8px 32px rgba(245,168,0,0.35)',
                opacity: 0.85,
              }}
            >
               Launch Mode On
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          </div>

        </div>



        {/* AD Life Trust watermark */}
        <div
          className="absolute bottom-20 right-8 text-right z-10"
          style={{ animation: 'fadeInUp 0.9s ease 0.8s both' }}
        >
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>AD Life Trust</div>
          <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', marginTop: 2 }}>Adding Value to Life</div>
        </div>

        {/* Keyframe animations injected via style tag */}
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatUp {
            0%, 100% { transform: translate(-50%, -50%); }
            50%       { transform: translate(-50%, -53%); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.3; }
          }
        `}</style>

      </section>

    </div>
  );
};

export default BloodBankLanding;