import React from "react";
import { PROJECTS } from "../constants/index.jsx";
import Card from "../components/Card.jsx";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <div id="projects">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView={"visible"}
        variants={containerVariants}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center py-8"
        initial="hidden"
        whileInView={"visible"}
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div variants={itemVariants} key={index}>
            <Card
              video={project.video}
              image={project.image}
              title={project.title}
              date={project.date}
              technologies={project.technologies}
              subtitle={project.subtitle}
              link={project.link}
              demoLink={project.demoLink}
              sourceLink={project.sourceLink}
              timeline={project.timeline}
              keyObjectives={project.keyObjectives}
              additionalDetails={project.additionalDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
