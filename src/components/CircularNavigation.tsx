import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface CircularNavigationProps {
  className?: string;
}

const CircularNavigation = ({ className = "" }: CircularNavigationProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const navItems: NavItem[] = [
    { icon: <Home className="h-5 w-5" />, label: "Home", href: "/" },
    { icon: <User className="h-5 w-5" />, label: "About", href: "#about" },
    {
      icon: <Briefcase className="h-5 w-5" />,
      label: "Projects",
      href: "/projects",
    },
    { icon: <Code className="h-5 w-5" />, label: "Skills", href: "#skills" },
    { icon: <Mail className="h-5 w-5" />, label: "Contact", href: "#contact" },
  ];

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  if (isMobile) {
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3 backdrop-blur-md bg-black/30 border-b border-green-500/20 ${className}`}
      >
        <div className="flex justify-between items-center">
          <div className="text-green-500 font-bold text-lg">Evans Oduor</div>
          <div className="flex space-x-4">
            {navItems.map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className="text-green-400 hover:text-green-300 transition-colors duration-300"
                    >
                      {item.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      className={`fixed bottom-10 right-10 z-50 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-[300px] h-[300px]">
        {/* Center button */}
        <motion.button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-green-500/50 flex items-center justify-center z-10 text-green-500 hover:text-green-300 transition-colors duration-300"
          onClick={toggleNavigation}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-xl font-bold">EO</span>
        </motion.button>

        {/* Navigation items in a circle */}
        {navItems.map((item, index) => {
          // Calculate position in the circle
          const angle = (index * (360 / navItems.length) * Math.PI) / 180;
          const radius = 110; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-green-500/30 flex items-center justify-center text-green-400 hover:text-green-300 hover:border-green-400 transition-colors duration-300"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    {item.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default CircularNavigation;
