import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  Brain,
  Zap,
} from "lucide-react";
import MatrixBackground from "./MatrixBackground";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  level: number;
  description: string;
}

const SkillsPage = () => {
  const skills: Skill[] = [
    {
      name: "React & Next.js",
      icon: <Code2 className="h-6 w-6" />,
      category: "Frontend Development",
      level: 95,
      description:
        "Building modern, responsive web applications with React ecosystem",
    },
    {
      name: "TypeScript",
      icon: <Code2 className="h-6 w-6" />,
      category: "Frontend Development",
      level: 90,
      description: "Type-safe JavaScript development for scalable applications",
    },
    {
      name: "Python & Django",
      icon: <Server className="h-6 w-6" />,
      category: "Backend Development",
      level: 92,
      description: "Robust backend systems and API development",
    },
    {
      name: "Node.js & Express",
      icon: <Server className="h-6 w-6" />,
      category: "Backend Development",
      level: 88,
      description: "Server-side JavaScript and RESTful API development",
    },
    {
      name: "PostgreSQL & MongoDB",
      icon: <Database className="h-6 w-6" />,
      category: "Database Management",
      level: 90,
      description: "Database design, optimization, and management",
    },
    {
      name: "AWS & Cloud Services",
      icon: <Globe className="h-6 w-6" />,
      category: "Cloud Computing",
      level: 85,
      description: "Cloud infrastructure, deployment, and scaling solutions",
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      category: "Design",
      level: 87,
      description: "User-centered design and modern interface development",
    },
    {
      name: "Product Strategy",
      icon: <Brain className="h-6 w-6" />,
      category: "Product Management",
      level: 93,
      description: "Strategic product planning and roadmap development",
    },
    {
      name: "Agile & Scrum",
      icon: <Zap className="h-6 w-6" />,
      category: "Project Management",
      level: 90,
      description: "Agile methodologies and team leadership",
    },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: "Expert", color: "text-green-400" };
    if (level >= 80) return { label: "Advanced", color: "text-blue-400" };
    if (level >= 70) return { label: "Intermediate", color: "text-yellow-400" };
    return { label: "Beginner", color: "text-gray-400" };
  };

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
            Technical <span className="text-green-400">Skills</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </motion.div>

        {/* Skills by Category */}
        {categories.map((category, categoryIndex) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * categoryIndex, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-green-400">
              {category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => {
                  const skillLevel = getSkillLevel(skill.level);
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-green-400 mt-1">{skill.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">
                            {skill.name}
                          </h3>
                          <Badge
                            className={`${skillLevel.color} bg-transparent border-current`}
                          >
                            {skillLevel.label}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-gray-400 mb-4">
                        {skill.description}
                      </p>

                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 mt-2 block">
                        {skill.level}% Proficiency
                      </span>
                    </motion.div>
                  );
                })}
            </div>
          </motion.section>
        ))}

        {/* Certifications & Learning */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-400 text-xl">
                Continuous Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                I believe in continuous learning and staying updated with the
                latest technologies and industry trends. Currently exploring
                AI/ML integration, Web3 technologies, and advanced cloud
                architectures.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-blue-500/30 text-blue-400"
                >
                  Machine Learning
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500/30 text-purple-400"
                >
                  Blockchain
                </Badge>
                <Badge
                  variant="outline"
                  className="border-yellow-500/30 text-yellow-400"
                >
                  DevOps
                </Badge>
                <Badge
                  variant="outline"
                  className="border-pink-500/30 text-pink-400"
                >
                  Microservices
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.section>

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

export default SkillsPage;
