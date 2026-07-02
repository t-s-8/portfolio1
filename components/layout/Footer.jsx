"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">

        {/* Left */}

        <div className="text-center md:text-left">

          <h3 className="text-xl font-semibold text-white">
            Tushar Salampuria
          </h3>

          <p className="mt-2 text-zinc-400">
            Full Stack Developer • Computer Science Student
          </p>

        </div>

        {/* Center */}

        <p className="text-center text-sm text-zinc-500">
          Designed & Developed by Tushar Salampuria
          <br />
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* Right */}

        <div className="flex items-center gap-4">

          <motion.a
            whileHover={{
              y: -3,
              scale: 1.1,
            }}
            href="https://github.com/t-s-8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-blue-500/30"
          >
            <FaGithub
              size={20}
              className="text-white"
            />
          </motion.a>

          <motion.a
            whileHover={{
              y: -3,
              scale: 1.1,
            }}
            href="https://linkedin.com/in/tushar-salampuria-0b9a3b300"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-blue-500/30"
          >
            <FaLinkedin
              size={20}
              className="text-white"
            />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}