import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Target, Users, Lightbulb } from "lucide-react";
import MatrixBackground from "./MatrixBackground";

const AboutPage = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Product Leadership",
      description:
        "Led cross-functional teams to deliver innovative digital products",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Vision",
      description:
        "Developed product roadmaps aligned with business objectives",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description:
        "Fostered collaborative environments for optimal team performance",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Focus",
      description: "Championed emerging technologies and user-centered design",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 p-4 md:p-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 active:bg-green-500/30 active:scale-95 transition-all duration-200 md:px-4 px-2 md:py-2 py-1.5"
          >
            <ArrowLeft className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Back</span>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-green-400">Evans Oduor</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Bridging the gap between technology and business through innovative
            product management
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20 h-full">
              <CardHeader>
                <CardTitle className="text-green-400 text-xl">
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  As a Product Manager and Software Developer, I bring a unique
                  blend of technical expertise and strategic thinking to every
                  project. My passion lies in creating digital solutions that
                  not only meet business objectives but also deliver exceptional
                  user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With extensive experience in both frontend and backend
                  technologies, I understand the technical challenges teams face
                  and can bridge the communication gap between stakeholders and
                  development teams.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of emerging technologies to transform
                  industries and am constantly exploring new ways to leverage
                  AI, cloud computing, and modern development frameworks to
                  solve complex problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-3">{achievement.icon}</div>
                <h3 className="font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-400 text-xl text-center">
                Core Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-sm text-gray-400">
                    Embracing cutting-edge technologies to create breakthrough
                    solutions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Collaboration
                  </h4>
                  <p className="text-sm text-gray-400">
                    Building strong partnerships across teams and stakeholders
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Excellence</h4>
                  <p className="text-sm text-gray-400">
                    Delivering high-quality products that exceed expectations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-green-500/20 text-center"
        >
          <p className="text-sm text-gray-400">
            Designed for the future by{" "}
            <span className="text-green-400">Stakweb Limited</span>
          </p>
        </motion.footer>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default AboutPage;
