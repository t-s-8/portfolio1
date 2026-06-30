"use client";

import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl shadow-lg shadow-black/30">

        <div className="font-bold tracking-widest text-white">
          TS
        </div>

        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}