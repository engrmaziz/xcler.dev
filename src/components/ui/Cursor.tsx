"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function Cursor() {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handlePointerChange = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const computed = window.getComputedStyle(target).cursor;
      setIsPointer(computed === "pointer");
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handlePointerChange);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handlePointerChange);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ duration: 0, ease: "linear" }}
      >
        <div className="w-2 h-2 rounded-full bg-[#E8FF00]" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: x - (isPointer ? 24 : 16),
          y: y - (isPointer ? 24 : 16),
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div
          className={`rounded-full border border-[#E8FF00]/50 transition-all duration-150 ${
            isPointer ? "w-12 h-12" : "w-8 h-8"
          }`}
        />
      </motion.div>
    </>
  );
}
