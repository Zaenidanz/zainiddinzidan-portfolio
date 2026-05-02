"use client";

import Magnetic from "./ui/Magnetic";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 flex justify-center items-center bg-black w-full">
      <Magnetic intensity={0.3}>
        <a href="https://drive.google.com/uc?export=download&id=13yO3M6irnXMHT1ZA2Tcav0LioZLsHcYT" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-full border border-white/20 px-8 py-4 flex items-center justify-center">
          <span className="relative z-10 text-white font-medium tracking-wide uppercase transition-colors duration-300 group-hover:text-black">
            RESUME / CV
          </span>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0 bg-white z-0"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* We can use CSS for the fill animation easily without extra states */}
          <style jsx>{`
            a div {
              transition: height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            }
            a:hover div {
              height: 100%;
            }
          `}</style>
        </a>
      </Magnetic>
    </section>
  );
}
