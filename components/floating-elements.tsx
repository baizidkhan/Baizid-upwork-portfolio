"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-xl"
        animate={{
          y: [-15, 15, -15],
          x: [-5, 5, -5],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-40 w-16 h-16 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-xl"
        animate={{
          y: [10, -10, 10],
          x: [-8, 8, -8],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Additional smaller floating elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-500/5 rounded-full blur-sm"
        animate={{
          y: [-30, 30, -30],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-12 h-12 bg-purple-500/5 rounded-full blur-sm"
        animate={{
          y: [25, -25, 25],
          x: [15, -15, 15],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  )
}
