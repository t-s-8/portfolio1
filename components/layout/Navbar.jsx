"use client";

import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Specs", href: "#specifications" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div
        className="
          flex items-center gap-8
          rounded-full
          border border-white/10
          bg-black/35
          px-7 py-3
          backdrop-blur-3xl
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* Logo */}

        <motion.a
          href="#home"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-blue-500/20
            bg-gradient-to-br
            from-blue-500/20
            to-transparent
            font-bold
            text-white
          "
        >
          TS
        </motion.a>

        {/* Links */}

        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="
                group
                relative
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                text-zinc-300
                transition-all
                duration-300
                hover:bg-white/5
                hover:text-white
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-blue-400
                  transition-all
                  duration-300
                  group-hover:w-5
                "
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}