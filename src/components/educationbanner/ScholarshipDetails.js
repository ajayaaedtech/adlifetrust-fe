import React from 'react';

const ScholarshipDetails = () => {
  const tracks = [
    {
      id: 'A',
      title: 'Track A: Technical Skills',
      color: 'bg-[#0f172a]', // Navy
      border: 'border-[#0f172a]',
      courses: 'Python • Full Stack Web Dev • Data Science & ML • Cybersecurity • Cloud Computing (AWS/Azure) • Mobile App Dev • AI & Prompt Engineering • AutoCAD • Tally with GST • EV Technology • Graphic Design',
      bestFor: 'MPC • B.Tech • BCA • M.Tech • MCA • PG Science'
    },
    {
      id: 'B',
      title: 'Track B: Government Exam Coaching',
      color: 'bg-[#7f1d1d]', // Maroon
      border: 'border-[#7f1d1d]',
      courses: 'UPSC (IAS/IPS/IFS) • All State PSCs • SSC CGL/CHSL/MTS • IBPS/SBI Banking PO & Clerk/ RRB /Group D/ TET/DSC/ State Police Boards',
      bestFor: 'All streams. Degree & PG students especially encouraged for UPSC and State PSC tracks.'
    },
    {
      id: 'C',
      title: 'Track C: Entrance Exam Coaching',
      color: 'bg-[#78350f]', // Gold/Brown
      border: 'border-[#78350f]',
      courses: 'JEE Main • JEE Advanced / NEET-UG • NEET-PG',
      bestFor: 'MPC (Inter) • BiPC (Inter) • MBBS Graduates (for NEET-PG) • MBA • CLAT'
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
                      <p className="text-sm text-slate-600 italic">
                        <strong className="text-slate-800 not-italic">Best for:</strong> {track.bestFor}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Syllabus & Exam Section --- */}
      <div className="grid md:grid-cols-2 gap-12 items-start bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Online Examination</h3>
          <p className="text-lg text-slate-700">
            Students will take a <strong className="text-slate-900 underline decoration-red-500 decoration-2 underline-offset-4">90-minute online test.</strong>
          </p>
          <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-[#c2410c] italic text-slate-600">
            "The selection process is simple, transparent and merit-based."
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Exam Sections Include:</h4>
          <ul className="space-y-4">
            {[
              "General Aptitude",
              "English Language",
              "Logical Reasoning",
              "Track-Specific Domain Questions"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-slate-800 font-medium group">
                <span className="h-2 w-2 bg-slate-900 rounded-full mr-4 group-hover:bg-[#c2410c] transition-colors"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;