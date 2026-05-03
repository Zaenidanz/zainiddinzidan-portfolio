"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let finishTimer: NodeJS.Timeout;
    let completeTimer: NodeJS.Timeout;

    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const nextProgress = prev + Math.floor(Math.random() * 15) + 5;
        
        if (nextProgress >= 100) {
          clearInterval(interval);
          finishTimer = setTimeout(() => {
            setIsFinished(true);
            completeTimer = setTimeout(() => {
              onCompleteRef.current();
            }, 1000);
          }, 300);
          return 100;
        }
        return nextProgress;
      });
    }, 120);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black text-white"
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
