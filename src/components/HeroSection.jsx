import React from "react";
import profilePicture from "../assets/tysentodd.png";
import { PROFILE } from "../constants/index.jsx";
import { motion } from "framer-motion";
import ProfileInfo from "./ProfileInfo"; // Import the ProfileInfo component

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-between">
      <motion.img
        src={profilePicture}
        alt={PROFILE.name}
        className="w-1/2 h-[600px] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="w-1/2 p-8 bg-black text-white flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-semibold uppercase tracking-wide">
          {PROFILE.name}
        </h1>
        {/* Use the ProfileInfo component for rotating info */}
        <ProfileInfo />
        {/* Display technologies */}
        <div className="pt-2 font-semibold text-lg">{PROFILE.technologies}</div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
