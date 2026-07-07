import { useState } from "react";
import Link from "next/link";

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(4,8,22,.9)", backdropFilter: "blur(8px)" }}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[82vh] overflow-y-auto z-10">
        <div className="sticky top-0 bg-white/96 backdrop-blur border-b border-slate-100 px-5 py-4 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#1a3a6b] grid place-items-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 text-sm">Terms & Conditions</h3>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs font-bold transition-colors grid place-items-center">✕</button>
        </div>
        <div className="px-5 py-4 space-y-3">
          {TERMS.map(([title, text], i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#1a3a6b]/10 grid place-items-center">
                <span className="text-[#1a3a6b] font-black text-[9px]">{i + 1}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">{title}: </strong>{text}
              </p>
            </div>
          ))}
        </div>
        <div className="px-5 pb-5 pt-2">
          <button onClick={onClose} className="w-full py-3 rounded-2xl bg-[#1a3a6b] hover:bg-[#0f2548] text-white font-bold text-sm transition-colors">
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Global Keyframes ─── */
const GlobalStyles = () => (
  <style>{`
    @keyframes shine     { 0%      { left: -100%; } 100% { left: 200%; } }
    @keyframes float     { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-4px); } }
    @keyframes gradS     { 0%      { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    @keyframes pingAnim  { 0%      { transform: scale(1); opacity: .8; } 100% { transform: scale(2.2); opacity: 0; } }
    @keyframes orb       { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-15px) scale(1.03); } }
    @keyframes feeGlow   { 0%,100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); } 50% { box-shadow: 0 0 12px 2px rgba(251,191,36,.12); } }
  `}</style>
);

/* ─── Register Button ─── */
function RegisterButton() {
  return (
    <a
      href="https://bridge-to-brilliance.register.epravesh.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto relative overflow-hidden inline-flex justify-center items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-white text-[14px] tracking-wide select-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
      style={{
        background: "linear-gradient(135deg,#f97316,#ea580c,#c2410c)",
        backgroundSize: "200%",
        boxShadow: "0 4px 18px rgba(249,115,22,.45), inset 0 1px 0 rgba(255,255,255,.16)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        animation: "float 3s ease-in-out infinite, gradS 3s ease infinite",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "50%",
          height: "100%",
          background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)",
          animation: "shine 2s infinite",
          transform: "skewX(-20deg)",
        }}
      />
      <span className="relative z-10">Register Now</span>
      <span className="relative z-10 w-6 h-6 rounded-md bg-white/20 border border-white/30 grid place-items-center">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
        </svg>
      </span>
    </a>
  );
}

/* ─── Phone Button ─── */
function PhoneButton({ phone = "+918019037799", display = "+918019037799" }) {
  return (
    <a
      href={`tel:${phone}`}
      className="w-full sm:w-auto flex justify-center items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 no-underline"
      style={{
        background: "rgba(255,255,255,.06)",
        border: "1px solid rgba(255,255,255,.11)",
        fontFamily: "'DM Sans',system-ui,sans-serif",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,.12)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.22)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,.06)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.11)";
      }}
    >
      <div
        className="w-7 h-7 rounded-lg grid place-items-center shrink-0"
        style={{
          background: "rgba(52,211,153,.12)",
          border: "1px solid rgba(52,211,153,.22)",
        }}
      >
        <svg className="w-3 h-3" fill="#34d399" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 00.57 3.57 1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold" style={{ fontSize: 13.5 }}>
          {display}
        </span>
      </div>
    </a>
  );
}

function PhoneButton2({ phone = "+918019038899", display = "+918019038899" }) {
  return (
    <a
      href={`tel:${phone}`}
      className="w-full sm:w-auto flex justify-center items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 no-underline"
      style={{
        background: "rgba(255,255,255,.06)",
        border: "1px solid rgba(255,255,255,.11)",
        fontFamily: "'DM Sans',system-ui,sans-serif",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,.12)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.22)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,.06)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.11)";
      }}
    >
      <div
        className="w-7 h-7 rounded-lg grid place-items-center shrink-0"
        style={{
          background: "rgba(52,211,153,.12)",
          border: "1px solid rgba(52,211,153,.22)",
        }}
      >
        <svg className="w-3 h-3" fill="#34d399" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 00.57 3.57 1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold" style={{ fontSize: 13.5 }}>
          {display}
        </span>
      </div>
    </a>
  );
}

