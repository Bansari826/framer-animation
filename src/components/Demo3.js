"use client";
import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
    opacity: 0, // Initially hidden
  },
  animate: {
    y: 0,
    opacity: 1, // Moves up and fades in
    transition: {
      ease: [0.42, 0, 0.58, 1], // Fix cubic-bezier values (valid range)
      duration: 1,
    },
  },
};

const Demo3 = () => {
  return (
    <motion.div
      className="banner"
      variants={banner}
      initial="initial"
      animate="animate"
    >
      <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
        Brand
      </motion.h1>
      <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
        Experience
      </motion.h1>
      <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
        Studio
      </motion.h1>
    </motion.div>
  );
};

export default Demo3;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     y: 400,
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     y: 0,
//     opacity: 1, // Moves up and fades in
//     transition: {
//       ease: "easeOut", // Use built-in easing function
//       duration: 1,
//     },
//   },
// };

// const Demo3 = () => {
//   return (
//     <motion.div
//       className="banner"
//       variants={banner}
//       initial="initial"
//       animate="animate"
//     >
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default Demo3;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     scale: 0.5,
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     scale: 1,
//     opacity: 1, // Scales up and fades in
//     transition: {
//       ease: "easeOut",
//       duration: 0.8,
//     },
//   },
// };

// const DemoScale = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoScale;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     rotate: -20, // 20
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     rotate: 0,
//     opacity: 1, // Rotates and fades in
//     transition: {
//       ease: "easeOut",
//       duration: 0.8,
//     },
//   },
// };

// const DemoRotate = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoRotate;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     x: -300, // Start off-screen (left) 300 for right
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     x: 0, // Moves to the center
//     opacity: 1, // Fades in
//     transition: {
//       ease: "easeOut",
//       duration: 1,
//     },
//   },
// };

// const DemoSlide = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoSlide;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     y: -100, // Starts above the view
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     y: [0, -20, 0], // Bounces in
//     opacity: 1, // Fades in
//     transition: {
//       ease: "easeOut",
//       duration: 0.8,
//     },
//   },
// };

// const DemoBounce = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoBounce;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     x: -200, // Slide in from the left
//     rotate: 15, // Initial rotation
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     x: 0,
//     rotate: 0, // Rotates back to 0
//     opacity: 1, // Fades in
//     transition: {
//       ease: "easeOut",
//       duration: 1,
//     },
//   },
// };

// const DemoWave = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoWave;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     x: -100, // Moves in from the left
//     rotate: -10, // Tilts slightly
//     opacity: 0,
//   },
//   animate: {
//     x: [0, 10, -10, 0], // Wobbles back and forth
//     rotate: [0, 5, -5, 0], // Slight rotation during wobble
//     opacity: 1,
//     transition: {
//       ease: "easeInOut",
//       duration: 1,
//     },
//   },
// };

// const DemoWobble = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoWobble;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     scale: 0.5,
//     opacity: 0,
//   },
//   animate: {
//     scale: [1, 1.2, 1], // Zooms in and slightly overshoots
//     opacity: 1,
//     transition: {
//       ease: "easeOut",
//       duration: 0.8,
//     },
//   },
// };

// const DemoZoomBounce = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoZoomBounce;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.05, // Faster stagger for typing effect
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       ease: "easeInOut",
//       duration: 0.1, // Quick fade for each letter
//     },
//   },
// };

// const DemoTyping = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]">
//         {["B", "r", "a", "n", "d"].map((letter, index) => (
//           <motion.span key={index} variants={letterAnimation}>
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]">
//         {["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"].map((letter, index) => (
//           <motion.span key={index} variants={letterAnimation}>
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]">
//         {["S", "t", "u", "d", "i", "o"].map((letter, index) => (
//           <motion.span key={index} variants={letterAnimation}>
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoTyping;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     y: 50, // Starts below the line
//     opacity: 0,
//   },
//   animate: {
//     y: [0, -10, 0], // Creates a wave motion
//     opacity: 1,
//     transition: {
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   },
// };

// const DemoWave = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]">
//         {["B", "r", "a", "n", "d"].map((letter, index) => (
//           <motion.span key={index} variants={letterAnimation}>
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]">
//         {["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"].map((letter, index) => (
//           <motion.span key={index} variants={letterAnimation}>
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]">
//         {["S", "t", "u", "d", "i", "o"].map((letter, index) => (
//           <motion.span key={index} variants={letterAnimation}>
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoWave;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     y: 100, // Start below the view
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     y: 0, // Moves up to its position
//     opacity: 1, // Fades in
//     transition: {
//       ease: "easeOut",
//       duration: 0.8,
//     },
//   },
// };

