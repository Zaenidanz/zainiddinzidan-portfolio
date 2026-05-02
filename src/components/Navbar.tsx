"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Magnetic from "./ui/Magnetic";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center text-sm uppercase tracking-wider text-secondary mix-blend-difference">
      <div className="flex items-center">
        <Magnetic>
          <a href="#" className="hover:text-white transition-colors py-2 px-4 cursor-pointer inline-block">
            Zainiddin Zidan
          </a>
        </Magnetic>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <Magnetic>
          <a href="#about" className="hover:text-white transition-colors py-2 px-4 cursor-pointer inline-block">
            About
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#projects" className="hover:text-white transition-colors py-2 px-4 cursor-pointer inline-block">
            Projects
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#contact" className="hover:text-white transition-colors py-2 px-4 cursor-pointer inline-block">
            Contact
          </a>
        </Magnetic>
        <Magnetic>
          <div className="py-2 px-4 cursor-pointer inline-block hover:text-white transition-colors">
            {time}
          </div>
        </Magnetic>
      </div>
    </nav>
  );
}
