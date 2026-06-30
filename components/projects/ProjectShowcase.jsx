"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

export default function ProjectShowcase({
  title,
  subtitle,
  description,
  features,
  tech,
  image,
  github,
  live,
  reverse,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <GlassCard className="overflow-hidden">

        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}

          <div className="relative min-h-[500px] overflow-hidden">

            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-10 lg:p-14">

            <p className="text-xs uppercase tracking-[0.4em] text-blue-400">
              {subtitle}
            </p>

            <h3 className="mt-5 text-5xl font-bold leading-tight lg:text-7xl">
              {title}
            </h3>

            <p className="mt-8 leading-8 text-zinc-400">
              {description}
            </p>

            {/* Features */}

            <div className="mt-10 space-y-4">

              {features?.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400" />

                  <span>{feature}</span>
                </div>
              ))}

            </div>

            {/* Tech Stack */}

            <div className="mt-10 flex flex-wrap gap-3">

              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">

              <Button href={live}>
                Live Demo →
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