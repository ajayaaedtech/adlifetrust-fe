import React from 'react';

const ScholarshipDetails = () => {
  const tracks = [
    {
      id: 'A',
      title: 'Track A: Technical Skills',
      color: 'bg-[#0f172a]', // Navy
      border: 'border-[#0f172a]',
      courses: 'Python • Full Stack Web Development • Data Science & Analytics • Artificial Intelligence & Machine Learning • Cybersecurity • Cloud Computing (AWS/Azure/GCP) • Mobile App Development • AI & Prompt Engineering • CAD/AutoCAD/SolidWorks • Tally/GST/Accounting • Video Editing • Graphic Designing • GATE',
      // bestFor: 'MPC • B.Tech • BCA • M.Tech • MCA • PG Science'
    },
    {
      id: 'B',
      title: 'Track B: Management, Professional & Non-Technical',
      color: 'bg-[#7f1d1d]', // Maroon
      border: 'border-[#7f1d1d]',
courses: 'Digital Marketing • Banking & Financial Services • Chartered Accountant (CA) • Company Secretary (CS) • Cost & Management Accountant (CMA) • Chartered Financial Analyst (CFA) • CAT/XAT/CMAT/MAT Preparation',

      // bestFor: 'All streams. Degree & PG students especially encouraged for UPSC and State PSC tracks.'
    },
    {
      id: 'C',
      title: 'Track C: Government Exams',
      color: 'bg-[#78350f]', // Gold/Brown
      border: 'border-[#78350f]',
courses: 'UPSC (IAS/IPS/IFS) • State PSCs • SSC CGL/CHSL/MTS • Banking • Railways • Defence • Police/SI/Constable • TET • Judicial Services'
,
      //bestFor: 'MPC (Inter) • BiPC (Inter) • MBBS Graduates (for NEET-PG) • MBA • CLAT'
    },
    
{
id: 'D',
title: 'Track D: Entrance Exams',
color: 'bg-[#0f766e]', // Teal
border: 'border-[#0f766e]',
courses: 'JEE (Mains & Advanced) • NEET (UG & PG) • CUET (UG & PG) • CLAT • CET • NATA • NID/UCEED • NCHMCT JEE'
}


  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-sans">
      {/* --- Course Tracks Section --- */}
      <div className="mb-16">
        <p className="text-[#c2410c] font-bold text-sm tracking-widest uppercase mb-2">Scholarship Tracks</p>
        <h2 className="text-3xl font-serif font-bold text-slate-900 border-b-2 border-[#c2410c] pb-2 mb-8 inline-block">
          Choose Your Coaching Track
        </h2>
        <p className="text-slate-600 mb-8">
          Select <strong className="text-slate-900">ONE</strong> primary track based on your stream and career goal. The scholarship covers 100% of the approved coaching fee at a trust empanelled Coaching Institute.
        </p>

        <div className="space-y-6">
          {tracks.map((track) => (
            <div key={track.id} className="flex flex-col md:flex-row shadow-sm border border-slate-100">
              <div className={`${track.color} text-white w-full md:w-16 flex items-center justify-center text-3xl font-bold p-4`}>
                {track.id}
              </div>
              <div className="flex-1">
                <div className={`${track.color} text-white p-3 px-6 font-bold tracking-wide border-l border-white/20`}>
                  {track.title}
                </div>
                <div className="bg-slate-50 p-4 px-6 flex flex-col md:flex-row gap-4">
                   <div className="text-slate-400 font-bold text-xs uppercase pt-1">Courses</div>
                   <div>
                      <p className="text-slate-700 leading-relaxed mb-2">{track.courses}</p>
                      {/* <p className="text-sm text-slate-600 italic">
                        <strong className="text-slate-800 not-italic">Best for:</strong> {track.bestFor}
                      </p> */}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Syllabus & Exam Section --- */}
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
  <div className="mb-8">
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c2410c]/10 text-[#c2410c] font-semibold text-sm mb-4">
      Online Examination
    </span>


<h3 className="text-3xl font-bold text-slate-900 mb-3">
  90-Minute Online Assessment
</h3>

<p className="text-slate-600 text-lg">
  The selection process is simple, transparent and merit-based.
</p>


  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {[
      "General Aptitude",
      "English Language",
      "Logical Reasoning",
      " Domain Questions",
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#c2410c] hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-10 h-10 rounded-lg bg-[#c2410c]/10 text-[#c2410c] font-bold flex items-center justify-center mb-4">
          {index + 1}
        </div>


    <h4 className="font-semibold text-slate-900 leading-snug">
      {item}
    </h4>
  </div>
))}


  </div>
</div>

    </div>
  );
};

export default ScholarshipDetails;