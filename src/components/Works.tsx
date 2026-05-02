"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  { name: "dxctf-web", link: "https://github.com/Zaenidanz/dxctf-web" },
  { name: "SmartAttendanceQuiz", link: "https://github.com/Zaenidanz/SmartAttendanceQuiz" },
];

export default function Works() {
  return (
    <section className="relative py-32 w-full bg-black flex flex-col justify-center overflow-hidden" id="projects">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] font-bold text-white opacity-5 tracking-tighter whitespace-nowrap">
          MY WORKS
        </h2>
      </div>

      <div className="max-w-[1000px] w-full mx-auto px-6 z-10">
        <div className="flex flex-col border-t border-white/20">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-12 border-b border-white/20 transition-colors duration-500 hover:bg-white text-white hover:text-black px-4 md:px-8"
            >
              <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-8">
                {project.name}
              </h3>
              <div className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-8 group-hover:scale-75">
                <ArrowUpRight size={48} strokeWidth={1} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