// const DemoFadeSlideUp = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoFadeSlideUp;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     scale: 0,
//     rotate: 180,
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     scale: 1,
//     rotate: 0, // Rotates back to 0
//     opacity: 1, // Fades in
//     transition: {
//       ease: "easeOut",
//       duration: 0.8,
//     },
//   },
// };

// const DemoZoomRotate = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoZoomRotate;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     opacity: [0, 1, 0, 1], // Flickers in
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };

// const DemoFlicker = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoFlicker;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     x: 300, // Start off-screen (right)
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     x: 0,
//     opacity: 1, // Fades in
//     transition: {
//       type: "spring", // Use spring for a bouncing effect
//       stiffness: 100,
//       damping: 10,
//       duration: 1,
//     },
//   },
// };

// const DemoBounceIn = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoBounceIn;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     y: 50,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

// const LetterAnimation = ({ text }) => {
//   return (
//     <motion.span variants={letterAnimation}>
//       {text}
//     </motion.span>
//   );
// };

// const DemoLetterByLetter = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <h1 className="mx-10 text-[150px]">
//         {["B", "r", "a", "n", "d"].map((letter, index) => (
//           <LetterAnimation text={letter} key={index} />
//         ))}
//         {[" ", "E", "x", "p", "e", "r", "i", "e", "n", "c", "e"].map((letter, index) => (
//           <LetterAnimation text={letter} key={index} />
//         ))}
//         {[" ", "S", "t", "u", "d", "i", "o"].map((letter, index) => (
//           <LetterAnimation text={letter} key={index} />
//         ))}
//       </h1>
//     </motion.div>
//   );
// };

// export default DemoLetterByLetter;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     x: -50, // Start off-screen (left)
//     y: 50,  // Start off-screen (bottom)
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     x: 0,
//     y: 0, // Moves to the center
//     opacity: 1, // Fades in
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const DemoDiagonalSlide = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoDiagonalSlide;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     rotateY: 180, // Start flipped
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     rotateY: 0, // Flips to normal
//     opacity: 1, // Fades in
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// const DemoFlipText = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoFlipText;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const letterAnimation = {
//   initial: {
//     rotate: 360, // Start fully rotated
//     opacity: 0, // Initially hidden
//   },
//   animate: {
//     rotate: 0, // Spins to normal
//     opacity: 1, // Fades in
//     transition: {
//       duration: 3,
//       ease: "easeOut",
//     },
//   },
// };

// const DemoSpinText = () => {
//   return (
//     <motion.div className="banner" variants={banner} initial="initial" animate="animate">
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Brand
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Experience
//       </motion.h1>
//       <motion.h1 className="mx-10 text-[150px]" variants={letterAnimation}>
//         Studio
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default DemoSpinText;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const FadeInImage = ({ src, alt }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger only once
//     threshold: 0.1, // Trigger when 10% is visible
//   });

//   return (
//     <motion.img
//       ref={ref}
//       src={src}
//       alt={alt}
//       initial={{ opacity: 0 }} // Start hidden
//       animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
//       transition={{ duration: 0.6 }}
//       className="my-10 " // Add spacing as needed
//     />
//   );
// };

// const DemoFadeInScroll = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <FadeInImage src="/1.jpg" alt="Image 1" />
//       <FadeInImage src="/2.jpg" alt="Image 2" />
//       <FadeInImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoFadeInScroll;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const SlideUpImage = ({ src, alt }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.img
//       ref={ref}
//       src={src}
//       alt={alt}
//       initial={{ y: 50, opacity: 0 }} // Start below and hidden
//       animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Slide up and fade in
//       transition={{ duration: 0.6 }}
//       className="my-10"
//     />
//   );
// };

// const DemoSlideUpScroll = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <SlideUpImage src="/1.jpg" alt="Image 1" />
//       <SlideUpImage src="/2.jpg" alt="Image 2" />
//       <SlideUpImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoSlideUpScroll;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const ZoomInImage = ({ src, alt }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.img
//       ref={ref}
//       src={src}
//       alt={alt}
//       initial={{ scale: 0.5, opacity: 0 }} // Start small and hidden
//       animate={{ scale: inView ? 1 : 0.5, opacity: inView ? 1 : 0 }} // Zoom in and fade in
//       transition={{ duration: 0.6 }}
//       className="my-10"
//     />
//   );
// };

// const DemoZoomInScroll = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <ZoomInImage src="/1.jpg" alt="Image 1" />
//       <ZoomInImage src="/2.jpg" alt="Image 2" />
//       <ZoomInImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoZoomInScroll;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const RotateInImage = ({ src, alt }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.img
//       ref={ref}
//       src={src}
//       alt={alt}
//       initial={{ rotate: 20, opacity: 0 }} // Start rotated and hidden
//       animate={{ rotate: inView ? 0 : 20, opacity: inView ? 1 : 0 }} // Rotate and fade in
//       transition={{ duration: 0.6 }}
//       className="my-10"
//     />
//   );
// };

// const DemoRotateInScroll = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <RotateInImage src="1.jpg" alt="Image 1" />
//       <RotateInImage src="2.jpg" alt="Image 2" />
//       <RotateInImage src="3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoRotateInScroll;
// "use client";
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const ParallaxImage = ({ src, alt }) => {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 100]);

