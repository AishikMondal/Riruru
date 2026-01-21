'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function QRMemory() {
  const [isUnlocked, setIsUnlocked] = useState(true); // Always show as unlocked

  useEffect(() => {
    // Always set as unlocked
    if (typeof window !== 'undefined') {
      localStorage.setItem('letterUnlocked', 'true');
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('letterUnlocked', 'true');
      setIsUnlocked(true);
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('letterUnlocked'));
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-gradient-to-br from-rose-200 via-pink-200 to-purple-300 overflow-hidden">
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center mb-4"
        >
          A Memory Code 📱✨
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-rose-500 text-center font-poppins mb-8"
        >
          Some memories don't need words — just a scan.
        </motion.p>

        {/* Interactive Key Card */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isUnlocked ? (
              // Success state
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100/50 backdrop-blur-md border-2 border-green-300/50 shadow-2xl text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="text-8xl mb-4"
                >
                  🔓
                </motion.div>
                <h3 className="text-3xl font-dancing text-green-600 mb-2">
                  Letter Unlocked! 💝
                </h3>
                <p className="text-green-500 font-poppins">
                  Scroll down to read your special message
                </p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl mt-4"
                >
                  ⬇️
                </motion.div>
              </motion.div>
            ) : (
              // Locked state - Click to unlock
              <motion.div
                key="locked"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  className="p-8 md:p-12 rounded-3xl bg-white/60 backdrop-blur-md border-2 border-pink-200/50 shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleUnlock}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(244, 114, 182, 0.3)',
                      '0 0 40px rgba(244, 114, 182, 0.5)',
                      '0 0 20px rgba(244, 114, 182, 0.3)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  {/* Animated Key */}
                  <motion.div
                    className="w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center relative"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <motion.div
                      className="text-9xl"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      🔑
                    </motion.div>

                    {/* Sparkles around key */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-3xl"
                        style={{
                          top: `${50 + Math.cos((i / 8) * Math.PI * 2) * 45}%`,
                          left: `${50 + Math.sin((i / 8) * Math.PI * 2) * 45}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.25,
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 text-center space-y-4"
                  >
                    <h3 className="text-2xl md:text-3xl font-dancing text-purple-600">
                      Click the Key to Unlock 🔐
                    </h3>
                    <p className="text-rose-500 font-poppins text-sm md:text-base">
                      A special love letter awaits you 💌
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating hearts around QR */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              top: `${Math.cos((i / 6) * Math.PI * 2) * 200 + 50}%`,
              left: `${Math.sin((i / 6) * Math.PI * 2) * 200 + 50}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            💕
          </motion.div>
        ))}

        {/* Call to action */}
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-purple-500 font-poppins">
              Click the key to unlock the love letter 🔓💌
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
