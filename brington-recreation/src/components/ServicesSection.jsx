import React from "react";
import centerIcon from "../assets/circle.svg"; // <-- replace with actual path if needed

const ServicesSection = () => {
  const leftItems = [
    "Sample Text 1",
    "Sample Text",
    "Sample Text",
  ];

  const rightItems = [
    "Sample Text",
    "Sample Text",
    "Sample Text",
  ];

  return (
    <section
      className="relative pt-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/c837a6_672a051f666445959989095dc2028431~mv2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center">
          Accomplish Anything <br /> in Developing
        </h2>

        <p className="text-center text-gray-200 mt-6 text-lg max-w-3xl mx-auto">
          This is the space to introduce the Services section. Briefly describe
          the types of services offered and highlight any special benefits or features.
        </p>

        {/* Main Grid */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left */}
          <div className="w-full md:w-1/3 space-y-10">
            {leftItems.map((text, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">✔</span>
                  <span className="text-white text-lg">{text}</span>
                </div>
                <div className="h-px w-full bg-white/30 mt-3"></div>
              </div>
            ))}
          </div>

          {/* Center Icon */}
          <div className="relative w-100 h-100 md:w-80 md:h-80 flex items-center justify-center opacity-50">
            <img
              src={centerIcon}
              alt="Circle Pattern"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <img
              src="https://static.wixstatic.com/media/c837a6_3b14fd6b22314cdc83076ed5b238f512~mv2.png"
              alt="Center Icon"
              className="w-24 h-24 object-contain relative"
            />
          </div>

          {/* Right */}
          <div className="w-full md:w-1/3 space-y-10">
            {rightItems.map((text, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">✔</span>
                  <span className="text-white text-lg">{text}</span>
                </div>
                <div className="h-px w-full bg-white/30 mt-3"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-20">
          <a
            href="https://www.brington.in"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg"
          >
            Create Now!
          </a>
        </div>
      </div>

      {/* ============================= */}
      {/*        🔥 MARQUEE AREA        */}
      {/* ============================= */}
      <div className="mt-24 bg-white py-6 overflow-hidden relative w-full">

  {/* First moving row */}
  <div className="marquee-track text-teal-600 text-5xl font-semibold">
    {Array(12).fill(0).map((_, i) => (
      <span key={i} className="flex items-center gap-6 mr-20">
        HURDLES
        <img
          src="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-runner-hurdle-on-track-hurdler-png-image_11715956.png"
          className="w-12 h-12"
          alt=""
        />
      </span>
    ))}
  </div>

  {/* Second moving row (creates seamless infinite effect) */}
  {/* <div className="marquee-track second text-teal-600 text-5xl font-semibold">
    {Array(12).fill(0).map((_, i) => (
      <span key={"b"+i} className="flex items-center gap-6 mr-20">
        HURDLES
        <img
          src="https://static.wixstatic.com/media/c837a6_3b14fd6b22314cdc83076ed5b238f512~mv2.png"
          className="w-12 h-12"
          alt=""
        />
      </span>
    ))}
  </div> */}

</div>
<style>
{`
  .marquee-track {
    display: flex;
    gap:    0px;
    white-space: nowrap;
    animation: marquee 18s linear infinite;
  }

  .marquee-track.second {
    position: absolute;
    top: 0;
    left: 100%;
    animation: marquee2 18s linear infinite;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  @keyframes marquee2 {
    0% { transform: translateX(0); }
    100% { transform: translateX(-200%); }
  }
`}
</style>




    </section>
  );
};



export default ServicesSection;
