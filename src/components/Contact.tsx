"use client";

import Magnetic from "./ui/Magnetic";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-40 bg-black text-white flex flex-col items-center justify-center text-center px-6" id="contact">
      <div className="max-w-[800px] mb-16">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
          LET'S MAKE SOMETHING GREAT
        </h2>
        <p className="text-secondary text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
          Have an idea or a project in mind? Let's talk about it. Always open to new opportunities and interesting collaborations.
        </p>
      </div>

      <Magnetic intensity={0.2}>
        <a
          href="mailto:zainiddinzidan62@gmail.com"
          className="group relative overflow-hidden rounded-full bg-white px-10 py-5 flex items-center justify-center text-black font-semibold text-lg hover:bg-gray-200 transition-colors"
        >
          <div className="relative overflow-hidden h-[1.5em] flex items-center">
            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
              CONTACT ME
            </span>
            <span className="absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
              CONTACT ME
            </span>
          </div>
        </a>
      </Magnetic>
    </section>
  );
}
