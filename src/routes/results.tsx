import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Award, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/useReveal";
import chethana from "@/assets/nucleii/chethana.jpeg";
import toppers from "@/assets/nucleii/toppers.jpeg";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Achievers — Nucleii Educational Academy" },
      { name: "description", content: "Karnataka State Rank #6. Meet the Nucleii achievers — top scorers in NEET, JEE and Karnataka PU II 2026." },
      { property: "og:title", content: "Our Toppers & Achievers — Nucleii" },
      { property: "og:description", content: "Real results from real students who chose Nucleii Educational Academy." },
    ],
  }),
  component: ResultsPage,
});

const achievers = [
  { name: "Chethana", score: "594", rank: "STATE 6TH RANK", college: "Vijaya PU, Kunigal", tier: "gold" },
  { name: "Inchara Y", score: "582", college: "Vijaya PU, Kunigal" },
  { name: "Navyashree", score: "582", college: "Vijaya PU, Kunigal" },
  { name: "Divya C", score: "582", college: "SMGH Jain, Indiranagar" },
  { name: "Akshaya", score: "579", college: "Sai Vidya Nidhi, H-Cross" },
  { name: "Jaswanth KR", score: "575", college: "Vijaya PU, Kunigal" },
  { name: "Karthik S", score: "572", college: "Vijaya PU, Kunigal" },
  { name: "Bharath N", score: "546", college: "SMGH Jain, Indiranagar" },
  { name: "Suhas KS", score: "560", college: "SMGH Jain, Indiranagar" },
];

const stats = [
  { value: "94.7%", label: "Average Top-Tier Score" },
  { value: "9", label: "Above 95%" },
  { value: "#6", label: "State Rank Karnataka" },
  { value: "100%", label: "Pass Rate" },
];

function ResultsPage() {
  useReveal();
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Achievers 2026"
        title={<>Our <span className="text-gradient-pink italic">Aluminies</span></>}
        description="Karnataka State Rank #6. Nine students above 95%. Real results from real students who chose Nucleii."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Results" }]}
      />

      {/* Stats strip */}
      <section className="relative pb-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-card text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-brand">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero topper */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pink opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-12 gap-6 items-stretch"
          >
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-soft border border-border bg-white aspect-[4/3] lg:aspect-auto">
              <img src={chethana} alt="Chethana — State 6th Rank" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-pink text-white text-xs font-semibold shadow-glow">
                <Trophy className="w-3.5 h-3.5" /> STATE 6TH RANK
              </div>
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="text-xs uppercase tracking-[0.3em] opacity-80">Karnataka PU Board 2026</div>
                <div className="font-display text-5xl md:text-6xl font-bold mt-2">CHETHANA</div>
                <div className="mt-3 text-3xl font-display font-bold text-gradient-pink">
                  594 <span className="text-white/60 text-xl">/ 600</span>
                </div>
                <div className="text-sm opacity-70 mt-1">Vijaya PU College, Kunigal</div>
              </div>
            </div>

            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="p-7 rounded-2xl bg-gradient-brand text-white shadow-glow flex flex-col justify-between">
                <Trophy className="w-8 h-8" />
                <div>
                  <div className="font-display text-4xl font-bold">99%</div>
                  <div className="mt-2 text-sm opacity-80">Highest aggregate scored by a Nucleii student in PU II 2026.</div>
                </div>
              </div>
              <div className="p-7 rounded-2xl bg-white border border-border shadow-card flex flex-col justify-between">
                <Award className="w-8 h-8 text-magenta" />
                <div>
                  <div className="font-display text-4xl font-bold text-foreground">5+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Students cleared NEET / KCET cut-offs from a single batch.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toppers grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <div className="reveal max-w-2xl mb-12">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">Top Achievers</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              The class of <span className="text-gradient-pink italic">2026</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievers.slice(1).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-2xl bg-white border border-border shadow-card hover:shadow-soft overflow-hidden transition-shadow"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-magenta-soft group-hover:bg-magenta/15 blur-2xl transition" />
                <div className="relative">
                  <Award className="w-6 h-6 text-magenta" />
                  <div className="mt-5 font-display text-2xl font-bold text-foreground">{t.name}</div>
                  <div className="mt-1 text-3xl font-display font-bold text-gradient-pink">
                    {t.score}<span className="text-base text-muted-foreground font-medium"> / 600</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{t.college}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group banner CTA */}
      <section className="relative py-16">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl overflow-hidden shadow-soft border border-border bg-white aspect-[16/8] md:aspect-[16/6]"
          >
            <img src={toppers} alt="Top achievers" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/40 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-md text-white">
                <div className="text-xs uppercase tracking-[0.3em] opacity-80">Be next</div>
                <div className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
                  Your name belongs <span className="text-gradient-pink italic">here</span>.
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy font-semibold hover:scale-105 transition-transform shadow-glow"
                >
                  Apply for Admission <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
