"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPStaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  animationType?: "cards" | "list" | "grid" | "timeline"
  direction?: "up" | "down" | "left" | "right"
}

export function GSAPStaggerContainer({
  children,
  className = "",
  staggerDelay = 0.15,
  animationType = "cards",
  direction = "up",
}: GSAPStaggerContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.children

    // Set initial states
    const setInitialState = () => {
      switch (animationType) {
        case "cards":
          gsap.set(items, {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
            scale: 0.9,
            rotationY: direction === "left" ? -15 : direction === "right" ? 15 : 0,
          })
          break
        case "list":
          gsap.set(items, {
            opacity: 0,
            x: direction === "right" ? -30 : 30,
            scale: 0.95,
          })
          break
        case "grid":
          gsap.set(items, {
            opacity: 0,
            scale: 0.8,
            rotation: Math.random() * 10 - 5,
          })
          break
        case "timeline":
          gsap.set(items, {
            opacity: 0,
            x: direction === "right" ? -100 : 100,
            scale: 0.9,
          })
          break
      }
    }

    setInitialState()

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    })

    // Animate based on type
    switch (animationType) {
      case "cards":
        tl.to(items, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: staggerDelay,
          ease: "power3.out",
        })
        break
      case "list":
        tl.to(items, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power2.out",
        })
        break
      case "grid":
        tl.to(items, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          stagger: {
            amount: staggerDelay * items.length,
            from: "random",
          },
          ease: "back.out(1.7)",
        })
        break
      case "timeline":
        tl.to(items, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: staggerDelay,
          ease: "power2.out",
        })
        break
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [staggerDelay, animationType, direction])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
