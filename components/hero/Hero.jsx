"use client";

import { motion } from "framer-motion";

import BackgroundGlow from "../background/BackgroundGlow";
import GridBackground from "../background/GridBackground";

import HeroText from "./HeroText";
import PortraitCard from "./PortraitCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <BackgroundGlow />
      <GridBackground />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

      {/* Hero Content */}

      <div
        className="
          relative z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col-reverse
          items-center
          justify-center

          gap-14

          px-6
          pt-32
          pb-16

          sm:px-8
          md:px-10
          md:gap-16

          lg:flex-row
          lg:justify-between
          lg:gap-20
          lg:px-12

          xl:gap-28
        "
      >
        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="w-full max-w-xl"
        >
          <HeroText />
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: {
              duration: 0.9,
            },
            x: {
              duration: 0.9,
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >
          <PortraitCard />
        </motion.div>
      </div>
    </section>
  );
}