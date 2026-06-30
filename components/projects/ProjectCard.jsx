"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  live,
  github,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: .35 }}
      className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Screenshot */}

      <div className="relative aspect-[16/9] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />

      </div>

      <div className="p-10">

        <p className="text-xs uppercase tracking-[0.4em] text-blue-400">
          FEATURED BUILD
        </p>

        <h3 className="mt-4 text-4xl font-semibold">
          {title}
        </h3>

        <p className="mt-6 max-w-2xl text-zinc-400 leading-8">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex gap-5">

          <a
            href={live}
            className="rounded-full bg-white px-6 py-3 text-black"
          >
            Live Demo
          </a>

          <a
            href={github}
            className="rounded-full border border-white/10 px-6 py-3"
          >
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
}