"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface ImageZoomProps {
  src: string
  alt: string
  className?: string
}

export function ImageZoom({ src, alt, className = "" }: ImageZoomProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  )
}
