'use client'
import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { gsap } from "gsap";

const CircleWithArrow = () => {
  const [isMounted, setIsMounted] = useState(false);
  const circleRef = useRef(null);
  const hoverCircleRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);


  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
        // Animate the text on component mount
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 20 }, // Start hidden and slightly lower
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Fade in and move up
          );
      // Circle animation - Smooth and continuous
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: 314 }, // Full circle offset (2 * PI * r for r=50)
        { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" } // Slow and smooth animation
      );

      // Arrow appearance
      gsap.fromTo(
        arrowRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, delay: 0.5, duration: 0.5 }
      );

      // Hover effect on the hoverCircleRef (prepare for hover)
      gsap.set(hoverCircleRef.current, { strokeDashoffset: 314 });
    }
  }, [isMounted]);

  const handleMouseEnter = () => {
    // Hover circle animation on mouse enter
    gsap.to(hoverCircleRef.current, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "easeInOut",
    });
  };

  const handleMouseLeave = () => {
    // Reset hover circle on mouse leave
    gsap.to(hoverCircleRef.current, {
      strokeDashoffset: 314,
      duration: 1,
      ease: "easeInOut",
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div>
      <h1 ref={textRef} style={{ fontSize: "2rem", color: "#3498db" }}>
        Welcome to My Website!
      </h1>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <svg
        width="300"
        height="300"
        viewBox="0 0 150 150"
        style={{ position: "relative" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Original Circle Border Animation */}
        <circle
          cx="75"
          cy="75"
          r="50"
          fill="transparent"
          stroke="#3498db"
          strokeWidth="2"
          strokeDasharray="314" // 2 * PI * r where r=50
          strokeDashoffset="314"
          ref={circleRef}
        />

        {/* Hover Circle Border Animation */}
        <circle
          cx="75"
          cy="75"
          r="50"
          fill="transparent"
          stroke="#e74c3c"
          strokeWidth="2"
          strokeDasharray="314" // Same calculation for hover circle
          strokeDashoffset="314"
          ref={hoverCircleRef}
        />
      </svg>

      {/* Arrow inside the circle */}
      <div
        ref={arrowRef}
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaArrowDown size={24} />
      </div>
    </div>
    </>
  
  );
};

export default CircleWithArrow;
