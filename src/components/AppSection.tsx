import { Smartphone, FileText, BookOpenCheck, Headphones, Download } from "lucide-react";
import { motion } from "framer-motion";
import faculty from "@/assets/faculty-teaching.jpg";

const features = [
  { icon: BookOpenCheck, label: "Topic-Wise Learning" },
  { icon: FileText, label: "Assignments" },
  { icon: Smartphone, label: "Practice Tests & DPPs" },
  { icon: Headphones, label: "Live Doubt Sessions" },
];

export function AppSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pink opacity-40 mask-radial -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-magenta/8 blur-[140px] -z-10" />

      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Android App Live
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Your classroom in your <span className="text-gradient-pink italic">pocket.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Be part of a growing community of KCET & NEET achievers. Get exclusive access to the
            NUCLEII Android App and elevate your learning experience.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-border shadow-card"
              >
                <div className="w-9 h-9 rounded-lg bg-magenta-soft grid place-items-center">
                  <f.icon className="w-4 h-4 text-magenta" />
                </div>
                <span className="font-medium text-foreground">{f.label}</span>
              </motion.div>
            ))}
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=co.jarvis.nucl"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-brand text-white font-semibold hover:scale-105 transition-transform shadow-glow"
          >
            <Download className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Get it on</div>
              <div className="text-lg font-display font-bold leading-none">Google Play</div>
            </div>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-pink blur-3xl opacity-20 -z-10" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border shadow-soft aspect-[4/5] bg-white">
            <img src={faculty} alt="Expert faculty teaching" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-border">
              <div className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Live now</div>
              <div className="mt-1 font-display text-xl font-bold text-foreground">Organic Chemistry · Class XII</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-pink border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+ 1.2k watching</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
