import React, { useState, useEffect } from "react";
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

  // Scroll with offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100;
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    console.log("Download resume clicked");
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-50/90 backdrop-blur shadow-sm lg:px-0 px-4">
      <div className="container mx-auto flex justify-between items-center py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="w-38 sm:w-32 md:w-40 lg:w-48 transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-slate-800 font-medium">
          {navItems.map(({ name, icon, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-2 py-1 text-sm lg:text-base transition-colors duration-200 ${
                activeSection === id
                  ? "text-cyan-600 font-semibold"
                  : "text-slate-600 hover:text-cyan-600"
              }`}
            >
              {icon}
              {name}
            </a>
          ))}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 lg:px-5 py-2 text-sm lg:text-base rounded-full font-medium hover:bg-cyan-700 transition"
          >
            Download Resume
          <FiDownload size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-600 text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t animate-slideDown">
          <div className="w-11/12 mx-auto px-4 py-4 space-y-3">
            {navItems.map(({ name, icon, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm sm:text-base transition-colors duration-200 ${
                  activeSection === id
                    ? "bg-cyan-50 text-cyan-600"
                    : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
                }`}
              >
                {icon}
                {name}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="w-full mt-2 flex justify-center items-center gap-2 bg-cyan-600 text-white px-4 py-3 text-sm sm:text-base rounded-full font-medium hover:bg-cyan-700 transition"
            >
              <FiDownload size={18} />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
