"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import { Mail, Download, MapPin } from "lucide-react";
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
    value: "t-s-8",
    href: "https://github.com/t-s-8",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Tushar Salampuria",
    href: "https://linkedin.com/in/tushar-salampuria-0b9a3b300",
  },
  {
    icon: Download,
    title: "Resume",
    value: "Download CV",
    href: "/resume.pdf",
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      {/* Availability Badge */}

      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-sm font-medium text-green-300">
            Available for Software Engineering Internships
          </span>
        </div>
      </div>

      <SectionTitle
        eyebrow="LET'S CONNECT"
        title="Let's create something exceptional."
        description="I'm currently looking for software engineering internships, exciting collaborations, and opportunities to build impactful digital products. If you'd like to work together, I'd love to hear from you."
      />

      {/* Location */}

      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2 text-zinc-400">
          <MapPin size={18} />
          <span>Jaipur, Rajasthan, India</span>
        </div>
      </div>

      {/* Cards */}

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <GlassCard
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-blue-500/30
                  hover:bg-white/[0.05]
                "
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                    {item.title}
                  </p>

                  <p className="mt-3 text-xl font-medium text-white">
                    {item.value}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition group-hover:scale-110 group-hover:border-blue-500/30">
                  <Icon
                    size={26}
                    className="text-blue-400"
                  />
                </div>
              </GlassCard>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}