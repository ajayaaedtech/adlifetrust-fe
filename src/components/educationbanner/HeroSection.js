import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─── Terms Modal Data ─── */
const TERMS = [
  ["Application Fee", "₹1,800 is non-refundable in all circumstances, including withdrawal or disqualification."],
  ["Eligibility", "Open to Class 10, 11, 12, UG and PG students from any recognized institution across India (All streams)."],
  ["Selection Process", "Comprehensive national-level talent assessment evaluating aptitude, analytical reasoning, and future readiness. Up to 100 students selected."],
  ["Results", "Declared within 15 working days via email, SMS and the official applicant portal with a verifiable All-India Score."],
  ["Scholarship Benefit", "100% coaching fee waiver paid directly to the Empaneled Institute. Zero coaching costs for you. No cash disbursed to student."],
  ["No Hidden Fees", "₹1,800 is the complete final cost. No fees requested before or after selection — ever."],
  ["Conduct", "AD Life Trust may revoke the scholarship for misconduct, misrepresentation, or policy violation."],
];

export function TermsModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
      style={{ background: "rgba(8, 12, 20, 0.75)" }}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.98 }}
        className="relative bg-[#FAF7F2] rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto z-10 p-6 border border-[#E7DFD1]"
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#E7DFD1] mb-4">
          <h3 className="font-bold text-[#0B0F19] text-base font-sans">
            Terms &amp; Conditions
          </h3>
          <button onClick={onClose} className="text-[#94897A] hover:text-[#0B0F19] font-bold text-lg p-1">✕</button>
        </div>
        <div className="space-y-3.5">
          {TERMS.map(([title, text], i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="shrink-0 w-5 h-5 rounded-full border border-orange-500/30 text-orange-600 text-[11px] font-bold flex items-center justify-center font-sans bg-white shadow-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[13px] text-[#5B5346] leading-relaxed font-sans">
                <strong className="text-[#0B0F19] font-bold">{title}: </strong>{text}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="w-full mt-5 py-2.5 rounded-lg bg-[#0B0F19] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
        >
          I Understand &amp; Agree
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── Reusable Action Buttons ─── */
export function RegisterButton() {
  return (
    <motion.a
      whileHover={{ y: -1.5, boxShadow: "0 12px 24px -8px rgba(249,115,22,0.5)" }}
      whileTap={{ scale: 0.98 }}
      href="https://bridge-to-brilliance.register.epravesh.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-[13px] uppercase tracking-wider overflow-hidden w-full sm:w-auto text-center shadow-md transition-all font-sans"
      style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" }}
    >
      <span className="relative z-10">Register Now</span>
      <svg className="relative z-10 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
      </svg>
    </motion.a>
  );
}

export function PhoneButton({ phone, display }) {
  return (
    <motion.a
      whileHover={{ y: -1, backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(249,115,22,0.4)" }}
      whileTap={{ scale: 0.98 }}
      href={`tel:${phone}`}
      className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold tracking-wide text-[13px] uppercase transition-all duration-200 backdrop-blur-sm bg-white/5 shadow-sm w-full sm:w-auto text-center font-sans"
    >
      <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>{display}</span>
    </motion.a>
  );
}

export function PremiumDownloadButton({ selectedLang, customClasses = "" }) {
  return (
    <motion.a
      whileHover={{ y: -1.5, borderColor: "rgba(254,215,170,0.5)", backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.98 }}
      href={selectedLang?.href}
      download={`Brochure_${selectedLang?.lang}.pdf`}
      className={`relative overflow-hidden inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white font-bold tracking-wide text-[13px] uppercase transition-all duration-200 backdrop-blur-sm bg-white/5 shadow-md text-center font-sans ${customClasses}`}
    >
      <span className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 pointer-events-none animate-glow-sweep" />
      <span>Download Brochure</span>
    </motion.a>
  );
}

export function FeeNote() {
  return (
    // <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-5 py-3 rounded-xl sm:rounded-full border border-white/10 shadow-md backdrop-blur-md w-full sm:w-auto text-center bg-slate-950/40">
    //   <div className="flex items-center gap-2">
    //     <span className="text-[15px] font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-amber-glow font-sans">₹1,800</span>
    //   </div>
    //   <span className="hidden sm:block w-px h-3 bg-white/20" />
    //   <span className="text-center sm:text-left text-[12.5px] text-white/80 font-medium font-sans leading-normal">
    //     Registration fee to participate in the scholarship Test and receive your Rank Card along with a Participation Certificate
    //   </span>
    // </div>
     <div className=" inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-5 py-3 rounded-xl sm:rounded-full border border-white/10 shadow-md backdrop-blur-md w-full sm:w-auto text-center bg-slate-950/40">
     
      <span className="text-center sm:text-left text-[16.5px] text-white/80 font-medium font-sans leading-normal">
       An affordable opportunity to support your learning journey, contact us for more information.
      </span>
    </div>
  );
}

/* ─── Hero Component ─── */
export default function HeroSection({ selectedLang }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0E1A] mt-24 md:mt-28">
      <a
        href="https://zerohourofficial.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore Zero Hour Fitness Carnival & Midnight Run"
        className="relative block w-full"
      >
        <Image
          src="/zero.png"
          alt="Zero Hour Fitness Carnival & Midnight Run — Organised by AD Life Trust, 31 December 2026, Hyderabad"
          width={768}
          height={1376}
          priority
          className="block sm:hidden w-full h-auto object-cover"
        />
        <Image
          src="/zero-hour-banner.jpeg"
          alt="Zero Hour Fitness Carnival & Midnight Run — Organised by AD Life Trust, 31 December 2026, Hyderabad"
          width={1600}
          height={700}
          priority
          className="hidden sm:block w-full h-auto object-cover"
        />
      </a>
    </section>
  );
}