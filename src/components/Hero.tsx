import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ThreeBackground } from "./ThreeBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero noise"
    >
      <ThreeBackground />
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-magenta/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan/20 blur-[140px]" />

      <div className="relative z-10 container mx-auto px-5 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/90 text-xs uppercase tracking-[0.25em] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-magenta animate-glow-pulse" />
          Achievers 2026 · Now Enrolling
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold leading-[0.95] tracking-tighter text-white"
        >
          {"Shape the".split(" ").map((w, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
              className="inline-block mr-4"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-block text-gradient italic"
          >
            future
          </motion.span>{" "}
          <motion.span
            variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-block"
          >
            of every
          </motion.span>
          <br />
          <motion.span
            variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-block"
          >
            <span className="text-gradient-magenta">brilliant</span> mind.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-white/70 leading-relaxed"
        >
          Nucleii Educational Academy — leading the way in NEET, JEE & KCET excellence.
          Built on rigorous coaching, expert faculty and a student-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-magenta text-magenta-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform"
          >
            Apply for Admission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition"
          >
            <PlayCircle className="w-5 h-5" />
            Explore Courses
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
          <span className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
