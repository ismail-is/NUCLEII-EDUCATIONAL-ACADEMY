import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/useReveal";
import g1 from "@/assets/nucleii/gallery1.jpeg";
import g2 from "@/assets/nucleii/gallery2.jpeg";
import g3 from "@/assets/nucleii/gallery3.jpeg";
import g4 from "@/assets/nucleii/gallery4.jpeg";
import g5 from "@/assets/nucleii/gallery5.jpeg";
import g6 from "@/assets/nucleii/gallery6.jpeg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Gallery — Nucleii Educational Academy" },
      {
        name: "description",
        content: "Some of our moments — student events, classroom moments and Nucleii memories.",
      },
      { property: "og:title", content: "Gallery — Nucleii" },
      {
        property: "og:description",
        content: "A glimpse into life at Nucleii Educational Academy.",
      },
    ],
  }),
  component: MediaPage,
});

const items = [
  { img: g1, span: "md:col-span-2 md:row-span-2" },
  { img: g2, span: "" },
  { img: g3, span: "" },
  { img: g4, span: "md:col-span-2" },
  { img: g5, span: "" },
  { img: g6, span: "" },
  { img: g1, span: "" },
  { img: g2, span: "md:row-span-2" },
  { img: g3, span: "md:col-span-2" },
  { img: g4, span: "" },
  { img: g5, span: "" },
  { img: g6, span: "md:col-span-2" },
];

function MediaPage() {
  useReveal();
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Some Of Our Moments"
        title={
          <>
            Our <span className="text-gradient-pink italic">Gallery</span>
          </>
        }
        description="Behind every rank, a community — late-night sessions, encouraging mentors, and friendships built on shared ambition."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Media" }]}
      />

      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />

        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[240px]">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 6) * 0.06 }}
                className={`relative group rounded-2xl overflow-hidden shadow-card hover:shadow-soft bg-white border border-border transition-shadow ${it.span}`}
              >
                <img
                  src={it.img}
                  alt="Nucleii moment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
