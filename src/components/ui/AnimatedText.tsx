"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once });

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.25em" }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}
