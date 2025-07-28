import React from "react";
import { motion } from "framer-motion";
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

        {/* Elevator Pitch Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl mt-12 px-4"
        >
          <div className="bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg p-6 shadow-lg shadow-green-500/10">
            <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4 text-center">
              Elevator Pitch
            </h3>
            <div className="aspect-video bg-black/50 rounded-lg border border-green-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  Video link will be embedded here
                </p>
                <p className="text-green-400 text-xs mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </motion.div>
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
