import { useState } from "react";
import Link from "next/link";
/* ─── Terms Modal ─── */
const TERMS = [
  ["Application Fee", "₹1,800 is non-refundable in all circumstances, including withdrawal or disqualification."],
  ["Eligibility", "Open to Class 11, 12, UG and PG students from any recognized institution across India."],
  ["Selection Process", "90-min AI-proctored online exam. Up to 100 students selected. Committee decisions are final."],
  ["Results", "Declared within 15 working days via email, SMS and the official applicant portal."],
  ["Scholarship Benefit", "100% coaching fee waiver paid directly to the institute. No cash disbursed to student."],
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
    @keyframes float     { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
    @keyframes gradS     { 0%      { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    @keyframes pingAnim  { 0%      { transform: scale(1); opacity: .8; } 100% { transform: scale(2.2); opacity: 0; } }
    @keyframes orb       { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
    @keyframes feeGlow   { 0%,100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); } 50% { box-shadow: 0 0 16px 3px rgba(251,191,36,.15); } }
  `}</style>
);

/* ─── Register Button ─── */
function RegisterButton() {
  return (
    <div
      className="w-full sm:w-auto relative overflow-hidden flex justify-center items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-white text-[15px] tracking-wide cursor-not-allowed select-none"
      style={{
        background: "linear-gradient(135deg,#f97316,#ea580c,#c2410c)",
        backgroundSize: "200%",
        boxShadow: "0 5px 22px rgba(249,115,22,.58), inset 0 1px 0 rgba(255,255,255,.16)",
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
          background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)",
          animation: "shine 2s infinite",
          transform: "skewX(-20deg)",
        }}
      />

      <span className="relative z-10">Upcoming Registration</span>

      <span className="relative z-10 w-7 h-7 rounded-lg bg-white/20 border border-white/30 grid place-items-center">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </span>
    </div>
  );
}

/* ─── Phone Button ─── */
function PhoneButton({ phone = "+919505051521", display = "+91 95050 51521" }) {
  return (
    <a
      href={`tel:${phone}`}
      className="w-full sm:w-auto flex justify-center items-center gap-2.5 px-4 py-3 rounded-2xl transition-all duration-200 no-underline"
      style={{
        background: "rgba(255,255,255,.08)",
        border: "1px solid rgba(255,255,255,.14)",
        fontFamily: "'DM Sans',system-ui,sans-serif",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,.14)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.26)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,.08)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.14)";
      }}
    >
      <div
        className="w-8 h-8 rounded-xl grid place-items-center shrink-0"
        style={{
          background: "rgba(52,211,153,.16)",
          border: "1px solid rgba(52,211,153,.28)",
        }}
      >
        <svg className="w-3.5 h-3.5" fill="#34d399" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">

        <span className="text-white font-bold" style={{ fontSize: 14.5 }}>
          {display}
        </span>
      </div>
    </a>
  );
}
/* ─── Fee Note — always full-width, always left, styled chip ─── */
function FeeNote() {
  return (
    <div
      style={{
        display: "inline-flex", // FIX: auto width
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        borderRadius: 16,
        background: "rgba(251,191,36,.07)",
        border: "1px solid rgba(251,191,36,.2)",
        animation: "feeGlow 3s ease-in-out infinite",
        maxWidth: "100%", // prevent overflow
      }}
    >
      {/* icon */}
      <div
        style={{
          flexShrink: 0,
          width: 34,
          height: 34,
          borderRadius: 10,
          background: "rgba(251,191,36,.14)",
          border: "1px solid rgba(251,191,36,.3)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* text */}
      <p
        style={{
          margin: 0,
          fontFamily: "'DM Sans',system-ui,sans-serif",
          fontSize: 12.5,
          fontWeight: 600,
          color: "rgba(255,255,255,.78)",
          lineHeight: 1.5,
          whiteSpace: "normal", // allow wrap properly
        }}
      >
        Pay{" "}
        <span style={{ fontWeight: 800, color: "#fbbf24" }}>₹1,800</span>{" "}
        and receive your{" "}
        <span style={{ fontWeight: 700, color: "rgba(255,255,255,.95)" }}>
          score report
        </span>{" "}
        along with a{" "}
        <span style={{ fontWeight: 700, color: "rgba(255,255,255,.95)" }}>
          certificate
        </span>
      </p>
    </div>
  );
}

/* ─── Stat Row ─── */
const ACCENTS = {
  orange: { bar: "#f97316", bg: "rgba(249,115,22,.13)", text: "#fb923c", glow: "rgba(249,115,22,.2)" },
  gold: { bar: "#fbbf24", bg: "rgba(251,191,36,.11)", text: "#fbbf24", glow: "rgba(251,191,36,.16)" },
  teal: { bar: "#2dd4bf", bg: "rgba(45,212,191,.11)", text: "#2dd4bf", glow: "rgba(45,212,191,.16)" },
  violet: { bar: "#a78bfa", bg: "rgba(167,139,250,.11)", text: "#a78bfa", glow: "rgba(167,139,250,.16)" },
};

function StatRow({ value, label, svgPath, accent }) {
  const c = ACCENTS[accent];
  return (
    <div className="relative flex items-center gap-4 rounded-2xl px-4 py-4 overflow-hidden" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.09)" }}>
      <div className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-r-full" style={{ background: c.bar }} />
      <div className="shrink-0 w-9 h-9 rounded-xl grid place-items-center" style={{ background: c.bg }}>
        <svg className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke={c.text} strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-black leading-none mb-0.5" style={{ fontSize: "clamp(14px,2vw,17px)", color: c.text, fontFamily: "'DM Sans',system-ui,sans-serif" }}>{value}</div>
        <div className="text-white font-semibold mt-2" style={{ fontSize: 11.5 }}>{label}</div>
      </div>
      <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle,${c.glow} 0%,transparent 70%)` }} />
    </div>
  );
}

