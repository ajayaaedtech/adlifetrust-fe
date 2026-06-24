// File: src/app/our-policies/privacy-policy/page.js
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 font-sans antialiased min-h-screen">
      {/* main container: max-w-4xl centered, white card background, subtle border */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-28">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* decorative header: brand bar */}
          <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 px-6 py-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Privacy Policy</h1>
                <p className="text-indigo-200 text-sm mt-1">Bridge to Brilliance Talent and Coaching Scholarship Program</p>
                <p className="text-indigo-300 text-xs mt-0.5">Pan India Initiative by AD Life Trust</p>
              </div>
              <div className="mt-2 sm:mt-0 text-indigo-200 text-sm border-t sm:border-t-0 border-indigo-700 pt-1 sm:pt-0">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Last Updated: March 2026
                </span>
              </div>
            </div>
          </div>
          
          {/* policy body: content updated precisely as requested */}
          <div className="px-6 py-8 sm:px-8 sm:py-10 text-gray-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-2 [&_ul]:mb-3 [&_li]:mb-1 [&_a]:text-indigo-700 [&_a]:underline [&_a:hover]:opacity-80">
            
            {/* 1. INTRODUCTION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">1. INTRODUCTION</h2>
              <p className="mb-3">AD Life Trust ("we", "us", "our") operates the Bridge to Brilliance Talent and Coaching Scholarship program through its website <a href="https://www.adlifetrust.org.in" target="_blank" rel="noopener noreferrer">www.adlifetrust.org.in</a> (the "Website") and associated registration platforms. This Privacy Policy explains how we collect, use, store, and protect the personal information of students, beneficiaries, volunteers, and other users ("you", "your") who interact with our services.</p>
              <p className="mb-3">By registering on our website or participating in any Bridge to Brilliance Talent and Coaching Scholarship program, you acknowledge that you have read and understood this Privacy Policy and consent to the practices described herein.</p>
              <p>AD Life Trust is a registered non-profit trust headquartered in Hyderabad, Telangana, India, dedicated to creating quality life for women and children through education, livelihood, health, and humanitarian interventions.</p>
            </section>
            
            {/* 2. INFORMATION WE COLLECT */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">2. INFORMATION WE COLLECT</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">2.1 Personal Information You Provide</h3>
                <p className="mb-2">When you register for the Bridge to Brilliance Talent and Coaching Scholarship program, apply for a course, volunteer, or interact with our services, we may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li className="mb-2">
                    <span className="font-medium">a) Identification Details:</span>
                    <ul className="list-[circle] pl-5 mt-1 space-y-0.5">
                      <li>Full name</li>
                      <li>Date of birth</li>
                      <li>Gender</li>
                      <li>Photograph (where required)</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">b) Contact Details:</span>
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>Email address</li>
                      <li>Mobile/phone number</li>
                      <li>Residential address, city, state, and PIN code</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">c) Educational Details:</span>
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>Highest qualification</li>
                      <li>Institution name</li>
                      <li>Academic records or documents (where applicable)</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">d) Program-Specific Details:</span>
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>Course or program preferences</li>
                      <li>Batch/schedule preferences</li>
                      <li>Special needs or accessibility requirements (if voluntarily disclosed)</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">e) Payment Information (where applicable):</span>
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>Transaction reference numbers</li>
                      <li>Payment confirmation details</li>
                      <li>Note: All payment transactions are processed through secure third-party payment gateways. AD Life Trust does not store your bank account, card, or UPI details on its servers.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.2 Information Collected Automatically</h3>
                <p className="mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6">
                  <li>Browser type and version</li>
                  <li>IP address and approximate geographic location</li>
                  <li>Operating system and device type</li>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Referring website or source of visit</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.3 Information from Third Parties</h3>
                <p>We may receive information about you from partner organizations, government bodies, or referral networks involved in the implementation of Bridge to Brilliance Talent and Coaching Scholarship programs, solely to facilitate your enrollment or program delivery.</p>
              </div>
            </section>
            
            {/* 3. HOW WE USE YOUR INFORMATION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">3. HOW WE USE YOUR INFORMATION</h2>
              <p className="mb-2">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="font-medium">a) Program Enrollment &amp; Administration:</span> To process your registration, admit you into a program, issue course materials, and manage your participation in Bridge to Brilliance Talent and Coaching Scholarship Program activities.</li>
                <li><span className="font-medium">b) Communication:</span> To send you program updates, schedules, notifications, certificates, and important announcements via email, SMS, or phone.</li>
                <li><span className="font-medium">c) Record Keeping &amp; Compliance:</span> To maintain accurate records of beneficiaries, attendance, and program outcomes as required for internal reporting, donor reporting, and statutory compliance.</li>
                <li><span className="font-medium">d) Program Improvement:</span> To analyze participation data and feedback to improve the quality, reach, and effectiveness of our programs.</li>
                <li><span className="font-medium">e) Identity Verification:</span> To verify your eligibility for specific programs, scholarships, or subsidized courses.</li>
                <li><span className="font-medium">f) Legal Obligations:</span> To comply with applicable laws, regulations, court orders, or requests from government authorities.</li>
              </ul>
            </section>
            
            {/* 4. SHARING OF YOUR INFORMATION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">4. SHARING OF YOUR INFORMATION</h2>
              <p className="mb-3">AD Life Trust respects your privacy and will not sell, rent, or trade your personal information to any third party for commercial or marketing purposes.</p>
              <p className="mb-2">We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="font-medium">a) With Your Consent:</span> With partner institutions, trainers, or collaborating organizations solely for the purpose of program delivery, with your prior knowledge.</li>
                <li><span className="font-medium">b) With Service Providers:</span> With third-party technology and payment service providers who assist in operating our platform, bound by strict confidentiality obligations.</li>
                <li><span className="font-medium">c) For Reporting Purposes:</span> Aggregated, non-personally identifiable data may be shared with donors, government bodies, or funding agencies to demonstrate program impact.</li>
                <li><span className="font-medium">d) Legal Requirements:</span> When required to do so by law, court order, or competent government authority.</li>
                <li><span className="font-medium">e) Organizational Restructuring:</span> In the event of a merger, restructuring, or dissolution of AD Life Trust, your data may be transferred to a successor organization maintaining the same mission and privacy standards.</li>
              </ul>
            </section>
            
            {/* 5. DATA SECURITY */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">5. DATA SECURITY</h2>
              <p className="mb-2">AD Life Trust is committed to protecting your personal information through appropriate technical and organizational measures, including:</p>
              <ul className="list-disc pl-6">
                <li>Encryption of data during transmission using SSL/TLS protocols</li>
                <li>Restricted access to personal data, limited to staff who require it for their role</li>
                <li>Confidentiality obligations for all staff and volunteers handling personal data</li>
                <li>Regular review of security practices and systems</li>
              </ul>
              <p className="mt-3">However, no method of data transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your login credentials and for any activity occurring under your account.</p>
            </section>
            
            {/* 6. DATA RETENTION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">6. DATA RETENTION</h2>
              <p className="mb-2">We retain your personal information for as long as:</p>
              <ul className="list-disc pl-6">
                <li>Your account or enrollment remains active</li>
                <li>It is necessary for the purposes described in this Policy</li>
                <li>Required by applicable law or organizational governance requirements</li>
              </ul>
              <p className="mt-2">Upon request for deletion and where no legal obligation mandates retention, we will take reasonable steps to delete or anonymize your personal data.</p>
            </section>
            
            {/* 7. YOUR RIGHTS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">7. YOUR RIGHTS</h2>
              <p className="mb-2">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="font-medium">a) Right to Access:</span> You may request a copy of the personal information we hold about you.</li>
                <li><span className="font-medium">b) Right to Correction:</span> You may request correction of inaccurate or incomplete information.</li>
                <li><span className="font-medium">c) Right to Withdrawal of Consent:</span> You may withdraw consent for non-essential uses of your data at any time, without affecting the lawfulness of processing prior to withdrawal.</li>
                <li><span className="font-medium">d) Right to Opt-Out of Communications:</span> You may unsubscribe from non-essential communications by emailing <a href="mailto:director@adlifetrust.org.in">director@adlifetrust.org.in</a> with the subject line "UNSUBSCRIBE".</li>
                <li><span className="font-medium">e) Right to Data Portability:</span> Where technically feasible, you may request your data in a structured, commonly used format.</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, please contact us at the details provided in Section 10.</p>
            </section>
            
            {/* 8. COOKIES AND TRACKING TECHNOLOGIES */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">8. COOKIES AND TRACKING TECHNOLOGIES</h2>
              <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and improve our services. Cookies are small text files stored on your device.</p>
              <p className="mt-2">You may control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our website.</p>
            </section>
            
            {/* 9. CHILDREN'S PRIVACY */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">9. CHILDREN'S PRIVACY</h2>
              <p>The Bridge to Brilliance Talent and Coaching Scholarship program serves students, including minors. For participants under the age of 18, we require consent from a parent or legal guardian at the time of registration. We are committed to handling the information of minors with the highest standard of care and do not use such information for any purpose beyond program delivery.</p>
            </section>
            
            {/* 10. CONTACT INFORMATION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">10. CONTACT INFORMATION</h2>
              <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:</p>
              <div className="mt-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold">AD Life Trust – Bridge to Brilliance Talent and Coaching Scholarship Program</p>
                <p>Hyderabad, Telangana, India</p>
                <p>Email: <a href="mailto:director@adlifetrust.org.in" className="text-indigo-700 hover:underline">director@adlifetrust.org.in</a></p>
                <p>Phone: <a href="tel:+918019037799" className="text-indigo-700 hover:underline">+91 80190 37799</a></p>
                <p>Website: <a href="https://www.adlifetrust.org.in" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">www.adlifetrust.org.in</a></p>
              </div>
            </section>
            
            {/* 11. CHANGES TO THIS PRIVACY POLICY */}
            <section className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">11. CHANGES TO THIS PRIVACY POLICY</h2>
              <p>AD Life Trust reserves the right to update this Privacy Policy at any time. Significant changes will be communicated via our website or by email. Continued use of our services after such changes constitutes your acceptance of the revised Policy.</p>
            </section>
            
            {/* footer signature and copyright exactly as provided */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
              <p>© 2026 AD Life Trust. All Rights Reserved.</p>
              <p className="italic mt-1">"Adding Value to Lives"</p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}