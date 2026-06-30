"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-white text-black",

    secondary:
      "border border-white/10 bg-white/5 text-white",
  };

  return (
    <motion.a
      href={href}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: .98,
      }}
      className={`inline-flex rounded-full px-8 py-4 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </motion.a>
  );
}