// app/activities/mental-health/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ChevronDown, Heart, Award, Trophy, Camera, CalendarCheck } from "lucide-react";
import ReelShowcase from "@/components/ReelShowcase";
import MentalHealthGallery from "./MentalHealthGallary";
import OurPartners from "@/components/ourpartner/OurPartners";
import {
  MEDIA_PARTNERS,
} from "../../../components/ourpartner/data/partners";
export default function MentalHealthPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="bg-white text-slate-900">

      {/* 🔥 CINEMATIC HERO (PAST EVENT STYLE) */}
      <section className="mt-28 relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mind_over_miles_bg.jpg"
            alt="Mind Over Miles 2025 Highlights"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-orange-400 text-orange-400 font-bold text-xs uppercase tracking-[0.3em] bg-orange-400/10 backdrop-blur-sm">
              Event Concluded • Nov 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter"
          >
            MIND OVER  <span className="text-orange-500 italic">MILES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            Mind Over Miles 2025 was more than a run—it was Hyderabad's loudest statement for mental health.
          </motion.p>

        </div>
      </section>

      {/* 📊 THE AFTERMATH (STATS) */}
      <section className="relative -mt-12 z-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <CalendarCheck />, label: "Date", val: "09/11/2025" },
            { icon: <MapPin />, label: "Vanue", val: " Gachibowli Stadium" },
            { icon: <Heart />, label: "Lives Touched", val: "10k+" },
            { icon: <Trophy />, label: "Distance", val: "10 km" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 text-center"
            >
              <div className="text-orange-500 flex justify-center mb-2">{item.icon}</div>
              <p className="text-2xl font-black text-slate-800">{item.val}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 THE SUCCESS STORY */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-widest mb-4 italic underline decoration-2 underline-offset-8">A Look Back</h2>
            <h6 className="text-md md:text-xl font-extrabold leading-tight mb-8">
              Our journey starts with Mind Over Miles — a
              pilot run event dedicated to raising
              awareness around mental health. This isn’t
              just a run; it’s a movement. At the heart of
              this initiative lies a powerful message: that
              the strength of the mind can carry us
              through any distance
            </h6>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                On November 9th, Gachibowli Stadium. Professionals, students, and families came together to break the silence surrounding mental health.
              </p>
              <p>
                With <strong>expert psychologists</strong> on ground and a <strong>10K Running</strong> designed for mindfulness, we didn't just track steps—we tracked smiles and breakthroughs.
              </p>
            </div>
          </motion.div>
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image src="/mentalhealth/group-photo-event.jpg" alt="Event Highlights" fill unoptimized className="object-cover" />
          </div>
        </div>
      </section>

      {/* 🖼️ THE GALLERY (BENTO GRID) */}

      <MentalHealthGallery />

      <section>
        <ReelShowcase
          videos={[
            "https://firebasestorage.googleapis.com/v0/b/for-pic-storages.appspot.com/o/addlifetrust-reels%2Freel-one.mp4?alt=media&token=b27a5db6-f3fc-4d22-a78a-74a724bfda8b",
            "https://firebasestorage.googleapis.com/v0/b/for-pic-storages.appspot.com/o/addlifetrust-reels%2Freel-two.mp4?alt=media&token=78264621-b7fe-43cd-a6f4-d85bd872e3d6",
          ]}
        />
      </section>

      {/* 📰 MEDIA RECOGNITION */}
      <section className="py-32 px-6">
        {/* Corporate */}
        <OurPartners
          partners={MEDIA_PARTNERS}
          title="Media Partners"
          bg="bg-white-50"

        />


      </section>



    </main>
  );
}