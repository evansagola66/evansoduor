import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  ArrowLeft,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  level: number;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: "completed" | "in-progress" | "concept";
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectsPage = () => {
  const skills: Skill[] = [
    {
      name: "HTML5",
      icon: <Code2 className="h-5 w-5" />,
      category: "Frontend",
      level: 95,
    },
    {
      name: "CSS3",
      icon: <Palette className="h-5 w-5" />,
      category: "Frontend",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <Code2 className="h-5 w-5" />,
      category: "Frontend",
      level: 92,
    },
    {
      name: "React",
      icon: <Code2 className="h-5 w-5" />,
      category: "Frontend",
      level: 88,
    },
    {
      name: "Bootstrap",
      icon: <Palette className="h-5 w-5" />,
      category: "Frontend",
      level: 85,
    },
    {
      name: "Shadcn/UI",
      icon: <Palette className="h-5 w-5" />,
      category: "Frontend",
      level: 80,
    },
    {
      name: "Figma",
      icon: <Palette className="h-5 w-5" />,
      category: "Design",
      level: 87,
    },
    {
      name: "Node.js",
      icon: <Server className="h-5 w-5" />,
      category: "Backend",
      level: 85,
    },
    {
      name: "Python",
      icon: <Code2 className="h-5 w-5" />,
      category: "Backend",
      level: 90,
    },
    {
      name: "Django",
      icon: <Server className="h-5 w-5" />,
      category: "Backend",
      level: 88,
    },
    {
      name: "Flask",
      icon: <Server className="h-5 w-5" />,
      category: "Backend",
      level: 82,
    },
    {
      name: "Go",
      icon: <Code2 className="h-5 w-5" />,
      category: "Backend",
      level: 75,
    },
    {
      name: "SQL",
      icon: <Database className="h-5 w-5" />,
      category: "Database",
      level: 90,
    },
    {
      name: "MongoDB",
      icon: <Database className="h-5 w-5" />,
      category: "Database",
      level: 85,
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-5 w-5" />,
      category: "Database",
      level: 88,
    },
    {
      name: "AWS",
      icon: <Globe className="h-5 w-5" />,
      category: "Cloud Computing",
      level: 82,
    },
    {
      name: "Google Cloud Platform",
      icon: <Globe className="h-5 w-5" />,
      category: "Cloud Computing",
      level: 78,
    },
    {
      name: "Azure",
      icon: <Globe className="h-5 w-5" />,
      category: "Cloud Computing",
      level: 75,
    },
    {
      name: "Alibaba Cloud",
      icon: <Globe className="h-5 w-5" />,
      category: "Cloud Computing",
      level: 70,
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Matrix Portfolio Website",
      description:
        "A futuristic portfolio website with glassmorphism design and matrix-themed animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      status: "in-progress",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with modern UI and robust backend architecture.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "Full Stack",
      status: "completed",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time analytics dashboard with machine learning insights and predictive modeling.",
      technologies: ["Python", "Django", "React", "TensorFlow"],
      category: "AI/ML",
      status: "completed",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Microservices Architecture",
      description:
        "Scalable microservices system built with Go and containerized with Docker.",
      technologies: ["Go", "Docker", "Kubernetes", "PostgreSQL"],
      category: "Backend",
      status: "concept",
      githubUrl: "#",
    },
  ];

  const skillCategories = [...new Set(skills.map((skill) => skill.category))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "concept":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
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
          className="border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-400"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </motion.div>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-green-400">Projects</span> &{" "}
          <span className="text-green-400">Expertise</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Showcasing innovative solutions across multiple technologies and
          frameworks
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
          Technical Expertise
        </h2>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-300">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-green-400">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 mt-1">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-black/40 backdrop-blur-md border border-green-500/20 hover:border-green-400/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>
                    <Badge
                      className={`${getStatusColor(project.status)} border`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit border-blue-500/30 text-blue-400"
                  >
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-green-500/10 text-green-400 border border-green-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-500/30 text-green-400 hover:bg-green-500/10 w-full sm:w-auto"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-green-500 text-black hover:bg-green-400 w-full sm:w-auto"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 pt-8 border-t border-green-500/20 text-center"
      >
        <p className="text-sm text-gray-400">
          Designed for the future by{" "}
          <span className="text-green-400">Stakweb Limited</span>
        </p>
      </motion.footer>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-lg animate-bounce"></div>
    </div>
  );
};

export default ProjectsPage;
