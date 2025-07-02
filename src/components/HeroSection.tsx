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
    <div className="relative w-full min-h-[600px] flex items-center justify-center px-4 py-16 bg-black bg-opacity-80">
      {/* Portfolio Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
          Digital Portfolio
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Innovative Solutions • Modern Design • Future-Ready Technology
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mt-16"
      >
        <Card className="bg-black/30 backdrop-blur-md border border-green-500/20 overflow-hidden shadow-lg shadow-green-500/10">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/5 p-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-500/30 shadow-lg shadow-green-500/20"
                >
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                </motion.div>
              </div>

              <div className="w-full md:w-3/5 p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">
                    <span className="text-green-400">{name}</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-medium mb-6 text-green-300">
                    {title}
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      className="border-green-500/60 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 active:bg-green-500/40 active:border-green-300 active:text-white active:shadow-lg active:shadow-green-500/30 transition-all duration-200"
                      onClick={() => (window.location.href = "/projects")}
                    >
                      View Projects
                    </Button>
                    <Button
                      className="bg-green-500 text-black hover:bg-green-400"
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
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default HeroSection;
