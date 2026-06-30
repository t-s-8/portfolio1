"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[42px] bg-blue-500/15 blur-3xl"></div>

      {/* Card */}

      <div className="relative h-[560px] w-[380px] overflow-hidden rounded-[42px] border border-blue-500/20 bg-white/[0.03] backdrop-blur-xl">

        <Image
          src="/profile/portrait.png"
          alt="Tushar"
          fill
          priority
          className="object-cover transition duration-700 hover:scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Text */}

        <div className="absolute bottom-8 left-8">

          <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
            AVAILABLE
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            For Internships
          </h2>

          <p className="mt-2 text-zinc-300">
            Full Stack Developer • CSE Student
          </p>

        </div>

      </div>
    </motion.div>
  );
}