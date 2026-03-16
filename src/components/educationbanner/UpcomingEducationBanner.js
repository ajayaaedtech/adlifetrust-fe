import { useState, useEffect, useRef } from "react";

/* ─── Global styles injected once ─── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700;800&display=swap');

  @keyframes shimmer   { 0%{transform:translateX(-130%) skewX(-12deg)} 100%{transform:translateX(310%) skewX(-12deg)} }
  @keyframes ripple    { 0%{transform:scale(0);opacity:.5} 100%{transform:scale(6);opacity:0} }
  @keyframes gradS     { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes fadeUp    { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ping      { 75%,100%{transform:scale(2);opacity:0} }
  @keyframes phoneWig  { 0%,70%,100%{transform:rotate(0)} 18%{transform:rotate(14deg)} 36%{transform:rotate(-10deg)} 54%{transform:rotate(6deg)} }
  @keyframes orb       { 0%,100%{transform:scale(1);opacity:.12} 50%{transform:scale(1.08);opacity:.22} }
  @keyframes borderGlow{ 0%,100%{opacity:.6} 50%{opacity:1} }
  @keyframes floatCard { 0%,100%{transform:translateY(0) rotate(.4deg)} 50%{transform:translateY(-8px) rotate(-.4deg)} }

  .btb-shimmer::after {
    content:''; position:absolute; inset:0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent);
    transform: translateX(-130%) skewX(-12deg);
    animation: shimmer 2.2s ease-in-out infinite;
  }
  .btb-ping  { animation: ping 1.3s cubic-bezier(0,0,.2,1) infinite; }
  .btb-ph    { animation: phoneWig 2.8s ease-in-out infinite; }
  .btb-float { animation: floatCard 4s ease-in-out infinite; }

  .btb-su1 { animation: fadeUp .55s ease-out .00s both; }
  .btb-su2 { animation: fadeUp .55s ease-out .10s both; }
  .btb-su3 { animation: fadeUp .55s ease-out .20s both; }
  .btb-su4 { animation: fadeUp .55s ease-out .30s both; }
  .btb-su5 { animation: fadeUp .55s ease-out .42s both; }
  .btb-su6 { animation: fadeUp .55s ease-out .54s both; }

  .btb-fee-card::before {
    content:''; position:absolute; inset:-1px; border-radius:22px;
    background: linear-gradient(135deg,rgba(249,115,22,.28),rgba(255,255,255,.04),rgba(99,102,241,.14));
    z-index:-1; animation: borderGlow 3s ease-in-out infinite;
  }

  /* Custom Dropdown Hide Arrow */
  .btb-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

function InjectCSS() {
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const el = document.createElement("style");
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
  return null;
}

const BROCHURES = [
  { id: "en", lang: "English", flag: "🇬🇧", href: "#" },
  { id: "hi", lang: "हिन्दी", flag: "🇮🇳", href: "#" },
  { id: "te", lang: "తెలుగు", flag: "🏛️", href: "#" },
];

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(4,8,22,.92)", backdropFilter: "blur(12px)" }}>
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-white rounded-[32px] shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto z-10">
        <div className="sticky top-0 bg-white/96 backdrop-blur border-b border-slate-100 px-6 py-5 flex items-center justify-between rounded-t-[32px]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1a3a6b] grid place-items-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-extrabold text-slate-800 text-base">Terms & Conditions</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors grid place-items-center">✕</button>
        </div>
        <div className="px-6 py-5 space-y-4">
          {TERMS.map(([title, text], i) => (
            <div key={i} className="flex gap-3.5 items-start">
              <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-orange-100 grid place-items-center">
                <span className="text-orange-600 font-black text-[10px]">{i + 1}</span>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                <strong className="text-slate-800 font-bold">{title}: </strong>{text}
              </p>
            </div>
          ))}
        </div>
        <div className="px-6 pb-6 pt-2">
          <button onClick={onClose}
            className="w-full py-4 rounded-2xl bg-[#1a3a6b] hover:bg-[#0f2548] text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/20">
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Register Button ─── */
function RegisterButton({ href = "#" }) {
  const [ripples, setRipples] = useState([]);
  function addRipple(e) {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples(p => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples(p => p.filter(q => q.id !== id)), 900);
  }
  return (
    <a href={href} onClick={addRipple}
      className="btb-shimmer relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-white text-[15px] tracking-wide cursor-pointer select-none shrink-0"
      style={{
        background: "linear-gradient(135deg,#f97316,#ea580c,#c2410c)",
        backgroundSize: "200%", animation: "gradS 3s ease infinite",
        boxShadow: "0 5px 22px rgba(249,115,22,.58), inset 0 1px 0 rgba(255,255,255,.16)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {ripples.map(({ id, x, y }) => (
        <span key={id} style={{
          position: "absolute", left: x, top: y, width: 80, height: 80,
          marginLeft: -40, marginTop: -40, borderRadius: "50%",
          background: "rgba(255,255,255,.36)", animation: "ripple .9s ease-out forwards", pointerEvents: "none",
        }} />
      ))}
      <span className="relative z-10">Register Now</span>
      <span className="relative z-10 w-7 h-7 rounded-lg bg-white/20 border border-white/28 grid place-items-center">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M18 12H6" />
        </svg>
      </span>
    </a>
  );
}

