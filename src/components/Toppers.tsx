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
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="toppers" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* faint section grid */}
      <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />

      <div className="container mx-auto px-5">
        <div className="reveal max-w-3xl">
          <span className="inline-block text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Achievers 2026
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Our PU II <span className="text-gradient-pink italic">Toppers</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Karnataka State Rank #6. Six toppers above 95%. Real results from real
            students who chose Nucleii.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Hero topper card */}
          <motion.div style={{ y: y1 }} className="lg:col-span-5 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-soft group h-[560px] bg-white border border-border">
              <img
                src={chethana}
                alt="Chethana — State 6th Rank"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-pink text-white text-xs font-semibold shadow-glow">
                <Trophy className="w-3.5 h-3.5" /> STATE 6TH RANK
              </div>
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="text-xs uppercase tracking-[0.3em] opacity-80">Karnataka PU Board</div>
                <div className="font-display text-5xl font-bold mt-1">CHETHANA</div>
                <div className="mt-3 text-3xl font-display font-bold text-gradient-pink">
                  594 <span className="text-white/60 text-xl">/ 600</span>
                </div>
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
                className="reveal relative p-7 rounded-2xl bg-white border border-border shadow-card group overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-magenta-soft group-hover:bg-magenta/15 blur-2xl transition" />
                <div className="relative">
                  <Award className="w-6 h-6 text-magenta" />
                  <div className="mt-5 font-display text-2xl font-bold text-foreground">
                    {t.name}
                  </div>
                  <div className="mt-1 text-3xl font-display font-bold text-gradient-pink">
                    {t.score}
                    <span className="text-base text-muted-foreground font-medium"> / 600</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{t.college}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Group banner */}
        <div className="mt-14 reveal rounded-3xl overflow-hidden shadow-soft relative bg-white border border-border">
          <img
            src={toppersImg}
            alt="Top achievers group"
            className="w-full h-[260px] md:h-[420px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/30 to-transparent flex items-center">
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
