import React from "react";
import { ABOUT } from "../constants/index.jsx";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <motion.h2
        className="mt-20 mb-20 text-center text-6xl fontsemibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <motion.p
        className="mr-24 pl-4 text-xl leading-loose"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text2}
      </motion.p>
      <motion.p
        className="mr-24 mt-10 pl-4 text-xl leading-loose"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text3}
      </motion.p>
      <div className="flex justify-center mt-10">
        <motion.img
          src={ABOUT.image}
          alt="About Us"
          className="w-1/3 h-auto object-cover rounded-[40px] shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default About;
