"use client";

import { motion } from "framer-motion";

export default function TimelineItem({
  year,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative border-l border-blue-500/30 pl-8 pb-14"
    >
      <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-blue-400" />

      <p className="text-blue-400 text-sm uppercase tracking-[0.4em]">
        {year}
      </p>

      <h3 className="mt-3 text-3xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 max-w-xl leading-8 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}