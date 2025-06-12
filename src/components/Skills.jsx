import React from "react";
import { SKILLS } from "../constants/index.jsx";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1, // Staggers the fade-in of each row
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Skills = () => {
  return (
    <div className="container mx-auto py-16" id="skills">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Skills
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {SKILLS.length > 0 ? (
          SKILLS.map((skill, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg shadow-lg transform transition hover:scale-105"
            >
              <div className="mb-4 text-5xl">{skill.icon}</div>
              <h3 className="mb-2 text-2xl font-semibold">{skill.name}</h3>
              <span className="text-md text-gray-400 font-medium">
                {skill.experience}
              </span>
            </motion.div>
          ))
        ) : (
          <p className="text-white">No skills available.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Skills;
