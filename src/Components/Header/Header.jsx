import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const navItems = [
  { name: "Home", icon: <FiHome size={18} />, id: "home" },
  { name: "About", icon: <FiUser size={18} />, id: "about" },
  { name: "Skills", icon: <FiCode size={18} />, id: "skills" },
  { name: "Projects", icon: <FiFolder size={18} />, id: "projects" },
  { name: "Contact", icon: <FiMail size={18} />, id: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Enhanced scroll function with better mobile handling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Different header offsets for mobile and desktop
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 80 : 100;

      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  // Enhanced scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollPosition = window.scrollY + (isMobile ? 100 : 120);

      // Find the current active section
      let currentSection = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = item.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleResumeDownload = () => {
    console.log("Download resume clicked");
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Handle navigation click
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // Close mobile menu after navigation
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-sm shadow-sm lg:px-0 px-4">
        <div className="container mx-auto flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 z-60">
            <img
              src={logo}
              alt="Logo"
              className="w-32 sm:w-32 md:w-40 lg:w-48 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 text-slate-800 font-medium">
            {navItems.map(({ name, icon, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center gap-2 px-3 py-2 text-sm lg:text-base transition-all duration-200 rounded-lg ${
                  activeSection === id
                    ? "text-cyan-600 font-semibold bg-cyan-50"
                    : "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50"
                }`}
              >
                {icon}
                {name}
              </button>
            ))}
          </nav>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a
              href="/public/resume.pdf"
              download="My-Resume.pdf"
              onClick={handleResumeDownload}
              className="flex items-center gap-2 bg-cyan-600 text-white px-4 lg:px-5 py-2 text-sm lg:text-base rounded-full font-medium hover:bg-cyan-700 transition-colors duration-300 shadow-sm"
            >
              Download Resume
              <FiDownload size={18} />
            </a>
          </div>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden text-cyan-600 text-2xl p-2 rounded-lg hover:bg-cyan-50 transition-colors duration-200 z-60 relative overflow-hidden"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.div
                initial={false}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  scale: isOpen ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
              >
                <FiMenu />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  rotate: isOpen ? 0 : -45,
                  scale: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
              >
                <FiX />
              </motion.div>
            </div>
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay with Advanced Animation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop with blur effect */}
            <motion.div
              className="absolute inset-0 backdrop-blur-md"
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel with slide and scale animation */}
            <motion.div
              className="mobile-menu-container absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b shadow-2xl"
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1
              }}
              exit={{
                y: -100,
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
            >
              {/* Header space to avoid overlap */}
              <div className="h-16 md:h-20 bg-gradient-to-b from-cyan-50/50 to-transparent"></div>

              {/* Menu Items with staggered animation */}
              <motion.div
                className="px-6 py-6 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map(({ name, icon, id }, index) => (
                  <motion.button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-base transition-all duration-300 ${
                      activeSection === id
                        ? "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-600/25"
                        : "text-slate-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-cyan-100 hover:text-cyan-700 hover:shadow-md"
                    }`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="text-xl"
                      animate={activeSection === id ? {
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {icon}
                    </motion.div>
                    <span className="font-medium">{name}</span>
                  </motion.button>
                ))}

                {/* Mobile Resume Button with enhanced animation */}
                <motion.div
                  className="pt-4 mt-4 border-t border-gray-200/50"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="/public/resume.pdf"
                    download="My-Resume.pdf"
                    onClick={() => {
                      handleResumeDownload();
                      setIsOpen(false);
                    }}
                    className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-4 text-base rounded-xl font-semibold shadow-lg shadow-cyan-600/25 hover:shadow-xl hover:shadow-cyan-600/30 transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      backgroundImage: "linear-gradient(to right, #0891b2, #0e7490)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FiDownload size={20} />
                    </motion.div>
                    Download Resume
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;