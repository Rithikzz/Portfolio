import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStackIcon from "../components/TechStackIcon"; // Your icon component

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node.js" },
  { icon: "java.jpg", language: "Java" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "images.jpg", language: "Python" },
  { icon: "C_Programming_Language.svg", language: "C" },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });
  }, []);

  return (
    <div
      id="Portfolio" // ✅ for navbar scroll target
      className="min-h-screen bg-[#030014] text-white py-20 px-[5%] sm:px-[8%] lg:px-[10%] overflow-hidden mt-16 sm:mt-20"
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in"
        >
          My Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-delay={index * 100}
            >
              <TechStackIcon
                TechStackIcon={stack.icon}
                Language={stack.language}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
