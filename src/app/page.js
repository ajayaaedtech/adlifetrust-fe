import ADLifeProfile from "@/components/ADLifeProfile/ADLifeProfile";
import DonationBanner from "@/components/DonationBanner/DonationBanner";
import DonationSection from "@/components/donationsection/DonationSection";
import Empowerment from "@/components/Empowerment/Empowerment";
import Hero from "@/components/Hero/Hero";
import GandhiQuoteHero from "@/components/Inspirational/Inspirational";
import MindOverMilesHero from "@/components/MindOverMilesHero/MindOverMilesHero";
import ProfileCard from "@/components/profilecard/ProfileCard";
import ReelShowcase from "@/components/ReelShowcase";
import UpcomingEvent from "@/components/UpcomingEvent/UpcomingEvent";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <UpcomingEvent /> */}
      {/* <DonationBanner/> */}
      {/* <Empowerment/> */}
      <MindOverMilesHero />
      {/* <ReelShowcase
        videos={[
          "/videos/reel1.mp4",
          "/videos/reel2.mp4"
        ]}
      />       */}
      <ReelShowcase
        videos={[
          "https://firebasestorage.googleapis.com/v0/b/for-pic-storages.appspot.com/o/addlifetrust-reels%2Freel-one.mp4?alt=media&token=b27a5db6-f3fc-4d22-a78a-74a724bfda8b",
          "https://firebasestorage.googleapis.com/v0/b/for-pic-storages.appspot.com/o/addlifetrust-reels%2Freel-two.mp4?alt=media&token=78264621-b7fe-43cd-a6f4-d85bd872e3d6"
        ]}
      />
      <ADLifeProfile />
      <GandhiQuoteHero />
      <DonationSection />
      <ProfileCard />
    </div>
  );
}