/* ─── Phone Button ─── */
function PhoneButton({ phone = "+919505051521", display = "+91 95050 51521" }) {
  return (
    <a href={`tel:${phone}`}
      className="inline-flex items-center gap-2.5 px-4 py-3  rounded-2xl transition-all duration-200 no-underline shrink-0"
      style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", fontFamily: "'DM Sans',system-ui,sans-serif" }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.14)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.26)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.14)"; }}
    >
      <div className="w-8 h-8 rounded-xl grid place-items-center shrink-0"
        style={{ background: "rgba(52,211,153,.16)", border: "1px solid rgba(52,211,153,.28)" }}>
        <svg className="btb-ph w-3.5 h-3.5" fill="#34d399" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white/38 text-md font-bold uppercase tracking-widest mb-0.5" style={{ fontSize: 9.5 }}>Call Us</span>
        <span className="text-white font-bold" style={{ fontSize: 12.5 }}>{display}</span>
      </div>
    </a>
  );
}

/* ─── Compact Stat Row ─── */
const ACCENTS = {
  orange: { bar: "#f97316", bg: "rgba(249,115,22,.13)", text: "#fb923c", glow: "rgba(249,115,22,.2)" },
  gold: { bar: "#fbbf24", bg: "rgba(251,191,36,.11)", text: "#fbbf24", glow: "rgba(251,191,36,.16)" },
  teal: { bar: "#2dd4bf", bg: "rgba(45,212,191,.11)", text: "#2dd4bf", glow: "rgba(45,212,191,.16)" },
  violet: { bar: "#a78bfa", bg: "rgba(167,139,250,.11)", text: "#a78bfa", glow: "rgba(167,139,250,.16)" },
};

