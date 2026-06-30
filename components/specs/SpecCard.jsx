"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

export default function SpecCard({
  title,
  description,
  items,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: .35,
      }}
    >
      <GlassCard className="h-full p-8">

        <p className="text-xs uppercase tracking-[0.4em] text-blue-400">
          {title}
        </p>

        <p className="mt-4 text-zinc-400">
          {description}
        </p>

        <div className="mt-10 space-y-4">

          {items.map((item) => (
            <div
              key={item}
              className="border-b border-white/10 pb-3 text-lg"
            >
              {item}
            </div>
          ))}

        </div>

      </GlassCard>
    </motion.div>
  );
}