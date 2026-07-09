import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Motion Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
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
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
      style={{ background: "rgba(8, 13, 24, 0.55)" }}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-[20px] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] max-w-md w-full max-h-[85vh] overflow-y-auto z-10 border border-slate-100"
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 grid place-items-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">Terms &amp; Conditions</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 font-medium transition-colors duration-200 grid place-items-center border border-slate-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            ✕
          </button>
        </div>
        <div className="px-6 py-6 space-y-5">
          {TERMS.map(([title, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
              className="flex gap-3.5 items-start"
            >
              <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-orange-50 border border-orange-200/80 grid place-items-center">
                <span className="text-orange-600 font-black text-[9px]">{i + 1}</span>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed font-sans">
                <strong className="text-slate-900 font-semibold">{title}: </strong>
                {text}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="px-6 pb-6 pt-2 sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
          >
            I Understand &amp; Agree
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Global Keyframes ─── */
const GlobalStyles = () => (
  <style>{`
    @keyframes pingAnim  { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(2.6); opacity: 0; } }
    @keyframes drift1    { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(24px,-18px) scale(1.06); } }
    @keyframes drift2    { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-18px,16px) scale(1.04); } }
    @keyframes fadeInUp  { 0% { opacity: 0; transform: translateY(18px); } 100% { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn    { 0% { opacity: 0; } 100% { opacity: 1; } }

    .eb-fade-up { animation: fadeInUp .8s cubic-bezier(.16,1,.3,1) both; }
    .eb-fade    { animation: fadeIn 1s ease both; }

    @media (prefers-reduced-motion: reduce) {
      .eb-fade-up, .eb-fade { animation: none !important; }
      *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
    }
  `}</style>
);

/* ─── Register Button ─── */
function RegisterButton() {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      href="https://bridge-to-brilliance.register.epravesh.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full sm:w-auto relative inline-flex justify-center items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-[13px] uppercase tracking-wider select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
      style={{
        background: "linear-gradient(135deg, #FB923C 0%, #EA580C 100%)",
        boxShadow: "0 1px 2px rgba(234,88,12,0.15), 0 14px 28px -8px rgba(234, 88, 12, 0.45)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <span>Register Now</span>
      <motion.span
        className="w-5 h-5 rounded-full bg-white/15 grid place-items-center"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
        </svg>
      </motion.span>
    </motion.a>
  );
}

/* ─── Phone Buttons (unified, deduped component) ─── */
function PhoneButton({ phone, display }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      href={`tel:${phone}`}
      className="flex-1 sm:flex-initial flex justify-center items-center gap-2.5 px-4 py-3.5 rounded-xl no-underline border border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <div className="w-6 h-6 rounded-md grid place-items-center shrink-0 bg-emerald-50 border border-emerald-200/60">
        <svg className="w-3 h-3" fill="#059669" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 00.57 3.57 1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
      <span className="text-slate-800 font-bold tracking-tight text-[13px] font-sans whitespace-nowrap">
        {display}
      </span>
    </motion.a>
  );
}

/* ─── Fee Note ─── */
function FeeNote() {
  return (
    <div className="flex items-start gap-3.5 p-4 rounded-xl border border-amber-200/60 bg-amber-50/60 max-w-xl w-full">
      <div className="shrink-0 w-8 h-8 rounded-lg bg-amber-100 border border-amber-300/50 grid place-items-center">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#B45309" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="m-0 text-slate-600 font-medium text-[13px] leading-relaxed font-sans">
        Pay <span className="font-extrabold text-amber-700">₹1,800</span>{" "}
        <span className="text-slate-700 font-semibold">
          registration fee to participate in the scholarship Test and receive your Rank Card along with a
        </span>{" "}
        <span className="text-slate-900 font-bold">Participation Certificate</span>
      </p>
    </div>
  );
}

/* ─── Stat Card ─── */
const ACCENTS = {
  orange: { bar: "#F97316", bg: "#FFF7ED", text: "#EA580C" },
  gold: { bar: "#D97706", bg: "#FFFBEB", text: "#B45309" },
  teal: { bar: "#0D9488", bg: "#F0FDFA", text: "#0F766E" },
  violet: { bar: "#7C3AED", bg: "#F5F3FF", text: "#6D28D9" },
};

function StatRow({ value, label, svgPath, accent, index }) {
  const c = ACCENTS[accent];
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, borderColor: "#e2e8f0" }}
      className="group flex items-start gap-4 p-4 sm:p-4.5 rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
    >
      <motion.div
        className="shrink-0 w-9 h-9 rounded-lg grid place-items-center"
        style={{ background: c.bg }}
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={c.text} strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
      </motion.div>
      <div className="pt-0.5">
        <div className="font-bold leading-snug text-slate-900 tracking-tight mb-1 font-sans text-[14.5px]">
          {value}
        </div>
        <div className="text-slate-500 font-medium leading-relaxed font-sans text-[12.5px]">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Elig Badge ─── */
function EligBadge({ label, icon }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold cursor-default bg-slate-50 border border-slate-200/70 text-slate-600 font-sans text-[11.5px] hover:bg-orange-50 hover:border-orange-200 hover:text-orange-800 transition-colors duration-200"
    >
      {icon && <span className="text-[13px] inline-block mt-[-1px]">{icon}</span>}
      {label}
    </motion.span>
  );
}

/* ═══════════════════════════════
    MAIN EXPORT
═══════════════════════════════ */
export default function UpcomingEducationBanner() {
  const [showTerms, setShowTerms] = useState(false);

  const stats = [
    { value: "100% Scholarship Fee Support", label: "Full fee paid directly to the Empaneled Institute. Zero coaching costs for you.", accent: "orange", svgPath: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { value: "Quality Coaching Access", label: "Top coaching institutes with experienced faculty and proven results.", accent: "orange", svgPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { value: "Top 100 Performers", label: "Full scholarships awarded for quality coaching & career development.", accent: "gold", svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { value: "National Ranking & Certification", label: "Benchmark your aptitude against peers nationwide with a verifiable score.", accent: "teal", svgPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { value: "Free Study Material", label: "Free high-quality online study material provided to all exam takers.", accent: "violet", svgPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.746 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { value: "3 Free Career Counselling Sessions", label: "Professional guidance and support from premium academicians.", accent: "teal", svgPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" }
  ];

  const BROCHURES = [
    { id: "en", lang: "English", href: "/education-pdf/B2B-For-Print.pdf" },
  ];
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

      <section className="mt-20 md:mt-20 lg:mt-16 xl:mt-12 relative py-16 lg:py-24 bg-white overflow-hidden">
        {/* Photography layer — full-bleed behind the whole section, no hard edges */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bg/book.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Scrim layers — light, edgeless fade so the image stays clearly visible while text stays readable */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-white/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70" />
        </div>
        {/* Ambient accents — soft radial fields + faint dot grid for extra depth */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute rounded-full"
            style={{
              top: -140, right: "-6%", width: 520, height: 520,
              background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
              filter: "blur(10px)", animation: "drift1 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: -160, left: "-8%", width: 460, height: 460,
              background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)",
              filter: "blur(10px)", animation: "drift2 16s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage: "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 70% 60% at 70% 0%, black 0%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 70% 0%, black 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative mt-5 sm:mt-10 z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ══ Header ══ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center max-w-4xl mx-auto pb-14 md:pb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-3 mb-5">
              <div className="h-[1px]  w-6 bg-slate-300" />
              <span className="text-slate-400 font-extrabold text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-sans">
                PAN-INDIA INITIATIVE BY AD LIFE TRUST
              </span>
              <div className="h-[1px] w-6 bg-slate-300" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: "'Playfair Display',Georgia,serif" }}
              className="text-[34px] sm:text-[46px] lg:text-[56px] font-black text-slate-900 leading-[1.12] mb-5 tracking-tight"
            >
              BRIDGE TO{" "}
              <span className="relative inline-block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                BRILLIANCE
              </span>
              <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-extrabold tracking-[0.12em] text-slate-500 block mt-5 uppercase font-sans">
                TALENT &amp; COACHING SCHOLARSHIP PROGRAM
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ fontFamily: "'DM Sans',system-ui,sans-serif" }}
              className="text-[14px] sm:text-[16px] text-slate-500 font-medium italic"
            >
              "Because Every Dream Deserves a Chance"
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/60 font-sans text-[10px] font-bold uppercase tracking-wider text-orange-700"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-orange-500 animate-[pingAnim_1.5s_ease-out_infinite]" />
                <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-orange-600" />
              </span>
              Applications Open · 2026
            </motion.div>
          </motion.div>

          {/* ══ Body split ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT — Description & actions */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 flex flex-col gap-7 lg:sticky lg:top-8"
            >

              <motion.p variants={fadeUp} className="text-slate-600 font-normal leading-relaxed text-[15px] font-sans max-w-2xl">
                The Bridge to Brilliance All India Talent and Scholarship Program uses a comprehensive national-level talent assessment to move beyond traditional academic grading, instead focusing on professional readiness and career success. By providing a structured National Score and Rank, the program helps students understand their standing on a competitive national scale, bridging the gap between formal education and the practical skills required for specialized careers. and the practical skills required for specialized careers.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 w-full">
                <RegisterButton />
                <div className="flex gap-3 flex-1 sm:flex-initial">
                  {/* <PhoneButton phone="+918019037799" display="+918019037799" /> */}
                  <PhoneButton phone="+918019038899" display="+918019038899" />
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <FeeNote />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-2xl w-full sm:w-fit border border-slate-200/80 bg-slate-50/50">
                <div className="relative flex-1 sm:flex-initial min-w-[160px]">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm pointer-events-none z-10 opacity-80">🌐</span>
                  <select
                    value={selectedLang?.id}
                    onChange={e => setSelectedLang(BROCHURES.find(b => b.id === e.target.value))}
                    className="appearance-none w-full pl-9 pr-9 py-2.5 bg-white text-slate-800 font-bold text-xs rounded-xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.85rem center",
                      backgroundSize: "0.85em",
                    }}
                  >
                    {BROCHURES.map(b => (
                      <option key={b.id} value={b.id}>{b.lang}</option>
                    ))}
                  </select>
                </div>
                <a
                  href={selectedLang?.href}
                  download={`Brochure_${selectedLang?.lang}.pdf`}
                  className="group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 active:scale-[0.98]"
                >
                  <svg className="w-3.5 h-3.5 text-orange-600 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
                  </svg>
                  Download Brochure
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="border-t border-slate-100 pt-6">
                <p className="text-slate-400 font-extrabold text-[10px] tracking-[0.16em] uppercase font-sans mb-3">
                  Who Can Apply
                </p>
                <div className="flex flex-wrap gap-2">
                  {eligibility.map(e => <EligBadge key={e.label} {...e} />)}
                </div>
                <p className="text-[11.5px] text-slate-400 mt-4 font-sans leading-relaxed">
                  * Must be an Indian citizen residing in India, willing to join coaching within 60 days, and not receiving another full coaching scholarship.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-slate-100">
                <Link href="/our-policies/privacy-policy" className="text-[12.5px] font-medium text-slate-400 hover:text-slate-600 underline underline-offset-[4px] decoration-slate-200 hover:decoration-slate-400 transition-colors duration-200 font-sans">
                  Privacy Policy
                </Link>
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-[12.5px] font-medium text-slate-400 hover:text-slate-600 underline underline-offset-[4px] decoration-slate-200 hover:decoration-slate-400 transition-colors duration-200 font-sans"
                >
                  Terms &amp; Conditions
                </button>
                <Link href="/our-policies/refund-policy" className="text-[12.5px] font-medium text-slate-400 hover:text-slate-600 underline underline-offset-[4px] decoration-slate-200 hover:decoration-slate-400 transition-colors duration-200 font-sans">
                  Refund Policy
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — Stats as bordered rows with gap, scroll-triggered stagger reveal */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              {stats.map((s, i) => (
                <StatRow key={s.value} {...s} index={i} />
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}