'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RollingChars = ({ text }) => {
  const [visibleChars, setVisibleChars] = useState([]);
  const chars = text.split('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        const nextChars = [...prev.slice(1), chars[index]];
        index = (index + 1) % chars.length;
        return nextChars;
      });
    }, 500); // Change every 500 ms

    return () => clearInterval(interval);
  }, [chars]);

  return (
    <div style={{ display: 'flex', overflow: 'hidden', height: '1.5em' }}>
      {visibleChars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          animate={{ y: '0%', transition: { duration: 0.5 } }}
          exit={{ y: '-100%', transition: { duration: 0.5 } }}
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            marginRight: '2px',
            fontSize: '2em',
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default RollingChars;
