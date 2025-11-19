import React, { useState } from "react";
import { motion } from "framer-motion";

// Import all frame images
import AFrame from "../assets/Aframe.jpg";
import BFrame from "../assets/Bframe.jpg";
import CFrame from "../assets/Cframe.jpg";
import DFrame from "../assets/Dframe.jpg";
import EFrame from "../assets/Eframe.jpg";
import FFrame from "../assets/Fframe.jpg";

// Import all letter PNGs
import ALetter from "../assets/Aletter.png";
import BLetter from "../assets/Bletter.png";
import CLetter from "../assets/Cletter.png";
import DLetter from "../assets/Dletter.png";
import ELetter from "../assets/Eletter.png";
import FLetter from "../assets/Fletter.png";

const LettersHoverSection = () => {
  const [selected, setSelected] = useState("A");

  const letters = {
    A: { frame: AFrame, letter: ALetter },
    B: { frame: BFrame, letter: BLetter },
    C: { frame: CFrame, letter: CLetter },
    D: { frame: DFrame, letter: DLetter },
    E: { frame: EFrame, letter: ELetter },
    F: { frame: FFrame, letter: FLetter },
  };

  return (
    <section className="grid grid-cols-2 min-h-screen">

      {/* LEFT SIDE — FRAME + LETTER */}
      <div className="relative flex items-center justify-center bg-white overflow-hidden">

        {/* FRAME (Static) */}
        <img
          src={letters[selected].frame}
          className="w-[80%] max-w-[600px] object-contain select-none pointer-events-none"
        />

        {/* LETTER (Animated ONLY on hover change) */}
        <motion.img
          key={selected}       // important: triggers animation only once on change
          src={letters[selected].letter}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            perspective: 1200,
            transformStyle: "preserve-3d",
          }}
          className="absolute w-[55%] max-w-[450px] object-contain select-none pointer-events-none"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col">

        {/* TOP A–F GRID */}
        <div className="grid grid-cols-3 grid-rows-2 flex-1">
          {["A", "B", "C", "D", "E", "F"].map((item) => (
            <div
              key={item}
              onMouseEnter={() => setSelected(item)}
              className={`flex items-center justify-center 
                text-5xl font-bold cursor-pointer border
                transition-all duration-300
                ${
                  selected === item
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* BOTTOM DESCRIPTION */}
        <div className="bg-black text-white p-12">
          <h2 className="text-4xl font-semibold text-purple-300">A-Z PROJECT</h2>

          <p className="text-lg mt-4 leading-relaxed max-w-xl">
            It’s over to you. Download our library of transparent video letters
            and add them to your next project.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LettersHoverSection;
