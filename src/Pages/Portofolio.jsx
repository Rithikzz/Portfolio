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
  { icon: "java.svg", language: "Java" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "python.svg", language: "Python" },
  { icon: "c.svg", language: "C" },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStacks.map((stack, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
          >
            <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
