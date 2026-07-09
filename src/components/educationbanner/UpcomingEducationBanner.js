import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Motion Animation Tokens ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
};

/* ─── Terms Modal ─── */
const TERMS = [
  ["Application Fee", "₹1,800 is non-refundable in all circumstances, including withdrawal or disqualification."],
  ["Eligibility", "Open to Class 10, 11, 12, UG and PG students from any recognized institution across India (All streams)."],
  ["Selection Process", "Comprehensive national-level talent assessment evaluating aptitude, analytical reasoning, and future readiness. Up to 100 students selected."],
  ["Results", "Declared within 15 working days via email, SMS and the official applicant portal with a verifiable All-India Score."],
  ["Scholarship Benefit", "100% coaching fee waiver paid directly to the Empaneled Institute. Zero coaching costs for you. No cash disbursed to student."],
  ["No Hidden Fees", "₹1,800 is the complete final cost. No fees requested before or after selection — ever."],
  ["Conduct", "AD Life Trust may revoke the scholarship for misconduct, misrepresentation, or policy violation."],
];

function TermsModal({ onClose }) {
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

/* ─── Global Style Keyframes ─── */
const GlobalStyles = () => (
  <style>{`
    @keyframes colorPulse { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    @keyframes liveSignal { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2.4); opacity: 0; } }
    @keyframes glowSweep { 0% { left: -120%; } 100% { left: 220%; } }
    
    .animate-amber-glow { background-size: 200% auto; animation: colorPulse 4s linear infinite; }
    .animate-signal-pulse { animation: liveSignal 1.8s ease-out infinite; }
    .animate-glow-sweep { animation: glowSweep 3s infinite linear; }
    
    /* Fixed: Image is now perfectly centered on both mobile and desktop viewports */
    .responsive-bg-focus {
      background-image: url('/bg/study.jpg');
      background-size: cover;
      background-position: center !important;
    }
  `}</style>
);

/* ─── Uniform Actions System ─── */
function RegisterButton() {
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

// Phone Button Definition
function PhoneButton({ phone, display }) {
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

function PremiumDownloadButton({ selectedLang, customClasses = "" }) {
  return (
    <motion.a
      whileHover={{ y: -1.5, borderColor: "rgba(254,215,170,0.5)", backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.98 }}
      href={selectedLang?.href}
      download={`Brochure_${selectedLang?.lang}.pdf`}
      className={`relative overflow-hidden inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white font-bold tracking-wide text-[13px] uppercase transition-all duration-200 backdrop-blur-sm bg-white/5 shadow-md text-center font-sans ${customClasses}`}
    >
      <span className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 pointer-events-none animate-glow-sweep" />
      <span className="text-orange-400 text-xs"></span>
      <span>Download Brochure</span>
    </motion.a>
  );
}

function FeeNote() {
  return (
    <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-5 py-3 rounded-xl sm:rounded-full border border-white/10 shadow-md backdrop-blur-md w-full sm:w-auto text-center bg-slate-950/40">
      <div className="flex items-center gap-2">
        <span className="text-[15px] font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-amber-glow font-sans">₹1,800</span>
      </div>
      <span className="hidden sm:block w-px h-3 bg-white/20" />
      <span className="text-center sm:text-left text-[12.5px] text-white/80 font-medium font-sans leading-normal">
        Registration fee to participate in the scholarship Test and receive your Rank Card along with a Participation Certificate
      </span>
    </div>
  );
}

function StatCard({ value, label, svgPath, index }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      className="group flex flex-col gap-3 p-5 sm:p-6 rounded-xl border border-[#EAE2D3] bg-white/80 hover:bg-white shadow-sm transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 rounded-full flex items-center justify-center border border-[#E7DFD1] bg-white text-[#0B0F19] group-hover:border-orange-500 group-hover:bg-[#0B0F19] group-hover:text-white transition-all duration-200 shadow-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
          </svg>
        </div>
        <span className="font-sans text-[11px] font-bold text-orange-400 tracking-wider">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <h4 className="font-bold text-[#0B0F19] text-[15px] mb-1 leading-snug font-sans tracking-tight group-hover:text-orange-600 transition-colors">{value}</h4>
        <p className="text-[#6B6353] text-[12.5px] leading-relaxed font-sans font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

function EligBadge({ label, icon }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#E7DFD1] bg-white text-[#3D372C] text-[12px] font-bold shadow-sm cursor-default whitespace-nowrap hover:border-orange-400 transition-colors font-sans">
      <span>{icon}</span>{label}
    </span>
  );
}

/* ─── MAIN EXPORT ─── */
export default function UpcomingEducationBanner() {
  const [showTerms, setShowTerms] = useState(false);

  const stats = [
    { value: "100% Scholarship Fee Support", label: "Full fee paid directly to the Empaneled Institute. Zero coaching costs for you.", svgPath: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { value: "Quality Coaching Access", label: "Top coaching institutes with experienced faculty and proven results.", svgPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { value: "Top 100 Performers", label: "Full scholarships awarded for quality coaching & career development.", svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { value: "National Ranking & Certification", label: "Benchmark your aptitude against peers nationwide with a verifiable score.", svgPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { value: "Free Study Material", label: "Free high-quality online study material provided to all exam takers.", svgPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.746 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { value: "3 Free Career Counselling Sessions", label: "Professional guidance and support from premium academicians.", svgPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" }
  ];

  const BROCHURES = [{ id: "en", lang: "English", href: "/education-pdf/B2B-For-Print.pdf" }];
  const [selectedLang, setSelectedLang] = useState(BROCHURES[0]);

  const eligibility = [
    { label: "Class 10, 11 & 12", icon: "📗" },
    { label: "UG Stream", icon: "🎓" },
    { label: "PG Stream", icon: "🏅" },
    { label: "All Academic Streams", icon: "✨" },
    { label: "Indian Residents Only", icon: "🇮🇳" },
    { label: "Willing to join coaching within 60 days", icon: "🎒" },
  ];

  return (
    <>
      <GlobalStyles />
      <AnimatePresence>
        {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      </AnimatePresence>

      {/* ─── TOP HERO SECTION — Matched Screenshot Typography ─── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-[#0A0E1A] mt-24 md:mt-28">
        <div className="absolute inset-0 z-0 pointer-events-none responsive-bg-focus" />
        <div className="absolute inset-0 bg-slate-950/25 pointer-events-none z-0" />
        
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,15,25,0.15) 0%, rgba(11,15,25,0.4) 45%, rgba(11,15,25,0.75) 68%, rgba(11,15,25,0.98) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 pb-10 pt-36">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-3xl space-y-5">
            
            {/* ⚡ FIXED: Pan-India Line Box */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-slate-950/70 shadow-md backdrop-blur-md">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-orange-400 animate-signal-pulse" />
                <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-orange-500" />
              </span>
              <span className="text-white font-bold text-[11px] sm:text-[11.5px] tracking-[0.2em] uppercase font-sans drop-shadow-sm">
                A Pan-India Initiative by AD Life Trust
              </span>
            </motion.div>

            {/* ⚡ MATCHED LAYOUT: Screenshot Exact Typography Stack */}
            <div className="space-y-3.5">
              <motion.h1
                variants={fadeUp}
                className="text-[34px] sm:text-[54px] lg:text-[68px] font-black text-white leading-[1.1] tracking-wide font-sans uppercase"
              >
                BRIDGE TO <span className="text-orange-500">BRILLIANCE</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-slate-300 uppercase text-[13px] sm:text-[15px] tracking-[0.14em] font-sans font-bold"
              >
                TALENT &amp; COACHING SCHOLARSHIP PROGRAM
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-white/85 text-[15px] sm:text-[16.5px] italic font-sans"
              >
                "Because Every Dream Deserves a Chance" 
              </motion.p>
            </div>

            {/* ⚡ ADDED INDICATOR: Applications Open capsule pill block */}
            <motion.div 
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-orange-400 font-sans"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Applications Open · 2026
            </motion.div>

            {/* Actions Matrix Row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <RegisterButton />
              <PremiumDownloadButton selectedLang={selectedLang} customClasses="w-full sm:w-auto" />
              <PhoneButton phone="+918019038899" display="+91 80190 38899" />
            </motion.div>

            <motion.div variants={fadeUp} className="pt-1">
              <FeeNote />
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ─── DETAILS SECTION ─── */}
      <section className="relative z-20 bg-[#FAF7F2] py-14 sm:py-20 border-t border-[#EFE8D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 space-y-12 sm:space-y-14">

          {/* Upgraded NCERT Style Program Overview */}
          <div className="max-w-3xl border-l-4 border-orange-500 pl-4 sm:pl-6 my-6">
            <p className="text-[#5B5346] leading-[1.8] text-[15px] sm:text-[16.5px] font-sans font-medium text-justify">
              <span className="float-left text-[40px] sm:text-[48px] leading-[0.8] font-black text-[#0B0F19] mr-2 mt-1 bg-gradient-to-br from-orange-500 to-amber-600 bg-clip-text text-transparent">
                T
              </span>
              he Bridge to Brilliance All India Talent and Scholarship Program uses a comprehensive national-level talent assessment [cite: 15] to move beyond traditional academic grading, instead focusing on professional readiness and career success[cite: 15]. By providing a structured{" "}
              <span className="text-[#0B0F19] font-bold px-1.5 py-0.5 rounded bg-orange-500/10 border-b-2 border-orange-500">
                National Score and Rank
              </span>
              , the program helps students understand their standing on a competitive national scale [cite: 15], bridging the gap between formal education and the practical skills required for specialized careers[cite: 15].
            </p>
          </div>

          {/* Guidelines Split Layout Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Premium Official Scholarship Tracking Info Matrix Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#0B0F19] via-[#131927] to-[#0B0F19] p-6 sm:p-8 rounded-xl text-white shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 px-2.5 py-0.5 rounded-md inline-block font-sans">Official Tracking Matrix</span>
                </div>
                
                <h4 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-orange-300 transition-colors font-sans">
                  Scholarship Roadmap &amp; Guidelines Pack
                </h4>
                
                <p className="text-slate-300 text-xs leading-relaxed font-sans font-medium">
                  Review the official curriculum frameworks setup to verify national allocation .
                </p>

                {/* Real Content Checklist directly from Brochure Image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-2 pb-2">
                  {[
                    "All India Talent Assessment Rules",
                    "Free Career Counselling Flowchart",
                    "All India Rank & Certificate Blueprint",
                    "AI-Proctored Exam Instructions"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] font-semibold text-slate-200 font-sans">
                      <span className="text-orange-500 font-bold shrink-0">✓</span>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action layout container */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 relative z-10 w-full border-t border-white/10 pt-4">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm z-10">🌐</span>
                  <select
                    value={selectedLang?.id}
                    onChange={e => setSelectedLang(BROCHURES.find(b => b.id === e.target.value))}
                    className="appearance-none w-full pl-8 pr-8 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-lg border border-white/10 outline-none cursor-pointer transition-all font-sans focus:border-orange-400/30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.65rem center",
                      backgroundSize: "0.8em",
                    }}
                  >
                    {BROCHURES.map(b => <option key={b.id} value={b.id} className="text-slate-900">{b.lang}</option>)}
                  </select>
                </div>
                <PremiumDownloadButton selectedLang={selectedLang} customClasses="flex-1 sm:flex-none" />
              </div>

            </div>

            {/* Right: Who Can Apply Area */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 bg-white/40 rounded-xl border border-[#E7DFD1]/60 shadow-sm flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3 bg-orange-500 rounded" />
                  <h4 className="text-[#0B0F19] font-bold text-xs tracking-wide uppercase font-sans">Who Can Apply</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {eligibility.map(e => <EligBadge key={e.label} {...e} />)}
                </div>
              </div>
              <p className="text-[12px] text-[#8C816E] font-medium font-sans leading-relaxed pt-3 border-t border-[#E7DFD1]/40">
                * Must be an Indian citizen residing in India [cite: 10], willing to join coaching within 60 days [cite: 22], and not receiving another full coaching scholarship[cite: 21].
              </p>
            </div>

          </div>

          {/* Offerings Grid */}
          <div className="space-y-6 pt-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-orange-500" />
              <h3 className="text-xs font-bold text-[#0B0F19] tracking-wider uppercase font-sans">Program Benefits &amp; Offerings</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {stats.map((s, i) => (
                <StatCard key={s.value} {...s} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}