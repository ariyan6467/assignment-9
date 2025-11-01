import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/hero-plants.jpg";

const Banner = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-green-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bring Nature Home
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the perfect plants for your space and learn how to care for them
          with expert guidance.
        </motion.p>

        {/* Button */}
        <motion.button
          className="px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Plants
        </motion.button>
      </div>
    </section>
  );
};

export default Banner

