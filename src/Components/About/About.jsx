import React from "react";
import intro from "../../assets/guy-with-beanie.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-20 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <motion.img
            src={intro}
            alt="About me"
            className="w-32 h-32 md:w-40 md:h-40 object-cover"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              duration: 0.6,
            }}
            viewport={{ once: true }}
          />
        </div>

        {/* About Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-7">
          Assalamu Alaikum! I'm <span className="font-semibold text-gray-800">Mohammad</span>, 
          a <span className="text-cyan-600 font-semibold">Madrasa student</span> turned passionate web developer. 
          My programming journey started with simple HTML & CSS exercises, then I moved into JavaScript and React 
          through <span className="text-cyan-600 font-semibold">Programming Hero</span>. Life forced a pause for a while 
          due to studies, but I recently rejoined and picked up the 
          <span className="text-cyan-600 font-semibold"> MERN stack</span> (React, Node, Express, MongoDB) — 
          now building real projects again.
          <br />
          <br />
          I enjoy building <span className="text-cyan-600 font-semibold">modern, responsive</span> and 
          <span className="text-purple-600 font-semibold"> user-friendly</span> web apps that solve real problems. 
          Clean code, clear UX, and reliable performance excite me the most — whether it's a sleek frontend 
          or a solid backend API.
          <br />
          <br />
          Outside programming I love playing <span className="text-cyan-600 font-semibold">football</span>, 
          which keeps me active and clears my mind. I also enjoy reading and experimenting with small side 
          projects — that mix of physical activity and tinkering keeps my creativity flowing. I'm curious, 
          persistent, and I learn by building.
        </p>
      </div>
    </section>
  );
};

export default About;
