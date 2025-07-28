import React, { useState } from "react";
import { motion } from "framer-motion";
import MatrixBackground from "./MatrixBackground";
import CircularNavigation from "./CircularNavigation";
import HeroSection from "./HeroSection";

const Home = () => {
  const [videoLink, setVideoLink] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddLink = () => {
    if (inputLink.trim()) {
      setVideoLink(inputLink.trim());
      setInputLink("");
      setIsEditing(false);
    }
  };

  const handleRemoveLink = () => {
    setVideoLink("");
    setIsEditing(false);
  };

  const handleEditLink = () => {
    setInputLink(videoLink);
    setIsEditing(true);
  };

  const getEmbedUrl = (url: string) => {
    // Convert YouTube watch URLs to embed URLs
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Convert YouTube short URLs to embed URLs
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Return original URL for other video platforms
    return url;
  };

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
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-green-400">
                Elevator Pitch
              </h3>
              {videoLink && !isEditing && (
                <div className="flex gap-2">
                  <button
                    onClick={handleEditLink}
                    className="px-3 py-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded hover:bg-green-500/30 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleRemoveLink}
                    className="px-3 py-1 text-xs bg-red-500/20 text-red-400 border border-red-500/30 rounded hover:bg-red-500/30 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {!videoLink && !isEditing ? (
              <div className="space-y-4">
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
                      Add your elevator pitch video
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded hover:bg-green-500/30 transition-colors"
                >
                  Add Video Link
                </button>
              </div>
            ) : isEditing ? (
              <div className="space-y-4">
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
                      Preview will appear here
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <input
                    type="url"
                    value={inputLink}
                    onChange={(e) => setInputLink(e.target.value)}
                    placeholder="Enter video URL (YouTube, Vimeo, etc.)"
                    className="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:outline-none focus:border-green-500/50"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddLink}
                      disabled={!inputLink.trim()}
                      className="flex-1 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded hover:bg-green-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {videoLink ? "Update Video" : "Add Video"}
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setInputLink("");
                      }}
                      className="px-4 py-2 bg-gray-500/20 text-gray-400 border border-gray-500/30 rounded hover:bg-gray-500/30 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-black/50 rounded-lg border border-green-500/30 overflow-hidden">
                <iframe
                  src={getEmbedUrl(videoLink)}
                  title="Elevator Pitch Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
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
