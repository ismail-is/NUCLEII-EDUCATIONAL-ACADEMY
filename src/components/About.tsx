import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import img from "@/assets/nucleii/image.png";

const points = [
  "Experienced faculty with proven NEET / JEE / KCET results",
  "Personalised doubt-clearing & weekly assessments",
  "PU integrated track — no double burden",
  "Live mentoring + Android app support",
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />

      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-pink blur-3xl opacity-15 -z-10" />
          <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/5] bg-white border border-border">
            <img
              src={img}
              alt="Faculty teaching"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white rounded-2xl p-5 shadow-soft border border-border max-w-[220px]">
            <div className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">
              Since
            </div>
            <div className="font-display text-4xl font-bold text-foreground">2014</div>
            <div className="text-sm text-muted-foreground mt-1">
              Years of nurturing rank-holders
            </div>
          </div>
        </motion.div>

        <div className="reveal">
          <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Our Faculty & Approach
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Beyond traditional learning,{" "}
            <span className="text-gradient-pink italic pr-4">designed</span> for rank.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We are committed to delivering quality education across multiple regions, offering
            diverse learning opportunities for students from all backgrounds. Through seminars,
            events, and personalised guidance — we help students achieve academic excellence in
            NEET, JEE and KCET.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-magenta mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
