import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Award, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/useReveal";
import chethana from "@/assets/nucleii/chethana.jpeg";
import toppers from "@/assets/nucleii/toppers.jpeg";
import topper1 from "@/assets/nucleii/topper-1.png";
import topper2 from "@/assets/nucleii/topper-2.png";
import topper3 from "@/assets/nucleii/topper-3.png";
import topper4 from "@/assets/nucleii/topper-4.png";
import topper5 from "@/assets/nucleii/topper-5.png";
import topper6 from "@/assets/nucleii/topper-6.png";
import topper7 from "@/assets/nucleii/topper-7.png";
import topper8 from "@/assets/nucleii/topper-8.png";
import { Users, GraduationCap, Briefcase, Star, Sparkles } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Achievers — Nucleii Educational Academy" },
      {
        name: "description",
        content:
          "Karnataka State Rank #6. Meet the Nucleii achievers — top scorers in NEET, JEE and Karnataka PU II 2026.",
      },
      { property: "og:title", content: "Our Toppers & Achievers — Nucleii" },
      {
        property: "og:description",
        content: "Real results from real students who chose Nucleii Educational Academy.",
      },
    ],
  }),
  component: ResultsPage,
});

const achievers = [
  {
    name: "Chethana",
    score: "594",
    rank: "STATE 6TH RANK",
    college: "Vijaya PU, Kunigal",
    tier: "gold",
  },
  { name: "Inchara Y", score: "582", college: "Vijaya PU, Kunigal" },
  { name: "Navyashree", score: "582", college: "Vijaya PU, Kunigal" },
  { name: "Divya C", score: "582", college: "SMGH Jain, Indiranagar" },
  { name: "Akshaya", score: "579", college: "Sai Vidya Nidhi, H-Cross" },
  { name: "Jaswanth KR", score: "575", college: "Vijaya PU, Kunigal" },
  { name: "Karthik S", score: "572", college: "Vijaya PU, Kunigal" },
  { name: "Bharath N", score: "546", college: "SMGH Jain, Indiranagar" },
  { name: "Suhas KS", score: "560", college: "SMGH Jain, Indiranagar" },
];

const neetAchievers = [
  { name: "Prakruthi", course: "Ayurveda", college: "SDM Medical College Hassan", image: topper1 },
  {
    name: "Bhumika",
    course: "Ayurveda",
    college: "Karnataka Ayurveda Medical College",
    image: topper2,
  },
  {
    name: "Adarsh N.V",
    course: "MBBS",
    college: "Kodagu Institute of Medical Science",
    image: topper3,
  },
  { name: "Vignesh .M", course: "MBBS", college: "ESIC Medical College Bangalore", image: topper4 },
  {
    name: "Sireesha",
    course: "MBBS",
    college: "Kodagu Institute of Medical Science",
    image: topper5,
  },
  {
    name: "Sudarshan Das R",
    course: "MBBS",
    college: "Kodagu Institute of Medical Science",
    image: topper6,
  },
  {
    name: "Naveen Kumar M.R.",
    course: "MBBS",
    college: "KVG Medical College-Sullia",
    image: topper7,
  },
  {
    name: "Vishnu Teja .A",
    course: "MBBS",
    college: "Karwar Institute of Medical College",
    image: topper8,
  },
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
        title={
          <>
            Our <span className="text-gradient-pink italic pr-2">Alumni</span>
          </>
        }
        description="Karnataka State Rank #6. Nine students above 95%. Real results from real students who chose Nucleii."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Results" }]}
      />

      {/* Stats strip */}
      <section className="relative pb-8">
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
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-brand">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero topper */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pink opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-12 gap-6 items-stretch"
          >
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-white group">
              <img
                src={chethana}
                alt="Chethana — State 6th Rank Karnataka PU Board 2026 - 594/600"
                className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-white group">
              <img
                src={toppers}
                alt="Chethana — State 6th Rank Karnataka PU Board 2026 - 594/600"
                className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toppers grid */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <div className="reveal max-w-2xl mb-12">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
              Top Achievers
            </span>
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
      </section>

      {/* NEET Achievers Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-navy/5">
        <div className="absolute inset-0 bg-grid-pink opacity-10 mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> Medical Dreams Realized
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              NEET & <span className="text-gradient-pink italic">Medical</span> Achievers
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our students have secured placements in prestigious medical colleges across India.
              Witness the results of hard work, dedication, and expert mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {neetAchievers.map((student, i) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-full overflow-hidden aspect-square bg-white shadow-soft border-4 border-white group-hover:border-magenta/40 transition-all duration-500 max-w-[240px] mx-auto">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="mt-6 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-magenta-soft text-magenta text-[10px] font-bold uppercase tracking-wider mb-2">
                    {student.course}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-magenta transition-colors">
                    {student.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 px-4 leading-snug">
                    {student.college}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-navy p-10 md:p-20 text-center"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pink opacity-20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-magenta/20 blur-[120px] rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] mb-8"
              >
                <Sparkles className="w-4 h-4 text-magenta" /> Future Achievers 2027
              </motion.div>

              <h2 className="font-display text-4xl md:text-7xl font-bold text-white leading-tight">
                Your journey to <span className="text-gradient-pink italic">excellence</span> starts
                here.
              </h2>

              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Join the ranks of state toppers and medical achievers. Our next batch for NEET & JEE
                2027 is now open for admissions.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-pink text-white font-bold text-lg hover:scale-105 transition-all shadow-glow flex items-center justify-center gap-3"
                >
                  Start Your Success Story <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Explore Programs
                </Link>
              </div>
            </div>

            {/* Floating UI elements for "Creativity" */}
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 hidden lg:block"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-magenta/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-magenta" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-white/50 uppercase">Next Rank</div>
                    <div className="text-white font-bold">STATE #1</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 hidden lg:block"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-white/50 uppercase">Success Rate</div>
                    <div className="text-white font-bold">100% PASS</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