/* ─── Elig Badge ─── */
function EligBadge({ label, icon }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold cursor-default transition-all duration-150"
      style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", color: "rgba(255,255,255,.76)", fontSize: 11.5, fontFamily: "'DM Sans',system-ui,sans-serif" }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.13)"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "rgba(255,255,255,.76)"; }}
    >
      {icon && <span style={{ fontSize: 12 }}>{icon}</span>}{label}
    </span>
  );
}

/* ═══════════════════════════════
   MAIN EXPORT
═══════════════════════════════ */
export default function UpcomingEducationBanner() {
  const [showTerms, setShowTerms] = useState(false);

  const stats = [
    { value: "100% Coaching Fee", label: "Directly paid to trust empanelled institute", accent: "orange", svgPath: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { value: "Coaching in top institute", label: "by AD LIFE Trust", accent: "orange", svgPath: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { value: "100 Students", label: "Pilot batch — limited seats only", accent: "gold", svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { value: "Results in 25 Days", label: "Email · SMS · Applicant portal", accent: "teal", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "AI-Proctored Exam", label: "Fair · Transparent · Merit-based · 90-min online test", accent: "violet", svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    {
      value: "Official Certificate",
      label: "All participants receive a certificate with marks after completing the exam",
      accent: "teal",
      svgPath: "M4 6a2 2 0 012-2h7l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm9-2v4h4M9 13l2 2 4-4"
    }
  ];

  const BROCHURES = [
    { id: "en", lang: "English", href: "/education-pdf/BridgeToBrilliance.pdf" },
    { id: "hi", lang: "हिन्दी", href: "/education-pdf/BridgeToBrilliance_Hindi.pdf" },
    { id: "te", lang: "తెలుగు", href: "/education-pdf/BridgeToBrilliance_Telugu.pdf" },
  ];
  const [selectedLang, setSelectedLang] = useState(BROCHURES[0]);

  const eligibility = [
    { label: "Class 11 & 12", icon: "📗" },
    { label: "UG Degree", icon: "🎓" },
    { label: "Postgraduate", icon: "🏅" },
    { label: "Students from all academic streams", icon: "" },
  ];

  return (
    <>
      <GlobalStyles />
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}

      <section className="relative overflow-hidden min-h-screen flex flex-col">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(4,8,20,.97) 0%,rgba(6,15,38,.94) 38%,rgba(8,20,50,.88) 60%,rgba(4,10,28,.96) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 12% 85%,rgba(249,115,22,.16) 0%,transparent 48%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 82% 12%,rgba(99,102,241,.1) 0%,transparent 42%)" }} />
          <div className="absolute pointer-events-none" style={{ top: -100, right: -80, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,.08) 0%,transparent 70%)", animation: "orb 6s ease-in-out infinite" }} />
          <div className="absolute pointer-events-none" style={{ bottom: -60, left: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 70%)", animation: "orb 8s ease-in-out infinite 2s" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: .022, backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
        </div>

        {/* ══ ROW 1 — centered hero ══ */}
        <div className="relative z-10 mt-48 w-full text-center px-4 sm:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12">
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(34px,6vw,62px)", fontWeight: 900, color: "#fff", lineHeight: 1.06, textShadow: "0 2px 32px rgba(0,0,0,.6)", marginBottom: 14 }}>
            Bridge To{" "}
            <span className="relative inline-block">
              <span style={{ background: "linear-gradient(135deg,#fb923c 0%,#fbbf24 45%,#fb923c 100%)", backgroundSize: "200%", animation: "gradS 3s ease infinite", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Brilliance
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg,#f97316,#fbbf24)" }} />
            </span>
          </h1>
          <p style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: "clamp(26px,2vw,15px)", color: "rgba(191,219,254,.65)", lineHeight: 1.72 }}>
            "Because Every Dream Deserves a Chance."
          </p>
          {/* Org label */}
          <div className="w-full flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-5" style={{ background: "rgba(255,255,255,.2)" }} />

            <span style={{
              fontFamily: "'DM Sans',system-ui,sans-serif",
              fontSize: 10,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".14em",
              color: "rgba(255,255,255,.35)"
            }}>
              National Professional Coaching Scholarship Programme
            </span>

            <div className="h-px w-5" style={{ background: "rgba(255,255,255,.2)" }} />
          </div>
        </div>


        {/* ══ ROW 2 — 2-col grid ══ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-0 mt-12">



              {/* Live pill */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full" style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: 10.5, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#fb923c", background: "rgba(249,115,22,.14)", border: "1px solid rgba(249,115,22,.28)" }}>
                  <span className="relative flex w-2 h-2 shrink-0">
                    <span className="absolute inset-0 rounded-full" style={{ background: "rgba(249,115,22,.7)", animation: "pingAnim 1.4s ease-out infinite" }} />
                    <span className="relative z-10 w-2 h-2 rounded-full bg-orange-500 inline-flex" />
                  </span>
                  Applications Open · 2026
                </span>
              </div>


              {/* Buttons — in their own row, wrap naturally */}
              <div className="flex flex-col sm:flex-row gap-3 mb-3 w-full">
                <RegisterButton />
                <PhoneButton />
              </div>

              {/* Fee note — OWN ROW, full width, left */}
              <div className="mb-6">
                <FeeNote />
              </div>

              {/* Brochure */}
              <div className="mt-10 flex flex-wrap items-center gap-4 p-2 rounded-[24px] bg-white/[0.03] border border-white/[0.08] w-fit max-w-full mb-8">
                <div className="relative min-w-[170px]">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-80 pointer-events-none z-10">🌐</div>
                  <select
                    value={selectedLang?.id}
                    onChange={e => setSelectedLang(BROCHURES.find(b => b.id === e.target.value))}
                    className="appearance-none w-full pl-12 pr-10 py-3.5 bg-[#0a1020] text-white font-bold text-sm rounded-[18px] border border-white/10 outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.2em",
                    }}
                  >
                    {BROCHURES.map(b => (
                      <option key={b.id} value={b.id} className="bg-[#0a1020] py-2">{b.lang}</option>
                    ))}
                  </select>
                </div>
                <a
                  href={selectedLang?.href}
                  download={`Brochure_${selectedLang?.lang}.pdf`}
                  className="group flex items-center gap-3 px-7 py-3.5 rounded-[18px] font-extrabold text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                >
                  <svg className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
                  </svg>
                  Download Brochure
                </a>
              </div>

              {/* Eligibility */}
              <div className="mb-3">
                <p style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: 9.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".16em", color: "rgba(255,255,255,.25)", marginBottom: 8 }}>
                  Eligible For
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {eligibility.map(e => <EligBadge key={e.label} {...e} />)}
                </div>
              </div>

              {/* Terms */}
              {/* <button
                onClick={() => setShowTerms(true)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11.5, color: "rgba(255,255,255,.3)", textDecoration: "underline", textUnderlineOffset: 3, fontFamily: "'DM Sans',system-ui,sans-serif", transition: "color .18s", alignSelf: "flex-start", marginTop: 4 }}
                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,.3)"; }}
              >
                View Terms & Conditions
              </button> */}

              {/* import Link from "next/link"; */}
              <div className="flex  gap-4 mt-1">

                <Link
                  href="/our-policies/privacy-policy"
                  className="text-[11.5px] text-white/30 hover:text-white/60 underline underline-offset-[3px] transition-colors duration-200 font-sans"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/our-policies/terms-and-conditions"
                  className="text-[11.5px] text-white/30 hover:text-white/60 underline underline-offset-[3px] transition-colors duration-200 font-sans"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/our-policies/refund-policy"
                  className="text-[11.5px] text-white/30 hover:text-white/60 underline underline-offset-[3px] transition-colors duration-200 font-sans"
                >
                  Refund Policy
                </Link>

              </div>
            </div>

            {/* RIGHT COLUMN — Stats */}

            <div className="flex flex-col gap-4 lg:mt-10">
              {/* <p style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: "clamp(26px,2vw,15px)", color: "rgba(191,219,254,.65)", lineHeight: 1.72 }}>
                - Because Every Dream Deserves a Chance.
              </p> */}
              {stats.map(s => <StatRow key={s.value} {...s} />)}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}