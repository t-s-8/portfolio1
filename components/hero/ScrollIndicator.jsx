"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex h-14 w-8 justify-center rounded-full border border-white/20 p-2">
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
    </motion.div>
  );
}