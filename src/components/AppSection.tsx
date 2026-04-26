import {
  Smartphone,
  FileText,
  BookOpenCheck,
  Headphones,
  Download,
  Star,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import appVideo from "@/assets/nucleii/Nucleii-App.mp4";
import { AppDownloadButton } from "./ui/AppDownloadButton";

const features = [
  { icon: BookOpenCheck, label: "Topic-Wise Learning" },
  { icon: FileText, label: "Assignments" },
  { icon: Smartphone, label: "Practice Tests & DPPs" },
  { icon: Headphones, label: "Live Doubt Sessions" },
];

export function AppSection() {
  return (
    <section id="app" className="relative py-16 md:py-24 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid-pink opacity-20 mask-radial -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-magenta/5 blur-[140px] -z-10 animate-pulse-soft" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-navy/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta/10 border border-magenta/20 text-magenta text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            <Smartphone className="w-3.5 h-3.5" />
            Android App Live
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            Your classroom in your <span className="text-gradient-pink italic pr-2">pocket.</span>
          </h2>

          <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg">
            Be part of a growing community of{" "}
            <span className="text-foreground font-semibold">KCET & NEET</span> achievers. Get
            exclusive access to the NUCLEII app and transform your learning journey.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-border shadow-sm hover:shadow-soft hover:border-magenta/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-magenta-soft grid place-items-center group-hover:bg-gradient-pink transition-colors">
                  <f.icon className="w-5 h-5 text-magenta group-hover:text-white transition-colors" />
                </div>
                <span className="font-semibold text-foreground">{f.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <AppDownloadButton />

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-bold overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-bold text-muted-foreground mt-0.5 tracking-wide uppercase">
                  4.9/5 Rating
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:ml-auto w-full max-w-[650px]"
        >
          {/* Main Laptop Wrapper with Ground Shadow */}
          <div className="relative mx-auto w-full group perspective-1000">
            {/* Screen Component */}
            <div className="relative aspect-[16/10] bg-[#1a1a1a] rounded-t-[1.5rem] p-[0.4rem] pb-0 shadow-2xl border-x-[1px] border-t-[1px] border-white/10 ring-1 ring-black/50 overflow-hidden">
              {/* Internal Bezel */}
              <div className="relative w-full h-full rounded-t-[1rem] overflow-hidden bg-black border-[12px] md:border-[16px] border-[#0a0a0a] shadow-inner">
                {/* Webcam */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/5 border border-white/10 z-30 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-blue-500/20" />
                </div>

                {/* Video Content */}
                <div className="relative w-full h-full overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={appVideo} type="video/mp4" />
                  </video>

                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 z-20" />
                </div>
              </div>
            </div>

            {/* Laptop Base (Keyboard Part) */}
            <div className="relative">
              {/* Upper base edge */}
              <div className="relative h-2 w-[104%] -left-[2%] bg-gradient-to-b from-[#e2e2e2] to-[#b5b5b5] rounded-t-sm shadow-sm border-t border-white/40" />

              {/* Main base body */}
              <div className="relative h-4 md:h-5 w-[110%] -left-[5%] bg-gradient-to-b from-[#d1d1d1] via-[#c2c2c2] to-[#999999] rounded-b-2xl shadow-xl border-x border-b border-black/10">
                {/* Thumb notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-black/10 rounded-b-xl shadow-inner" />
              </div>

              {/* Realistic Contact Shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-8 bg-black/20 blur-2xl rounded-full -z-10" />
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-10 -top-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-border shadow-soft flex items-center gap-3 z-30 hidden sm:flex hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-magenta/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-magenta" />
            </div>
            <div>
              <div className="text-lg font-bold text-navy leading-none">3,000+</div>
              <div className="text-[10px] uppercase text-muted-foreground tracking-widest mt-1">
                Active Students
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -right-8 -bottom-2 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-border shadow-soft flex items-center gap-3 z-30 hidden sm:flex hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="text-lg font-bold text-navy leading-none">Live Now</div>
              <div className="text-[10px] uppercase text-muted-foreground tracking-widest mt-1">
                Practice Sessions
              </div>
            </div>
          </motion.div>

          {/* Decorative Background Glows */}
          <div className="absolute -inset-24 bg-gradient-pink blur-[120px] opacity-20 -z-20" />
        </motion.div>
      </div>
    </section>
  );
}
