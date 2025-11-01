"use client";
import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Heart,
  Shield,
} from "lucide-react";
import Image from "next/image";
import ReverseCountdown from "../ReverseCountdown";

const OrangeHunRun = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="w-full">
      {/* 🔸 Header Section */}
      <div className="w-full py-4 px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Left empty */}
          <div></div>

          {/* Center Button */}
          <div className="flex justify-center my-4 md:my-0">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white rounded-full text-lg font-semibold shadow-lg animate-bounce">
              <Heart className="w-5 h-5 fill-white" />
              <span className="uppercase tracking-widest">Upcoming Event</span>
            </div>
          </div>

          {/* Right Logos */}
          <div className="flex justify-center md:justify-end items-center gap-3">
            <div className="p-1 bg-white rounded-full flex items-center justify-center shadow border border-gray-100">
              <Image
                src="/logo.png"
                width={70}
                height={70}
                alt="AdLife Trust Logo"
                className="object-contain"
              />
            </div>
            <div className="p-1 bg-white rounded-full flex items-center justify-center shadow border border-gray-100">
              <Image
                src="/orangehublogo.png"
                width={60}
                height={60}
                alt="Orange Hub Logo"
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>

      {/* 🔸 Body Section */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12 px-4 sm:px-6">
        <ReverseCountdown />
        <div className="max-w-5xl mx-auto text-center mb-12 mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-800 leading-tight mb-4">
            Mind Over Miles 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join Hyderabad&apos;s premier running event supporting mental health
            awareness.
          </p>
        </div>

        {/* 🔸 Main Card */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">
          {/* Left Image */}
          <div className="hidden md:block md:w-1/3 relative overflow-hidden">
            <Image
              src="/run.png"
              fill
              alt="Runners"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 z-20 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Join the Movement</h2>
              <p className="text-sm opacity-90">
                Every step supports mental health awareness
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 p-1 flex flex-col">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Run for Wellness
              </h2>
              <p className="text-sm text-gray-600">
                Organized by{" "}
                <span className="text-red-700 font-bold">AdLife Trust</span> &{" "}
                <span className="text-orange-400 font-bold">
                  Orange Hub Events
                </span>
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center font-extrabold border-b border-gray-200 mb-6">
              {["info", "details", "register"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-bold ${activeTab === tab
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {tab === "info"
                    ? "Event Info"
                    : tab === "details"
                      ? "Details"
                      : "Register"}
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <div className="flex-1">
              {activeTab === "info" && (
                <div className="flex flex-col min-h-[300px] justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 text-orange-500" />
                      <div>
                        <p className="font-bold">
                          Sunday, 9th November 2025
                        </p>
                        <p className="text-sm text-gray-500 font-bold">
                          06:00 AM - 11:00 AM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                      <div>
                        <p className="font-bold">Gachibowli Stadium</p>
                        <p className="text-sm text-gray-500 font-bold">
                          Hyderabad, Telangana
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-gray-700">
                        Run, jog, or walk — every step breaks stigma and supports
                        mental health.
                      </p>
                    </div>
                  </div>

                  {/* ✅ Always last button */}
                  <div className="bg-orange-500 p-4 rounded-lg mt-6">
                    <p className="text-md text-center text-white font-semibold">
                      Every Step Counts For You, For Us For Mental Health
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (<div className="space-y-1"> {/* Intro Section (Replaces Race Categories) */} <div className="bg-orange-50 p-6 rounded-lg shadow border-l-4 border-orange-500"> <h3 className="text-xl font-semibold text-orange-800 mb-3"> Our Launch in Hyderabad </h3> <p className="text-gray-700 text-sm leading-relaxed"> We are thrilled to launch our journey in the vibrant city of Hyderabad, Telangana, where we are proud to unveil our inaugural event—a dynamic and high-energy run event that embodies the spirit of community, health, and celebration. <br /><br /> This pilot initiative reflects the energy, passion, and community-driven spirit that defines Orange Hub Events. </p> </div> {/* What's Included */} <div className="bg-white p-6 rounded-lg shadow border border-gray-200"> <h3 className="font-semibold text-gray-800 mb-4 flex items-center text-lg"> <Shield className="w-5 h-5 mr-2 text-orange-500" /> What&apos;s Included </h3> <ul className="text-sm text-gray-700 space-y-3"> <li className="flex items-start"> <span className="text-orange-500 mr-2 text-lg">•</span> <span>High-quality event T-shirt & Finisher medal for all participants</span> </li> <li className="flex items-start"> <span className="text-orange-500 mr-2 text-lg">•</span> <span>Refreshments and hydration stations along the route</span> </li> </ul> </div> {/* Quote & Image */} <div className="flex flex-col md:flex-row items-center justify-between bg-blue-900 text-white rounded-lg p-6 gap-6 shadow-md"> <Image width={100} height={100} src="/runner.png" alt="Runners" className="h-24 object-contain" /> <blockquote className="text-center md:text-right font-semibold text-xl md:text-2xl leading-snug"> “Fueling Aspirations,<br /> Creating Celebrations.” </blockquote> </div> </div>)}

              {activeTab === "register" && (
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">
                    Ready to Run?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Join hundreds of participants supporting mental health
                    awareness
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg border border-orange-100">
                      <h4 className="font-medium text-orange-700 text-sm">
                        10 KM Run
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Timed race with professional timing chips
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 text-sm">
                        5 KM Run/Walk
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Family-friendly run/walk for everyone
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://orangehub.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-orange-500 to-blue-600 text-white text-center font-semibold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                  >
                    Register Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangeHunRun;
