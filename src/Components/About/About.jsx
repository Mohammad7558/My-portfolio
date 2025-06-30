import React from "react";
import intro from "../../assets/guy-with-beanie.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-36 px-6 md:px-20 bg-white text-gray-800">
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
        <p className="text-lg leading-relaxed mb-10">
          Assalamu Alaikum! I'm a passionate{" "}
          <span className="text-cyan-600 font-semibold">Madrasa student</span>{" "}
          with a deep love for technology and creativity. Since childhood, I've
          dreamed of becoming a programmer. That dream led me to enroll in{" "}
          <span className="text-cyan-600 font-semibold">Programming Hero</span>,
          where I began my journey with the{" "}
          <span className="text-cyan-600 font-semibold">MERN Stack</span>.
          <br />
          <br />
          Although I had to pause my learning due to my academic studies, I
          didn’t let that stop me. Recently, I rejoined Programming Hero and
          have been actively building my skills again. I’m currently shaping my
          path as a <span className="text-cyan-600 font-semibold">junior full-stack developer</span>, with a strong interest in both
          frontend and backend development.
          <br />
          <br />
          I especially enjoy working on{" "}
          <span className="text-cyan-600 font-semibold">modern, responsive websites</span> that are both functional and
          user-friendly. Clean code, smooth user experience, and solving real
          problems are what drive me forward as a developer.
          <br />
          <br />
          Beyond programming, I love playing{" "}
          <span className="text-cyan-600 font-semibold">football</span>. It keeps me active, balanced, and helps refresh my
          mind. Whether on the field or behind the screen, I always bring energy,
          dedication, and a learner's mindset.
        </p>
      </div>
    </section>
  );
};

export default About;
