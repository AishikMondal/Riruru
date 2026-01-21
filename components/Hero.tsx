'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeroProps {
  image: string;
}

export default function Hero({ image }: HeroProps) {
  const [clicked, setClicked] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const pulseVariants = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };

  const floatVariants = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-50 to-purple-100/50"></div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Happy Birthday Text */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-center leading-tight"
        >
          Happy Birthday 🎂💖
        </motion.h1>

        {/* Name */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-pacifico text-rose-600 text-center"
        >
          Sagnika
        </motion.h2>

        {/* Caption */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-rose-500 text-center font-poppins"
        >
          A quiet smile that feels like home 🤍
        </motion.p>

        {/* Heart-shaped Photo Frame */}
        <motion.div
          variants={itemVariants}
          className="mt-8 relative"
          animate={pulseVariants}
        >
          <motion.div
            className="relative w-48 h-56 md:w-64 md:h-80 rounded-3xl overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(244, 114, 182, 0.3)',
              border: '2px solid rgba(244, 114, 182, 0.2)',
            }}
            animate={floatVariants}
          >
            {/* Image */}
            <img
              src={"https://i.postimg.cc/DyTYtbCk/Whats-App-Image-2026-01-22-at-1-39-07-AM.jpg"} 
              alt="Sagnika"
              className="w-full h-full object-cover"
            />

            {/* Glow Border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(244, 114, 182, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
              }}
            ></div>
          </motion.div>

          {/* Decorative Hearts around frame */}
          <motion.div
            className="absolute -top-4 -left-4 text-4xl"
            animate={{ y: [-5, 5, -5], rotate: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💕
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 text-4xl"
            animate={{ y: [5, -5, 5], rotate: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            💕
          </motion.div>
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-4xl"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            💕
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={() => setClicked(!clicked)}
          className="mt-12 px-8 py-4 rounded-full font-pacifico text-lg text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-600 hover:via-rose-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {clicked ? 'Welcome 💝' : 'Click me to explore 💝'}
        </motion.button>

        {clicked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-rose-500 font-poppins"
          >
            <p className="text-lg">Scroll down to see more... 👇</p>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-3xl">⬇️</div>
      </motion.div>
    </section>
  );
}
