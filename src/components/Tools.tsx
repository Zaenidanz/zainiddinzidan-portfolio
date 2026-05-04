"use client";

import { motion } from "framer-motion";

import { tools } from "../data/tools";

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
          className="flex space-x-16 md:space-x-32 px-16 md:px-32 items-center"
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
              title={tool.name}
              className="group/item flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div 
                className="w-16 h-16 md:w-24 md:h-24 [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain"
                dangerouslySetInnerHTML={{ __html: tool.svg }}
              />
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
