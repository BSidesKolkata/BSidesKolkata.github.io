import About from "@/components/LandingPage/About";
import HeroSeciton from "@/components/LandingPage/HeroSeciton";
import KeyNoteSpeakers from "@/components/LandingPage/KeyNoteSpeakers";
import OurSpeakers from "@/components/LandingPage/OurSpeakers";
import OverView from "@/components/LandingPage/OverView";
import PassesSection from "@/components/LandingPage/PassesSection";
import Sponsers from "@/components/LandingPage/Sponsers";
import CoreTeams from "@/components/LandingPage/Teams";
import Timeline from "@/components/LandingPage/TimeLine";
import VolunteersTeams from "@/components/LandingPage/Volunteers";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSeciton />
      <OverView />
      <Timeline />
      <About />
      {/* <KeyNoteSpeakers /> */}
      {/* <OurSpeakers /> */}
      <PassesSection />
      <Sponsers />
      <CoreTeams />
      {/* <VolunteersTeams /> */}
    </div>
  );
}
