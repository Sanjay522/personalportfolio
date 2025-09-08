import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Services = () => {
  const { myServices } = useContext(PortfolioContext);

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 ">
          Services
        </h2>

        <div className="flex  flex-wrap  justify-center gap-8">
          {myServices.map((service, index) => (
            <div
              key={index}
              className="w-72 flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <img src={service.icon} alt="" className="h-15" />
              <h3 className="text-2xl font-semibold mb-4 ">
                {service.title}
              </h3>
              <p className=" text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
