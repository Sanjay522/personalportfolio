import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Footer = () => {
  const { footerData } = useContext(PortfolioContext);

  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="w-[90vw] m-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{footerData.name}</h3>
          <p className="text-sm md:text-base">{footerData.tagline}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <div className="flex flex-col gap-1">
            {footerData.quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-gray-200 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">Get in Touch</h4>
          <p>Email: {footerData.contactInfo.email}</p>
          <p>Phone: {footerData.contactInfo.phone}</p>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-500 pt-6 text-center text-sm text-blue-100">
        © 2025 {footerData.name}. All rights reserved.  
      </div>
    </footer>
  );
};

export default Footer;
