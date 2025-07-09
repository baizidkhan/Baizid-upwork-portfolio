"use client"

import React from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
  outline: "border-2 border-blue-600 text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400",
  black: "bg-black text-white hover:bg-gray-800 dark:bg-gray-900 dark:hover:bg-black",
}

type MagneticButtonProps = {
  children: React.ReactNode
  variant?: keyof typeof variants
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function MagneticButton({ children, variant = "primary", className = "", ...props }: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    const handleMouseMove = (event: MouseEvent) => {
      const button = ref.current!
      const { clientX, clientY } = event
      const { top, left, width, height } = button.getBoundingClientRect()
      const x = clientX - left - width / 2
      const y = clientY - top - height / 2
      const scale = 1.1

      button.style.transform = `translate(${x / 5}px, ${y / 5}px) scale(${scale})`
      button.style.transition = "transform 0.1s ease-out"
    }

    const handleMouseLeave = () => {
      const button = ref.current!
      button.style.transform = "translate(0px, 0px) scale(1)"
      button.style.transition = "transform 0.3s ease-out"
    }

    const button = ref.current
    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 transition-all duration-150",
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  )
}
