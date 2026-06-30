"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function PortraitCard() {
  // -------------------------------
  // Rotation
  // -------------------------------

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
  });

  // -------------------------------
  // Reflection
  // -------------------------------

  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);

  const smoothLightX = useSpring(lightX, {
    stiffness: 180,
    damping: 20,
  });

  const smoothLightY = useSpring(lightY, {
    stiffness: 180,
    damping: 20,
  });

  const reflection = useMotionTemplate`
    radial-gradient(
      circle at ${smoothLightX}% ${smoothLightY}%,
      rgba(255,255,255,0.22),
      transparent 35%
    )
  `;

  // -------------------------------
  // Mouse
  // -------------------------------

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateY.set(((x - width / 2) / width) * 12);
    rotateX.set(-((y - height / 2) / height) * 12);

    lightX.set((x / width) * 100);
    lightY.set((y / height) * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);

    lightX.set(50);
    lightY.set(50);
  };

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformPerspective: 1600,
        }}
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 22,
        }}
        className="relative"
      >
        {/* Glow */}

        <motion.div
          className="absolute -inset-8 rounded-[50px] bg-blue-500/20 blur-[90px]"
          style={{
            x: smoothRotateY,
            y: smoothRotateX,
          }}
        />

        {/* Card */}

        <div className="relative h-[560px] w-[380px] overflow-hidden rounded-[42px] border border-blue-500/20 bg-white/[0.03] backdrop-blur-xl">

          {/* Image */}

          <Image
            src="/profile/portrait.png"
            alt="Tushar"
            fill
            priority
            className="object-cover transition-transform duration-700"
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Cursor Reflection */}

          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: reflection,
            }}
          />

          {/* Glass Shine */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          {/* Border */}

          <div className="absolute inset-0 rounded-[42px] border border-white/10" />

          {/* Text */}

          <div className="absolute bottom-8 left-8">

            <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
              AVAILABLE
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-white">
              For Internships
            </h2>

            <p className="mt-2 text-zinc-300">
              Full Stack Developer • CSE Student
            </p>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}