"use client";
import React from 'react';
import Image from 'next/image';
// Icons (consider using a library like lucide-react in production)
const BriefcaseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const AwardIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline>
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ProfileScreen = () => {
  const achievements = [
    "Published 15 research papers in renowned medical journals",
    "Successfully guided over 10 postgraduate ",
    "Active promoter of mental health via community ",
    "Recognized as a dedicated academic and clinician in her field",
    "Continues to mentor future psychiatrists and advance mental healthcare"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 font-sans">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Header with subtle gradient */}
          <div className="h-32 bg-gradient-to-r from-red-200 to-[#2E3467] relative"></div>

          {/* Main Content */}
          <div className="p-6 md:p-8 -mt-16">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column (Image and Basic Info) */}
              <div className="lg:w-1/3 flex flex-col items-center">
                <div className="relative group">
                  <Image 
                    src="/sudha.jpg" 
                    alt="Dr. K Sudharani"
                    width={512}
                    height={512}
                    className=" object-cover rounded-full mx-auto border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/E2E8F0/4A5568?text=Error'; }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mt-6">Dr. K Sudharani</h2>
                <div className="mt-3 text-gray-600 flex items-center justify-center gap-2 bg-cyan-50 px-4 py-2 rounded-full">
                  <BriefcaseIcon className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold text-cyan-700">Senior Psychiatrist</span>
                </div>
                
                <div className="mt-4 text-center space-y-1">
                  <p className="text-gray-600">Professor and Head</p>
                  <p className="text-gray-800 font-medium">Department of Psychiatry</p>
                  <p className="text-blue-600 font-semibold">Osmania Medical College</p>
                </div>
                
                <div className="mt-6 w-full border-t pt-6">
                  <h3 className="text-sm uppercase font-semibold text-gray-500 mb-3">Experience</h3>
                  <p className="text-2xl font-bold text-gray-800">35+ Years</p>
                  <p className="text-gray-600 text-sm">in Psychiatry</p>
                </div>
              </div>

              {/* Right Column (Detailed Info) */}
              <div className="lg:w-2/3 mt-10 lg:border-l lg:border-gray-100 lg:pl-8">
                {/* Bio Section */}
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 relative pb-2">
                    <span className="relative z-10">Professional Profile</span>
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-500 rounded-full"></span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. K. Sudharani is a distinguished senior psychiatrist with nearly 35 years of dedicated service in the medical field. She earned her MBBS from Kurnool Medical College and MD in Psychiatry from Osmania Medical College, where she now leads the Department of Psychiatry as Professor and Head.
                  </p>
                </div>

                {/* Achievements Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <div className="p-2 bg-cyan-100 rounded-full">
                      <AwardIcon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <span>Key Accomplishments</span>
                  </h3>
                  
                  <ul className="space-y-4">
                    {achievements.map((item, index) => (
                      <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="p-1 bg-green-100 rounded-full mr-4 mt-1 flex-shrink-0">
                          <CheckCircleIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;