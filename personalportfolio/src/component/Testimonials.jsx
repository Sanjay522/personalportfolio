import React, { useContext, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Testimonials = () => {
  const { testimonials } = useContext(PortfolioContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="w-[90vw] max-w-3xl m-auto flex flex-col items-center bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Testimonials</h2>

        <p className="text-gray-600 mb-4 text-center">"{currentTestimonial.message}"</p>
        <h4 className="text-blue-600 font-semibold">{currentTestimonial.name}</h4>
        <p className="text-gray-500 text-sm mb-6">{currentTestimonial.designation}</p>

        <div className="flex gap-2 mt-6">
          {testimonials.map((_, index) => (
            <span
              onClick={handleNext}
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
