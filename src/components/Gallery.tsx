import { motion } from "framer-motion";
import success from "@/assets/gallery-success.jpg";
import students from "@/assets/students-classroom.jpg";
import faculty from "@/assets/faculty-teaching.jpg";
import bangalore from "@/assets/campus-bangalore.jpg";
import topperGroup from "@/assets/topper-group.jpg";
import kunigal from "@/assets/campus-kunigal.jpg";

const items = [
  { img: success, span: "row-span-2" },
  { img: students, span: "" },
  { img: faculty, span: "" },
  { img: topperGroup, span: "row-span-2" },
  { img: bangalore, span: "" },
  { img: kunigal, span: "" },
];

export function Gallery() {
  return (
    <section className="relative py-28 md:py-36 bg-secondary/40">
      <div className="container mx-auto px-5">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
              Some of our moments
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
              The <span className="text-gradient-magenta italic">Nucleii</span> way
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
              className={`relative group rounded-2xl overflow-hidden shadow-card ${it.span}`}
            >
              <img
                src={it.img}
                alt="Nucleii moment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
