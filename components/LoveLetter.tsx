'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoveLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if letter is unlocked
    const checkUnlocked = () => {
      const unlocked = localStorage.getItem('letterUnlocked');
      setIsUnlocked(unlocked === 'true');
    };

    checkUnlocked();

    // Listen for unlock event
    window.addEventListener('letterUnlocked', checkUnlocked);
    return () => window.removeEventListener('letterUnlocked', checkUnlocked);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-gradient-to-b from-purple-50/50 via-pink-50 to-rose-100/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 text-8xl"
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💌
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-8xl"
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          💌
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Main letter card */}
        <motion.div
          className="relative p-8 md:p-16 rounded-3xl bg-white/70 backdrop-blur-md border-2 border-pink-200/50 shadow-2xl"
          animate={{
            boxShadow: [
              '0 10px 30px rgba(244, 114, 182, 0.2)',
              '0 10px 50px rgba(244, 114, 182, 0.4)',
              '0 10px 30px rgba(244, 114, 182, 0.2)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          {/* Decorative top element */}
          <motion.div
            className="absolute top-4 right-6 text-5xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌸
          </motion.div>

          {/* Letter content */}
          <div className="relative">
            {/* Header */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 text-center"
            >
              A Letter For You 💌
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent mb-8"
            ></motion.div>

            <AnimatePresence mode="wait">
              {!isUnlocked ? (
                // Locked state
                <motion.div
                  key="locked"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-16 flex flex-col items-center justify-center space-y-8 text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="text-9xl"
                  >
                    🔒
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-3xl font-dancing text-purple-600">
                      This letter is locked 💝
                    </h3>
                    <p className="text-rose-500 font-poppins text-lg max-w-md">
                      Scan the QR code above to unlock this special message
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-10, 0, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl"
                  >
                    ⬆️
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-purple-400 italic font-poppins text-sm"
                  >
                    Something beautiful is waiting for you... ✨
                  </motion.p>
                </motion.div>
              ) : (
                // Unlocked state
                <motion.div
                  key="unlocked"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Unlock animation */}
                  <motion.div
                    initial={{ scale: 3, opacity: 1 }}
                    animate={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                  >
                    <div className="text-9xl">🔓✨</div>
                  </motion.div>

                  {/* Letter text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6 font-poppins text-rose-700"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg leading-relaxed"
                    >
                      Dear Sagnika,
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-lg leading-relaxed"
                    >
                      I don't think the best things in life arrive loudly ✨🌿 some just grow quietly, slowly, and in their own time 🤍 We didn't plan anything, we just started talking 🏏💬 about random things, small days, and little moments that somehow felt special 🌸
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg leading-relaxed"
                    >
                      Somewhere between conversations, walks, and pauses 🚶‍♀️🌅 something gentle started to exist. What I love most is how easy it feels 😌 no pressure, no rushing, no pretending just comfort, honesty, and calm 💫
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="text-lg leading-relaxed"
                    >
                      I truly believe some connections grow better when they're given space 🌱 when they're allowed to breathe and become stronger naturally 🤍 So I'm happy letting this be what it is today, trusting time to shape it into whatever it's meant to be ⏳✨
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="text-lg leading-relaxed"
                    >
                      If something here is meant to stay, it will 💖 and if it grows, I hope it grows softly with patience, understanding, and care 🌙🫶🏻 For now, I'm just grateful you're here 💛 and that this moment exists exactly as it is 🌸
                    </motion.p>
                  </motion.div>

                  {/* Divider bottom */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent my-8"
                  ></motion.div>

                  {/* Signature area */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-right space-y-2"
                  >
                    <p className="font-pacifico text-2xl text-rose-500">Forever yours,</p>
                    <p className="font-pacifico text-3xl text-rose-600">Pippo 📝💕</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating heart accents */}
            <motion.div
              className="absolute top-1/4 -left-12 text-4xl opacity-50"
              animate={{
                y: [0, -20, 0],
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              💗
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 -right-12 text-4xl opacity-50"
              animate={{
                y: [0, 20, 0],
                rotate: [10, -10, 10],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              💗
            </motion.div>
          </div>
        </motion.div>

        {/* Below card text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-purple-500 font-poppins">
            A message of love, crafted just for you 🌹
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
