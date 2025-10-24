import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestAOS = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Check AOS elements after initialization
    const checkWillChange = () => {
      const aosElements = document.querySelectorAll("[data-aos]");
      console.log(`Found ${aosElements.length} elements with data-aos`);

      aosElements.forEach((element, index) => {
        element.style.border = "2px dashed #6366f1"; // purple dashed border
        const computedStyle = window.getComputedStyle(element);
        const willChange = computedStyle.getPropertyValue("will-change");

        console.log(`Element ${index + 1}:`, {
          "data-aos": element.getAttribute("data-aos"),
          "will-change": willChange,
          "element": element.tagName,
          "classes": element.className,
        });
      });
    };

    setTimeout(checkWillChange, 200); // small delay to ensure animations load
  }, []);

  return (
    <>
      <style>
        {`
          [data-aos] {
            will-change: transform, opacity !important;
          }
        `}
      </style>

      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white gap-8">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-indigo-400">
          AOS Animation Test Page
        </h1>

        <p data-aos="fade-right" className="text-lg text-gray-300 max-w-lg text-center">
          This page is used to test the scroll animations (AOS). Scroll down to
          see how elements animate when they appear in view.
        </p>

        <div
          data-aos="zoom-in"
          className="mt-10 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg"
        >
          <span className="text-3xl font-semibold">Rithik</span>
        </div>
      </section>
    </>
  );
};

export default TestAOS;
