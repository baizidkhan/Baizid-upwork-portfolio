"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export function TextReveal({ children, className = "", threshold = 100 }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isNear, setIsNear] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))

      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsNear(distance < threshold)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [threshold])

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{
        opacity: isNear ? 1 : 0.3,
        scale: isNear ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
