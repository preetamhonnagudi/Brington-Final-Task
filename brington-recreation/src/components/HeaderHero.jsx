import React from "react";
import heroBg from "../assets/hero.jpg";

export default function HeaderHero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center bg-[#ff8a54]"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* ========= DARK OVERLAY ========== */}
      <div className="absolute inset-0 bg-yellow-600 bg-opacity-10"></div>

      {/* ========= FLOATING HEADER ========== */}
      <div className="absolute w-full top-4 md:top-6 z-20 px-4 md:px-16 flex justify-center md:justify-start">
        <div className="bg-[#ff8a54] text-white px-6 md:px-20 py-3 md:py-5 rounded-full text-base md:text-lg font-medium shadow-lg">
          Home
        </div>
      </div>

      {/* ========= LEFT HERO CONTENT ========== */}
      <div className="text-white px-4 md:pl-16 max-w-6xl drop-shadow-2xl z-10 pt-24 md:pt-11">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          I am a Sample <br /> Website
        </h1>

        <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-relaxed">
          I'm a Sample <br />
          Website, Create me <br />
          as same as I am, <br />
          Don't Do any <br />
          Mistakes.
        </p>

        <button className="mt-10 md:mt-14 bg-pink-500 hover:bg-green-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl">
          Get Started
        </button>
      </div>
    </section>
  );
}
