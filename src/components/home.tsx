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
    </div>
  );
};

export default Home;
