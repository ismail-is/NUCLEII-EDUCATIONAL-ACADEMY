import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";
import chethana from "@/assets/nucleii/chethana.jpeg";
import toppersImg from "@/assets/nucleii/toppers.jpeg";

const toppers = [
  { name: "Inchara Y", score: "582", college: "Vijaya PU, Kunigal" },
  { name: "Navyashree", score: "582", college: "Vijaya PU, Kunigal" },
  { name: "Jaswanth KR", score: "575", college: "Vijaya PU, Kunigal" },
  { name: "Karthik S", score: "572", college: "Vijaya PU, Kunigal" },
  { name: "Akshaya", score: "579", college: "Sai Vidya Nidhi" },
  { name: "Divya C", score: "582", college: "SMGH Jain" },
];

export function Toppers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="toppers"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-background/50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-sm opacity-20 mask-radial -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-magenta/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-5">
        {/* Header Section - Now Centered */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta/10 text-magenta text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 border border-magenta/20">
              <Award className="w-3 h-3 md:w-4 md:h-4" />
              Achievers 2026
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight"
          >
            Our PU II <span className="text-gradient-pink italic pr-4">Toppers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Karnataka State Rank #6. Six toppers above 95%. Real results from real students who
            chose <span className="text-foreground font-semibold">Nucleii</span> to excel in their
            academic journey.
          </motion.p>
        </div>

        {/* Images Grid - Perfectly Aligned and Balanced */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Main Hero Poster */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-full"
          >
            <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 bg-white dark:bg-zinc-900 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(219,39,119,0.2)]">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden">
                <img
                  src={chethana}
                  alt="Chethana — State 6th Rank"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center">
                  <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">Chethana</h3>
                  <p className="text-magenta font-semibold text-lg">Karnataka State Rank #6</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-magenta/20 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-magenta" />
                  <span className="font-bold text-magenta text-sm">STATE RANK #6</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Group Poster */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-full"
          >
            <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 bg-white dark:bg-zinc-900 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.2)]">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden">
                <img
                  src={toppersImg}
                  alt="Nucleii Toppers Group"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center">
                  <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">Class of 2026</h3>
                  <p className="text-blue-400 font-semibold text-lg">Setting New Benchmarks</p>
                </div>
              </div>

              <div className="absolute top-6 left-6">
                <div className="bg-blue-600/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-blue-400/20 flex items-center gap-2 text-white">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-sm">95%+ ACHIEVERS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Individual Toppers Grid */}
      </div>
    </section>
  );
}
