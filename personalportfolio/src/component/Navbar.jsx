import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Navbar = () => {
  const { navBarSections } = useContext(PortfolioContext);

  // Function to scroll smoothly
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="p-4 shadow-md bg-white fixed top-0 w-full z-50">
      <ul className="flex gap-6 justify-center">
        {navBarSections.map((sec) => (
          <li
            key={sec.id}
            className="text-[20px] cursor-pointer font-medium hover:text-blue-600"
            onClick={() => handleScroll(sec.id)}
          >
            {sec.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
