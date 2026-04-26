import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Animated grid background with floating brand-color blobs and parallax scroll.
 */
export function GridBackground({ variant = "default" }: { variant?: "default" | "soft" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yBlob1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yBlob3 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Animated grid with parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%]"
      >
        <div className="absolute inset-0 bg-grid mask-radial" />
        <div className="absolute inset-0 bg-grid-pink mask-radial opacity-60" />
      </motion.div>

      {/* Soft floating brand blobs */}
      <motion.div
        style={{ y: yBlob1, animationDelay: "0s" }}
        className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-magenta/15 blur-[120px] animate-pulse-soft"
      />
      <motion.div
        style={{ y: yBlob2, animationDelay: "1.5s" }}
        className="absolute top-[20%] right-[-10%] w-[480px] h-[480px] rounded-full bg-navy/10 blur-[140px] animate-pulse-soft"
      />
      <motion.div
        style={{ y: yBlob3, animationDelay: "3s" }}
        className="absolute bottom-[-15%] left-[30%] w-[520px] h-[520px] rounded-full bg-magenta/10 blur-[160px] animate-pulse-soft"
      />

      {/* Subtle dotted ring decoration */}
      {variant === "default" && (
        <motion.div style={{ y: yBlob1 }}>
          <svg
            className="absolute top-1/4 right-10 w-72 h-72 opacity-30 animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              strokeDasharray="0.5 2"
              className="text-magenta"
            />
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              strokeDasharray="0.5 1.5"
              className="text-navy"
            />
          </svg>
        </motion.div>
      )}

      {/* Top to bottom soft fade for clean handoff */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
