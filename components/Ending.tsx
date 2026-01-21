'use client';

import { motion } from 'framer-motion';

export default function Ending() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-gradient-to-b from-rose-200 via-purple-200 to-pink-300 overflow-hidden">
      {/* Confetti animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20px',
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 40 : 800,
              opacity: [1, 1, 0],
              rotate: [0, Math.random() * 360],
              x: Math.sin(i) * 100,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 0.5,
              ease: 'easeIn',
            }}
          >
            {['🎉', '💕', '✨', '🎁', '🌸', '💜'][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Main text */}
        <motion.div className="text-center space-y-8">
          {/* First line */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 leading-tight"
          >
            If you ever trust this feeling... ✨
          </motion.h2>

          {/* Second line */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-pacifico text-rose-500"
          >
            ...maybe let it show in small ways. 💗
          </motion.h3>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300"
        ></motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-purple-500 font-poppins text-center leading-relaxed"
        >
          Some chats look better when they feel like love. 🌸
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="flex gap-6 justify-center text-5xl mt-8"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <motion.span
            animate={{
              y: [0, -15, 0],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0,
            }}
          >
            💕
          </motion.span>
          <motion.span
            animate={{
              y: [0, -15, 0],
              rotate: [10, -10, 10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.2,
            }}
          >
            🌸
          </motion.span>
          <motion.span
            animate={{
              y: [0, -15, 0],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.4,
            }}
          >
            💕
          </motion.span>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 p-8 rounded-2xl bg-white/50 backdrop-blur-sm border-2 border-pink-200/50 text-center"
        >
          <p className="text-lg font-poppins text-rose-600 mb-4">
            Happy Birthday to someone who makes ordinary moments extraordinary 🎂
          </p>
          <p className="text-base font-pacifico text-purple-500">
            May every day be as special as you are 🌙✨
          </p>
        </motion.div>

        {/* Bottom signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-rose-400 font-poppins italic text-sm"
        >
          With all the warmth in my heart 💖
        </motion.p>
      </motion.div>

      {/* Scroll to top suggestion at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <button
          onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-poppins hover:shadow-lg transition-shadow"
        >
          Back to Top ⬆️
        </button>
      </motion.div>
    </section>
  );
}
