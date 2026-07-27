import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection, { TermsModal } from "./HeroSection";
import EducationalAnalysis from "./EducationalAnalysis";

/* ─── Motion Tokens ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ─── Global Style Keyframes ─── */
const GlobalStyles = () => (
  <style>{`
    @keyframes colorPulse { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    @keyframes liveSignal { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2.4); opacity: 0; } }
    @keyframes glowSweep { 0% { left: -120%; } 100% { left: 220%; } }
    
    .animate-amber-glow { background-size: 200% auto; animation: colorPulse 4s linear infinite; }
    .animate-signal-pulse { animation: liveSignal 1.8s ease-out infinite; }
    .animate-glow-sweep { animation: glowSweep 3s infinite linear; }
    
    .responsive-bg-focus {
      background-image: url('/bg/home-img.jpg');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  `}</style>
);

function LightDownloadButton({ selectedLang, customClasses = "" }) {
  return (
    <motion.a
      whileHover={{ y: -2, boxShadow: "0 12px 24px -8px rgba(234, 88, 12, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      href={selectedLang?.href}
      download={`Brochure_${selectedLang?.lang}.pdf`}
      className={`relative overflow-hidden inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-[#0B0F19] hover:bg-orange-600 text-white font-bold tracking-wider text-[12px] uppercase transition-all duration-300 shadow-md text-center font-sans ${customClasses}`}
    >
      <span className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 pointer-events-none animate-glow-sweep" />
      <span className="relative z-10 flex items-center gap-2">
        <svg className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download Brochure
      </span>
    </motion.a>
  );
}

function StatCard({ value, label, svgPath, index }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#E7DFD1] bg-white/90 backdrop-blur-sm hover:bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-orange-300 hover:-translate-y-1.5 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50/50 text-orange-600 group-hover:border-orange-500 group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
            </svg>
          </div>
          <span className="font-sans text-[11px] font-black text-orange-500/80 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100/60 tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        
        <h4 className="font-extrabold text-[#0B0F19] text-[16px] mb-2 leading-snug font-sans tracking-tight group-hover:text-orange-600 transition-colors">
          {value}
        </h4>
        <p className="text-[#6B6353] text-[13px] leading-relaxed font-sans font-medium">
          {label}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#F3EFE6] flex items-center gap-1 text-[11px] font-bold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn details</span>
        <span>→</span>
      </div>
    </motion.div>
  );
}

function EligBadge({ label, icon }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#E7DFD1] bg-white/90 text-[#3D372C] text-[12px] font-bold shadow-sm cursor-default whitespace-nowrap hover:border-orange-400 hover:bg-orange-50/40 transition-all font-sans">
      <span className="text-sm">{icon}</span>
      <span>{label}</span>
    </span>
  );
}