/* ─── Fee Note ─── */
function FeeNote() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        borderRadius: 12,
        background: "rgba(251,191,36,.06)",
        border: "1px solid rgba(251,191,36,.15)",
        animation: "feeGlow 3s ease-in-out infinite",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: 8,
          background: "rgba(251,191,36,.12)",
          border: "1px solid rgba(251,191,36,.25)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: "'DM Sans',system-ui,sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: "rgba(255,255,255,.72)",
          lineHeight: 1.4,
          whiteSpace: "normal",
        }}
      >
        Pay <span style={{ fontWeight: 800, color: "#fbbf24" }}>₹1,800</span> <span style={{ fontWeight: 700, color: "rgba(255,255,255,.9)" }}>registration fee to participate in the scholarship Test and receive your Rank Card along with a </span>  <span style={{ fontWeight: 700, color: "rgba(255,255,255,.9)" }}>Participation Certificate</span>
      </p>
    </div>
  );
}

/* ─── Stat Row ─── */
const ACCENTS = {
  orange: { bar: "#f97316", bg: "rgba(249,115,22,.11)", text: "#fb923c", glow: "rgba(249,115,22,.15)" },
  gold: { bar: "#fbbf24", bg: "rgba(251,191,36,.09)", text: "#fbbf24", glow: "rgba(251,191,36,.12)" },
  teal: { bar: "#2dd4bf", bg: "rgba(45,212,191,.09)", text: "#2dd4bf", glow: "rgba(45,212,191,.12)" },
  violet: { bar: "#a78bfa", bg: "rgba(167,139,250,.09)", text: "#a78bfa", glow: "rgba(167,139,250,.12)" },
};

function StatRow({ value, label, svgPath, accent }) {
  const c = ACCENTS[accent];
  return (
    <div className="relative flex items-center gap-3.5 rounded-xl px-4 py-3.5 overflow-hidden" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }}>
      <div className="absolute left-0 top-2 bottom-2 w-[2.5px] rounded-r-full" style={{ background: c.bar }} />
      <div className="shrink-0 w-8 h-8 rounded-lg grid place-items-center" style={{ background: c.bg }}>
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke={c.text} strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold leading-tight mb-0.5" style={{ fontSize: "clamp(13.5px,1.8vw,15.5px)", color: c.text, fontFamily: "'DM Sans',system-ui,sans-serif" }}>{value}</div>
        <div className="text-slate-300 font-medium mt-1 leading-normal" style={{ fontSize: 11 }}>{label}</div>
      </div>
      <div className="absolute -right-4 -bottom-4 w-14 h-14 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle,${c.glow} 0%,transparent 70%)` }} />
    </div>
  );
}

