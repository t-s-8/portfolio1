"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

export default function ProjectShowcase({
  title,
  subtitle,
  description,
  tech,
  image,
  github,
  live,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
    >
      <GlassCard className="overflow-hidden">

        <div className="grid lg:grid-cols-2">

          <div className="relative aspect-video lg:aspect-auto min-h-[450px]">

            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />

          </div>

          <div className="flex flex-col justify-center p-12">

            <p className="text-blue-400 uppercase tracking-[0.35em] text-xs">
              {subtitle}
            </p>

            <h3 className="mt-4 text-5xl font-bold">
              {title}
            </h3>

            <p className="mt-8 leading-8 text-zinc-400">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

            <div className="mt-10 flex gap-4">

              <Button
                href={live}
              >
                Live Demo
              </Button>

              <Button
                href={github}
                variant="secondary"
              >
                GitHub
              </Button>

            </div>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}