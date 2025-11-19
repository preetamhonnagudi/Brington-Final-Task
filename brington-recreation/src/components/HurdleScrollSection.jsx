import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const HurdleScrollSection = () => {
  const sectionRef = useRef(null);

  // Track scroll inside this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Single hurdle zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[200vh] bg-gradient-to-b from-[#00A78E] to-white pt-32 pb-20 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-center text-white text-5xl font-bold">
        ABOUT <br /> THE RACE
      </h2>

      {/* Description */}
      <p className="text-center text-white text-xl mt-6 max-w-xl mx-auto leading-relaxed">
        This is a race of yourself to yourself. <br />
        Fight the race! Develop the website. <br />
        Complete the task. <br />
        As a developer, it's Not That hard.
      </p>

      {/* Single Zooming Hurdle */}
      <div className="w-full flex justify-center mt-40">
        <motion.img
          src="https://static.vecteezy.com/system/resources/thumbnails/057/530/416/small/durable-steel-pull-up-bar-for-home-gym-workout-free-png.png"
          alt="Hurdle"
          style={{ scale, opacity }}
          className="w-[800px] max-w-[40%] object-contain pointer-events-none"
        />
      </div>
    </section>
  );
};

export default HurdleScrollSection;
