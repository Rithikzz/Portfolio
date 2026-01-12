import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#Skill", label: "Skills" },
    { href: "#Contact", label: "Contact" },
  ];

  /** -----------------------------------
   * 🔥 Detect section in view using IntersectionObserver
   * ----------------------------------- */
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /** -----------------------------------
   * 🎯 Detect navbar scroll background
   * ----------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** -----------------------------------
   * 🚫 Prevent background scroll when mobile menu is open
   * ----------------------------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  /** -----------------------------------
   * 🧭 Smooth Scrolling
   * ----------------------------------- */
  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const section = document.querySelector(href);
      if (!section) return;

      const top = section.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 200);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isOpen
          ? "bg-[#030014]"
          : scrolled
          ? "bg-[#030014]/50 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#Home"
            onClick={(e) => scrollToSection(e, "#Home")}
            className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
          >
            Rithik
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="group relative px-1 py-2 text-sm font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeSection === item.label
                        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                        : "text-[#e2d3fd] group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] origin-left transition-transform duration-300 ${
                      activeSection === item.label
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ${
              isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#030014] transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="px-4 py-6 space-y-4 h-2/5">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`block px-4 py-3 text-lg font-medium transition-all duration-500 ${
                activeSection === item.label
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                  : "text-[#e2d3fd] hover:text-white"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
