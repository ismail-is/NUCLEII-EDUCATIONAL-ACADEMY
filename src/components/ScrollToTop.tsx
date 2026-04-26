import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-border shadow-soft text-magenta hover:bg-magenta hover:text-white transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
            <div className="absolute inset-0 bg-magenta/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
