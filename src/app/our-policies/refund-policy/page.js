// File: src/app/our-policies/refund-policy/page.js
import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-gray-50 font-sans antialiased min-h-screen">
      {/* main container: max-w-4xl centered, white card background, subtle border */}
      <div className="max-w-4xl mx-auto px-4 mt-34 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* decorative header: brand bar */}
          <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 px-6 py-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Refund Policy</h1>
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
            
            {/* 1. OVERVIEW */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">1. OVERVIEW</h2>
              <p className="mb-3">AD Life Trust is committed to providing high-quality educational programs under the Bridge to Brilliance initiative. This Refund Policy outlines the terms and conditions governing refund requests for fees paid toward program registration, course enrollment, or any other services offered by AD Life Trust through its Website www.adlifetrust.org.in.</p>
              <p>We encourage all participants to carefully review program details, eligibility criteria, and fee structures before completing payment, as the conditions for refunds are limited.</p>
            </section>
            
            {/* 2. FREE PROGRAMS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">2. FREE PROGRAMS</h2>
              <p>Many Bridge to Brilliance programs are offered free of charge as part of AD Life Trust's social mission to serve marginalized communities. For such programs, no payment is collected, and this Refund Policy does not apply.</p>
            </section>
            
            {/* 3. REGISTRATION / ENROLLMENT FEES */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">3. REGISTRATION / ENROLLMENT FEES</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">3.1 Non-Refundable Registration Fees</h3>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Registration fees, application processing fees, and enrollment confirmation fees, once paid, are strictly NON-REFUNDABLE.</li>
                  <li>These fees cover administrative, coordination, and processing costs incurred at the time of enrollment and are non-recoverable regardless of whether the participant subsequently withdraws, is unable to attend, or fails to meet program requirements.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">3.2 Duplicate Payment</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>If you have been charged twice for the same registration due to a technical error or payment gateway failure, you are entitled to a full refund of the duplicate charge.</li>
                  <li>To claim a duplicate payment refund, contact us within 7 working days of the transaction with payment proof and transaction reference numbers.</li>
                </ul>
              </div>
            </section>
            
            {/* 4. COURSE / PROGRAM FEES */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">4. COURSE / PROGRAM FEES</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">4.1 Cancellation After Program Commencement</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Once a program has commenced, no refund will be issued for withdrawal or discontinuation of participation, regardless of the reason.</li>
                  <li>This applies to both online and offline program formats.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.2 Program Postponement by AD Life Trust</h3>
                <p>If a program is postponed (not cancelled), this will be intimated to the students.</p>
              </div>
            </section>
            
            {/* 5. STUDY MATERIALS AND RESOURCES */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">5. STUDY MATERIALS AND RESOURCES</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Physical study materials (books, kits, or resource packs), once dispatched or collected, are non-refundable.</li>
                <li>Digital study materials, once access is granted, are non-refundable.</li>
                <li>If a material/kit is found to be damaged or incorrect at the time of receipt, notify us within 48 hours of receipt for a replacement. Replacements are subject to availability.</li>
              </ul>
            </section>
            
            {/* 6. DONATIONS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">6. DONATIONS</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Donations made to AD Life Trust are voluntary contributions and are NOT refundable under any circumstances.</li>
                <li>Donation receipts eligible for tax exemption under applicable provisions of Indian law will be issued upon request.</li>
              </ul>
            </section>
            
            {/* 7. HOW TO REQUEST A REFUND */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">7. HOW TO REQUEST A REFUND</h2>
              <p className="mb-3">To initiate a refund request, please follow the steps below:</p>
              <div className="space-y-3">
                <p><span className="font-bold">Step 1:</span> Send an email to director@adlifetrust.org.in with the subject line:</p>
                <p className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm">"REFUND REQUEST — [Your Full Name] — [Program Name]"</p>
                <p><span className="font-bold">Step 2:</span> Include the following details in your email:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name of the registered participant</li>
                  <li>Mobile number and email used during registration</li>
                  <li>Program/course name and batch</li>
                  <li>Transaction ID and date of payment</li>
                  <li>Reason for refund request</li>
                  <li>Bank account details for refund (Account Name, Account Number, IFSC Code, Bank Name)</li>
                </ul>
                <p><span className="font-bold">Step 3:</span> AD Life Trust will acknowledge your request within 3 working days and communicate the outcome within 7 working days.</p>
              </div>
            </section>
            
            {/* 8. REFUND PROCESSING */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">8. REFUND PROCESSING</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Approved refunds will be processed to the original payment source (bank account, UPI, or other method used during payment).</li>
                <li>Refunds will be processed within 7–10 working days of approval.</li>
                <li>AD Life Trust is not responsible for delays caused by banking institutions or payment gateways.</li>
                <li>Transaction charges, if any, levied by the payment gateway at the time of original payment, may be deducted from the refund amount.</li>
              </ul>
            </section>
            
            {/* 9. NON-ELIGIBILITY FOR REFUND */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">9. NON-ELIGIBILITY FOR REFUND</h2>
              <p className="mb-2">Refunds will NOT be granted in the following cases:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Failure to attend the program or course sessions</li>
                <li>Non-completion of program requirements by the participant</li>
                <li>Disqualification or termination due to misconduct or policy violations</li>
                <li>Change of mind after payment, where a valid cancellation window has passed</li>
                <li>Failure to claim a refund within 30 days of the triggering event</li>
                <li>Claims made after the program has concluded</li>
              </ul>
            </section>
            
            {/* 10. SPECIAL CIRCUMSTANCES */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">10. SPECIAL CIRCUMSTANCES</h2>
              <p>AD Life Trust understands that unforeseen circumstances (medical emergencies, bereavement, natural disasters) may arise. Participants facing such situations are encouraged to reach out to us at director@adlifetrust.org.in. While exceptions to this policy cannot be guaranteed, we will review such cases with compassion and on their individual merits.</p>
            </section>
            
            {/* 11. REFUND POLICY SUMMARY TABLE */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">11. REFUND POLICY SUMMARY TABLE</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Fee Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Refund Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Registration / Application Fee</td>
                      <td className="border border-gray-300 px-4 py-2">Non-Refundable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Program postponed by AD Life Trust</td>
                      <td className="border border-gray-300 px-4 py-2">Non Refundable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Duplicate payment (technical error)</td>
                      <td className="border border-gray-300 px-4 py-2">Full Refund of duplicate amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Physical/digital study materials</td>
                      <td className="border border-gray-300 px-4 py-2">Non-Refundable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Donations</td>
                      <td className="border border-gray-300 px-4 py-2">Non-Refundable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* 12. CHANGES TO THIS POLICY */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">12. CHANGES TO THIS POLICY</h2>
              <p>AD Life Trust reserves the right to amend this Refund Policy at any time. Changes will be effective upon posting to our Website. We encourage you to review this Policy before making any payment.</p>
            </section>
            
            {/* 13. CONTACT US */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-3 mb-3">13. CONTACT US</h2>
              <p>For any queries or concerns regarding this Refund Policy, please contact:</p>
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
          {/* <div className="bg-gray-50 px-6 py-3 text-right text-xs text-gray-400 border-t border-gray-100">
            Bridge to Brilliance — Transparency &amp; fair practices
          </div> */}
        </div>
      </div>
    </div>
  );
}