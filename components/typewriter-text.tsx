"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delayBetween?: number
  className?: string
}

export function TypewriterText({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  className = "",
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (currentText.length > 0) {
            setCurrentText(currentFullText.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        } else {
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.substring(0, currentText.length + 1))
          } else {
            setIsPaused(true)
          }
        }
      },
      isPaused ? delayBetween : isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, delayBetween])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
