import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import projects from "./ProjectData";

const TechPill = ({ name, techIcons }) => (
  <div className="flex items-center gap-2 bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full text-sm font-medium">
    <img
      src={techIcons[name]}
      alt={name}
      className="w-4 h-4"
      onError={(e) => (e.target.style.display = "none")}
    />
    <span>{name}</span>
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Icon URLs for each tech stack
  const techIcons = {
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React-Router": "https://img.icons8.com/color/48/react-native.png",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    JWT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-icon.svg",
    Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "REST APIs": "https://img.icons8.com/external-flat-juicy-fish/60/external-api-coding-and-development-flat-flat-juicy-fish.png",
  };

  if (!project) {
    return (
      <section className="py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 bg-cyan-600 text-white rounded-full"
            >
              Go Back
            </button>
            <Link to="/" className="px-5 py-2.5 border rounded-full">
              Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-cyan-600 hover:underline"
          >
            <FiArrowLeft /> Back
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left: Image */}
            <div className="lg:w-1/2 w-full">
              <div className="h-80 lg:h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:w-1/2 w-full p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-cyan-600"></div>
                <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                  Project Details
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>

              <p className="text-gray-600 mb-6">{project.description}</p>

              {/* Tech stack */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Main Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <TechPill key={i} name={t} techIcons={techIcons} />
                  ))}
                </div>
              </div>

              {/* Live & GitHub */}
              <div className="flex flex-wrap gap-3 items-center mb-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-600 text-white rounded-full font-medium hover:bg-cyan-700 transition"
                >
                  <FiExternalLink />
                  View Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  <FaGithub />
                  Client Repo
                </a>

                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                  className="ml-auto text-sm text-gray-600 hover:underline"
                >
                  Jump to challenges & plans
                </button>
              </div>

              {/* Challenges */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges faced</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Potential improvements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Potential improvements & future plans</h3>
                <ul className="list-decimal pl-5 text-gray-600 space-y-2">
                  {project.futurePlans.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Meta / small footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-4">
                <span className="text-sm text-gray-500">Tech count: {project.tech.length}</span>
                <span className="text-sm text-gray-500">Project ID: {project.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;