/* ─── MAIN EXPORT PAGE ─── */
export default function UpcomingEducationBanner() {
  const [showTerms, setShowTerms] = useState(false);

  const BROCHURES = [{ id: "en", lang: "English", href: "/education-pdf/Student brochure_adlifetrust.pdf" }];
  const [selectedLang, setSelectedLang] = useState(BROCHURES[0]);

  const eligibility = [
    { label: "Class 10, 11 & 12", icon: "📗" },
    { label: "UG Stream", icon: "🎓" },
    { label: "PG Stream", icon: "🏅" },
    { label: "All Academic Streams", icon: "✨" },
    { label: "Indian Residents Only", icon: "🇮🇳" },
    { label: "Willing to join coaching within 60 days", icon: "🎒" },
  ];

  const stats = [
    { value: "100% Scholarship Fee Support", label: "Full fee paid directly to the Empaneled Institute. Zero coaching costs for you.", svgPath: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { value: "Quality Coaching Access", label: "Top coaching institutes with experienced faculty and proven results.", svgPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { value: "Top 100 Performers", label: "Full scholarships awarded for quality coaching & career development.", svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { value: "National Ranking & Certification", label: "Benchmark your aptitude against peers nationwide with a verifiable score.", svgPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { value: "Free Study Material", label: "Free high-quality online study material provided to all exam takers.", svgPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.746 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { value: "3 Free Career Counselling Sessions", label: "Professional guidance and support from premium academicians.", svgPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" }
  ];

  return (
    <>
      <GlobalStyles />
      <AnimatePresence>
        {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      </AnimatePresence>

      {/* Component 1: Hero Section */}
      <HeroSection selectedLang={selectedLang} />

      {/* Details Section */}
      <section className="relative z-20 bg-[#FAF7F2] py-16 sm:py-24 border-t border-[#EFE8D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 space-y-16">

          {/* Program Overview Callout */}
          <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500 shadow-sm backdrop-blur-sm">
            <p className="text-[#4A4335] leading-[1.85] text-[15.5px] sm:text-[17px] font-sans font-medium text-justify">
              <span className="float-left text-[44px] sm:text-[52px] leading-[0.8] font-black text-[#0B0F19] mr-3 mt-1 bg-gradient-to-br from-orange-500 to-amber-600 bg-clip-text text-transparent">
                T
              </span>
              he Bridge to Brilliance All India Talent and Scholarship Program uses a comprehensive national-level talent assessment to move beyond traditional academic grading, instead focusing on professional readiness and career success. By providing a structured{" "}
              <span className="text-[#0B0F19] font-bold px-2 py-0.5 rounded bg-orange-500/15 border-b-2 border-orange-500 inline-block my-0.5">
                National Score and Rank
              </span>
              , the program helps students understand their standing on a competitive national scale, bridging the gap between formal education and the practical skills required for specialized careers.
            </p>
          </div>

          {/* Guidelines Split Layout Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Official Matrix Download */}
            <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm rounded-2xl p-7 sm:p-9 text-[#0B0F19] shadow-lg shadow-orange-950/[0.03] flex flex-col justify-between border border-[#E7DFD1] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-amber-500/0 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-500/10 px-3 py-1 rounded-full font-sans border border-orange-500/20">
                    Official Matrix
                  </span>
                </div>
                
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0B0F19] font-sans">
                  Scholarship Roadmap &amp; Guidelines Pack
                </h4>
                
                <p className="text-[#6B6353] text-xs sm:text-[13.5px] leading-relaxed font-sans font-medium">
                  Review the official curriculum frameworks setup to verify national allocation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-2 pb-2">
                  {[
                    "All India Talent Assessment Rules",
                    "Free Career Counselling Flowchart",
                    "All India Rank & Certificate Blueprint",
                    "AI-Proctored Exam Instructions"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[13px] font-bold text-[#3D372C] font-sans">
                      <div className="w-5 h-5 rounded-full bg-orange-500/15 text-orange-600 flex items-center justify-center shrink-0 font-black text-xs">
                        ✓
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 relative z-10 w-full border-t border-[#EFE8D9] pt-5">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm z-10 pointer-events-none">🌐</span>
                  <select
                    value={selectedLang?.id}
                    onChange={e => setSelectedLang(BROCHURES.find(b => b.id === e.target.value))}
                    className="appearance-none w-full pl-9 pr-9 py-3 bg-white text-[#0B0F19] font-bold text-xs rounded-xl border border-[#E7DFD1] outline-none cursor-pointer transition-all font-sans focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230B0F19'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.85rem center",
                      backgroundSize: "0.85em",
                    }}
                  >
                    {BROCHURES.map(b => <option key={b.id} value={b.id} className="text-slate-900">{b.lang}</option>)}
                  </select>
                </div>
                <LightDownloadButton selectedLang={selectedLang} customClasses="w-full sm:w-auto" />
              </div>

            </div>

            {/* Right Card: Who Can Apply */}
            <div className="lg:col-span-5 p-7 sm:p-9 space-y-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E7DFD1] shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-4 bg-orange-500 rounded-full" />
                  <h4 className="text-[#0B0F19] font-extrabold text-xs tracking-wider uppercase font-sans">
                    Who Can Apply
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-1">
                  {eligibility.map(e => <EligBadge key={e.label} {...e} />)}
                </div>
              </div>

              <p className="text-[12px] text-[#8C816E] font-medium font-sans leading-relaxed pt-4 border-t border-[#EFE8D9]">
                * Must be an Indian citizen residing in India, willing to join coaching within 60 days, and not receiving another full coaching scholarship.
              </p>
            </div>

          </div>

          {/* Component 2: Educational Analysis & Bento Grid */}
          <EducationalAnalysis />

          {/* Offerings Grid */}
          <div className="space-y-8 pt-8 border-t border-[#EFE8D9]">
            <div className="flex items-center gap-3">
              <span className="w-6 h-1 bg-orange-500 rounded-full" />
              <h3 className="text-xs font-black text-[#0B0F19] tracking-widest uppercase font-sans">
                Program Benefits &amp; Offerings
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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