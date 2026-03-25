// File: src/app/our-policies/terms-of-use/page.js
import React from 'react';

export default function TermsOfUsePage() {
  return (
    <div className="bg-gray-50 font-sans antialiased min-h-screen">
      {/* main container: max-w-4xl centered, white card background, subtle border */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-2xl  mt-34 shadow-lg border border-gray-100 overflow-hidden">
          
          {/* decorative header: brand bar */}
          <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 px-6 py-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Terms of Use</h1>
                <p className="text-indigo-200 text-sm mt-1">Bridge to Brilliance – An Initiative by AD Life Trust</p>
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
          
          {/* policy body: exact content from the provided document, unchanged */}
          <div className="px-6 py-8 sm:px-8 sm:py-10 text-gray-800">
            
            {/* 1. ACCEPTANCE OF TERMS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">1. ACCEPTANCE OF TERMS</h2>
              <p className="mb-3">Welcome to Bridge to Brilliance, an educational initiative of AD Life Trust ("AD Life Trust", "we", "us", "our"). By accessing our website www.adlifetrust.org.in, registering for any program, or using any services provided under the Bridge to Brilliance initiative, you ("user", "student", "participant", "you") agree to be bound by these Terms of Use ("Terms").</p>
              <p>If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and AD Life Trust.</p>
            </section>
            
            {/* 2. ABOUT THE ORGANIZATION AND SERVICE */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">2. ABOUT THE ORGANIZATION AND SERVICE</h2>
              <p className="mb-3">AD Life Trust is a registered non-profit trust based in Hyderabad, Telangana, India, committed to creating quality life for women, children, and marginalized communities through education, health, livelihood, and humanitarian interventions.</p>
              <p className="mb-3 italic text-gray-700">Bridge to Brilliance is an education-focused program under AD Life Trust that provides skill development, academic support, and educational opportunities to students from underserved communities.</p>
              <p className="mb-2">Our services include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Online and offline course enrollment and registration</li>
                <li>Access to study materials, learning resources, and program content</li>
                <li>Communication channels for program updates and notifications</li>
                <li>Certificate issuance upon successful program completion</li>
                <li>Volunteer and mentor registration</li>
              </ul>
            </section>
            
            {/* 3. REGISTRATION AND ACCOUNT */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">3. REGISTRATION AND ACCOUNT</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">3.1 Eligibility</h3>
                <p className="mb-2">To register for our programs, you must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide accurate and complete personal information as requested in the registration form</li>
                  <li>Meet any specific eligibility criteria mentioned for the relevant program or course</li>
                  <li>For participants under 18 years of age, obtain and provide consent from a parent or legal guardian</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">3.2 Account Responsibility</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>a) Upon successful registration, you will receive login credentials (if applicable). You are responsible for maintaining the confidentiality of your username and password.</li>
                  <li>b) You must immediately report any suspected unauthorized access or breach of your account to director@adlifetrust.org.in.</li>
                  <li>c) AD Life Trust shall not be liable for any loss or damage arising from your failure to maintain the security of your account credentials.</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">3.3 Accuracy of Information</h3>
                <p>You agree to provide truthful, accurate, and current information during registration and to promptly update it if it changes. Submission of false or misleading information may result in cancellation of your enrollment without refund.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">3.4 Form Submission</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Once a registration or application form is submitted and confirmed, it may not be edited or revised unless explicitly permitted by AD Life Trust.</li>
                  <li>Payment of applicable fees (where applicable) is required to activate and confirm your enrollment.</li>
                </ul>
              </div>
            </section>
            
            {/* 4. USER OBLIGATIONS AND CODE OF CONDUCT */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">4. USER OBLIGATIONS AND CODE OF CONDUCT</h2>
              <p className="mb-2">By using our services, you agree that you will NOT:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>a) Use the Website or services for any unlawful, fraudulent, or unauthorized purpose</li>
                <li>b) Impersonate any person or entity, or misrepresent your affiliation with any person or organization</li>
                <li>c) Upload, post, or transmit any content that is defamatory, obscene, offensive, hateful, discriminatory, or otherwise objectionable</li>
                <li>d) Harass, threaten, bully, or intimidate other participants, volunteers, or staff</li>
                <li>e) Attempt to gain unauthorized access to any part of the Website, servers, or systems</li>
                <li>f) Damage, disable, overburden, or impair the functioning of the Website or associated services</li>
                <li>g) Collect or harvest personal information of other users without their consent</li>
                <li>h) Use automated tools, bots, or scripts to access or scrape the Website</li>
                <li>i) Violate any applicable local, state, national, or international law or regulation</li>
                <li>j) Upload or distribute viruses, malware, or any other malicious code</li>
              </ul>
              <p className="mt-3">Violation of this code of conduct may result in immediate suspension or termination of your enrollment and access to services.</p>
            </section>
            
            {/* 5. PROGRAM ENROLLMENT AND PARTICIPATION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">5. PROGRAM ENROLLMENT AND PARTICIPATION</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">5.1 Admission and Selection</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enrollment in Bridge to Brilliance programs is subject to availability, eligibility criteria, and selection by AD Life Trust.</li>
                  <li>AD Life Trust does not guarantee enrollment in any specific program or batch.</li>
                  <li>Selection decisions are made based on merit, need, or program-specific criteria at the sole discretion of AD Life Trust.</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.2 Attendance and Participation</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Participants are expected to attend sessions regularly and actively engage in program activities.</li>
                  <li>Irregular attendance may result in disqualification from receiving certificates or program benefits.</li>
                  <li>AD Life Trust reserves the right to modify program schedules, content, or delivery mode (online/offline) as necessary.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.3 Certificates and Completion</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Certificates of completion will be issued only to participants who fulfill the prescribed attendance, assessment, and participation requirements.</li>
                  <li>AD Life Trust reserves the right to withhold or revoke certificates in cases of misconduct or submission of fraudulent information.</li>
                </ul>
              </div>
            </section>
            
            {/* 6. FEES AND PAYMENTS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">6. FEES AND PAYMENTS</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Some Bridge to Brilliance programs may be offered free of charge as part of our social mission; others may carry a nominal registration or course fee.</li>
                <li>All applicable fees will be clearly communicated at the time of registration.</li>
                <li>Fees, once paid, are subject to our Refund Policy (see separate Refund Policy document).</li>
                <li>Payments must be made through the designated payment methods provided on our Website.</li>
                <li>AD Life Trust is not responsible for transaction failures, delays, or charges imposed by your bank or payment service provider.</li>
              </ul>
            </section>
            
            {/* 7. INTELLECTUAL PROPERTY */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">7. INTELLECTUAL PROPERTY</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>a) All content on the Website and program materials—including text, graphics, logos, videos, curriculum, assessments, and software—is the intellectual property of AD Life Trust or its licensors and is protected under applicable copyright and intellectual property laws.</li>
                <li>b) You may access and use the content solely for personal, non-commercial educational purposes within the Bridge to Brilliance program.</li>
                <li>c) You may NOT reproduce, distribute, publish, transmit, modify, display, or create derivative works from any content without the prior written permission of AD Life Trust.</li>
                <li>d) Any feedback, suggestions, or testimonials you provide to AD Life Trust may be used by us for promotional or improvement purposes without any obligation to compensate you.</li>
              </ul>
            </section>
            
            {/* 8. THIRD-PARTY LINKS AND SERVICES */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">8. THIRD-PARTY LINKS AND SERVICES</h2>
              <p>Our Website may contain links to third-party websites or services. AD Life Trust does not endorse or control these third-party sites and is not responsible for their content, privacy practices, or services. You access such links at your own risk.</p>
            </section>
            
            {/* 9. DISCLAIMER OF WARRANTIES */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">9. DISCLAIMER OF WARRANTIES</h2>
              <p className="mb-2">The Website and services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, express or implied, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Guarantees that the Website will be uninterrupted, error-free, or free of viruses</li>
                <li>Accuracy, completeness, or reliability of any information on the Website</li>
              </ul>
              <p className="mt-2">AD Life Trust makes no guarantee regarding employment outcomes, academic outcomes, or other results from participation in Bridge to Brilliance programs.</p>
            </section>
            
            {/* 10. LIMITATION OF LIABILITY */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">10. LIMITATION OF LIABILITY</h2>
              <p className="mb-2">To the maximum extent permitted by applicable law, AD Life Trust, its trustees, officers, employees, volunteers, and partners shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your use of or inability to use the Website or services</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Statements or conduct of any third party on the Website</li>
                <li>Any other matter relating to our services</li>
              </ul>
              <p className="mt-2">This limitation applies regardless of whether such damages arise in contract, tort, negligence, or any other cause of action.</p>
            </section>
            
            {/* 11. TERMINATION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">11. TERMINATION</h2>
              <p className="mb-2">AD Life Trust reserves the right to suspend or terminate your enrollment, account, or access to services at any time, without prior notice, if:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You breach any provision of these Terms</li>
                <li>You provide false or misleading information</li>
                <li>Your conduct is harmful to other participants, volunteers, or the reputation of AD Life Trust</li>
                <li>Continuation of your enrollment is not in the best interest of the program or beneficiaries</li>
              </ul>
              <p className="mt-2">Upon termination, your right to access program materials ceases immediately. Refunds, if applicable, will be governed by the Refund Policy.</p>
            </section>
            
            {/* 12. PRIVACY */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">12. PRIVACY</h2>
              <p>Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.</p>
            </section>
            
            {/* 13. GOVERNING LAW AND DISPUTE RESOLUTION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">13. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
              <p className="mb-2">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana, India.</p>
              <p>Before initiating any legal action, parties agree to attempt resolution through good-faith negotiation. Any unresolved disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996.</p>
            </section>
            
            {/* 14. AMENDMENTS TO TERMS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">14. AMENDMENTS TO TERMS</h2>
              <p>AD Life Trust reserves the right to modify these Terms at any time. Updated Terms will be posted on the Website with a revised "Last Updated" date. Your continued use of the services after any changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.</p>
            </section>
            
            {/* 15. CONTACT US */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">15. CONTACT US</h2>
              <p>For any queries regarding these Terms of Use, please contact:</p>
              <div className="mt-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold">AD Life Trust – Bridge to Brilliance Program</p>
                <p>Hyderabad, Telangana, India</p>
                <p>Email: <a href="mailto:director@adlifetrust.org.in" className="text-indigo-700 hover:underline">director@adlifetrust.org.in</a></p>
                <p>Phone: <a href="tel:+919505051521" className="text-indigo-700 hover:underline">+91 95050 51521</a></p>
                <p>Website: <a href="https://www.adlifetrust.org.in" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">www.adlifetrust.org.in</a></p>
              </div>
            </section>
            
            {/* footer signature and copyright exactly as provided */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
              <p>© 2026 AD Life Trust. All Rights Reserved.</p>
              <p className="italic mt-1">"Adding Value to Lives"</p>
            </div>
            
          </div>
          
          {/* subtle footer */}
          <div className="bg-gray-50 px-6 py-3 text-right text-xs text-gray-400 border-t border-gray-100">
            Bridge to Brilliance — Read our terms carefully before using services
          </div>
        </div>
      </div>
    </div>
  );
}