import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-100"
    >
      <div className="w-[90vw] m-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Projects</h2>

        <div className="flex flex-wrap justify-center gap-20 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[400px] h-[400px] bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description}
                </p>

                <div className="mt-4 flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
