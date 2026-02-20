import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStackIcon from "../components/TechStackIcon";

const categories = [
  {
    title: "Frontend",
    stacks: [
      { icon: "html.svg", language: "HTML" },
      { icon: "css.svg", language: "CSS" },
      { icon: "javascript.svg", language: "JavaScript" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", language: "TypeScript" },
      { icon: "reactjs.svg", language: "ReactJS" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", language: "Next.js" },
      { icon: "tailwind.svg", language: "Tailwind CSS" },
      { icon: "bootstrap.svg", language: "Bootstrap" },
      { icon: "vite.svg", language: "Vite" },
    ],
  },
  {
    title: "Backend",
    stacks: [
      { icon: "nodejs.svg", language: "Node.js" },
      { icon: "images.jpg", language: "Python" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", language: "Flask" },
      { icon: "java.jpg", language: "Java" },
      { icon: "C_Programming_Language.svg", language: "C" },
    ],
  },
  {
    title: "Database",
    stacks: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", language: "MongoDB" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", language: "MySQL" },
    ],
  },
  {
    title: "DevOps & Tools",
    stacks: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", language: "Docker" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", language: "GitHub" },
    ],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });
  }, []);

  const activeCategory = categories.find((c) => c.title === activeTab);

  return (
    <div
      id="Portfolio"
      className="min-h-screen bg-[#030014] text-white py-20 px-[5%] sm:px-[8%] lg:px-[10%] overflow-hidden mt-16 sm:mt-20"
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in"
        >
          My Tech Stack
        </h2>
        <p
          className="text-center text-gray-400 mb-10 text-base sm:text-lg"
          data-aos="fade-up"
        >
          Technologies I work with, organized by category
        </p>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`relative px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border
                ${
                  activeTab === category.title
                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white border-transparent shadow-lg shadow-purple-500/30 scale-105"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-[#6366f1]/50 hover:text-white"
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Stacks Grid */}
        <div
          key={activeTab}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {activeCategory.stacks.map((stack, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-delay={index * 80}
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
