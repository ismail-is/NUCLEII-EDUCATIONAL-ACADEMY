import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, GraduationCap } from "lucide-react";
import indiranagar from "@/assets/nucleii/campus-indiranagar.png";
import bangalore2 from "@/assets/nucleii/campus-bangalore2.jpg";
import kunigal from "@/assets/nucleii/campus-kunigal.jpg";
import namakkal from "@/assets/nucleii/campus-namakkal.jpg";
import bagalkot from "@/assets/nucleii/campus-bagalkot.png";
import kundapura from "@/assets/nucleii/campus-kundapura.png";
import hcross from "@/assets/nucleii/campus-hcross.jpg";
import mysore from "@/assets/nucleii/campus-mysore.jpg";
import narsapur from "@/assets/nucleii/campus-narsapur.png";
import kolar from "@/assets/nucleii/campus-kolar.png";

const campuses = [
  { name: "Indiranagar", city: "Bangalore", img: indiranagar, featured: true },
  { name: "Horamavu", city: "Bangalore", img: bangalore2 },
  { name: "Vijaya PU", city: "Kunigal", img: kunigal },
  { name: "Namakkal", city: "Tamil Nadu", img: namakkal, featured: true },
  { name: "Bagalkot", city: "Karnataka", img: bagalkot },
  { name: "Kundapura", city: "Udupi", img: kundapura },
  { name: "H-Cross", city: "Karnataka", img: hcross },
  { name: "Mysore", city: "Karnataka", img: mysore },
  { name: "Narsapur", city: "Andhra Pradesh", img: narsapur },
  { name: "Kolar", city: "Karnataka", img: kolar },
];

export function Campuses() {
  return (
    <section id="campuses" className="relative py-16 md:py-24 overflow-hidden bg-background">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-sm opacity-20 mask-radial -z-10" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-magenta/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="reveal max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta/10 border border-magenta/20 text-magenta text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magenta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-magenta"></span>
              </span>
              Our National Reach
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Integrated <span className="text-gradient-pink italic pr-2">campuses</span> across
              India
            </h2>
          </div>
          <p className="reveal lg:max-w-md text-lg text-muted-foreground leading-relaxed">
            From the tech hubs of <span className="text-foreground font-semibold">Bangalore</span>{" "}
            to the academic heartlands of{" "}
            <span className="text-foreground font-semibold">Tamil Nadu</span>. Quality education
            delivered with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {campuses.map((c, i) => (
            <motion.div
              key={c.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-glow-sm transition-all duration-500 border border-border/50 bg-muted/20 ${
                c.featured ? "md:scale-105 z-10" : ""
              }`}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0">
                <img
                  src={c.img}
                  alt={`${c.name} campus`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Status Badge */}
              {c.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                    <GraduationCap className="w-3 h-3 text-magenta" />
                    Elite Campus
                  </span>
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/70 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-magenta" />
                    {c.city}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                    {c.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-xs font-semibold text-white uppercase tracking-widest">
                      Explore Campus
                    </span>
                    <div className="w-8 h-px bg-magenta/60" />
                    <ArrowUpRight className="w-4 h-4 text-magenta" />
                  </div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-magenta/0 group-hover:border-magenta/20 transition-colors duration-500 rounded-3xl -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA or Info */}
      </div>
    </section>
  );
}
