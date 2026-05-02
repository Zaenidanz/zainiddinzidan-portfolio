"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import Tools from "@/components/Tools";
import CTA from "@/components/CTA";
import Works from "@/components/Works";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <div className="bg-black min-h-screen relative">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <ScrollStory />
      <Tools />
      <CTA />
      <Works />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}
