"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPSectionRevealProps {
  children: React.ReactNode
  className?: string
  id?: string
  sectionName?: string
}

export function GSAPSectionReveal({ children, className = "", id, sectionName }: GSAPSectionRevealProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Set initial state - section starts below viewport
    gsap.set(section, {
      y: 100,
      opacity: 0,
    })

    // Create the reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onEnter: () => {
          // Dispatch custom event when section enters
          if (sectionName) {
            window.dispatchEvent(new CustomEvent("sectionEnter", { detail: sectionName }))
          }
        },
        onLeave: () => {
          // Dispatch custom event when section leaves
          if (sectionName) {
            window.dispatchEvent(new CustomEvent("sectionLeave", { detail: sectionName }))
          }
        },
        onEnterBack: () => {
          if (sectionName) {
            window.dispatchEvent(new CustomEvent("sectionEnter", { detail: sectionName }))
          }
        },
        onLeaveBack: () => {
          if (sectionName) {
            window.dispatchEvent(new CustomEvent("sectionLeave", { detail: sectionName }))
          }
        },
      },
    })

    tl.to(section, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [sectionName])

  return (
    <section ref={sectionRef} className={className} id={id} data-section={sectionName}>
      {children}
    </section>
  )
}
