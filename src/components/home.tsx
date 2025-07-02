import React from "react";
import MatrixBackground from "./MatrixBackground";
import CircularNavigation from "./CircularNavigation";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Matrix background animation */}
      <MatrixBackground />

      {/* Main content container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <HeroSection />
      </div>

      {/* Navigation */}
      <CircularNavigation />

      {/* Footer */}
      <footer className="relative z-10 mt-16 pt-8 border-t border-green-500/20 text-center bg-black/20 backdrop-blur-sm">
        <p className="text-sm text-gray-400 pb-4">
          Designed for the future by{" "}
          <span className="text-green-400">Stakweb Limited</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
