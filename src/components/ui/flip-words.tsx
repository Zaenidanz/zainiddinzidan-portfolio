"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
      mode="wait"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -10,
          position: "absolute",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={cn(
          "z-10 inline-block relative text-center w-full",
          className
        )}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: wordIndex * 0.03,
              duration: 0.3,
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
