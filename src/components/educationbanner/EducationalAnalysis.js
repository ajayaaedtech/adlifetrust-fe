'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Users,
  EyeOff,
  ArrowRight,
  Sparkles,
  PieChart,
  Award,
  Target,
  Handshake,
  Brain,
  Star,
  BookOpenCheck,
  LayoutDashboard,
  FileCheck2,
  TrendingUp,
  Building2,
  Ribbon,
  Compass,
  GraduationCap,
  Unlink,
  ShieldCheck,
  CheckCircle2,
  Download,
  Globe
} from 'lucide-react';

/* ─── Framer Motion Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

/* ─── Light Download Button Component ─── */
function LightDownloadButton({ selectedLang, customClasses = "" }) {
  return (
    <motion.a
      whileHover={{ y: -2, boxShadow: "0 12px 24px -8px rgba(234, 88, 12, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      href={selectedLang?.href || "#"}
      download={`Brochure_${selectedLang?.lang || "English"}.pdf`}
      className={`relative overflow-hidden inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-[#0B0F19] hover:bg-orange-600 text-white font-bold tracking-wider text-[12px] uppercase transition-all duration-300 shadow-md text-center font-sans ${customClasses}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Download className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
        <span>Download Brochure</span>
      </span>
    </motion.a>
  );
}

/* ─── Reusable Stat Ring Component ─── */
const StatRing = ({ percentage, label, subtext, ringColor, bgColor }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`p-4 rounded-xl ${bgColor} flex items-center space-x-4 transition-all duration-300 hover:shadow-md h-full border border-white/50`}>
      <div className="relative flex items-center justify-center flex-shrink-0">
        <svg className="w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="stroke-current text-slate-200/60"
            strokeWidth="6"
            fill="transparent"
          />
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

/* ─── Reusable Student Benefit Card ─── */
const BenefitCard = ({ title, icon: Icon, points, borderColor, iconBg, iconColor, bulletColor, colSpan = "md:col-span-4" }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4 }}
    className={`${colSpan} bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-l-4 ${borderColor} border border-[#E7DFD1] shadow-sm hover:shadow-lg transition-all space-y-4`}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-black text-[#0B0F19]">{title}</h3>
      <div className={`p-2.5 ${iconBg} ${iconColor} rounded-xl`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <ul className="space-y-2.5 text-[13px] text-[#524A3E] font-medium">
      {points.map((pt, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className={`${bulletColor} font-bold`}>•</span>
          <span>{pt}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

/* ─── Reusable Institutional Value Card ─── */
const InstitutionalCard = ({ title, description, icon: Icon, borderLeftColor, iconBgColor, textColor }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4 }}
    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-l-orange-500 border border-[#E7DFD1] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden"
  >
    <div className="space-y-3 relative z-10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black text-[#0B0F19] tracking-tight">{title}</h3>
        <div className={`p-2.5 ${iconBgColor} ${textColor} rounded-xl group-hover:scale-110 transition-transform`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-[13px] text-[#524A3E] leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

/* ─── MAIN EXPORT COMPONENT ─── */
export default function EducationalAnalysis() {
  const BROCHURES = [
    { id: "en", lang: "English", href: "/education-pdf/Student brochure_adlifetrust.pdf" }
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
    <div className="space-y-20 font-sans text-[#0B0F19]">

      {/* ─── SECTION 1: CAREER CRISIS ANALYSIS ─── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* Header */}
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

        {/* 3 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <motion.div variants={fadeUp} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E7DFD1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0B0F19]">Unguided Career Choices</h3>
                <p className="text-[13px] text-[#6B6353] font-medium mt-1.5">Relying on relatives, neighbours, and social trends.</p>
              </div>
            </div>
            <div className="my-6">
              <StatRing percentage={90} label="No Professional Guidance" subtext="Of Indian students choose their career without any professional guidance (UN-backed BCAR 2025)." ringColor="text-rose-500" bgColor="bg-rose-50/50" />
            </div>
            <div className="pt-4 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] font-bold text-[#8C816E] uppercase tracking-wider">
              <span>Source: UN-backed BCAR</span>
              <span className="text-rose-600 bg-rose-50 px-2 py-1 rounded-md">9 in 10 Students</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E7DFD1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0B0F19]">Expert Advice Deficit</h3>
                <p className="text-[13px] text-[#6B6353] font-medium mt-1.5">Severe gap in awareness and access to career guidance.</p>
              </div>
            </div>
            <div className="my-6">
              <StatRing percentage={10} label="Expert Advice Received" subtext="Only 1 in 10 students has ever received expert career advice or is even aware it exists." ringColor="text-indigo-500" bgColor="bg-indigo-50/50" />
            </div>
            <div className="pt-4 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] font-bold text-[#8C816E] uppercase tracking-wider">
              <span>Awareness Benchmark</span>
              <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">1 in 10 Students</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E7DFD1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <EyeOff className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0B0F19]">Career Blindness</h3>
                <p className="text-[13px] text-[#6B6353] font-medium mt-1.5">The vast majority of viable professions remain invisible.</p>
              </div>
            </div>
            <div className="my-6">
              <StatRing percentage={93} label="Limited Career Awareness" subtext="Students know fewer than 10 career options out of 250+ viable professions." ringColor="text-amber-500" bgColor="bg-amber-50/50" />
            </div>
            <div className="pt-4 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] font-bold text-[#8C816E] uppercase tracking-wider">
              <span>Visibility Metric</span>
              <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-md">High Blindspot</span>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="bg-white p-7 rounded-2xl border border-[#E7DFD1] shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
            <div className="px-3 py-2 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl font-black text-lg flex-shrink-0 shadow-sm">1:3000</div>
            <div>
              <h4 className="font-extrabold text-[#0B0F19] text-base mb-1.5">The Counsellor Drought</h4>
              <p className="text-[13px] text-[#6B6353] leading-relaxed font-medium">
                India's student-to-counsellor ratio. The globally recommended benchmark is 1:250. 67% of counsellors juggle teaching and administrative duties alongside counselling.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-7 rounded-2xl border border-[#E7DFD1] shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
            <div className="px-3 py-2 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl font-black text-lg flex-shrink-0 shadow-sm">~50%</div>
            <div>
              <h4 className="font-extrabold text-[#0B0F19] text-base mb-1.5">The Workplace Fallout</h4>
              <p className="text-[13px] text-[#6B6353] leading-relaxed font-medium">
                Indian graduates are unemployable by industry standards, while 65% of graduate degrees fail to match students' interests or job market demands.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ─── MISSING LINK & SYSTEMIC SOLUTION ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 p-7 rounded-2xl border border-amber-200/80 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-500/10 text-amber-700 rounded-xl border border-amber-500/20">
                <Unlink className="w-5 h-5" />
              </div>
              <h3 className="font-black text-[#0B0F19] text-lg tracking-tight uppercase">
                1. The Missing Link
              </h3>
            </div>
            <div className="space-y-3 text-[13px] text-[#524A3E] leading-relaxed font-medium">
              <p className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>No pan-India talent programme</strong> currently serves Class 11 &amp; 12 students, Arts, Commerce, Humanities, undergraduate, or postgraduate learners.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>No existing programme combines cross-disciplinary aptitude assessment, career guidance, mentorship, and scholarships within a single national framework.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 p-7 rounded-2xl border border-blue-200/80 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-600/10 text-blue-700 rounded-xl border border-blue-600/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-black text-[#0B0F19] text-lg tracking-tight uppercase">
                2. Bridge To Brilliance
              </h3>
            </div>
            <div className="space-y-2 text-[13px] text-[#524A3E] leading-relaxed font-medium">
              <p className="font-bold text-blue-950">
                Talent and Coaching Scholarship Programme
              </p>
              <p>
                Designed as a direct, systemic response to the crisis documented above. It fills the gap left by the discontinued 2022 national talent assessment while offering an inclusive alternative to the <strong>₹58,000 crore coaching industry</strong>, which primarily serves those who can pay and focuses heavily on engineering and medicine.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ─── WHO CAN APPLY + BROCHURE DOWNLOAD CARD ─── */}
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#FAF7F2] to-orange-50/40 p-6 sm:p-9 border border-[#E7DFD1] shadow-xl shadow-orange-950/[0.03] space-y-7"
        >
          {/* Ambient Background Decorative Glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          {/* Header Section */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EFE8D9] pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-5 bg-gradient-to-b from-orange-500 to-amber-600 rounded-full" />
                <h3 className="text-[#0B0F19] font-black text-xl sm:text-2xl tracking-tight uppercase font-sans">
                  Who Can Apply
                </h3>
              </div>
              <p className="text-xs text-[#6B6353] font-medium font-sans pl-4">
                Open for all students and graduates nationwide across every academic background.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start sm:self-auto bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-[11px] font-black uppercase tracking-widest text-orange-600 font-sans">
                Pan-India Eligibility
              </span>
            </div>
          </div>

          {/* Eligibility Micro-Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {eligibility.map((e) => (
              <div
                key={e.label}
                className="group relative flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E7DFD1] shadow-sm hover:shadow-md hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 group-hover:border-orange-300 transition-transform duration-300 shadow-sm">
                  {e.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600/80">Category</span>
                  <span className="text-xs font-black text-[#0B0F19] leading-tight group-hover:text-orange-600 transition-colors font-sans">
                    {e.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Terms & Guidelines Callout Pill */}
          <div className="relative z-10 flex items-start sm:items-center gap-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 text-xs font-medium leading-relaxed font-sans">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Note:</strong> Candidate must be an Indian citizen residing in India, willing to join coaching within 60 days, and not receiving another full coaching scholarship.
            </span>
          </div>

          {/* ─── NEW LIGHT REDESIGNED BROCHURE STRIP ─── */}
          <div className="relative z-10 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/50 to-orange-50/90 p-5 sm:p-6 text-[#0B0F19] shadow-md border-2 border-orange-200/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 overflow-hidden">

            <div className="space-y-1.5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-100/80 px-2.5 py-0.5 rounded-md border border-orange-200/60">
                  Official Brochure
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black tracking-tight font-sans text-[#0B0F19]">
                Download Scholarship Guidelines &amp; Pattern
              </h4>
              <p className="text-xs text-[#6B6353] font-medium font-sans">
                Get full details on curriculum, marking scheme, and exam schedule.
              </p>
            </div>

            {/* Controls: Light Dropdown + Primary Button */}
            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-600 z-10 pointer-events-none" />
                <select
                  value={selectedLang?.id}
                  onChange={e => setSelectedLang(BROCHURES.find(b => b.id === e.target.value))}
                  className="appearance-none w-full sm:w-36 pl-9 pr-8 py-3 bg-white text-[#0B0F19] font-bold text-xs rounded-xl border border-orange-200 outline-none cursor-pointer transition-all font-sans focus:border-orange-500 hover:border-orange-300 shadow-sm"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230B0F19'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "0.8em",
                  }}
                >
                  {BROCHURES.map(b => (
                    <option key={b.id} value={b.id} className="text-slate-900 bg-white font-medium">
                      {b.lang}
                    </option>
                  ))}
                </select>
              </div>

              <LightDownloadButton selectedLang={selectedLang} customClasses="w-full sm:w-auto" />
            </div>
          </div>
        </motion.div>
        {/* Bottom CTA Banner */}
        <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden bg-[#0B0F19] text-white p-8 sm:p-10 shadow-xl shadow-orange-900/10 border border-slate-800">
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
        </motion.div>
      </motion.div>

      {/* ─── SECTION 2: STUDENT BENEFITS BENTO GRID ─── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="pt-10 space-y-10 border-t border-[#E7DFD1]"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0B0F19] uppercase">
            How Bridge to Brilliance Benefits Every Student
          </h2>
          <p className="text-sm sm:text-base text-[#6B6353] font-medium">
            Empowering students with national recognition, objective evaluation, and actionable career pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <BenefitCard
            title="A Talent Scorecard"
            icon={PieChart}
            points={[
              "Multi-dimensional capability profile across all parameters.",
              "Percentile rank within your tier cohort — nationally.",
              "Top 3 career path recommendations based on your results."
            ]}
            borderColor="border-l-rose-500"
            iconBg="bg-rose-50"
            iconColor="text-rose-500"
            bulletColor="text-rose-500"
          />

          <BenefitCard
            title="National Recognition"
            icon={Award}
            points={[
              "A verified score on a nationally standardised platform.",
              "Specialisation badges for top 10% performers in any parameter.",
              "Visibility to partner corporates and institutions."
            ]}
            borderColor="border-l-emerald-600"
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600"
            bulletColor="text-emerald-600"
          />

          <BenefitCard
            title="Career Clarity"
            icon={Target}
            points={[
              "Know your strengths before choosing a career path.",
              "Get matched to career streams — not just job titles."
            ]}
            borderColor="border-l-blue-600"
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
            bulletColor="text-blue-600"
          />

          <BenefitCard
            title="Recruiter Access"
            icon={Handshake}
            points={[
              "High scorers gain visibility in B2B's corporate partner network.",
              "Score feeds quietly into active hiring pipelines."
            ]}
            borderColor="border-l-blue-500"
            iconBg="bg-blue-50"
            iconColor="text-blue-500"
            bulletColor="text-blue-500"
          />

          <BenefitCard
            title="Understand Yourself"
            icon={Brain}
            points={[
              "Discover your cognitive strengths and working style.",
              "Identify which parameters need development.",
              "More meaningful than a GPA or percentage alone."
            ]}
            borderColor="border-l-orange-500"
            iconBg="bg-orange-50"
            iconColor="text-orange-500"
            bulletColor="text-orange-500"
          />

          <BenefitCard
            title="Fair & Unbiased Ranking"
            icon={Star}
            points={[
              "Students ranked within their own cohort.",
              "Z-Score normalisation ensures a level playing field.",
              "Students from rural and semi-urban areas compete fairly."
            ]}
            borderColor="border-l-amber-500"
            iconBg="bg-amber-50"
            iconColor="text-amber-500"
            bulletColor="text-amber-500"
          />

          <motion.div variants={fadeUp} className="md:col-span-12 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white rounded-2xl p-7 sm:p-9 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
                  <BookOpenCheck className="w-6 h-6 text-blue-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  3 Free Counselling Sessions and Study Material
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-50 font-medium pt-2">
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-orange-400 font-bold text-lg">•</span>
                  <span className="leading-relaxed">
                    For each student after the National Talent Exam, to help students understand their strengths, areas of improvement, personality traits, possible career options and best institutions that can help and coach students to achieve their aspirations.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-orange-400 font-bold text-lg">•</span>
                  <span className="leading-relaxed">
                    Free online study material worth <strong className="text-white font-black">₹2,500</strong> for all participating students.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── SECTION 3: FOR COLLEGE PRINCIPALS & DEANS ─── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="pt-10 space-y-10 border-t border-[#E7DFD1]"
      >
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-700 px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            <span>Institutional Value Framework</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0B0F19] uppercase">
            FOR COLLEGE PRINCIPALS &amp; DEANS — THE INSTITUTIONAL VALUE
          </h2>
          <p className="text-sm sm:text-base text-[#6B6353] font-medium leading-relaxed max-w-3xl mx-auto">
            Bridge to Brilliance is not just a student assessment, it is a data intelligence partnership. When your students appear for B2B-TE, your institution receives data-driven insights that directly strengthen your academic programmes, placement outcomes, and institutional brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <InstitutionalCard
            title="Institutional Dashboard"
            description="A consolidated report showing aggregate scores per parameter for your entire student batch. Identify your institution's collective cognitive and skills profile at a glance."
            icon={LayoutDashboard}
            borderLeftColor="border-l-blue-600"
            iconBgColor="bg-blue-50"
            textColor="text-blue-600"
          />

          <InstitutionalCard
            title="Student Ranking Report"
            description="Individual rank and scorecard for every participating student. Share these with parents at open houses or use them as data points during your internal academic reviews and counselling sessions."
            icon={FileCheck2}
            borderLeftColor="border-l-emerald-600"
            iconBgColor="bg-emerald-50"
            textColor="text-emerald-600"
          />

          <InstitutionalCard
            title="Skills Gap Analysis"
            description="Know precisely which parameters your students are underperforming on before placement season begins. Use this to design targeted bridge programmes and remedial workshops for specific skills."
            icon={TrendingUp}
            borderLeftColor="border-l-orange-500"
            iconBgColor="bg-orange-50"
            textColor="text-orange-500"
          />

          <InstitutionalCard
            title="Corporate Hiring Pipeline"
            description="Your students' normalised scores feed into a network of corporate and startup hiring partners. Companies can identify and approach high-scoring students from your campus directly."
            icon={Building2}
            borderLeftColor="border-l-purple-600"
            iconBgColor="bg-purple-50"
            textColor="text-purple-600"
          />

          <InstitutionalCard
            title="Institutional Brand Credential"
            description="Tell prospective students and parents that your institution goes beyond marks — you invest in a scientific talent identification framework."
            icon={Ribbon}
            borderLeftColor="border-l-blue-500"
            iconBgColor="bg-blue-50"
            textColor="text-blue-500"
          />

          <InstitutionalCard
            title="Career Counselling Data"
            description="Batch-level career counseling data gives your student counsellors evidence-based inputs to guide students on stream selection, career paths, and higher education choices."
            icon={Compass}
            borderLeftColor="border-l-emerald-700"
            iconBgColor="bg-emerald-50"
            textColor="text-emerald-700"
          />
        </div>
      </motion.div>

    </div>
  );
}