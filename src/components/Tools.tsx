"use client";

import { motion } from "framer-motion";

const tools = [
  "Tailwind",
  "AstroJS",
  "ElysiaJS",
  "Bun",
  "HTML",
  "CSS",
  "VSCode",
  "Python",
  "NextJS",
];

export default function Tools() {
  const repeatedTools = [...tools, ...tools, ...tools]; // Repeat for seamless loop

  return (
    <section className="py-32 w-full overflow-hidden bg-black text-white">
      <div className="max-w-[1000px] mx-auto mb-16 px-6">
        <h2 className="text-secondary text-sm tracking-wider uppercase mb-8">
          Tools & Technologies
        </h2>
      </div>

      <div className="relative flex whitespace-nowrap overflow-hidden group">
        <motion.div
          className="flex space-x-12 md:space-x-24 px-12 md:px-24"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          style={{ width: "fit-content" }}
        >
          {/* Pause on hover achieved via CSS peer or group-hover applied to motion div? Framer motion doesn't natively pause via CSS unless we use animation-play-state. Let's use Tailwind for pause. */}
          {repeatedTools.map((tool, index) => (
            <div
              key={index}
              className="group/item flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <span className="text-4xl md:text-6xl font-bold tracking-tighter opacity-50 group-hover/item:opacity-100 transition-opacity">
                {tool}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Global hover pause overlay or using raw CSS for pause */}
        <style jsx>{`
          .group:hover div {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    </section>
  );
}
