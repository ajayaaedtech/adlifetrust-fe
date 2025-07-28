"use client";
import React from 'react';

export default function DonationSection() {
    return (
        <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Make a Difference</h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Your support enables us to continue our vital work in the community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Tax Benefits Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                        <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left">
                            <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                                </svg>
                            </div>
                            <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                                <h3 className="text-2xl font-semibold text-white mb-3">Tax Benefits</h3>
                                <p className="text-gray-300 mb-6">
                                    AD Life Trust has 12A registration under Income Tax Act, exempting it from paying taxes on income, we also an eligible institution under 80G for providing tax relief for donations to the AD Life.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start justify-center sm:justify-start">
                                        <svg className="w-5 h-5 mt-0.5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-green-300">100% tax deductible under 80G</span>
                                    </div>
                                    <div className="flex items-start justify-center sm:justify-start">
                                        <svg className="w-5 h-5 mt-0.5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-green-300">Official receipt provided for all donations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Donation Info Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                        <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left">
                            <div className="flex-shrink-0 bg-purple-500/10 p-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                                <h3 className="text-2xl font-semibold text-white mb-3">Donation Process</h3>
                                <p className="text-gray-300 mb-4">
                                    Please drop an email with the details of your contribution (such as screenshot/ transaction details) and your PAN number to enable us to provide you a tax deductible receipt.
                                </p>
                                <div className="bg-gray-900/50 p-4 rounded-lg mb-6">
                                    <p className="text-blue-400 font-mono break-all">adlifetrust@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        {/* Donation Buttons */}
                        <div className="mt-auto md:block hidden">
                            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch justify-center sm:justify-start">
                                <a
                                    href="https://pages.razorpay.com/pl_NIXwYVaXickvmj/view"
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    Donate Now
                                </a>
                                <a
                                    href="mailto:adlifetrust@gmail.com"
                                    className="flex-1 px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300 text-center"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Message */}
                <div className="mt-16 text-center">
                    <p className="text-blue-300 max-w-3xl mx-auto uppercase">
                        Every contribution, no matter the size, helps us create lasting change in the lives of those who need it most.
                    </p>
                </div>
            </div>
        </div>
    );
}
