"use client"

import type React from "react"

import { motion } from "framer-motion"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
