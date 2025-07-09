"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sectionColors = {
  home: "from-blue-50 to-indigo-50",
  about: "from-white to-gray-50",
  experience: "from-gray-50 to-blue-50",
  services: "from-white to-purple-50",
  skills: "from-gray-50 to-green-50",
  github: "from-white to-indigo-50",
  projects: "from-gray-50 to-purple-50",
  upwork: "from-blue-50 to-indigo-100",
  blog: "from-white to-gray-50",
  contact: "from-blue-600 to-indigo-700",
}

export function SectionBackground() {
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const handleSectionChange = (e: CustomEvent) => {
      setCurrentSection(e.detail)
    }

    window.addEventListener("sectionEnter", handleSectionChange as EventListener)
    return () => window.removeEventListener("sectionEnter", handleSectionChange as EventListener)
  }, [])

  return (
    <motion.div
      className={`fixed inset-0 bg-gradient-to-br ${sectionColors[currentSection as keyof typeof sectionColors]} -z-10`}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    />
  )
}
