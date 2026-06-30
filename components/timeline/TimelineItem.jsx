"use client";

import { motion } from "framer-motion";

export default function TimelineItem({
  year,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-b border-white/10 py-12"
    >
      <div className="grid gap-8 lg:grid-cols-[180px_1fr]">

        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
            {year}
          </p>
        </div>

        <div>

          <h3 className="text-3xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
            {description}
          </p>

        </div>

      </div>
    </motion.div>
  );
}