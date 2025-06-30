import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo-removebg-preview.png";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Navigation items
const navItems = [
  { name: "Home", icon: <FiHome size={18} />, id: "home" },
  { name: "About", icon: <FiUser size={18} />, id: "about" },
  { name: "Skills", icon: <FiCode size={18} />, id: "skills" },
  { name: "Projects", icon: <FiFolder size={18} />, id: "projects" },
  { name: "Contact", icon: <FiMail size={18} />, id: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const containerRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const targetRect = e.currentTarget.getBoundingClientRect();
    setHighlightStyle({
      top: targetRect.top - containerRect.top,
      left: targetRect.left - containerRect.left,
      width: targetRect.width,
      height: targetRect.height,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle((prev) => (prev ? { ...prev, opacity: 0 } : null));
  };

  // Enhanced scroll handler with intersection observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    // Also use IntersectionObserver for more accurate detection
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleResumeDownload = () => {
    // Add your resume download logic here
    console.log("Download resume clicked");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-50/50 shadow-sm">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Logo" className="w-48" />
        </Link>

        <nav
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
          className="hidden md:flex relative items-center gap-8 text-slate-800 font-medium select-none"
        >
          {highlightStyle && (
            <motion.div
              animate={highlightStyle}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="pointer-events-none absolute bg-cyan-600 rounded-md z-[-1]"
              style={{
                top: highlightStyle.top,
                left: highlightStyle.left,
                width: highlightStyle.width,
                height: highlightStyle.height,
                opacity: highlightStyle.opacity,
              }}
            />
          )}

          {navItems.map(({ name, icon, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onMouseEnter={handleMouseEnter}
              className={`relative z-10 cursor-pointer px-3 py-1 rounded-md transition-colors duration-200 flex items-center gap-2
                ${
                  activeSection === id
                    ? "text-white bg-cyan-600"
                    : "hover:text-white"
                }
              `}
              onClick={() => setActiveSection(id)}
            >
              {icon}
              {name}
              {/* Active indicator for desktop */}
              {activeSection === id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-cyan-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={handleResumeDownload}
            className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 hover:scale-105 transition-all duration-300 text-white px-5 py-2 rounded-full shadow font-medium flex items-center gap-2"
          >
            <FiDownload size={18} />
            Download Resume
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 text-2xl focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-50/90 backdrop-blur"
          >
            <div className="w-11/12 mx-auto px-4 py-4 space-y-2">
              {navItems.map(({ name, icon, id }, index) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(id);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className={`block cursor-pointer px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2 relative
                    ${
                      activeSection === id
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-blue-100 hover:text-blue-600"
                    }
                  `}
                >
                  {icon}
                  {name}
                  {/* Active indicator for mobile */}
                  {activeSection === id && (
                    <motion.span
                      layoutId="activeIndicatorMobile"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.button
                onClick={handleResumeDownload}
                className="w-full mt-4 mb-2 cursor-pointer bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300 text-white px-4 py-2 rounded-full shadow font-medium flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FiDownload size={18} />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;