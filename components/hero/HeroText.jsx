"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl text-center lg:text-left"
    >
      {/* Label */}

      <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
        <div className="h-px w-16 bg-blue-500"></div>

        <p className="text-xs font-medium uppercase tracking-[0.5em] text-blue-400">
          CRAFTING DIGITAL EXPERIENCES
        </p>
      </div>

      {/* Heading */}

      <h1 className="leading-[0.88]">
        <span className="block text-5xl font-light md:text-6xl">
          TUSHAR
        </span>

        <span className="block text-6xl font-bold md:text-7xl">
          SALAMPURIA
        </span>
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-md text-base leading-8 text-zinc-400 lg:text-lg">
        Computer Science student passionate about building beautiful,
        performant and interactive web experiences using modern technologies.
      </p>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
        >
          View Projects →
        </motion.a>

        <motion.a
          href="/resume.pdf"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition hover:border-blue-500/40"
        >
          Resume
        </motion.a>
      </div>
    </motion.div>
  );
}