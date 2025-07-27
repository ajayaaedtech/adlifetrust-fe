import ADLifeProfile from "@/components/ADLifeProfile/ADLifeProfile";
import DonationBanner from "@/components/DonationBanner/DonationBanner";
import DonationSection from "@/components/donationsection/DonationSection";
import Empowerment from "@/components/Empowerment/Empowerment";
import Hero from "@/components/Hero/Hero";
import GandhiQuoteHero from "@/components/Inspirational/Inspirational";
import OurMission from "@/components/OurMission/OurMission";
import ProfileCard from "@/components/profilecard/ProfileCard";
import UpcomingEvent from "@/components/UpcomingEvent/UpcomingEvent";

export default function Home() {
  return (
    <div>
      <Hero/>
      <UpcomingEvent />
      {/* <DonationBanner/> */}
      {/* <Empowerment/> */}
      <ADLifeProfile/>
      
      <GandhiQuoteHero/>
      {/* <OurMission/> */}
      <DonationSection/>
      <ProfileCard/>
    </div>
  );
}
