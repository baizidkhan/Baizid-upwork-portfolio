"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
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
