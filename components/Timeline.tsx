'use client';

import { motion } from 'framer-motion';

const memories = [
  {
    icon: '🏏',
    title: 'Cricket Stories',
    description: 'Every game, every cheer, every moment of joy',
  },
  {
    icon: '🌿',
    title: 'Slow Conversations',
    description: 'Words that meant everything in their silence',
  },
  {
    icon: '🌅',
    title: 'Walks & Lakeside Moments',
    description: 'Where time slowed down and everything made sense',
  },
  {
    icon: '🥟',
    title: 'Shared Momos & Laughter',
    description: 'The sweetest moments shared over simple joys',
  },
  {
    icon: '🌙',
    title: 'Comfort That Grew Quietly',
    description: 'A warmth that needed no words, just presence',
  },
];

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-gradient-to-b from-purple-50/50 via-pink-50 to-rose-50/50 overflow-hidden">
      {/* Decorative hearts in background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            💜
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-16 text-center"
        >
          Moments That Matter 💫
        </motion.h2>

        {/* Timeline */}
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
            >
              {/* Connecting line */}
              {index !== memories.length - 1 && (
                <div className="absolute left-6 md:left-1/2 top-20 bottom-0 w-1 bg-gradient-to-b from-pink-300 to-purple-300 md:-translate-x-1/2"></div>
              )}

              {/* Timeline dot */}
              <motion.div
                className="absolute left-2 md:left-1/2 top-4 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transform md:-translate-x-1/2 shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>

              {/* Card content */}
              <motion.div
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-pink-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl flex-shrink-0">{memory.icon}</span>
                    <div>
                      <h3 className="text-xl font-pacifico text-rose-600 mb-2">
                        {memory.title}
                      </h3>
                      <p className="text-rose-500 font-poppins">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-purple-500 font-poppins">
            Each moment, a testament to something beautiful 💗
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
