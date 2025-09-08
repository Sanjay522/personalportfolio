import React, { useContext, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Navbar = () => {
  const { navBarSections } = useContext(PortfolioContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); 
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow-sm p-4">
      <div className="flex justify-center items-center">
     <div className="sm:hidden cursor-pointer font-semibold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </div>
        <ul className="hidden sm:flex gap-6">
          {navBarSections.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-blue-600 font-semibold text-[20px]"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-1 sm:hidden text-center">
          {navBarSections.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-blue-600  text-[20px]"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
