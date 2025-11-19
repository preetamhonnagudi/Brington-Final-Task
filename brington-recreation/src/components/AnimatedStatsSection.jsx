import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

// ---------------- STATS ----------------

const STATS = [
  { value: 1034, label: "Sample Data about Sample Things" },
  { value: 2, label: "Sample Data about Sample Things" },
  { value: 54, label: "Sample Data about Sample Things" },
  { value: 25, label: "Sample Data about Sample Things" },
];

const GRADIENTS = [
  "linear-gradient(180deg,#2C5364,#203A43,#0F2027)",
  "linear-gradient(180deg,#c7f5d9,#defbe7,#e2ffee)",
  "linear-gradient(180deg,#f1fffe,#e4ffee,#dbfff4)",
  "linear-gradient(180deg,#f9f5ff,#ece1ff,#e8dbff)",
];

// ---------------- FIXED ODOMETER ----------------
// Animates ONLY once when the section enters view
// Never gives wrong number anymore

function useOdometerOnce(targetValue, active) {
  const [val, setVal] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active) return;
    if (hasAnimated.current) return;

    hasAnimated.current = true;

    const controls = animate(0, targetValue, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        setVal(Math.round(latest));
      },
      onComplete() {
        setVal(targetValue);
      },
    });

    return () => controls.stop();
  }, [active, targetValue]);

  return val.toLocaleString();
}

// ---------------- STAR COMPONENT ----------------

const Star = ({ delay = 0, path }) => (
  <motion.div
    initial={{ offsetDistance: "0%" }}
    animate={{ offsetDistance: "100%" }}
    transition={{ duration: 3, delay, repeat: Infinity }}
    className="absolute h-5 w-5 rounded-full bg-purple-300 shadow-[0_0_15px_5px_rgba(150,100,255,0.7)]"
    style={{
      offsetPath: `path("${path}")`,
    }}
  />
);

// ---------------- MAIN COMPONENT ----------------

const AnimatedStatsSection = () => {
  const sectionRef = useRef();
  const containerInView = useInView(sectionRef);

  const [index, setIndex] = useState(0);

  // Detect which slide we are on
  useEffect(() => {
    const onScroll = () => {
      const pageHeight = window.innerHeight;
      const newIndex = Math.min(
        STATS.length - 1,
        Math.floor(window.scrollY / pageHeight)
      );
      setIndex(newIndex);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[500vh] relative transition-all duration-700"
      style={{
        background: GRADIENTS[index],
      }}
    >
      {STATS.map((item, i) => {
        const slideRef = useRef(null);
        const isInView = useInView(slideRef, {
          margin: "-35% 0px -35% 0px",
        });

        const animatedValue = useOdometerOnce(item.value, isInView);

        return (
          <section
            ref={slideRef}
            key={i}
            className="h-screen flex flex-col items-center justify-center relative overflow-visible"
          >
            {/* Stars */}
            <Star
              delay={0.2}
              path="M300 50 C100 300 150 600 400 800"
            />
            <Star
              delay={0.9}
              path="M1100 -50 C1300 200 1200 500 900 800"
            />

            {/* Number with smooth scroll animation */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: index === i ? 1 : 0,
                y: index === i ? 0 : 80,
              }}
              transition={{ duration: 0.8 }}
              className="text-[15vw] font-serif text-black tracking-tight"
            >
              {animatedValue}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: index === i ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="text-lg text-black/70"
            >
              {item.label}
            </motion.p>
          </section>
        );
      })}

      {/* ---------- FINAL SLIDE ---------- */}
      <section className="h-screen flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{
            opacity: index === STATS.length - 1 ? 1 : 0,
            y: index === STATS.length - 1 ? 0 : 70,
          }}
          transition={{ duration: 1 }}
          className="text-6xl font-semibold text-black/80"
        >
          Accomplish Anything in
        </motion.h1>
      </section>
    </div>
  );
};

export default AnimatedStatsSection;
