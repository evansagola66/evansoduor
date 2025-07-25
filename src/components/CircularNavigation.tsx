import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();

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
    { icon: <User className="h-5 w-5" />, label: "About", href: "/about" },
    {
      icon: <Briefcase className="h-5 w-5" />,
      label: "Projects",
      href: "/projects",
    },
    { icon: <Code className="h-5 w-5" />, label: "Skills", href: "/skills" },
    { icon: <Mail className="h-5 w-5" />, label: "Contact", href: "/contact" },
  ];

  if (isMobile) {
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-3 py-2.5 backdrop-blur-md bg-black/40 border-b border-green-500/20 ${className}`}
      >
        <div className="flex justify-between items-center">
          <div className="text-green-500 font-bold text-base sm:text-lg">
            Evans Oduor
          </div>
          <div className="flex space-x-3 sm:space-x-4">
            {navItems.map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className={`text-green-400 hover:text-green-300 transition-colors duration-300 p-1.5 rounded-md hover:bg-green-500/10 ${
                        location.pathname === item.href
                          ? "text-green-200 bg-green-500/20"
                          : ""
                      }`}
                    >
                      <div className="w-5 h-5">{item.icon}</div>
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
                    className="absolute top-1/2 left-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg border-2 border-green-500/40 flex items-center justify-center text-green-400 hover:text-green-200 hover:border-green-300 hover:shadow-lg hover:shadow-green-500/30 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-black/60 transition-all duration-300 group"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      opacity: 1,
                    }}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-black/90 border-green-500/50 text-green-100">
                  <p className="font-medium">{item.label}</p>
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
