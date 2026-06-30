"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center bg-black"
    >
      <div className="mx-auto max-w-7xl px-8">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-xs uppercase tracking-[0.5em] text-blue-400"
        >
          INTRODUCING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          className="mt-6 text-6xl font-bold text-white md:text-8xl"
        >
          TUSHAR 1.0
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-12 max-w-3xl text-2xl leading-relaxed text-zinc-400"
        >
          Designed in Jaipur.
          <br />
          Engineered with curiosity.
          <br />
          Built to solve real-world problems through elegant software.
        </motion.p>

      </div>
    </section>
  );
}