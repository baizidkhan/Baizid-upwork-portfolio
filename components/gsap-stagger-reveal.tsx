"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPStaggerRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function GSAPStaggerReveal({ children, className = "", stagger = 0.2, delay = 0 }: GSAPStaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.children

    // Set initial state for all items
    gsap.set(items, {
      y: 60,
      opacity: 0,
      scale: 0.9,
    })

    // Create stagger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    })

    tl.to(items, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: stagger,
      delay: delay,
      ease: "power3.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [stagger, delay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
