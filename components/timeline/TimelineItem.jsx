"use client";

import { motion } from "framer-motion";

export default function TimelineItem({
  year,
  title,
  description,
  isLast,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
      }}
      className="relative flex gap-10"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">

        {/* Dot */}

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-70" />

          <div className="relative h-5 w-5 rounded-full border-4 border-blue-500 bg-black" />

        </div>

        {/* Line */}

        {!isLast && (
          <div className="mt-3 h-full w-px bg-gradient-to-b from-blue-500 via-blue-400/40 to-transparent" />
        )}

      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        className="
          mb-16
          w-full
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
          transition
        "
      >
        <p className="text-sm font-semibold tracking-[0.35em] text-blue-400">
          {year}
        </p>

        <h3 className="mt-4 text-3xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          {description}
        </p>

      </motion.div>
    </motion.div>
  );
}