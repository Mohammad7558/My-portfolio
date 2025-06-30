import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative lg:h-[90vh] flex items-center justify-center py-20 overflow-hidden bg-gray-50 text-gray-900 scroll-m-0"
    >
      {/* ✅ SVG Box Pattern Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-box-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Vertical Line */}
            <line x1="0" y1="0" x2="0" y2="40" stroke="#0e7490" strokeWidth="1" />
            {/* Horizontal Line */}
            <line x1="0" y1="0" x2="40" y2="0" stroke="#0e7490" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-box-pattern)" />
      </svg>

      {/* 🔵 Background Blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[250px] h-[250px] bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-[-100px] right-[-60px] w-[230px] h-[230px] bg-purple-300 rounded-full blur-2xl opacity-30 animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="w-11/12 mx-auto">
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 justify-between">
          
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-800">
              Hi, I'm <span className="text-cyan-700">Mohammad</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-gray-700">
              A passionate{" "}
              <span className="text-cyan-600 font-semibold">
                Full Stack Developer
              </span>{" "}
              crafting modern web experiences with the{" "}
              <span className="text-purple-600 font-semibold">MERN Stack</span>.
            </p>
            <p className="text-md sm:text-lg text-gray-600">
              I turn ideas into scalable and responsive web applications.
            </p>
            <a
              id="#projects"
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
            >
              View My Work <FiArrowRight className="text-lg" />
            </a>

            <div className="flex justify-center md:justify-start space-x-6 text-3xl text-cyan-600">
              <a
                href="https://github.com/Mohammad7558/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-800 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammod-bin-amin-b051a0244/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-800 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/iam_MOHAMMOD"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-800 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative w-[250px] h-[400px] sm:w-[300px] sm:h-[490px] flex items-end justify-start">
            {/* ✅ Blob Under Image */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[220px] h-[120px] bg-cyan-300 rounded-full blur-2xl opacity-25 z-0"></div>

            {/* Background Layer */}
            <div className="border-3 border-white absolute bottom-0 left-0 w-full h-full bg-blue-400 rounded-2xl shadow-md rotate-[2deg] z-0"></div>

            {/* Animated Main Image */}
            <div
              className={`relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-400 ease-out ${
                isAnimated ? "-rotate-[4deg] -translate-x-10 -translate-y-7" : ""
              }`}
              style={{
                transitionDelay: "0",
              }}
            >
              <img
                src="https://i.ibb.co/HTP5LW0N/IMG-3759.jpg"
                alt="Mohammad"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
