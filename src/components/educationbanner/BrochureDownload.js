const STEPS = [
  { num: 1, title: "Register", desc: "Create an account on the portal using your mobile number and email.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { num: 2, title: "Fill the Application", desc: "Enter personal details, academic information, and choose your career track.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z" },
  { num: 3, title: "Upload Documents", desc: "Latest marksheet, Aadhaar, SSC certificate, bank passbook, photo, caste certificate (if applicable).", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
  { num: 4, title: "Pay Application Fee", desc: "₹1,800 one-time fee via online payment gateway. This is the only fee you'll ever pay.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { num: 5, title: "Appear for Exam", desc: "Take the 90-minute AI-proctored online exam from any internet-enabled device.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
];

const TIMELINE = [
  { period: "Months 1–3", label: "Application Window", desc: "Register, fill application, pay fee", color: "#1a3a6b", dot: "#3b82f6" },
  { period: "Month 4", label: "Examination", desc: "AI-proctored 90-min online exam", color: "#f97316", dot: "#f97316" },
  { period: "15 Days", label: "Results Declared", desc: "Email, SMS & applicant portal", color: "#059669", dot: "#10b981" },
  { period: "Month 5", label: "Coaching Begins", desc: "enrollment at institute", color: "#7c3aed", dot: "#8b5cf6" },
];

const BROCHURES = [
  {
    id: "en",
    lang: "English",
    langNative: "English",
    flag: "🇬🇧",
    desc: "Full program details, eligibility, selection process, timeline & application guide.",
    clr: { btn: "linear-gradient(135deg,#1a3a6b,#0f2548)", shadow: "rgba(26,58,107,.4)", icon: "rgba(26,58,107,.1)", iconText: "#1a3a6b", badge: "#dbeafe", badgeText: "#1e40af" },
    href: "#",
  },
  {
    id: "hi",
    lang: "हिन्दी",
    langNative: "Hindi",
    flag: "🇮🇳",
    desc: "Bridge to Brilliance scholarship की पूरी जानकारी — हिन्दी में।",
    clr: { btn: "linear-gradient(135deg,#ea580c,#c2410c)", shadow: "rgba(234,88,12,.4)", icon: "rgba(249,115,22,.1)", iconText: "#ea580c", badge: "#fed7aa", badgeText: "#c2410c" },
    href: "#",
  },
  {
    id: "te",
    lang: "తెలుగు",
    langNative: "Telugu",
    flag: "🏛️",
    desc: "తెలుగులో Bridge to Brilliance స్కాలర్‌షిప్ వివరాలు — Telangana & AP.",
    clr: { btn: "linear-gradient(135deg,#047857,#065f46)", shadow: "rgba(4,120,87,.4)", icon: "rgba(5,150,105,.1)", iconText: "#047857", badge: "#a7f3d0", badgeText: "#065f46" },
    href: "#",
  },
];

function PdfIcon({ color }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill={color}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 18.5v-5h1.8c.9 0 1.6.2 2 .6.5.4.7.9.7 1.7s-.2 1.3-.7 1.7c-.4.4-1.1.6-2 .6h-.7v2.4H8.5zm1.1-3.3h.6c.5 0 .9-.1 1.1-.3.2-.2.4-.5.4-.9s-.1-.7-.4-.9c-.2-.2-.6-.3-1.1-.3h-.6v2.4zm5.3 3.3h-1.9v-5h1.9c.9 0 1.6.3 2.1.8.5.5.7 1.3.7 2.3s-.3 1.8-.8 2.3c-.4.4-1.1.6-2 .6zm-.8-1h.8c.6 0 1-.2 1.3-.5.3-.4.4-.9.4-1.7s-.1-1.3-.4-1.7c-.3-.3-.7-.5-1.3-.5h-.8v4.4z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
    </svg>
  );
}

export default function BrochureDownload() {
  return (
    <div>

      {/* ══ HOW TO APPLY ══ */}


      {/* ══ PROGRAM TIMELINE ══ */}
      <section className="bg-slate-50 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f97316]/10 text-[#f97316] text-[10px] font-bold uppercase tracking-[.12em] mb-3">
              Program Schedule
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
              Program <span className="text-[#f97316]">Timeline</span>
            </h2>
          </div>

          {/* Timeline cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {TIMELINE.map((t, i) => (
              <div key={t.period}
                className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-all duration-200 overflow-hidden">
                {/* Top colour bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: t.dot }} />
                {/* Step number */}
                <div className="w-8 h-8 rounded-full grid place-items-center text-white text-xs font-black mb-3"
                  style={{ background: t.dot }}>
                  {i + 1}
                </div>
                <div className="font-black text-lg leading-none mb-0.5" style={{ color: t.dot }}>{t.period}</div>
                <div className="font-bold text-slate-800 text-sm mb-1">{t.label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>

          {/* Trust message */}
          <div className="rounded-2xl p-6 md:p-8 text-center"
            style={{ background: "linear-gradient(135deg,rgba(26,58,107,.06) 0%,rgba(249,115,22,.06) 100%)", border: "1px solid rgba(26,58,107,.1)" }}>
            <div className="text-5xl mb-3">🛡️</div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-2">A Message to Students & Parents</h3>
           
           
             <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto mb-6">
                The <strong className="text-slate-900">₹1,800 application fee is the only payment required</strong> for the entire process. No additional fees will ever be requested before or after selection.
              </p>

              {/* Red Warning Box */}
              <div className="bg-red-50/80 border border-red-100 rounded-xl p-4 md:p-5 max-w-3xl mx-auto mb-6 shadow-sm">
                <p className="text-red-800 text-sm md:text-base leading-relaxed font-medium">
                  <strong className="font-black text-red-900">FRAUD ALERT:</strong> AD Life Trust will NEVER ask for any payment beyond ₹1,800. If anyone demands additional money in exchange for selection or a scholarship guarantee, they are acting fraudulently.
                </p>
              </div>

              {/* Complaint Action */}
              <p className="text-slate-500 text-sm font-medium">
                If you encounter any suspicious demands, please report them immediately to our director at{" "}
                <a
                  href="mailto:enquiry@adlifetrust.org.in"
                  className="text-blue-600 font-bold hover:text-blue-800 hover:underline underline-offset-2 transition-colors"
                >
                  enquiry@adlifetrust.org.in
                </a>
              </p>
          </div>

        </div>
      </section>

      {/* ══ BROCHURE DOWNLOAD ══ */}
      <section className="bg-white py-14 md:py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a3a6b]/10 text-[#1a3a6b] text-[10px] font-bold uppercase tracking-[.12em] mb-3">
              Download
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">
              Get the <span className="text-[#1a3a6b]">Brochure</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Download the complete Bridge to Brilliance guide in your preferred language.
            </p>
          </div>

          {/* Download cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {BROCHURES.map(b => (
              <div key={b.id}
                className="group flex flex-col gap-4 bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon + lang */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl grid place-items-center shrink-0" style={{ background: b.clr.icon }}>
                    <PdfIcon color={b.clr.iconText} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 18 }}>{b.flag}</span>
                      <span className="font-black text-slate-800 text-base">{b.lang}</span>
                    </div>
                    {b.langNative !== b.lang && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mt-0.5"
                        style={{ background: b.clr.badge, color: b.clr.badgeText }}>
                        {b.langNative}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed flex-1">{b.desc}</p>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>📄 PDF</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>Free Download</span>
                </div>

                <a href={b.href} download
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200 group-hover:shadow-lg"
                  style={{ background: b.clr.btn, boxShadow: `0 4px 14px ${b.clr.shadow}` }}
                  onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; }}
                >
                  <DownloadIcon />
                  Download PDF
                </a>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-600">
              <span style={{ fontSize: 15 }}>🔒</span> Files are safe & virus-free
            </div>
            <a href="mailto:enquiry@adlifetrust.org.in"
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-600 hover:border-slate-300 hover:bg-white transition-all no-underline">
              <span style={{ fontSize: 15 }}>📬</span>
              <span>Queries: <span className="text-[#1a3a6b] font-semibold">enquiry@adlifetrust.org.in</span></span>
            </a>
            <a href="tel:+919505051521"
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-600 hover:border-slate-300 hover:bg-white transition-all no-underline">
              <span style={{ fontSize: 15 }}>📞</span>
              <span className="text-[#1a3a6b] font-semibold">+91 95050 51521</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}