import { useState, useEffect } from "react";
import { ArrowRight, PlayCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GridBackground } from "./GridBackground";
import { AppDownloadButton } from "./ui/AppDownloadButton";

import slide1 from "@/assets/students-classroom.jpg";
import slide2 from "@/assets/campus-bangalore.jpg";
import slide3 from "@/assets/campus-kunigal.jpg";

const slides = [
  {
    image: slide1,
    badge: "Admissions Open 2026",
    title: ["Shape", "the", "future"],
    highlight: "brilliant",
    subtitle:
      "Nucleii Educational Academy — leading the way in NEET, JEE & KCET excellence with a student-first approach.",
    primaryCTA: "Apply Now",
    secondaryCTA: "Our Programs",
  },
  {
    image: slide2,
    badge: "Expert Faculty",
    title: ["Master", "the", "Concepts"],
    highlight: "success",
    subtitle:
      "Learn from the best educators who have years of experience in nurturing top rankers across Karnataka.",
    primaryCTA: "Meet Faculty",
    secondaryCTA: "View Results",
  },
  {
    image: slide3,
    badge: "Legacy of Excellence",
    title: ["Join", "the", "Achievers"],
    highlight: "legacy",
    subtitle:
      "Over 3,000 students and counting. Join the community that prioritizes academic depth and career growth.",
    primaryCTA: "Register Today",
    secondaryCTA: "Campus Tour",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const moveX = useTransform(springX, [-0.5, 0.5], ["-10px", "10px"]);
  const moveY = useTransform(springY, [-0.5, 0.5], ["-10px", "10px"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: -20,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 },
      },
    },
    exit: (direction: number) => ({
      zIndex: -30,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0"
          >
            <img src={slides[current].image} alt="Slide" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <GridBackground />

      <div className="relative z-20 h-full flex items-center">
        <motion.div
          style={{ x: moveX, y: moveY }}
          className="container mx-auto px-5 text-center md:text-left"
        >
          <div className="max-w-4xl">
            <motion.div
              key={`badge-${current}`}
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-[0.25em] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magenta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-magenta"></span>
              </span>
              <span>{slides[current].badge}</span>
            </motion.div>

            <motion.h1
              key={`title-${current}`}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] tracking-tighter text-white drop-shadow-2xl"
            >
              {slides[current].title.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + 1}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                custom={slides[current].title.length + 1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-block text-gradient-pink italic pr-4"
              >
                {slides[current].highlight}
              </motion.span>
            </motion.h1>

            <motion.p
              key={`sub-${current}`}
              custom={slides[current].title.length + 2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-8 max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed font-light drop-shadow-md"
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.div
              key={`cta-${current}`}
              custom={slides[current].title.length + 3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-semibold shadow-soft hover:scale-[1.05] active:scale-[0.98] transition-all duration-300"
                >
                  {slides[current].primaryCTA}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                {/* <AppDownloadButton variant="primary" /> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 w-full z-30 px-5">
        <div className="container mx-auto flex items-center justify-between">
          {/* Progress Indicators */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="group relative h-1.5 rounded-full bg-white/10 overflow-hidden transition-all duration-500"
                  style={{ width: current === i ? "48px" : "12px" }}
                >
                  {current === i && (
                    <motion.div
                      layoutId="activeProgress"
                      className="absolute inset-0 bg-gradient-brand"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
                </button>
              ))}
            </div>
            <div className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
              0{current + 1} / 0{slides.length}
            </div>
          </div>

          {/* Arrow Controls */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.3em] rotate-90 origin-right translate-y-12"
      >
        <span>Discover Nucleii</span>
        <span className="w-12 h-px bg-white/20" />
      </motion.div>
    </section>
  );
}