function StatRow({ value, label, svgPath, accent }) {
  const c = ACCENTS[accent];
  return (
    <div className="relative flex items-center gap-3 rounded-2xl px-4 py-3 overflow-hidden"
      style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.09)" }}>
      <div className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-r-full" style={{ background: c.bar }} />
      <div className="shrink-0 w-9 h-9 rounded-xl grid place-items-center" style={{ background: c.bg }}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={c.text} strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-black leading-none mb-0.5" style={{ fontSize: "clamp(14px,2vw,17px)", color: c.text, fontFamily: "'DM Sans',system-ui,sans-serif" }}>{value}</div>
        <div className="text-white font-semibold" style={{ fontSize: 11.5 }}>{label}</div>
      </div>
      <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle,${c.glow} 0%,transparent 70%)` }} />
    </div>
  );
}

function EligBadge({ label, icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold cursor-default transition-all duration-150"
      style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", color: "rgba(255,255,255,.76)", fontSize: 11.5, fontFamily: "'DM Sans',system-ui,sans-serif" }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.13)"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "rgba(255,255,255,.76)"; }}
    >
      <span style={{ fontSize: 12 }}>{icon}</span>{label}
    </span>
  );
}

/* ═══════════════════════════════
    MAIN EXPORT
═══════════════════════════════ */
export default function UpcomingEducationBanner() {
  const [showTerms, setShowTerms] = useState(false);
  const [selectedLang, setSelectedLang] = useState(BROCHURES[0]);

  const handleDownload = () => {
    // Replace '#' with actual PDF links in BROCHURES array
    const link = document.createElement('a');
    link.href = selectedLang.href;
    link.download = `Brochure_${selectedLang.lang}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { value: "100% Coaching Fee", label: "Full scholarship — zero cost", accent: "orange", svgPath: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { value: "100 Students", label: "Pilot batch — limited seats", accent: "gold", svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { value: "Results in 15 Days", label: "Email · SMS · Applicant portal", accent: "teal", svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "AI-Proctored Exam", label: "Fair · Merit-based · Online", accent: "violet", svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  ];

  return (
    <>
      <InjectCSS />
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}

      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(4,8,20,.97) 0%,rgba(6,15,38,.94) 38%,rgba(8,20,50,.88) 60%,rgba(4,10,28,.96) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 12% 85%,rgba(249,115,22,.16) 0%,transparent 48%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 82% 12%,rgba(99,102,241,.1) 0%,transparent 42%)" }} />
          <div className="absolute pointer-events-none" style={{ top: -100, right: -80, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,.08) 0%,transparent 70%)", animation: "orb 6s ease-in-out infinite" }} />
          <div className="absolute pointer-events-none" style={{ bottom: -60, left: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 70%)", animation: "orb 8s ease-in-out infinite 2s" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: .022, backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 sm:mt-20 mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT COLUMN */}
            <div>
              <div className="btb-su1 flex items-center gap-3 mb-4">
                <div className="h-px w-5" style={{ background: "rgba(255,255,255,.2)" }} />
                <span style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".14em", color: "rgba(255,255,255,.35)" }}>
                  AD Life Trust · National Education Initiative
                </span>
                <div className="h-px w-5" style={{ background: "rgba(255,255,255,.2)" }} />
              </div>

              <div className="btb-su1 mb-5">
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                  style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: 10.5, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#fb923c", background: "rgba(249,115,22,.14)", border: "1px solid rgba(249,115,22,.28)" }}>
                  <span className="relative flex w-2 h-2 shrink-0">
                    <span className="btb-ping absolute inset-0 rounded-full" style={{ background: "rgba(249,115,22,.7)" }} />
                    <span className="relative z-10 w-2 h-2 rounded-full bg-orange-500 inline-flex" />
                  </span>
                  Applications Open · 2025
                </span>
              </div>

              <div className="btb-su2 mb-4">
                <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 900, color: "#fff", lineHeight: 1.06, textShadow: "0 2px 32px rgba(0,0,0,.6)", marginBottom: 0 }}>
                  Bridge To <span className="relative inline-block">
                    <span style={{ background: "linear-gradient(135deg,#fb923c 0%,#fbbf24 45%,#fb923c 100%)", backgroundSize: "200%", animation: "gradS 3s ease infinite", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Brilliance</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg,#f97316,#fbbf24)" }} />
                  </span>
                </h1>
              </div>

              <div className="btb-su3 mb-8">
                <p style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: 15, color: "rgba(191,219,254,.65)", lineHeight: 1.72, maxWidth: 420 }}>
                  "Because Every Dream Deserves a Chance." Providing <strong style={{ color: "#fff" }}>100% coaching fee support</strong> to <strong style={{ color: "#fff" }}>100 merit students</strong> — funded directly by the trust.
                </p>
              </div>

              {/* Action Area: Register & Call */}
              <div className="btb-su4 flex flex-wrap items-center gap-3 mb-4">
                <RegisterButton />
                <PhoneButton />
              </div>

              {/* BROCHURE DOWNLOAD SECTION */}
              <div className="btb-su5 flex flex-wrap items-center gap-3 mb-8 p-1.5 rounded-2xl max-w-fit" 
                   style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
                <div className="relative group min-w-[130px]">
                  <select 
                    value={selectedLang.id}
                    onChange={(e) => setSelectedLang(BROCHURES.find(b => b.id === e.target.value))}
                    className="btb-select w-full bg-[#060c1f] text-white/60 border border-white/10 rounded-xl px-4 py-2 text-[11px] font-bold outline-none focus:border-orange-500/40 transition-all cursor-pointer"
                  >
                    {BROCHURES.map(b => <option key={b.id} value={b.id} className="bg-[#060c1f]">{b.flag} {b.lang}</option>)}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover:text-orange-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <button onClick={handleDownload}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-[11px] transition-all active:scale-95 border border-white/5 hover:bg-white/5"
                  style={{ color: "rgba(255,255,255,.8)", fontFamily: "'DM Sans', sans-serif" }}>
                  <svg className="w-3.5 h-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" /></svg>
                  Download Brochure
                </button>
              </div>

              <div className="btb-su5 mb-3">
                <p style={{ fontSize: 9.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".16em", color: "rgba(255,255,255,.25)", marginBottom: 8 }}>Eligible For</p>
                <div className="flex flex-wrap gap-1.5">
                  {[{ label: "Class 11 & 12", icon: "📗" }, { label: "UG Degree", icon: "🎓" }, { label: "Postgraduate", icon: "🏅" }, { label: "All India", icon: "🇮🇳" }].map(e => <EligBadge key={e.label} {...e} />)}
                </div>
              </div>

              <div className="btb-su6">
                <button onClick={() => setShowTerms(true)}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11.5, color: "rgba(255,255,255,.3)", textDecoration: "underline", textUnderlineOffset: 3, fontFamily: "'DM Sans',system-ui,sans-serif" }}>
                  View Terms & Conditions
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-3">
              {/* Fee Card */}
              <div className="btb-su3 btb-fee-card btb-float relative rounded-[22px] px-5 py-5"
                style={{ background: "rgba(255,255,255,.07)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 14px 44px rgba(0,0,0,.35)" }}>
                <div className="absolute -top-3 left-5 px-3.5 py-1 rounded-full text-white"
                  style={{ fontSize: 9.5, fontWeight: 900, textTransform: "uppercase", letterSpacing: ".13em", background: "linear-gradient(90deg,#f97316,#ea580c)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>
                  Application Fee
                </div>
                <div className="flex items-end justify-between mt-2">
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(38px,5vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                    1,800 <span style={{ fontSize: "0.9em", verticalAlign: "top", marginLeft: ".32em", display: "inline-block", transform: "rotate(-12deg)", backgroundImage: "linear-gradient(135deg, #FF9933 15%, #FFFFFF 50%, #138808 85%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className="animate-pulse">₹</span>
                  </div>
                  <div className="flex flex-col items-end pb-1 gap-0.5">
                    {["✓ Non-refundable", "✓ Online only", "✓ No hidden fees"].map(t => (
                      <span key={t} style={{ fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,.42)" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.28)", borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 10, marginTop: 8 }}>
                  Only payment for the entire program · Paid once before the exam
                </div>
              </div>

              {/* Stats */}
              <div className="btb-su4 flex flex-col gap-2">
                {stats.map(s => <StatRow key={s.value} {...s} />)}
              </div>

              {/* Assurance Strip */}
              <div className="btb-su5 flex items-center gap-4 rounded-2xl px-4 py-3.5"
                style={{ background: "rgba(16,185,129,.08)", border: "1px solid rgba(16,185,129,.18)" }}>
                <div className="w-8 h-8 rounded-xl grid place-items-center shrink-0" style={{ background: "rgba(16,185,129,.15)" }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "rgba(255,255,255,.88)", marginBottom: 1 }}>₹1,800 is the ONLY payment</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.38)", lineHeight: 1.45 }}>No hidden costs before or after selection. Merit-based process.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}