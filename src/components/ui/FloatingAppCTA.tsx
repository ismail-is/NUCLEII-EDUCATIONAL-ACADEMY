import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.9 }}
          className="fixed bottom-8 left-8 z-[100] hidden md:block"
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-magenta to-navy rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative flex items-center gap-4 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-border shadow-2xl">
              <button
                onClick={() => setIsDismissed(true)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm transition-colors"
              >
                <X className="w-3 h-3" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center relative overflow-hidden shadow-sm border border-border group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 512 512"
                  className="w-8 h-8 relative z-10"
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
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-white/20 rounded-full"
                />
              </div>

              <div>
                <div className="text-xs font-bold text-magenta uppercase tracking-wider">
                  Nucleii Android App
                </div>
                <div className="text-sm font-bold text-navy mt-0.5">Study anytime, anywhere.</div>
                <a
                  href="https://play.google.com/store/apps/details?id=co.jarvis.nucl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-black text-magenta hover:underline mt-1"
                >
                  GET IT ON GOOGLE STORE →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
