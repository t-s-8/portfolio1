"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center bg-black"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Eyebrow */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs font-medium uppercase tracking-[0.5em] text-blue-400"
        >
          WHY I BUILD
        </motion.p>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Creating software that people genuinely enjoy using.
        </motion.h2>

        {/* Paragraph 1 */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-4xl text-xl leading-9 text-zinc-400 md:text-2xl"
        >
          I started programming with curiosity, but I stayed because I realized
          software can solve real problems and create meaningful experiences.
          From building platforms that simplify open-source contributions to
          developing AI-powered applications, every project teaches me how to
          write cleaner code, think deeper about users, and build products that
          make an impact.
        </motion.p>

        {/* Paragraph 2 */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-8 max-w-4xl text-lg leading-8 text-zinc-500 md:text-xl"
        >
          Today, I am focused on full-stack development, artificial intelligence,
          and continuously improving as a software engineer. I am actively
          looking for opportunities where I can contribute, learn from
          experienced developers, and build products used by real people.
        </motion.p>

      </div>
    </section>
  );
}