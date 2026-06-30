"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [

  {

    icon: Mail,

    title: "Email",

    value: "salampuriatushar8521@gmail.com",

    href: "mailto:salampuriatushar8521@gmail.com",

  },

  {

    icon: FaGithub,

    title: "GitHub",

    value: "github.com/t-s-8",

    href: "https://github.com/t-s-8",

  },

  {

    icon: FaLinkedin,

    title: "LinkedIn",

    value: "linkedin.com/in/tushar-salampuria-0b9a3b300",

    href: "https://linkedin.com/in/tushar-salampuria-0b9a3b300",

  },

  {

    icon: Download,

    title: "Resume",

    value: "Download Resume",

    href: "/resume.pdf",

  },

];

export default function Contact() {
  return (
    <Section id="contact">

      <SectionTitle
        eyebrow="LET'S CONNECT"
        title="Let's build something meaningful."
        description="Whether it's an internship, freelance project, collaboration or simply a conversation about technology, I'm always happy to connect."
      />

      <div className="mt-20 grid gap-6 md:grid-cols-2">

        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="flex items-center justify-between p-8 transition hover:border-blue-500/30">

                <div>

                  <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                    {item.title}
                  </p>

                  <p className="mt-3 text-xl text-white">
                    {item.value}
                  </p>

                </div>

                <Icon
                  size={28}
                  className="text-blue-400"
                />

              </GlassCard>
            </motion.a>
          );
        })}

      </div>

    </Section>
  );
}