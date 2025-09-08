import React from "react";
import testImage from "../assets/image.png";

const About = () => {
  return (
    <div
      id="about"
      className="py-16 bg-gray-100 flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-semibold mb-12 text-center md:text-left">
        About Me
      </h1>

      <div className="max-w-5xl w-full px-4 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={testImage}
            alt="Sanjay Sadanand Gupta"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Hello, I'm Sanjay</h2>
          <p className="text-lg mb-4">
            I'm a self-taught front-end developer based in India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
          </p>
          <p className="text-lg">
            Transforming my creativity and knowledge into websites has been my passion for over a year. I always strive to learn about the newest technologies and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