//   return (
//     <motion.div
//       style={{
//         backgroundImage: `url(${src})`,
//         height: "500px",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         translateY: y,
//       }}
//       className="relative"
//     >
//       <h1 className="absolute bottom-10 left-10 text-white text-4xl">Stunning Parallax</h1>
//     </motion.div>
//   );
// };

// const DemoParallaxScroll = () => {
//   return (
//     <div>
//       <ParallaxImage src="/nature3.jpeg" alt="Parallax Image" />
//       <div style={{ height: "1000px" }} /> Space for scrolling
//     </div>
//   );
// };

// export default DemoParallaxScroll;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const HoverZoomImage = ({ src, alt }) => {
//   return (
//     <motion.div
//       style={{
//         width: "300px",
//         height: "200px",
//         overflow: "hidden",
//         border: "5px solid transparent",
//         borderRadius: "10px",
//       }}
//       whileHover={{ scale: 1.1, borderColor: "white" }} // Zoom and change border color
//       transition={{ duration: 0.3 }}
//     >
//       <motion.img
//         src={src}
//         alt={alt}
//         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//       />
//     </motion.div>
//   );
// };

// const DemoHoverZoom = () => {
//   return (
//     <div className="flex gap-4">
//         hover animation
//       <HoverZoomImage src="/1.jpg" alt="Image 1" />
//       <HoverZoomImage src="/2.jpg" alt="Image 2" />
//       <HoverZoomImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoHoverZoom;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const RotatingImage = ({ src, alt }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.img
//       ref={ref}
//       src={src}
//       alt={alt}
//       initial={{ rotate: 360, opacity: 0 }} // Start rotated and hidden
//       animate={{ rotate: inView ? 0 : 360, opacity: inView ? 1 : 0 }} // Rotate to normal and fade in
//       transition={{ duration: 1 }}
//     //   style={{ width: "300px", height: "200px", objectFit: "cover" }}
//     />
//   );
// };

// const DemoRotateOnScroll = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <RotatingImage src="/1.jpg" alt="Image 1" />
//       <RotatingImage src="/2.jpg" alt="Image 2" />
//       <RotatingImage src="/3.jpg" alt="Image 3" />
//       <div style={{ height: "1000px" }} /> {/* Space for scrolling */}
//     </div>
//   );
// };

// export default DemoRotateOnScroll;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const RippleEffectImage = ({ src, alt }) => {
//   return (
//     <motion.div
//       style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}
//       whileHover={{ scale: 1.1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <img src={src} alt={alt} style={{ width: "400px", height: "400px", objectFit: "cover" }} />
//       <motion.div
//         initial={{ scale: 0 }}
//         whileHover={{ scale: 2 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         style={{
//           position: "absolute",
//           borderRadius: "50%",
//           background: "rgba(255, 255, 255, 0.5)",
//           top: "50%",
//           left: "50%",
//           width: "100px",
//           height: "100px",
//           translate: "-50% -50%",
//         }}
//       />
//     </motion.div>
//   );
// };

