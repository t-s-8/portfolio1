"use client";

import { motion } from "framer-motion";

export default function SpecificationCard({
  title,
  items,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <p className="mb-6 text-sm uppercase tracking-[0.35em] text-blue-400">
        {title}
      </p>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="border-b border-white/10 pb-3 text-xl text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}