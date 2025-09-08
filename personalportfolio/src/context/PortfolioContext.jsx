import React, { createContext } from "react";
import testImage from "..//assets/image.png"
import webDevIcon from "..//assets/webdev.svg"

export const PortfolioContext = createContext();

const navBarSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
const skills = [
    "HTML", 
    "CSS / Tailwind", 
    "JavaScript (ES6+)", 
    "React.js", 
    "Next.js", 
    "TypeScript",  
    "Node.js", 
    "MongoDB", 
    "Git & GitHub", 
  ];

  const projects =  [
  {
    title: "Civic connect",
    description: "A full-stack music streaming web app built with React & Node.js.",
    image:testImage,
    demo: "https://civic-connect-qeoy.vercel.app/",
  },
  {
    title: "Cricket Score Dashboard",
    description: "A live cricket score dashboard using React and free APIs.",
    image: testImage,
    demo: "https://cricket-score-dashboard.vercel.app",
  },
  {
    title: "Personalized Dashboard",
    description: "A BMW landing page clone made with HTML, CSS & JavaScript.",
    image: testImage,
    demo: "https://personalized-content-dashboard-lovat.vercel.app/",
  },
  {
    title: "Refrain music player",
    description: "A BMW landing page clone made with HTML, CSS & JavaScript.",
    image: testImage,
    demo: "https://refrain-sigma.vercel.app/",
  },
  
  {
    title: "Text Extracter",
    description: "A BMW landing page clone made with HTML, CSS & JavaScript.",
    image: testImage,
    demo: "https://text-extract-from-image.vercel.app/",
  }
]
const footerData = {
    name: "Sanjay Sadanand Gupta",
    tagline: "Frontend Developer | Building modern web experiences with React & Tailwind",
    quickLinks: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    contactInfo: {
      email: "youremail@example.com",
      phone: "+91 12345 67890",
    },
  };

  const testimonials = [
  {
    name: "Rohit ",
    designation: "Team Lead at XYZ Company",
    message: "Sanjay is a highly skilled frontend developer. His React & Tailwind skills brought our projects to life!",
  },
  {
    name: "Priya Desai",
    designation: "Project Manager at ABC Inc",
    message: "Working with Sanjay was a pleasure. His attention to detail and clean code made the workflow smooth.",
  },
  {
    name: "Anil Kumar",
    designation: "CTO at Tech Solutions",
    message: "Sanjay has great problem-solving skills and always delivers high-quality web applications on time.",
  },
];


const myServices = [
    {title:"Web Branding",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda qui culpa facilis quod sit maiores nam quam expedita iste vel!"
        ,icon:webDevIcon
    },
     {title:"Web Development",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda qui culpa facilis quod sit maiores nam quam expedita iste vel!"
                ,icon:webDevIcon

    },
     {title:"Photography",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda qui culpa facilis quod sit maiores nam quam expedita iste vel!"
                ,icon:webDevIcon

    },
     {title:"User Experience",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda qui culpa facilis quod sit maiores nam quam expedita iste vel!"
                ,icon:webDevIcon

    },
     {title:"Clean Code",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda qui culpa facilis quod sit maiores nam quam expedita iste vel!"
                ,icon:webDevIcon

    },
     {title:"Fast Support",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda qui culpa facilis quod sit maiores nam quam expedita iste vel!"
                ,icon:webDevIcon

    }
]


export const DataProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={{ navBarSections,skills,projects,footerData,testimonials,myServices}}>
      {children}
    </PortfolioContext.Provider>
  );
};
