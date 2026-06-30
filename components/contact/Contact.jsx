"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <Section id="contact" className="min-h-screen flex items-center">

      <div className="max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.5em] text-blue-400"
        >
          LES BUILD
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-6 text-6xl font-bold leading-tight md:text-8xl"
        >
          Something
          <br />
          Meaningful.
        </motion.h2>

        <p className="mt-10 max-w-2xl text-xl leading-9 text-zinc-400">
          Whether it is a project, internship, collaboration or simply a
          conversation about technology, I would love to hear from you.
        </p>

        <div className="mt-14 flex flex-wrap gap-5">

          <Button href="mailto:your@email.com">
            Email Me
          </Button>

          <Button
            href="https://github.com/"
            variant="secondary"
          >
            GitHub
          </Button>

          <Button
            href="https://linkedin.com/"
            variant="secondary"
          >
            LinkedIn
          </Button>

        </div>

      </div>

    </Section>
  );
}