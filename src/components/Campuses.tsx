import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import bangalore from "@/assets/campus-bangalore.jpg";
import kunigal from "@/assets/campus-kunigal.jpg";
import students from "@/assets/students-classroom.jpg";
import success from "@/assets/gallery-success.jpg";

const campuses = [
  { name: "Indiranagar", city: "Bangalore", img: bangalore },
  { name: "Horamavu", city: "Bangalore", img: students },
  { name: "Vijaya PU", city: "Kunigal", img: kunigal },
  { name: "Namakkal", city: "Tamil Nadu", img: success },
  { name: "Bagalkot", city: "Karnataka", img: bangalore },
  { name: "Kundapura", city: "Udupi", img: kunigal },
  { name: "H-Cross", city: "Karnataka", img: students },
  { name: "Mysore", city: "Karnataka", img: success },
  { name: "Narsapur", city: "Andhra Pradesh", img: bangalore },
  { name: "Kolar", city: "Karnataka", img: kunigal },
];

export function Campuses() {
  return (
    <section id="campuses" className="relative py-28 md:py-36">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <div className="reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
              Our Reach
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
              Integrated <span className="text-gradient-magenta italic">campuses</span> across India
            </h2>
          </div>
          <p className="reveal text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Karnataka · Tamil Nadu</span> — At Nucleii
            we deliver quality education across regions, offering diverse learning opportunities through
            experienced faculty, integrated coaching and a student-focused approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {campuses.map((c, i) => (
            <motion.div
              key={c.name + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card cursor-pointer"
            >
              <img
                src={c.img}
                alt={`${c.name} campus`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute inset-0 bg-magenta/0 group-hover:bg-magenta/20 transition-colors duration-500" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] opacity-80">
                  <MapPin className="w-3 h-3" /> {c.city}
                </div>
                <div className="mt-1 font-display text-2xl font-bold leading-tight">
                  {c.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
