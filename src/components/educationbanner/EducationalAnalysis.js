'use client';

import React from 'react';
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
  GraduationCap
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
const InstitutionalCard = ({ title, description, icon: Icon, borderLeftColor, iconBgColor, textColor, colSpan = "md:col-span-4" }) => (
  <motion.div 
    variants={fadeUp}
    whileHover={{ y: -4 }}
    className={`${colSpan} bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-l-4 ${borderLeftColor} border border-[#E7DFD1] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden`}
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

    <div className="pt-4 mt-2 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
      <span>Institutional Module</span>
      <Ribbon className={`w-4 h-4 ${textColor} opacity-60`} />
    </div>
  </motion.div>
);

/* ─── MAIN EXPORT COMPONENT ─── */
export default function EducationalAnalysis() {
  return (
    <section className="bg-[#FAF7F2] text-[#0B0F19] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
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

          {/* 3 Equal-Height Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

          {/* PDF Highlights */}
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

            {/* Bottom Full Width Banner */}
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
          {/* Institutional Header */}
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

          {/* Institutional Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Core Institutional Modules */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6">
              
              <InstitutionalCard
                title="Institutional Dashboard"
                description="A consolidated report showing aggregate scores per parameter for your entire student batch. Identify your institution's collective cognitive and skills profile at a glance."
                icon={LayoutDashboard}
                borderLeftColor="border-l-blue-600"
                iconBgColor="bg-blue-50"
                textColor="text-blue-600"
                colSpan="md:col-span-6"
              />

              <InstitutionalCard
                title="Student Ranking Report"
                description="Individual rank and scorecard for every participating student. Share these with parents at open houses or use them as data points during your internal academic reviews and counselling sessions."
                icon={FileCheck2}
                borderLeftColor="border-l-emerald-600"
                iconBgColor="bg-emerald-50"
                textColor="text-emerald-600"
                colSpan="md:col-span-6"
              />

              <InstitutionalCard
                title="Skills Gap Analysis"
                description="Know precisely which parameters your students are underperforming on before placement season begins. Use this to design targeted bridge programmes and remedial workshops for specific skills."
                icon={TrendingUp}
                borderLeftColor="border-l-orange-500"
                iconBgColor="bg-orange-50"
                textColor="text-orange-500"
                colSpan="md:col-span-12"
              />

              <InstitutionalCard
                title="Corporate Hiring Pipeline"
                description="Your students' normalised scores feed into a network of corporate and startup hiring partners. Companies can identify and approach high-scoring students from your campus directly."
                icon={Building2}
                borderLeftColor="border-l-purple-600"
                iconBgColor="bg-purple-50"
                textColor="text-purple-600"
                colSpan="md:col-span-6"
              />

              <InstitutionalCard
                title="Institutional Brand Credential"
                description="Tell prospective students and parents that your institution goes beyond marks — you invest in a scientific talent identification framework."
                icon={Ribbon}
                borderLeftColor="border-l-blue-500"
                iconBgColor="bg-blue-50"
                textColor="text-blue-500"
                colSpan="md:col-span-6"
              />

              <InstitutionalCard
                title="Career Counselling Data"
                description="Batch-level career counseling data gives your student counsellors evidence-based inputs to guide students on stream selection, career paths, and higher education choices."
                icon={Compass}
                borderLeftColor="border-l-emerald-700"
                iconBgColor="bg-emerald-50"
                textColor="text-emerald-700"
                colSpan="md:col-span-12"
              />

            </div>

            {/* Right Side Visual Summary Panel */}
            <motion.div 
              variants={fadeUp}
              className="lg:col-span-4 bg-gradient-to-b from-[#0B0F19] to-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Building2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20 inline-block">
                    Zero Operational Burden
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    Empower Your Campus Framework
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Provide your institution with cutting-edge talent intelligence, batch-level skill analytics, and actionable student scorecards.
                </p>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Registered Charitable Trust</span>
                  </div>
                  <p className="text-[11px] text-slate-400">12A &amp; 80G Compliant Educational Initiative</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}