import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Home from "./components/home";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import CircularNavigation from "./components/CircularNavigation";
import routes from "tempo-routes";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <CircularNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-black/60 backdrop-blur-lg border-2 border-green-500/60 flex items-center justify-center text-green-400 hover:text-green-200 hover:border-green-300 hover:shadow-lg hover:shadow-green-500/30 hover:bg-gradient-to-br hover:from-green-500/30 hover:to-black/70 transition-all duration-300"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </>
    </Suspense>
  );
}

export default App;
