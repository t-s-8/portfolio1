"use client";

import BackgroundGlow from "../background/BackgroundGlow";
import HeroText from "./HeroText";
import PortraitCard from "./PortraitCard";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Glow */}
      <BackgroundGlow />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-20 px-8 pt-28 lg:flex-row lg:justify-center lg:gap-28 lg:px-12">

        {/* Left */}
        <HeroText />

        {/* Right */}
        <PortraitCard />

      </div>

      {/* Scroll Mouse */}
      <ScrollIndicator />

    </section>
  );
}