// const DemoRippleEffect = () => {
//   return (
//     <div className="flex gap-4">
//       <RippleEffectImage src="/1.jpg" alt="Image 1" />
//       <RippleEffectImage src="/2.jpg" alt="Image 2" />
//       <RippleEffectImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoRippleEffect;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const FloatingImage = ({ src, alt }) => {
//   return (
//     <motion.img
//       src={src}
//       alt={alt}
//       initial={{ y: 0 }}
//       animate={{ y: [-5, 5, -5] }} // Bobbing effect
//       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       style={{ width: "300px", height: "200px", objectFit: "cover" }}
//     />
//   );
// };

// const DemoFloatingImages = () => {
//   return (
//     <div className="flex gap-4">
//       <FloatingImage src="/1.jpg" alt="Image 1" />
//       <FloatingImage src="/2.jpg" alt="Image 2" />
//       <FloatingImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoFloatingImages;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const TiltImage = ({ src, alt }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.img
//       ref={ref}
//       src={src}
//       alt={alt}
//       initial={{ rotateY: 0 }} // Start flat
//       animate={{ rotateY: inView ? [0, 5, -5, 0] : 0 }} // Tilt effect
//       transition={{ duration: 0.6 }}
//     //   style={{ width: "300px", height: "200px", objectFit: "cover" }}
//     />
//   );
// };

// const DemoTiltOnScroll = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <TiltImage src="/1.jpg" alt="Image 1" />
//       <TiltImage src="/2.jpg" alt="Image 2" />
//       <TiltImage src="/3.jpg" alt="Image 3" />
//       <div style={{ height: "1000px" }} /> {/* Space for scrolling */}
//     </div>
//   );
// };

// export default DemoTiltOnScroll;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const ShatterEffectImage = ({ src, alt }) => {
//   const shatterVariants = {
//     initial: { clipPath: "circle(0% at 50% 50%)" },
//     hover: { clipPath: "circle(100% at 50% 50%)", transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.div
//       style={{ overflow: "hidden", borderRadius: "10px" }}
//       initial="initial"
//       whileHover="hover"
//     >
//       <motion.img
//         src={src}
//         alt={alt}
//         style={{ width: "300px", height: "200px", objectFit: "cover" }}
//         variants={shatterVariants}
//       />
//       Hove me
//     </motion.div>
//   );
// };

