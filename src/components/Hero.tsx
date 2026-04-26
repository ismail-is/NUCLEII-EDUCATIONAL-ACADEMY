import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GridBackground } from "./GridBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <GridBackground />

      <div className="relative z-10 container mx-auto px-5 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-card text-foreground/70 text-xs uppercase tracking-[0.25em] mb-8"
        >
          <Sparkles className="w-3 h-3 text-magenta" />
          <span>Achievers 2026 · Admissions Open</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold leading-[0.95] tracking-tighter text-foreground"
        >
          {["Shape", "the"].map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="inline-block mr-4"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-block text-gradient-pink italic"
          >
            future
          </motion.span>{" "}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-block"
          >
            of every
          </motion.span>
          <br />
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-block"
          >
            <span className="text-gradient-brand">brilliant</span> mind.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
        >
          Nucleii Educational Academy — leading the way in NEET, JEE & KCET excellence.
          Rigorous coaching, expert faculty, student-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform"
          >
            Apply for Admission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-border text-foreground font-medium hover:border-magenta hover:text-magenta transition"
          >
            <PlayCircle className="w-5 h-5" />
            Explore Programmes
          </a>
        </motion.div>

        {/* Trusted ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
            <span>State Rank #6 — Karnataka 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-navy" />
            <span>10+ Campuses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
            <span>3,000+ Students</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
          <span className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