/* ─── Elig Badge ─── */
function EligBadge({ label, icon }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-medium cursor-default transition-all duration-150"
      style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.7)", fontSize: 11, fontFamily: "'DM Sans',system-ui,sans-serif" }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.05)"; e.currentTarget.style.color = "rgba(255,255,255,.7)"; }}
    >
      {icon && <span style={{ fontSize: 11 }}>{icon}</span>}{label}
    </span>
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
    { id: "en", lang: "English", href: "/education-pdf/BridgeToBrilliance.pdf" },
    // { id: "hi", lang: "हिन्दी", href: "/education-pdf/BridgeToBrilliance_Hindi.pdf" },
    // { id: "te", lang: "తెలుగు", href: "/education-pdf/BridgeToBrilliance_Telugu.pdf" },
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
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}

      <section className="mt-20 relative overflow-hidden min-h-screen flex flex-col justify-center py-10">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(4,8,20,.97) 0%,rgba(6,15,38,.94) 38%,rgba(8,20,50,.88) 60%,rgba(4,10,28,.96) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 12% 85%,rgba(249,115,22,.14) 0%,transparent 48%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 82% 12%,rgba(99,102,241,.08) 0%,transparent 42%)" }} />
          <div className="absolute pointer-events-none" style={{ top: -100, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,.06) 0%,transparent 70%)", animation: "orb 6s ease-in-out infinite" }} />
          <div className="absolute pointer-events-none" style={{ bottom: -60, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.08) 0%,transparent 70%)", animation: "orb 8s ease-in-out infinite 2s" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: .018, backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        </div>

        {/* ══ ROW 1 — Clean Header Section ══ */}
        <div className="relative z-10 mt-24 w-full text-center px-4 sm:px-6 pb-6 max-w-4xl mx-auto">
          {/* Org label */}
          <div className="w-full flex items-center justify-center gap-2.5 mb-3">
            <div className="h-px w-4 bg-white/20" />
            <span style={{
              fontFamily: "'DM Sans',system-ui,sans-serif",
              fontSize: 10,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".12em",
              color: "rgba(255,255,255,.4)"
            }}>
              PAN-INDIA INITIATIVE BY AD LIFE TRUST
            </span>
            <div className="h-px w-4 bg-white/20" />
          </div>

          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, textShadow: "0 2px 24px rgba(0,0,0,.5)", marginBottom: 10 }}>
            BRIDGE TO{" "}
            <span className="relative inline-block">
              <span style={{ background: "linear-gradient(135deg,#fb923c 0%,#fbbf24 45%,#fb923c 100%)", backgroundSize: "200%", animation: "gradS 3s ease infinite", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                BRILLIANCE
              </span>
              <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full" style={{ background: "linear-gradient(90deg,#f97316,#fbbf24)" }} />
            </span>
            <span className="text-base sm:text-lg font-bold tracking-wider text-slate-300 block mt-1.5 uppercase">TALENT & COACHING SCHOLARSHIP PROGRAM</span>
          </h1>

          <p style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: "clamp(13.5px,1.2vw,15.5px)", color: "rgba(191,219,254,.7)", fontWeight: "500", fontStyle: "italic", lineHeight: 1.6 }}>
            “Because Every Dream Deserves a Chance”
          </p>
        </div>

        {/* ══ ROW 2 — Balanced 2-Col Grid ══ */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 items-start">
            
            {/* LEFT COLUMN — Compact Info */}
            <div className="flex flex-col gap-4 mt-2">
              {/* Live pill */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: 9.5, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "#fb923c", background: "rgba(249,115,22,.12)", border: "1px solid rgba(249,115,22,.22)" }}>
                  <span className="relative flex w-1.5 h-1.5 shrink-0">
                    <span className="absolute inset-0 rounded-full" style={{ background: "rgba(249,115,22,.7)", animation: "pingAnim 1.4s ease-out infinite" }} />
                    <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-orange-500 inline-flex" />
                  </span>
                  Applications Open · 2026
                </span>
              </div>

              {/* Description Statement */}
              <p className="text-slate-300 font-normal leading-relaxed text-[13.5px] font-sans">
                The Bridge to Brilliance All India Talent and Scholarship Program uses a comprehensive national-level talent assessment to move beyond traditional academic grading, instead focusing on professional readiness and career success. By providing a structured National Score and Rank, the program helps students understand their standing on a competitive national scale, bridging the gap between formal education and the practical skills required for specialized careers. and the practical skills required for specialized careers.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                <RegisterButton />
                <PhoneButton />
                <PhoneButton2 />
              </div>

              {/* Fee Note */}
              <div>
                <FeeNote />
              </div>

              {/* Brochure Download section */}
              <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] w-fit max-w-full">
                <div className="relative min-w-[150px]">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base opacity-75 pointer-events-none z-10">🌐</div>
                  <select
                    value={selectedLang?.id}
                    onChange={e => setSelectedLang(BROCHURES.find(b => b.id === e.target.value))}
                    className="appearance-none w-full pl-9 pr-8 py-2 bg-[#0a1020] text-white font-bold text-xs rounded-xl border border-white/10 outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1em",
                    }}
                  >
                    {BROCHURES.map(b => (
                      <option key={b.id} value={b.id} className="bg-[#0a1020] py-1.5">{b.lang}</option>
                    ))}
                  </select>
                </div>
                <a
                  href={selectedLang?.href}
                  download={`Brochure_${selectedLang?.lang}.pdf`}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
                  </svg>
                  Download Brochure
                </a>
              </div>

              {/* Eligibility Badges */}
              <div>
                <p style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em", color: "rgba(255,255,255,.25)", marginBottom: 6 }}>
                  Who Can Apply
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {eligibility.map(e => <EligBadge key={e.label} {...e} />)}
                </div>
                <span className="text-[10.5px] text-white/35 block mt-2 font-sans leading-relaxed">
                  * Must be an Indian citizen residing in India, willing to join coaching within 60 days, and not receiving another full coaching scholarship.
                </span>
              </div>

              {/* Footer Policy Links */}
              <div className="flex gap-4 mt-1 border-t border-white/[0.04] pt-3">
                <Link href="/our-policies/privacy-policy" className="text-[14px] text-white/30 hover:text-white/50 underline underline-offset-[3px] transition-colors duration-200 font-sans">
                  Privacy Policy
                </Link>
                {/* <button onClick={() => setShowTerms(true)} className="text-[11px] text-white/30 hover:text-white/50 underline underline-offset-[3px] transition-colors duration-200 font-sans bg-transparent border-none cursor-pointer p-0">
                  Terms & Conditions
                </button> */}
                <Link href="/our-policies/terms-and-conditions" className="text-[14px] text-white/30 hover:text-white/50 underline underline-offset-[3px] transition-colors duration-200 font-sans">
                  Terms & Conditions
                </Link>
                <Link href="/our-policies/refund-policy" className="text-[14px] text-white/30 hover:text-white/50 underline underline-offset-[3px] transition-colors duration-200 font-sans">
                  Refund Policy
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN — Clean Benefit Cards */}
            <div className="flex flex-col gap-3 lg:mt-2">
              {stats.map(s => <StatRow key={s.value} {...s} />)}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}