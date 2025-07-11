import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  description: string;
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
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          className="h-6 w-6"
          alt="HTML5"
        />
      ),
      category: "Frontend",
      level: 95,
      description:
        "Semantic markup language for structuring web content with modern HTML5 features and accessibility standards.",
    },
    {
      name: "CSS3",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          className="h-6 w-6"
          alt="CSS3"
        />
      ),
      category: "Frontend",
      level: 90,
      description:
        "Advanced styling with CSS3 features including flexbox, grid, animations, and responsive design principles.",
    },
    {
      name: "JavaScript",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          className="h-6 w-6"
          alt="JavaScript"
        />
      ),
      category: "Frontend",
      level: 92,
      description:
        "Modern JavaScript ES6+ with expertise in DOM manipulation, async programming, and functional programming concepts.",
    },
    {
      name: "React",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          className="h-6 w-6"
          alt="React"
        />
      ),
      category: "Frontend",
      level: 88,
      description:
        "Component-based UI library with hooks, context API, and modern React patterns for building interactive applications.",
    },
    {
      name: "Bootstrap",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          className="h-6 w-6"
          alt="Bootstrap"
        />
      ),
      category: "Frontend",
      level: 85,
      description:
        "Responsive CSS framework for rapid UI development with pre-built components and utility classes.",
    },
    {
      name: "Shadcn/UI",
      icon: (
        <div className="h-6 w-6 bg-gradient-to-br from-slate-900 to-slate-700 rounded flex items-center justify-center text-white text-xs font-bold">
          UI
        </div>
      ),
      category: "Frontend",
      level: 80,
      description:
        "Modern React component library built on Radix UI and Tailwind CSS for accessible and customizable interfaces.",
    },
    {
      name: "Figma",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          className="h-6 w-6"
          alt="Figma"
        />
      ),
      category: "Design",
      level: 87,
      description:
        "Collaborative design tool for creating user interfaces, prototypes, and design systems with component libraries.",
    },
    {
      name: "Node.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          className="h-6 w-6"
          alt="Node.js"
        />
      ),
      category: "Backend",
      level: 85,
      description:
        "Server-side JavaScript runtime for building scalable network applications and RESTful APIs.",
    },
    {
      name: "Python",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          className="h-6 w-6"
          alt="Python"
        />
      ),
      category: "Backend",
      level: 90,
      description:
        "Versatile programming language for web development, data analysis, automation, and machine learning applications.",
    },
    {
      name: "Django",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          className="h-6 w-6"
          alt="Django"
        />
      ),
      category: "Backend",
      level: 88,
      description:
        "High-level Python web framework for rapid development with built-in admin, ORM, and security features.",
    },
    {
      name: "Flask",
      icon: <Code2 className="h-6 w-6 text-gray-300" />,
      category: "Backend",
      level: 82,
      description:
        "Lightweight Python web framework for building APIs and web applications with flexibility and simplicity.",
    },
    {
      name: "Go",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
          className="h-6 w-6"
          alt="Go"
        />
      ),
      category: "Backend",
      level: 75,
      description:
        "Fast, statically typed programming language designed for building efficient, concurrent server applications.",
    },
    {
      name: "SQL",
      icon: <Database className="h-6 w-6 text-blue-400" />,
      category: "Database",
      level: 90,
      description:
        "Structured Query Language for managing relational databases, complex queries, and data optimization.",
    },
    {
      name: "MongoDB",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          className="h-6 w-6"
          alt="MongoDB"
        />
      ),
      category: "Database",
      level: 85,
      description:
        "NoSQL document database for flexible, scalable data storage with JSON-like documents and aggregation pipelines.",
    },
    {
      name: "PostgreSQL",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          className="h-6 w-6"
          alt="PostgreSQL"
        />
      ),
      category: "Database",
      level: 88,
      description:
        "Advanced open-source relational database with ACID compliance, JSON support, and powerful query capabilities.",
    },
    {
      name: "AWS",
      icon: <Server className="h-6 w-6 text-orange-400" />,
      category: "Cloud Computing",
      level: 82,
      description:
        "Amazon Web Services cloud platform for scalable computing, storage, and deployment solutions.",
    },
    {
      name: "Google Cloud Platform",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
          className="h-6 w-6"
          alt="Google Cloud"
        />
      ),
      category: "Cloud Computing",
      level: 78,
      description:
        "Google's cloud computing services for machine learning, data analytics, and application deployment.",
    },
    {
      name: "Azure",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
          className="h-6 w-6"
          alt="Azure"
        />
      ),
      category: "Cloud Computing",
      level: 75,
      description:
        "Microsoft's cloud platform offering computing, analytics, storage, and networking services.",
    },
    {
      name: "Alibaba Cloud",
      icon: <Globe className="h-6 w-6 text-orange-400" />,
      category: "Cloud Computing",
      level: 70,
      description:
        "Chinese cloud computing platform providing elastic computing, database, and AI services globally.",
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
          className="border-green-500/60 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 active:bg-green-500/40 active:border-green-300 active:text-white active:shadow-lg active:shadow-green-500/30 transition-all duration-200 md:px-4 px-2 md:py-2 py-1.5"
        >
          <ArrowLeft className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline">Back</span>
        </Button>
      </motion.div>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-green-400">Projects</span> &{" "}
          <span className="text-green-400">Expertise</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
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
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-green-300">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 group cursor-pointer"
                        >
                          <div className="flex flex-col items-center text-center space-y-3">
                            <div className="group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i < Math.floor(skill.level / 20)
                                      ? "bg-green-400 shadow-sm shadow-green-400/50"
                                      : "bg-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-400 font-medium">
                              {skill.level >= 90
                                ? "Expert"
                                : skill.level >= 80
                                  ? "Advanced"
                                  : skill.level >= 70
                                    ? "Intermediate"
                                    : "Beginner"}
                            </span>
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs bg-black/90 border-green-500/30 text-green-100">
                        <p className="text-sm">{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
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
                        className="border-green-500/60 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 active:bg-green-500/40 active:border-green-300 active:text-white active:shadow-lg active:shadow-green-500/30 transition-all duration-200 w-full sm:w-auto"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-green-500 text-black hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/25 active:bg-green-600 active:scale-95 transition-all duration-200 w-full sm:w-auto"
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
