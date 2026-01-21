'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Generate floating hearts across the entire viewport */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            fontSize: `${12 + Math.random() * 20}px`,
            opacity: 0.1 + Math.random() * 0.2,
          }}
          animate={{
            y: ['-10%', '110%'],
            x: Math.sin(i) * 50,
            opacity: [
              0.1 + Math.random() * 0.2,
              0.3 + Math.random() * 0.2,
              0.1 + Math.random() * 0.2,
            ],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 2,
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
      if (Math.random() > 0.7) {
        const id = Date.now() + Math.random();
        setSparkles((prev) => [
          ...prev,
          { id, x: e.clientX, y: e.clientY },
        ]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 600);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed pointer-events-none text-lg"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            zIndex: 1000,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨
        </motion.div>
      ))}
    </>
  );
}
