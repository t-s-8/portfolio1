"use client";

import { motion } from "framer-motion";
import SpecificationCard from "./SpecificationCard";

const specs = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "Java", "C++"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export default function Specifications() {
  return (
    <section
      id="specifications"
      className="relative bg-black py-36"
    >
      <div className="mx-auto max-w-7xl px-8">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.5em] text-blue-400"
        >
          SPECIFICATIONS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-bold md:text-7xl"
        >
          Built for modern software.
        </motion.h2>

        <p className="mt-8 max-w-2xl text-xl text-zinc-400">
          The technologies I rely on to design, develop,
          and deploy modern digital experiences.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {specs.map((spec) => (
            <SpecificationCard
              key={spec.title}
              {...spec}
            />
          ))}
        </div>

      </div>
    </section>
  );
}