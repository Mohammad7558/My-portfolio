import React from "react";
import vsCode from "../../assets/vsCode.svg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiReactrouter,
} from "react-icons/si";

// Background Elements Component
const BackgroundElements = () => (
  <>
    {/* SVG Box Pattern */}
    <svg
  className="absolute inset-0 w-full h-full opacity-10"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <pattern
      id="box-pattern"
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
  <rect width="100%" height="100%" fill="url(#box-pattern)" />
</svg>

    {/* Blurred Blob Shapes */}
    <div className="absolute -left-20 -top-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
  </>
);

// Skill Badge Component
const SkillBadge = ({ icon, name }) => (
  <div className="flex flex-col items-center text-center gap-2 bg-white/80 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all backdrop-blur-sm hover:scale-105">
    <div className="text-4xl">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

// Skill Section Component
const SkillSection = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-gray-800 border-l-4 border-cyan-600 pl-4 mb-6">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {skills.map((skill, index) => (
        <SkillBadge key={index} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);

// Skills Data
const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-600" /> },
  { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  {
    name: "VS Code",
    icon: <img src={vsCode} alt="VS Code" className="w-8 h-8 object-contain" />,
  },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

// Additional Highlights Component
const AdditionalHighlights = () => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
    {[
      {
        title: "Clean Code",
        desc: "Write readable, maintainable code with best practices.",
      },
      {
        title: "Responsive Design",
        desc: "Ensure great UX across devices with mobile-first approach.",
      },
      {
        title: "Performance Optimization",
        desc: "Focus on fast load times and smooth user experience.",
      },
      {
        title: "Authentication",
        desc: "Implement secure login and user management systems.",
      },
      {
        title: "API Integration",
        desc: "Connect frontend and backend with clean APIs.",
      },
      {
        title: "Team Collaboration",
        desc: "Comfortable using Git & GitHub for team projects.",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all bg-white/80 backdrop-blur-sm hover:-translate-y-1"
      >
        <h4 className="font-semibold text-cyan-600 mb-2 text-lg">
          {item.title}
        </h4>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
);

// Main Skills Component
const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-26 mt-36 px-6 md:px-16 bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      <BackgroundElements />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A MERN stack developer passionate about building scalable, clean,
            and responsive web applications.
          </p>
        </div>
        
        <SkillSection title="Frontend Development" skills={frontendSkills} />
        <SkillSection title="Backend Development" skills={backendSkills} />
        <SkillSection title="Tools & Platforms" skills={tools} />

        <h3 className="text-2xl font-semibold text-gray-800 mt-16 mb-6 border-b border-cyan-600 inline-block pb-1">
          Development Highlights
        </h3>
        <AdditionalHighlights />
      </div>

      {/* Add this to your global CSS or CSS file */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Skills;