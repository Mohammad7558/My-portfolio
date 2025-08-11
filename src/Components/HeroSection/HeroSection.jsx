import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";

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
      className="relative lg:h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-gray-50 text-gray-900 scroll-mt-[100px]"
    >
      {/* SVG Pattern Background */}
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
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="#0e7490"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="0"
              x2="40"
              y2="0"
              stroke="#0e7490"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-box-pattern)" />
      </svg>

      {/* Decorative Blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[250px] h-[250px] bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-60px] w-[230px] h-[230px] bg-purple-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>

      {/* Main Content */}
      <div className="container mx-auto lg:px-0 px-4">
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 justify-between">
          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left space-y-8">
            <h1 className="text-4xl lg:mt-0 mt-5 sm:text-5xl font-extrabold leading-tight text-gray-800">
              Hi, I'm <span className="text-cyan-700">Mohammad</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-700 max-w-lg mx-auto md:mx-0">
              A dedicated{" "}
              <span className="text-cyan-600">Full Stack Developer</span>{" "}
              focused on building{" "}
              <span className="text-purple-600">modern, efficient,</span> and
              <span className="text-purple-600"> scalable</span> web
              applications using the powerful{" "}
              <span className="text-cyan-600">MERN Stack</span>.
            </p>
            <p className="text-md sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              I specialize in creating seamless user experiences with clean,
              maintainable code, integrating secure authentication, and
              optimizing performance for fast load times. Let's bring your ideas
              to life with cutting-edge technologies!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {/* Outline Button */}
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-cyan-600 text-cyan-600 font-semibold
               hover:bg-cyan-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </a>

              {/* Solid Button */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold
               hover:bg-cyan-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              >
                Download Resume
                <FiDownload className="ml-2" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 text-3xl text-cyan-600 ">
              <a
                href="https://github.com/Mohammad7558/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammod-bin-amin-b051a0244/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-800 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/iam_MOHAMMOD"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-800 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-[300px] sm:w-[300px] md:w-[350px] flex items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute w-[90%] h-[90%] bg-cyan-300 rounded-2xl blur-3xl opacity-30"></div>

            {/* Image Frame */}
            <div
              className={`relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 ease-out ${
                isAnimated ? "rotate-0 scale-105" : "rotate-3 scale-95"
              }`}
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
