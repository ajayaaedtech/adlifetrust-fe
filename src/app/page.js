
"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import ADLifeProfile from "@/components/ADLifeProfile/ADLifeProfile";
import BloodBankLanding from "@/components/BloodBankLanding";
import DonationBanner from "@/components/DonationBanner/DonationBanner";
import DonationSection from "@/components/donationsection/DonationSection";
import Empowerment from "@/components/Empowerment/Empowerment";
import Hero from "@/components/Hero/Hero";
import GandhiQuoteHero from "@/components/Inspirational/Inspirational";
import MindOverMilesHero from "@/components/MindOverMilesHero/MindOverMilesHero";
import ProfileCard from "@/components/profilecard/ProfileCard";
import ReelShowcase from "@/components/ReelShowcase";
import UpcomingEvent from "@/components/UpcomingEvent/UpcomingEvent";

function HomeContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 🩹 Fix scroll to section after navigation from another page
  // 🩹 Scroll fix for hash navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            // ✅ Always scroll to the top of the element
            const yOffset = -100; // adjust if navbar height differs
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 400);
        }
      }
    }
  }, [pathname, searchParams]);
  return (
    <main className="overflow-x-hidden">
      {/* ❤️ Blood Bank Drive Section */}
      <section id="blood-bank">
        <BloodBankLanding />
      </section>

      {/* 💖 Donation Banner */}
      <DonationBanner />

      {/* 🧠 Mind Over Miles Hero */}
      <MindOverMilesHero />

      {/* 🎥 Reels Showcase */}
      <ReelShowcase
        videos={[
          "https://firebasestorage.googleapis.com/v0/b/for-pic-storages.appspot.com/o/addlifetrust-reels%2Freel-one.mp4?alt=media&token=b27a5db6-f3fc-4d22-a78a-74a724bfda8b",
          "https://firebasestorage.googleapis.com/v0/b/for-pic-storages.appspot.com/o/addlifetrust-reels%2Freel-two.mp4?alt=media&token=78264621-b7fe-43cd-a6f4-d85bd872e3d6",
        ]}
      />

      {/* 👩‍⚕️ AD Life Profile */}
      <ADLifeProfile />

      {/* 🕊️ Gandhi Quote */}
      <GandhiQuoteHero />

      {/* 💸 Donation Section */}
      <DonationSection />

      {/* 🙌 Profile Card */}
      <ProfileCard />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}