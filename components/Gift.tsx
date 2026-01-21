'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Gift() {
  const [isOpened, setIsOpened] = useState(false);

  const giftBoxVariants = {
    initial: { scale: 1, rotate: 0 },
    shake: {
      rotate: [-5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const lidVariants = {
    closed: { y: 0 },
    open: {
      y: -80,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: Math.cos((i / 8) * Math.PI * 2) * 100,
      y: Math.sin((i / 8) * Math.PI * 2) * 100,
      transition: {
        duration: 1,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-gradient-to-br from-pink-50 via-rose-100/50 to-purple-50/50 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-dancing text-rose-600 mb-12"
        >
          A Surprise Gift 🎁
        </motion.h2>

        {/* Gift Box */}
        <motion.div
          className="relative cursor-pointer"
          variants={giftBoxVariants}
          initial="initial"
          animate="shake"
          onClick={() => setIsOpened(!isOpened)}
        >
          {/* Box Body */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg shadow-2xl flex items-center justify-center relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Box Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full grid grid-cols-3 gap-4 p-4">
                <div className="bg-white/30 rounded"></div>
                <div className="bg-white/30 rounded"></div>
                <div className="bg-white/30 rounded"></div>
              </div>
            </div>

            {!isOpened && (
              <motion.span
                className="text-8xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🎁
              </motion.span>
            )}
          </motion.div>

          {/* Ribbon - Horizontal */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 transform -translate-y-1/2"
            animate={isOpened ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Ribbon - Vertical */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-8 bg-gradient-to-b from-purple-400 via-pink-300 to-purple-400 transform -translate-x-1/2"
            animate={isOpened ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Box Lid */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-r from-rose-300 to-rose-500 rounded-lg shadow-lg flex items-end justify-center pb-4"
            variants={lidVariants}
            animate={isOpened ? 'open' : 'closed'}
          >
            <div className="text-4xl">🎀</div>
          </motion.div>
        </motion.div>

        {/* Sparkles */}
        {isOpened && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 text-2xl"
                variants={sparkleVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                ✨
              </motion.div>
            ))}
          </div>
        )}

        {/* Interaction Text */}
        {!isOpened ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-rose-500 font-poppins mt-8 text-center"
          >
            Click the gift to open it! 💝
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mt-8"
          >
            <p className="text-2xl font-pacifico text-purple-500">Something special awaits! 🌟</p>
            <p className="text-lg text-rose-500 font-poppins">Scroll down to discover more... ✨</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
