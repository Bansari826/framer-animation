'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ResponsiveScrollAnimation = () => {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section, index) => {
      // General fade-in animation for all sections
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 }, // Start hidden and lower
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when the section is 80% down from the top
            toggleActions: "play none none reverse",
            markers: true, // Show markers for debugging (remove in production)
          },
        }
      );

      // Additional specific animations for different sections
      if (index === 1) {
        gsap.fromTo(
          section,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else if (index === 2) {
        gsap.fromTo(
          section,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else if (index === 3) {
        gsap.fromTo(
          section,
          { rotation: -30, opacity: 0 },
          {
            rotation: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <section
          key={index}
          ref={(el) => (sections.current[index] = el)} // Assign each section to the ref array
          className="section" // Apply CSS class for styles
        >
          {index === 0 && "Welcome to the Page!"}
          {index === 1 && "This text slides in from the left!"}
          {index === 2 && "This text scales up!"}
          {index === 3 && "This text rotates in!"}
        </section>
      ))}
    </div>
  );
};

export default ResponsiveScrollAnimation;
