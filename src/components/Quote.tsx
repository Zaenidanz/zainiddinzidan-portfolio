"use client";

import Magnetic from "./ui/Magnetic";

export default function Quote() {
  return (
    <section className="py-40 bg-black text-white flex justify-center items-center px-6">
      <div className="max-w-3xl text-center">
        <h3 className="text-2xl md:text-4xl font-medium leading-relaxed tracking-tight text-secondary mb-12">
          "Hoping AI doesn't take over my job... but also hoping it finishes my
          code.."
        </h3>
        <Magnetic intensity={0.2}>
          <div className="inline-block cursor-default text-sm tracking-widest uppercase text-muted">
            — Zainiddin Zidan, probably
          </div>
        </Magnetic>
      </div>
    </section>
  );
}
