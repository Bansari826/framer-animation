"use client";
import React, { useState } from "react";
import { motion, spring, useAnimation } from "framer-motion";
const Demo1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const control = useAnimation();
  return (
    <>
      <div className="p-10 flex gap-10">
        <div>
          {" "}
          <h3>This is div</h3>
          <motion.div
            className="bg-red-500 w-40 h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transform: { delay: 1 } }}
          />
        </div>
        <div>
          <h3>This is keyframes div</h3>
          <motion.div
            className="bg-blue-600 w-40 h-40"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          />
        </div>
        <div>
          <h3>This is button</h3>
          <motion.button
            className="bg-yellow-300 w-40 h-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
      <div className="p-10 flex flex-col gap-10">
        <div>
          <h3>This is animate div</h3>
          <motion.div
            className="bg-green-300 w-20 h-20"
            animate={{
              x: isAnimating ? 400 : 0,
              opacity: isAnimating ? 1 : 0.5,
              // backgroundColor:"blue",
              // scale:2
              rotate: isAnimating ? 180 : 0,
            }}
            initial={{
              opacity: 0.1,
            }}
            transition={{
              // duration:1,
              type: "spring",
              stiffness: 100,
              // damping:5
            }}
            onClick={() => {
              setIsAnimating(!isAnimating);
            }}
          >
            click
          </motion.div>
        </div>
        <div>
          {" "}
          <h3>This is darg div</h3>
          <motion.div
            className="bg-violet-300 w-20 h-20"
            drag
            dragConstraints={{
              right: 20,
              left: -20,
              top: 20,
              bottom: 20,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          ></motion.div>
        </div>
        <div>
          {" "}
          <h3>This is variants div</h3>
          <motion.div
            className="bg-sky-500 w-40 h-40 flex flex-col justify-center items-center"
            variants={boxVariant}
            animate="visible"
            initial="hidden"
          >
            <motion.ul>
              {[1, 2, 3, 4].map((i, index) => (
                <motion.li
                  key={index}
                  variants={listVariant}
                  className="w-2 h-2 bg-white p-3 list-none m-1"
                ></motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        <div>
          <h3>This is useAnimation</h3>
          <div className="flex items-center gap-4 py-1">
            <button
              className="px-4 py-2 bg-pink-300"
              onClick={() => {
                control.start({
                  x: 500,
                  transition: {
                    duration: 1,
                  },
                });
              }}
            >
              Move Right
            </button>
            <button
              className="px-4 py-2 bg-pink-300"
              onClick={() => {
                control.start({
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                });
              }}
            >
              Move Left
            </button>
            <button
              className="px-4 py-2 bg-pink-300"
              onClick={() => {
                control.start({
                  borderRadius: "50%",
                  transition: {
                    duration: 1,
                  },
                });
              }}
            >
              Circle
            </button>
            <button
              className="px-4 py-2 bg-pink-300"
              onClick={() => {
                control.start({
                  borderRadius: 0,
                  transition: {
                    duration: 1,
                  },
                });
              }}
            >
              Square
            </button>
            <button
              className="px-4 py-2 bg-pink-300"
              onClick={() => {
                control.stop();
              }}
            >
              Stop
            </button>
          </div>
          <motion.div
            className="bg-violet-950 w-40 h-40 flex flex-col justify-center items-center my-3"
            animate={control}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Demo1;
