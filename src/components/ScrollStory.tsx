"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollStory() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const text =
    "I primarily focus on web development, with a passion for building clean, intuitive, and visually engaging digital experiences. I enjoy not just creating things that look good, but also understanding how they work behind the scenes. From experimenting with new technologies to refining small details in UI and performance, I'm always looking for ways to improve and learn. For me, development isn't just about writing code, it's about solving problems, exploring ideas, and turning them into something real.";
  const words = text.split(" ");

  return (
    <section id="about" className="relative h-[350vh] min-h-[3000px] w-full bg-black">
      {/* Invisible absolute track so Framer Motion measures exactly this container's dimensions without sticky interference */}
      <div ref={container} className="absolute inset-0 w-full h-full pointer-events-none" />
      
      <div className="sticky top-0 h-[100vh] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="max-w-[1100px] text-center w-full">
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug md:leading-tight tracking-tight flex flex-wrap justify-center gap-x-1.5 gap-y-1 md:gap-x-3 md:gap-y-2">
            {words.map((word, i) => {
              // 30% safe zone means the first 30% and last 30% of scrolling does nothing.
              // With h-[350vh], 30% is over 100vh. It's impossible to start before sticking or unstick before finishing.
              const safeZone = 0.30;
              const range = 1 - safeZone * 2;
              
              const start = safeZone + (i / words.length) * range;
              const end = start + (1 / words.length) * range;
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
              return (
                <motion.span key={i} style={{ opacity }} className="text-white">
                  {word}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
