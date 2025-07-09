"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

interface GSAPTextRevealProps {
  children: React.ReactNode
  className?: string
  animationType?: "words" | "chars" | "lines"
  stagger?: number
  duration?: number
}

export function GSAPTextReveal({
  children,
  className = "",
  animationType = "words",
  stagger = 0.05,
  duration = 0.8,
}: GSAPTextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    // Split text into words/chars/lines
    const split = new SplitText(textElement, {
      type: animationType,
      linesClass: "line-mask",
    })

    // Set initial state
    gsap.set(split[animationType], {
      opacity: 0,
      y: animationType === "lines" ? 100 : 50,
      rotationX: animationType === "chars" ? 90 : 0,
    })

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })

    tl.to(split[animationType], {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: duration,
      stagger: stagger,
      ease: "power3.out",
    })

    return () => {
      split.revert()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === textElement) {
          trigger.kill()
        }
      })
    }
  }, [animationType, stagger, duration])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}
