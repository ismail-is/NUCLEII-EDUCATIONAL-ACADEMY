import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Camera, ExternalLink, Heart } from "lucide-react";

interface GalleryItem {
  img: string;
  span: string;
  title?: string;
}

export function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically fetch actual images from the live website with better filtering
    fetch("https://nucleii.in/wp-json/wp/v2/media?per_page=12&media_type=image")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter for images that are likely actual photos (not small icons or logos)
          const filtered = (data as any[])
            .filter((d) => d.media_details?.width > 600)
            .map((d, index: number) => ({
              img: d.source_url,
              title: d.title?.rendered?.replace(/&[^;]+;/g, "") || "Nucleii Moment",
              span: getGridSpan(index),
            }));

          setItems(filtered.length > 0 ? filtered.slice(0, 8) : fallbackItems);
        } else {
          setItems(fallbackItems);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch gallery images", err);
        setItems(fallbackItems);
        setLoading(false);
      });
  }, []);

  const getGridSpan = (index: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Big feature
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-2 md:row-span-1", // Horizontal
      "md:col-span-1 md:row-span-2", // Vertical
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section id="gallery" className="relative py-16 md:py-24 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-sm opacity-20 mask-radial -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magenta/5 rounded-full blur-[120px] -z-10 animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="reveal max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-soft border border-navy/10 text-navy text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              <Camera className="w-3.5 h-3.5 text-magenta" />
              Life at Nucleii
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Some of our <span className="text-gradient-pink italic pr-2">moments</span>
            </h2>
            <p className="mt-6 text-xl text-foreground font-display font-medium italic opacity-70">
              "The Nucleii Way"
            </p>
          </div>
          <p className="reveal lg:max-w-md text-lg text-muted-foreground leading-relaxed">
            Education isn't just about the ranks. It's about the{" "}
            <span className="text-foreground font-semibold">community</span>, the late-night study
            sessions, and the lifelong friendships forged in ambition.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`bg-muted/50 animate-pulse rounded-3xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
            <AnimatePresence mode="popLayout">
              {items.map((it, i) => (
                <motion.div
                  key={it.img + i}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-glow-sm bg-muted border border-border/40 cursor-pointer ${it.span}`}
                >
                  <img
                    src={it.img}
                    alt={it.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-40 group-hover:opacity-100 transition-all duration-500" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-full bg-magenta/20 backdrop-blur-md border border-magenta/30">
                        <Heart className="w-3 h-3 text-white fill-white" />
                      </div>
                      <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">
                        Memories
                      </span>
                    </div>
                    <h3 className="text-white font-display text-lg font-bold line-clamp-2 leading-snug">
                      {it.title}
                    </h3>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <a
            href="https://nucleii.in/gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary text-foreground font-semibold hover:bg-magenta hover:text-white transition-all duration-300 shadow-sm"
          >
            Explore Full Gallery
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Fallback in case the API is down
const fallbackItems: GalleryItem[] = [
  {
    img: "https://nucleii.in/wp-content/uploads/2024/06/photo-29.jpeg",
    span: "md:col-span-2 md:row-span-2",
    title: "Celebration of Excellence",
  },
  {
    img: "https://nucleii.in/wp-content/uploads/2024/06/photo-23.jpeg",
    span: "md:col-span-1 md:row-span-1",
    title: "Campus Interaction",
  },
  {
    img: "https://nucleii.in/wp-content/uploads/2024/06/Sai-Vidya-Nidhi-min-scaled.jpg",
    span: "md:col-span-1 md:row-span-1",
    title: "Award Ceremony",
  },
  {
    img: "https://nucleii.in/wp-content/uploads/2024/06/NAMAKAL-1.jpg",
    span: "md:col-span-2 md:row-span-1",
    title: "Namakkal Campus Seminar",
  },
  {
    img: "https://nucleii.in/wp-content/uploads/2024/06/New-Learning-Ladders-scaled.jpg",
    span: "md:col-span-1 md:row-span-2",
    title: "Interactive Learning",
  },
  {
    img: "https://nucleii.in/wp-content/uploads/2024/06/photo-21.jpeg",
    span: "md:col-span-1 md:row-span-1",
    title: "Student Success",
  },
];
