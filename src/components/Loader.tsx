"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 1000); // Wait for exit animation
        }, 300);
      }
      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      initial={{ y: 0 }}
      animate={{ y: isFinished ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-6xl md:text-8xl font-semibold tracking-tighter">
        {progress}%
      </div>
    </motion.div>
  );
}
