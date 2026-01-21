'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Generate floating hearts across the entire viewport */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            fontSize: `${16 + Math.random() * 24}px`,
            opacity: 0.15 + Math.random() * 0.25,
          }}
          animate={{
            y: ['-10%', '110%'],
            x: Math.sin(i) * 60,
            opacity: [
              0.15 + Math.random() * 0.25,
              0.4 + Math.random() * 0.3,
              0.15 + Math.random() * 0.25,
            ],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear',
          }}
        >
          💗
        </motion.div>
      ))}

      {/* Cursor sparkles on mouse move */}
      <CursorSparkles />
    </div>
  );
}

function CursorSparkles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    x: number;
    y: number;
  }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Randomly add sparkles
      if (Math.random() > 0.85) {
        const id = Date.now() + Math.random();
        setSparkles((prev) => [
          ...prev,
          { id, x: e.clientX, y: e.clientY },
        ]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 800);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed pointer-events-none text-2xl"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            zIndex: 1000,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0, rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          💖
        </motion.div>
      ))}
    </>
  );
}
