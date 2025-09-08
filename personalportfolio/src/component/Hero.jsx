import React from "react";

const HeroSection = () => {
  return (
    <div className="w-[95vw] m-auto flex flex-col items-center h-[70svh] mt-80">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
        Hi, Im <span className="text-blue-600 ">Sanjay Sadanand Gupta</span>
      </h1>

      <p className="mt-4 text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto">
        A passionate Frontend Developer crafting modern and responsive web
        applications with React & Tailwind.
      </p>

      <div className="mt-8 flex gap-6 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg shadow-lg hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
