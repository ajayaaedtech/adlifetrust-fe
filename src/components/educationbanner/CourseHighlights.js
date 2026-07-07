import React from "react";

const steps = [
  {
    id: 1,
    stepNum: "01",
    title: "Register",
    description: "Create an account at the AD Life Trust website Bridge-to-Brilliance portal.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    iconColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    id: 2,
    stepNum: "02",
    title: "Fill the Application",
    description: "Select your career track and enter academic details.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    iconColor: "text-orange-500 bg-orange-50 border-orange-100",
  },
  {
    id: 3,
    stepNum: "03",
    title: "Upload Documents",
    description: "Securely upload following mandatory documents:",
    tags: ["Latest Marksheet", "Aadhaar", "photograph"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    iconColor: "text-red-500 bg-red-50 border-red-100",
  },
  {
    id: 4,
    stepNum: "04",
    title: "Pay Application Fee",
    description: "A one-time application fee of ₹1,800 covers the entire application process, including the Rank Card and Participation Certificate. No additional fees will be charged at any stage, either before or after the selection process",
    highlight: "₹1,800 One-Time Fee",
    highlightColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    id: 5,
    stepNum: "05",
    title: "Appear for Exam",
    description: "Take the 90-minute examination from any internet-enabled device.",
    highlight: "AI-Proctored Exam",
    tags: ["Exam date will be announced soon",],

    highlightColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconColor: "text-emerald-500 bg-emerald-50 border-emerald-100",
  },
];

export default function ApplicationProcess() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header matching the image style */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-slate-800 tracking-tight">
            Steps To Follow For Getting{" "}
            <span className="relative inline-block">
              <strong className="font-black text-slate-900">A SCHOLARSHIP</strong>
              {/* This is the wavy red underline */}
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 20' preserveAspectRatio='none'%3E%3Cpath d='M0,15 C150,5 350,25 500,10' stroke='%23ef4444' stroke-width='6' fill='transparent' stroke-linecap='round'/%3E%3C/svg%3E")`
                }}>
              </span>
            </span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-7xl mx-auto">

          {/* DESKTOP UI: Horizontal dashed connecting line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] border-t-[2px] border-dashed border-slate-300 z-0 pointer-events-none"></div>

          {/* MOBILE UI: Vertical dashed connecting line */}
          <div className="block lg:hidden absolute top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 border-l-[2px] border-dashed border-slate-300 z-0 pointer-events-none"></div>

          {/* Steps Grid */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-[2rem] p-6 sm:p-8 w-full max-w-[320px] lg:flex-1 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 group border border-slate-100"
              >
                {/* Icon Container */}
                <div className={`w-20 h-20 mb-5 flex items-center justify-center rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border transition-transform duration-300 group-hover:scale-110 ${step.iconColor}`}>
                  {step.icon}
                </div>

                {/* Step Indicator */}
                <div className="text-[10px] font-bold uppercase tracking-widestmb-2 bg-red-500 text-white p-1 rounded-2xl">
                  Step {step.stepNum}
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug m-2 ">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>

                {/* Document Tags (For Step 3) */}
                {step.tags && (
                  <div className="w-full flex flex-wrap justify-center mb-2 gap-1.5 mt-auto">
                    {step.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-semibold rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlight Badge (For Step 4 & 5) */}
                {step.highlight && (
                  <div className={`mt-auto px-4 py-1.5 rounded-full text-xs font-bold border shadow-sm ${step.highlightColor}`}>
                    {step.highlight}
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}