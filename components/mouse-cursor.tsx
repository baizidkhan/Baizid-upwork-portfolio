"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MouseCursorProps {
  currentSection: string
}

export function MouseCursor({ currentSection }: MouseCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [])

  // Hide cursor on mobile devices
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  if (isMobile) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          />

          {/* Cursor ring with section name */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: mousePosition.x - 40,
              y: mousePosition.y - 40,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: 1,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="w-20 h-20 border-2 border-blue-600/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10">
              <motion.span
                className="text-xs font-semibold text-blue-600 capitalize"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {currentSection}
              </motion.span>
            </div>
          </motion.div>

          {/* Trailing effect */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-blue-400/20 rounded-full pointer-events-none z-[9997]"
            style={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
          />
        </>
      )}
    </AnimatePresence>
  )
}
