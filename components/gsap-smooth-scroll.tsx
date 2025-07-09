"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export function GSAPSmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let smoother: ScrollSmoother

    // Initialize smooth scrolling
    const initSmoothScroll = () => {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: true,
        ignoreMobileResize: true,
      })

      // Add parallax effects to specific elements
      gsap.utils.toArray("[data-speed]").forEach((element: any) => {
        const speed = element.getAttribute("data-speed")
        gsap.to(element, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initSmoothScroll, 100)

    return () => {
      clearTimeout(timer)
      if (smoother) {
        smoother.kill()
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
