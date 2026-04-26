import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface AppDownloadButtonProps {
  className?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md";
}

export function AppDownloadButton({
  className = "",
  variant = "primary",
  size = "md",
}: AppDownloadButtonProps) {
  const isSm = size === "sm";

  return (
    <motion.a
      href="https://play.google.com/store/apps/details?id=co.jarvis.nucl"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative overflow-hidden flex items-center gap-3 transition-all duration-300 ${
        isSm ? "px-5 py-2.5 rounded-full" : "px-8 py-4 rounded-2xl"
      } ${
        variant === "primary"
          ? "bg-gradient-to-r from-magenta via-navy to-magenta bg-[length:200%_auto] hover:bg-[right_center] text-white shadow-glow"
          : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
      } ${className}`}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

      {/* Animated Glow behind icon */}
      <div
        className={`absolute top-1/2 left-8 -translate-y-1/2 bg-magenta/30 blur-xl rounded-full group-hover:bg-magenta/50 transition-colors duration-500 ${isSm ? "w-6 h-6" : "w-12 h-12"}`}
      />

      <div
        className={`relative z-10 rounded-xl bg-white group-hover:scale-110 transition-transform shadow-sm ${isSm ? "p-1" : "p-1.5"}`}
      >
        <svg
          viewBox="0 0 512 512"
          className={`${isSm ? "w-5 h-5" : "w-7 h-7"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5 17.5C29.6 20.3 28 24.6 28 29.8v452.3c0 5.2 1.6 9.5 4.5 12.3L35.4 497L270.6 261.8v-11.6L35.4 15L32.5 17.5z"
            fill="#00c6ff"
          />
          <path
            d="M349.5 340.6l-78.9-78.8v-11.6l78.9-78.8l3.4 1.9L440.4 225c24.6 14.1 24.6 37.1 0 51.1l-87.5 50.1l-3.4 14.4z"
            fill="#ffeb3b"
          />
          <path
            d="M352.9 342.5L270.6 260.2l-235.2 235.2c4.1 4.3 10.9 4.8 18.7.4l298.8-153.3z"
            fill="#ff3d00"
          />
          <path
            d="M352.9 169.5L54.1 16.2C46.3 11.8 39.5 12.3 35.4 16.6l235.2 235.2l82.3-82.3z"
            fill="#4caf50"
          />
        </svg>
      </div>

      <div className="relative z-10 text-left">
        <div
          className={`${isSm ? "text-[8px]" : "text-[10px]"} uppercase tracking-[0.2em] opacity-80 leading-none mb-0.5 font-bold`}
        >
          Download on
        </div>
        <div
          className={`${isSm ? "text-xs" : "text-lg"} font-display font-black leading-none tracking-tight flex items-center gap-1`}
        >
          Google Play
          <motion.span animate={{ x: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Download className={`${isSm ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} opacity-60`} />
          </motion.span>
        </div>
      </div>

      {/* Decorative border animation */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-500" />
    </motion.a>
  );
}
