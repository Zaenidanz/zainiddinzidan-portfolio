"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
  const marqueeText = "FRONTEND DEVELOPER - LINUX ENTHUSIAST - CTF PLAYER - ";
  const repeatCount = 4;

  const marqueeContent = Array(repeatCount).fill(marqueeText).join("");
  const words = [
    "I'm a student at Vocational High School 1 Gedangan.",
    "I'm an intern at ID-Grow by Clavata Extra Sukses Malang.",
  ];

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Top Marquee (Moves Left) */}
      <div className="absolute top-[20%] w-[120%] flex whitespace-nowrap opacity-20 rotate-[-2deg] pointer-events-none">
        <motion.div
          className="text-6xl md:text-8xl font-bold tracking-tighter"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeContent}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-4xl px-4 mt-auto mb-auto mix-blend-difference text-white flex flex-col items-center justify-center">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-snug md:leading-tight mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Hi, I'm Zainiddin Zidan, a Linux enthusiast studying Network Information Systems and Applications.
        </motion.h1>

        <div className="relative min-h-[60px] md:min-h-[40px] flex items-center justify-center w-full">
          <FlipWords 
            words={words} 
            duration={3000} 
            className="text-secondary text-lg md:text-xl font-medium tracking-wide" 
          />
        </div>
      </div>

      {/* Bottom Marquee (Moves Right) */}
      <div className="absolute bottom-[20%] w-[120%] flex whitespace-nowrap opacity-20 rotate-[2deg] pointer-events-none">
        <motion.div
          className="text-6xl md:text-8xl font-bold tracking-tighter"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeContent}
        </motion.div>
      </div>
    </section>
  );
}
