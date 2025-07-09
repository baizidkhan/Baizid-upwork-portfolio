"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionTransition({ children, className = "", id }: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}
