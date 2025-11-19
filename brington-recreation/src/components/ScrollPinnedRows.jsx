import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollPinnedRows() {
  const wrapperRef = useRef(null);

  /**
   * WRAPPER HEIGHT = animation scroll length
   * PANEL = sticky at 100vh
   *
   * This makes the panel pin exactly for the duration of animation,
   * with ZERO extra space
   */
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"], 
  });

  // Rows slide off fully
  const row1X = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);
  const row2X = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      {/* ===== WRAPPER (controls scroll distance) ===== */}
      <section
        ref={wrapperRef}
        className="relative h-[200vh]" 
      >
        {/* ===== STICKY PANEL (100vh, no extra space) ===== */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* MOVING BACKGROUND */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 bg-gradient-to-b from-[#ffd7c9] via-[#f7b3ac] to-white"
          />

          {/* FOREGROUND CONTENT */}
          <div className="relative z-10 flex flex-col items-center gap-20">

            {/* ================= ROW 1 ================= */}
            <div className="text-center">
              <p className="text-lg">Sample Numbers</p>
              <h2 className="text-4xl font-semibold mb-10">Row No. 1</h2>

              <motion.div style={{ x: row1X }} className="flex gap-12">
                <Box number="89" unit="Unit" />
                <Box number="102" unit="Unit" />
                <Box number="+102" unit="Unit" />
              </motion.div>
            </div>

            {/* ================= ROW 2 ================= */}
            <div className="text-center">
              <p className="text-lg">Sample Numbers</p>
              <h2 className="text-4xl font-semibold mb-10">Row No. 2</h2>

              <motion.div style={{ x: row2X }} className="flex gap-12">
                <Box number="9" unit="Unit" />
                <Box number="59" unit="Unit" />
                <Box number="71" unit="Unit" />
                <Box number="81" unit="Unit" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      
    </>
  );
}

/* NUMBER BOX */
function Box({ number, unit }) {
  return (
    <div
      className="
        flex items-center justify-between
        w-[430px] h-[140px]
        px-12
        bg-white/60 backdrop-blur-lg
        border-2 border-black
        rounded-[50px]
        shadow-xl
      "
    >
      <span className="text-7xl font-bold">{number}</span>
      <span className="text-3xl">{unit}</span>
    </div>
  );
}
