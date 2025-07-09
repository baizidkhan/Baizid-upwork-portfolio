"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  id?: string
  sectionName?: string
  delay?: number
}

export function SectionReveal({ children, className = "", id, sectionName, delay = 0 }: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      // Dispatch section enter event
      if (sectionName) {
        window.dispatchEvent(new CustomEvent("sectionEnter", { detail: sectionName }))
      }
    }
  }, [isInView, controls, sectionName])

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      data-section={sectionName}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        },
      }}
    >
      {children}
    </motion.section>
  )
}
