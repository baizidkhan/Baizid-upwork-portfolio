"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPScrollSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  animationType?: "fadeUp" | "slideLeft" | "slideRight" | "scale" | "rotate" | "parallax"
  delay?: number
  duration?: number
  stagger?: number
}

export function GSAPScrollSection({
  children,
  className = "",
  id,
  animationType = "fadeUp",
  delay = 0,
  duration = 1,
  stagger = 0.1,
}: GSAPScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animationType) {
        case "fadeUp":
          gsap.set(content.children, {
            opacity: 0,
            y: 60,
            scale: 0.95,
          })
          break
        case "slideLeft":
          gsap.set(content.children, {
            opacity: 0,
            x: 100,
          })
          break
        case "slideRight":
          gsap.set(content.children, {
            opacity: 0,
            x: -100,
          })
          break
        case "scale":
          gsap.set(content.children, {
            opacity: 0,
            scale: 0.8,
            rotation: 5,
          })
          break
        case "rotate":
          gsap.set(content.children, {
            opacity: 0,
            rotation: 15,
            scale: 0.9,
          })
          break
        case "parallax":
          gsap.set(content.children, {
            opacity: 0,
            y: 100,
          })
          break
      }
    }

    setInitialState()

    // Create ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        scrub: animationType === "parallax" ? 1 : false,
        markers: false, // Set to true for debugging
      },
    })

    // Animate based on type
    switch (animationType) {
      case "fadeUp":
        tl.to(content.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "power3.out",
        })
        break
      case "slideLeft":
        tl.to(content.children, {
          opacity: 1,
          x: 0,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "power2.out",
        })
        break
      case "slideRight":
        tl.to(content.children, {
          opacity: 1,
          x: 0,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "power2.out",
        })
        break
      case "scale":
        tl.to(content.children, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "back.out(1.7)",
        })
        break
      case "rotate":
        tl.to(content.children, {
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "elastic.out(1, 0.5)",
        })
        break
      case "parallax":
        tl.to(content.children, {
          opacity: 1,
          y: 0,
          duration: duration,
          stagger: stagger,
          ease: "none",
        })
        break
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [animationType, delay, duration, stagger])

  return (
    <section ref={sectionRef} className={className} id={id}>
      <div ref={contentRef}>{children}</div>
    </section>
  )
}