// const DemoShatterEffect = () => {
//   return (
//     <div className="flex gap-4">
//       <ShatterEffectImage src="/1.jpg" alt="Image 1" />
//       <ShatterEffectImage src="/2.jpg" alt="Image 2" />
//       <ShatterEffectImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoShatterEffect;
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const images = [
//   "/1.jpg",
//   "/2.jpg",
//   "/3.jpg",
// ];

// const Carousel3D = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <div style={{ perspective: "1000px" }}>
//       <motion.div
//         initial={{ rotateY: 0 }}
//         animate={{ rotateY: currentIndex * -90 }}
//         transition={{ duration: 0.6 }}
//         style={{
//           display: "flex",
//           width: "300px",
//           height: "200px",
//           position: "relative",
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {images.map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt={`Image ${index + 1}`}
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               backfaceVisibility: "hidden",
//               objectFit: "cover",
//             }}
//           />
//         ))}
//       </motion.div>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Carousel3D;
// "use client";
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const ParallaxLayer = ({ src, speed }) => {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 1000], [0, speed * 100]);

//   return (
//     <motion.div
//       style={{
//         backgroundImage: `url(${src})`,
//         height: "100vh",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         translateY: y,
//       }}
//     />
//   );
// };

// const DemoLayeredParallax = () => {
//   return (
//     <div>
//       <ParallaxLayer src="/1.jpg" speed={0.5} />
//       <ParallaxLayer src="/2.jpg" speed={0.3} />
//       <ParallaxLayer src="/3.jpg" speed={0.1} />
//     </div>
//   );
// };

// export default DemoLayeredParallax;
// "use client";
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const TiltImage = ({ src, alt }) => {
//   const imgRef = useRef();

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const { top, left, width, height } = imgRef.current.getBoundingClientRect();
//     const x = (clientX - left) / width;
//     const y = (clientY - top) / height;

//     imgRef.current.style.transform = `rotateY(${(x - 0.5) * 20}deg) rotateX(${(0.5 - y) * 20}deg)`;
//   };

//   const handleMouseLeave = () => {
//     imgRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
//   };

//   return (
//     <motion.div
//       ref={imgRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         perspective: "1000px",
//         overflow: "hidden",
//         borderRadius: "10px",
//       }}
//     >
//       <motion.img
//         src={src}
//         alt={alt}
//         style={{ width: "300px", height: "200px", objectFit: "cover" }}
//       />
//     </motion.div>
//   );
// };

// const Demo3DTiltEffect = () => {
//   return (
//     <div className="flex gap-4">
//       <TiltImage src="/1.jpg" alt="Image 1" />
//       <TiltImage src="/2.jpg" alt="Image 2" />
//       <TiltImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default Demo3DTiltEffect;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const GlitchImage = ({ src, alt }) => {
//   return (
//     <motion.div
//       style={{ overflow: "hidden", borderRadius: "10px", position: "relative" }}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <img src={src} alt={alt} style={{ width: "300px", height: "200px", objectFit: "cover" }} />
//       <motion.div
//         className="glitch"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "rgba(255, 0, 0, 0.3)",
//           clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
//           mixBlendMode: "multiply",
//           opacity: 0,
//           transition: "opacity 0.5s ease-in-out",
//         }}
//         whileHover={{ opacity: 1 }}
//       />
//     </motion.div>
//   );
// };

// const DemoGlitchEffect = () => {
//   return (
//     <div className="flex gap-4">
//       <GlitchImage src="/1.jpg" alt="Image 1" />
//       <GlitchImage src="/2.jpg" alt="Image 2" />
//       <GlitchImage src="/3.jpg" alt="Image 3" />
//     </div>
//   );
// };

// export default DemoGlitchEffect;

// "use client";
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const InfiniteZoomImage = ({ src, alt }) => {
//   const { scrollY } = useScroll();
//   const scale = useTransform(scrollY, [0, 500], [1, 2]);

//   return (
//     <motion.img
//       src={src}
//       alt={alt}
//       style={{
//         width: "100%",
//         height: "auto",
//         scale,
//         transition: "transform 0.5s ease-in-out",
//       }}
//     />
//   );
// };

// const DemoInfiniteZoom = () => {
//   return (
//     <div style={{ height: "500px" }}>
//       <InfiniteZoomImage src="/nature5.jpg" alt="Image 1" />
//     </div>
//   );
// };

// export default DemoInfiniteZoom;
/** Loadeeer     */
// "use client";
// import React from "react";

// const BouncingLoader = () => {
//   return (
//     <svg
//       width="100"
//       height="30"
//       viewBox="0 0 100 30"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="15" cy="15" r="15" fill="#FF5733">
//         <animate attributeName="cy" values="15;5;15" dur="0.6s" repeatCount="indefinite" />
//       </circle>
//       <circle cx="50" cy="15" r="15" fill="#33FF57">
//         <animate attributeName="cy" values="15;5;15" dur="0.6s" begin="0.2s" repeatCount="indefinite" />
//       </circle>
//       <circle cx="85" cy="15" r="15" fill="#3357FF">
//         <animate attributeName="cy" values="15;5;15" dur="0.6s" begin="0.4s" repeatCount="indefinite" />
//       </circle>
//     </svg>
//   );
// };

// export default BouncingLoader;
// "use client";
// import React from "react";

// const RotatingGear = () => {
//   return (
//     <svg
//       width="100"
//       height="100"
//       viewBox="0 0 64 64"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       stroke="#000"
//       strokeWidth="4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <g>
//         <circle cx="32" cy="32" r="12" />
//         <path d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l5.5 5.5M46.5 46.5l5.5 5.5M12 52l5.5-5.5M46.5 12l5.5-5.5">
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="0 32 32"
//             to="360 32 32"
//             dur="2s"
//             repeatCount="indefinite"
//           />
//         </path>
//       </g>
//     </svg>
//   );
// };

// export default RotatingGear;
// "use client";
// import React from "react";

// const LineDrawing = () => {
//   return (
//     <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
//         fill="transparent"
//         stroke="#000"
//         strokeWidth="2"
//       >
//         <animate
//           attributeName="stroke-dasharray"
//           from="0, 200"
//           to="200, 0"
//           dur="2s"
//           fill="freeze"
//         />
//       </path>
//     </svg>
//   );
// };

// export default LineDrawing;
