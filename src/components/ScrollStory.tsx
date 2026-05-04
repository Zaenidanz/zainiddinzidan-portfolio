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
    "I primarily focus on web development, with a passion for building clean, intuitive, and visually engaging digital experiences. I enjoy not just creating things that look good, but also understanding how they work behind the scenes. From experimenting with new technologies to refining small details in UI and performance, I'm always looking for ways to improve and learn. For me, development isn't just about writing code, it's about solving problems, exploring ideas, and turning them into something real.";
  const words = text.split(" ");

  return (
    <section ref={container} className="relative py-40 h-[200vh] min-h-screen flex items-start justify-center bg-black" id="about">
      <div className="max-w-[1100px] px-6 mx-auto text-center sticky top-[20vh] md:top-[25vh]">
        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight flex flex-wrap justify-center gap-x-2 gap-y-1 md:gap-x-3 md:gap-y-2">
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
