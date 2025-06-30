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

const SkillBadge = ({ icon, name }) => (
  <div className="flex flex-col items-center text-center gap-2 bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="text-4xl">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

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
        className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
      >
        <h4 className="font-semibold text-cyan-600 mb-2 text-lg">
          {item.title}
        </h4>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
);


const Skills = () => {
  return (
    <section id="skills" className="pt-36 px-6 md:px-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
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
    </section>
  );
};

export default Skills;
