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
    <section className="relative py-28 md:py-36 overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full bg-magenta/20 blur-[140px]" />

      <div className="relative container mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Android App Live
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Your classroom in your <span className="text-gradient-magenta italic">pocket.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-lg">
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
                className="flex items-center gap-3 px-4 py-3 rounded-xl glass"
              >
                <f.icon className="w-5 h-5 text-magenta" />
                <span className="font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=co.jarvis.nucl"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white text-primary font-semibold hover:scale-105 transition-transform shadow-glow"
          >
            <Download className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">Get it on</div>
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
          <div className="absolute inset-0 bg-gradient-magenta blur-3xl opacity-40 -z-10" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-deep aspect-[4/5]">
            <img src={faculty} alt="Expert faculty teaching" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">Live now</div>
              <div className="mt-1 font-display text-xl font-bold">Organic Chemistry · Class XII</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0,1,2].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-magenta border-2 border-primary" />
                  ))}
                </div>
                <span className="text-sm text-white/70">+ 1.2k watching</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
