import { motion } from 'framer-motion';
import React, { useState } from 'react';

export const Tilt3D = ({ children, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotationX = ((y - rect.height / 2) / rect.height) * -15;
    const rotationY = ((x - rect.width / 2) / rect.width) * 15;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovering(true)}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovering ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
