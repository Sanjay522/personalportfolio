import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Navbar() {
  const { navBarSections } = useContext(PortfolioContext);

  return (
    <nav className="p-4 shadow-md bg-white fixed top-0 w-full z-50">
      <ul className="flex gap-6 justify-center">
        {navBarSections.map((sec) => (
          <li
            key={sec.id}
            className="text-[20px] cursor-pointer font-medium hover:text-blue-600"
          >
            <a href={`#${sec.id}`}>{sec.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
