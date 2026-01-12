import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./index.css";

import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/Background";
import CinematicBackground from "./components/CinematicBackground";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Portfolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import WelcomeScreen from "./Pages/WelcomeScreen";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <CinematicBackground />
          <Home />
          <About />
          <Projects />
          <Portfolio />
          <ContactPage /> {/* ContactPage now includes SocialLinks internally */}
          <footer className="mt-16">
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6" />
              <span className="block text-sm pb-4 text-gray-500 text-center">
                © 2025 Rithik™. All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
