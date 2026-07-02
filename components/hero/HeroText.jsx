"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function HeroText() {
  return (
    <div className="w-full max-w-xl text-center lg:text-left">

      {/* Label */}

      <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
        <div className="h-px w-16 bg-blue-500"></div>

        <p className="text-xs font-medium uppercase tracking-[0.45em] text-blue-400">
          FULL STACK DEVELOPER • CSE STUDENT
        </p>
      </div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="leading-[0.92]"
      >
        <span className="block text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
          TUSHAR
        </span>

        <span className="block bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
          SALAMPURIA
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="mt-8 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg"
      >
        Computer Science student at{" "}
        <span className="font-medium text-white">
          Manipal University Jaipur
        </span>{" "}
        passionate about building AI-powered applications, full-stack products,
        and modern digital experiences. I enjoy transforming ideas into
        intuitive software through thoughtful design and clean engineering.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="
          mt-12
          flex
          flex-col
          items-center
          gap-4

          sm:flex-row
          sm:justify-center

          lg:justify-start
        "
      >
        <Button href="#projects">
          Explore My Work →
        </Button>

        <Button
          href="/resume.pdf"
          variant="secondary"
        >
          Download CV
        </Button>
      </motion.div>

      {/* Small Info */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        className="
          mt-10
          flex
          flex-wrap
          items-center
          justify-center
          gap-6
          text-sm
          text-zinc-500

          lg:justify-start
        "
      >
        
      </motion.div>

    </div>
  );
}