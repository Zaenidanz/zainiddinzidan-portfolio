"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollStory() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.2"],
  });

  const text =
    "I primarily focus on Web Development. I love creating intuitive and visually appealing stuff like this.";
  const words = text.split(" ");

  return (
    <section ref={container} className="relative py-40 min-h-screen flex items-center justify-center bg-black" id="about">
      <div className="max-w-[1000px] px-6 mx-auto text-center sticky top-1/3">
        <p className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            return (
              <motion.span key={i} style={{ opacity }} className="text-white">
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
