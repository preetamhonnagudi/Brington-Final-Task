import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import your speaker images
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import sp3 from "../assets/sp3.jpg";
import sp4 from "../assets/sp4.jpg";
import sp5 from "../assets/sp5.jpg";
import sp6 from "../assets/sp6.jpg";
import sp7 from "../assets/sp7.jpg";
import sp8 from "../assets/sp8.jpg";

const speakers = [
  { name: "Harry Williams", role: "Director of Mobile Gaming, Fixer", img: sp1 },
  { name: "Akira Lee", role: "Director of Mobile Gaming, Fixer", img: sp2 },
  { name: "Veronika Zakharova", role: "Director of Mobile Gaming, Fixer", img: sp3 },
  { name: "Ann Jacobs", role: "Director of Mobile Gaming, Fixer", img: sp4 },
  { name: "Lissa Cross", role: "Director of Mobile Gaming, Fixer", img: sp5 },
  { name: "Murty Yang", role: "Director of Mobile Gaming, Fixer", img: sp6 },
  { name: "Sheldon Smith", role: "Director of Mobile Gaming, Fixer", img: sp7 },
  { name: "Jason Guhl", role: "Director of Mobile Gaming, Fixer", img: sp8 },
];

const SpeakersSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-center text-6xl font-bold mb-20">Speakers</h2>

      <div className="space-y-24">
        {Array.from({ length: speakers.length / 2 }).map((_, i) => {
          const left = speakers[i * 2];
          const right = speakers[i * 2 + 1];

          return (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <ScrollSpeaker data={left} />
              <ScrollSpeaker data={right} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ⭐ Scroll-based scaling card
const ScrollSpeaker = ({ data }) => {
  const ref = React.useRef(null);

  // Track scroll progress of each speaker block
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 20%"], 
  });

  // Scale from 0.75 → 1 → 0.75 depending on scroll direction
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="flex items-center justify-between border-b pb-10 origin-center"
    >
      <div className="flex items-center space-x-6">
        <img
          src={data.img}
          className="w-24 h-24 rounded-xl object-cover"
          alt={data.name}
        />

        <div>
          <h3 className="text-3xl font-semibold">{data.name}</h3>
          <p className="text-gray-500 text-lg">{data.role}</p>
        </div>
      </div>

      <button className="border border-black px-6 py-3 rounded-full text-lg hover:bg-black hover:text-white transition">
        LinkedIn
      </button>
    </motion.div>
  );
};

export default SpeakersSection;
