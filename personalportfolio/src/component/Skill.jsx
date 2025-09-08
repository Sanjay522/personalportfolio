import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Skill = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center  px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-12">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition w-[200px] text-center"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
