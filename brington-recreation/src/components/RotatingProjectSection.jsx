import React from "react";
import projectImage from "../assets/project.jpg"; // <-- correct import

const ProjectSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#2f4e55]">

      {/* STATIC IMAGE */}
      <img
        src={projectImage}
        alt="Project Visual"
        className="w-full h-full object-cover"
      />

      {/* TOP-LEFT TEXT */}
      <div className="absolute top-20 left-16 text-white">
        <h1 className="text-5xl font-semibold">Project Name</h1>
        <p className="text-xl mt-2 opacity-90">Client Name</p>
      </div>

      {/* TOP-RIGHT “+” BUTTON */}
      <div className="absolute top-20 right-16">
        <button className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md text-white text-4xl flex items-center justify-center">
          +
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;
