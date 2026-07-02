"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-white text-black hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]",

    secondary:
      "border border-white/10 bg-white/5 text-white hover:border-blue-500/40 hover:bg-white/10",
  };

  return (
    <motion.a
      href={href}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        px-8
        py-4
        font-semibold
        transition-all
        duration-500
        ${styles[variant]}
      `}
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      {/* Button Text */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}