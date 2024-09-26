'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

const CircleWithArrow = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const circleVariants = {
    hidden: { strokeDashoffset: 1000 },
    visible: {
      strokeDashoffset: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const hoverVariants = {
    hidden: { strokeDashoffset: 1000, transition: {
      duration: 2,
      ease: "easeInOut",
    }, },
    visible: {
      strokeDashoffset: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: "relative" }}>
        {/* Original Circle Border Animation */}
        <motion.circle
          cx="75"
          cy="75"
          r="50"
          fill="transparent"
          stroke="#3498db"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Hover Circle Border Animation */}
        <motion.circle
          cx="75"
          cy="75"
          r="50"
          fill="transparent"
          stroke="#e74c3c" // Change to red on hover
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          variants={hoverVariants}
          initial="hidden"
          whileHover="visible"
           // Triggers the hover animation
        />
      </svg>
      {/* <motion.div className="absolute inset-0 flex justify-center items-center"   variants={arrowVariants}
          initial="hidden"
          animate="visible">
        <FaArrowDown />
        </motion.div> */}
    </div>
  );
};

export default CircleWithArrow;
