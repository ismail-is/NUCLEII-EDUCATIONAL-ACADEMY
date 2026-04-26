import { motion } from "framer-motion";
import g1 from "@/assets/nucleii/gallery1.jpeg";
import g2 from "@/assets/nucleii/gallery2.jpeg";
import g3 from "@/assets/nucleii/gallery3.jpeg";
import g4 from "@/assets/nucleii/gallery4.jpeg";
import g5 from "@/assets/nucleii/gallery5.jpeg";
import g6 from "@/assets/nucleii/gallery6.jpeg";

const items = [
  { img: g1, span: "row-span-2" },
  { img: g2, span: "" },
  { img: g3, span: "" },
  { img: g4, span: "row-span-2" },
  { img: g5, span: "" },
  { img: g6, span: "" },
];

export function Gallery() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft opacity-50 -z-10" />
      <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />

      <div className="container mx-auto px-5">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
              Some of our moments
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
              The <span className="text-gradient-pink italic">Nucleii</span> way
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Behind every rank there's a community — late-night study sessions, encouraging
            mentors, and friendships built on a shared ambition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group rounded-2xl overflow-hidden shadow-card hover:shadow-soft bg-white border border-border transition-shadow ${it.span}`}
            >
              <img
                src={it.img}
                alt="Nucleii moment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
