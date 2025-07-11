import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const HeroSection = ({
  name = "Evans Oduor",
  title = "Product Manager & Software Developer",
  description = "Passionate about creating innovative digital solutions that solve real-world problems. Experienced in product management and software development with a focus on user-centered design and emerging technologies.",
  imageUrl = "/evans-profile.jpg",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12 md:py-16 bg-black bg-opacity-80">
      {/* Portfolio Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 md:top-8 left-0 right-0 text-center z-10 w-full px-2 sm:px-4"
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2 text-center leading-tight">
          Digital Portfolio
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto text-center leading-relaxed">
          Innovative Solutions • Modern Design • Future-Ready Technology
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 px-2 sm:px-4"
      >
        <Card className="bg-black/30 backdrop-blur-md border border-green-500/20 overflow-hidden shadow-lg shadow-green-500/10">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
              <div className="w-full lg:w-2/5 p-3 sm:p-4 md:p-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 sm:border-4 border-green-500/30 shadow-lg shadow-green-500/20"
                >
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                </motion.div>
              </div>

              <div className="w-full lg:w-3/5 p-3 sm:p-4 md:p-6 lg:p-8 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white tracking-tight leading-tight">
                    <span className="text-green-400">{name}</span>
                  </h1>
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 md:mb-6 text-green-300 leading-snug">
                    {title}
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {description}
                  </p>

                  <div className="flex flex-col xs:flex-row justify-center lg:justify-start flex-wrap gap-2 xs:gap-3 md:gap-4">
                    <Button
                      variant="outline"
                      className="border-green-500/60 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 active:bg-green-500/40 active:border-green-300 active:text-white active:shadow-lg active:shadow-green-500/30 transition-all duration-200 text-xs xs:text-sm md:text-base px-3 xs:px-4 py-2 xs:py-2.5"
                      onClick={() => (window.location.href = "/projects")}
                    >
                      View Projects
                    </Button>
                    <Button
                      className="bg-green-500 text-black hover:bg-green-400 text-xs xs:text-sm md:text-base px-3 xs:px-4 py-2 xs:py-2.5"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Contact Me
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-green-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-green-500/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default HeroSection;
