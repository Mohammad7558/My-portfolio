import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// Project data
const projects = [
  {
    title: "Athletic Event Management System",
    description:
      "A full-stack platform for organizing and managing athletic events with real-time booking capabilities.",
    image: "https://i.ibb.co/y1PSch2/assignment-11-client-sid-64337-web-app.png",
    tech: ["React", "Tailwind CSS", "Firebase", "MongoDB", "Express", "Node.js", "JWT"],
    live: "https://assignment-11-client-sid-64337.web.app/",
    github: "https://github.com/Mohammad7558/Athletic-Core-Frontend",
  },
  {
    title: "FreelancerHub",
    description:
      "A freelance marketplace where users can register, manage tasks, and bid. Includes dark mode and user authentication.",
    image: "https://i.ibb.co/nqpS5CRq/assignment-10-client-sid-c420b-web-app.png",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    live: "https://assignment-10-client-sid-c420b.web.app/",
    github: "https://github.com/Mohammad7558/Freelancer-Hub-Frontend",
  },
  {
    title: "Study Platform",
    description:
      "A Modern Study Platform A full-featured MERN stack-based study platform where users can register as a Student, Tutor, or Admin. Tutor – Create and sell your own courses, share your knowledge, and earn money. Student – Access a wide range of high-quality courses from the best tutors and enhance your learning journey. Admin – Manage tutors, student",
    image: "https://i.ibb.co.com/FbvKpnGB/68747470733a2f2f692e6962622e636f2e636f6d2f516a363453396b742f7468652d6c6173742d64616e63652d3132323766.png",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    live: "https://the-last-dance-1227f.web.app/",
    github: "https://github.com/Mohammad7558/Study-Platform",
  },
];

// Icon URLs for each tech stack
const techIcons = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React-Router": "https://img.icons8.com/color/48/react-native.png",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  JWT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-icon.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  "REST APIs": "https://img.icons8.com/external-flat-juicy-fish/60/external-api-coding-and-development-flat-flat-juicy-fish.png",
};

// Card Component
const ProjectCard = ({ project, index, techIcons }) => (
  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mb-16 mx-4 lg:mx-8">
    <div className="flex flex-col lg:flex-row items-center gap-6 p-6 md:p-8">
      {/* Project Image */}
      <div className="relative w-full lg:w-1/2 h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl border border-gray-200 group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto min-h-full object-cover transition-transform duration-[5000ms] ease-in-out group-hover:-translate-y-[calc(100%-24rem)]"
          style={{ transformOrigin: "top" }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-cyan-600 rounded-full font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
          >
            View Live Demo
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full lg:w-1/2 p-4 md:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-cyan-600"></div>
          <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="project"
              className="w-4 h-4"
            />
            Project 0{index + 1}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">{project.title}</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-5">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full text-sm font-medium"
            >
              <img
                src={techIcons[tech]}
                alt={tech}
                className="w-4 h-4"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-cyan-600 text-white rounded-full font-medium text-sm hover:bg-cyan-700 transition-colors duration-300 flex items-center gap-2"
          >
            <FiExternalLink className="w-5 h-5" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" />
            GitHub Code
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden mt-4 gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Main Project Section
const Project = () => {
  return (
    <section id="projects" className="py-20 mt-36 md:py-28 px-4 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="text-cyan-600">Featured Projects</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} techIcons={techIcons} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Let's collaborate to build something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-600 text-white rounded-full font-semibold text-base hover:bg-cyan-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/Mohammad7558"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold text-base hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
