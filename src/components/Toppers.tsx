import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";
import topper1 from "@/assets/topper-1.jpg";
import topperGroup from "@/assets/topper-group.jpg";

const toppers = [
  { name: "Inchara Y", score: "582 / 600", college: "Vijaya PU" },
  { name: "Navyashree", score: "582 / 600", college: "Vijaya PU" },
  { name: "Jaswanth KR", score: "575 / 600", college: "Vijaya PU" },
  { name: "Karthik S", score: "572 / 600", college: "Vijaya PU" },
  { name: "Akshaya", score: "579 / 600", college: "Sai Vidya Nidhi" },
  { name: "Divya C", score: "582 / 600", college: "SMGH Jain" },
];

export function Toppers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="toppers" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="reveal max-w-3xl">
          <span className="inline-block text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Achievers 2026
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Our PU II <span className="text-gradient-magenta italic">Toppers</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Karnataka State Rank #6. Six toppers above 95%. Real results from real
            students who chose Nucleii.
          </p>
        </div>

        {/* Hero topper card */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-stretch">
          <motion.div style={{ y: y1 }} className="lg:col-span-5 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-deep group h-[560px]">
              <img
                src={topper1}
                alt="Chethana — State 6th Rank"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-magenta text-white text-xs font-semibold shadow-glow">
                <Trophy className="w-3.5 h-3.5" /> STATE 6TH RANK
              </div>
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="text-sm uppercase tracking-[0.3em] opacity-80">Karnataka PU Board</div>
                <div className="font-display text-5xl font-bold mt-1">CHETHANA</div>
                <div className="mt-3 text-3xl font-display font-bold text-gradient-magenta">594 / 600</div>
                <div className="text-sm opacity-70 mt-1">Vijaya PU College, Kunigal</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 content-stretch">
            {toppers.map((t, i) => (
              <motion.div
                key={t.name}
                style={{ y: i % 2 === 0 ? y2 : y1 }}
                whileHover={{ y: -6 }}
                className="reveal relative p-7 rounded-2xl bg-card border border-border shadow-card group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-magenta/10 group-hover:bg-magenta/20 blur-2xl transition" />
                <div className="relative">
                  <Award className="w-7 h-7 text-magenta group-hover:text-white transition" />
                  <div className="mt-5 font-display text-2xl font-bold group-hover:text-white transition">
                    {t.name}
                  </div>
                  <div className="mt-1 text-3xl font-display font-bold text-gradient-magenta group-hover:text-white transition">
                    {t.score}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground group-hover:text-white/80 transition">
                    {t.college}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 reveal rounded-3xl overflow-hidden shadow-deep relative">
          <img
            src={topperGroup}
            alt="Top achievers group"
            className="w-full h-[260px] md:h-[420px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-md text-white">
              <div className="text-xs uppercase tracking-[0.3em] opacity-80">Class of 2026</div>
              <div className="mt-2 font-display text-3xl md:text-5xl font-bold leading-tight">
                Excellence isn't a moment. It's a method.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
