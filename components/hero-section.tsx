"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, ExternalLink, Mail } from "lucide-react"
import { TypewriterText } from "./typewriter-text"
import { MagneticButton } from "./magnetic-button"
import { FloatingElements } from "./floating-elements"

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("profile")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Baizid Khan
            </span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 mb-8 h-12 font-semibold">
            <TypewriterText
              texts={["WordPress Developer", "Frontend Specialist", "UI/UX Designer", "Full Stack Developer"]}
              speed={100}
              deleteSpeed={50}
              delayBetween={2000}
            />
          </div>

          {/* Description - Made darker */}
          <motion.p
            className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting exceptional digital experiences with modern web technologies. Specialized in WordPress development,
            React applications, and creating beautiful, functional websites that drive results.
          </motion.p>

          {/* Tagline - Made much darker */}
          <motion.p
            className="text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-12 max-w-2xl mx-auto font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            "Transforming WordPress themes into high-converting business solutions"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <MagneticButton
              variant="black"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Get Free Consultation
            </MagneticButton>

            <MagneticButton
              variant="outline"
              size="lg"
              onClick={() => window.open("https://upwork.com/freelancers/baizidkhan", "_blank")}
              className="w-full sm:w-auto"
            >
              <ExternalLink className="w-5 h-5" />
              View Upwork Profile
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              size="lg"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Scroll to explore</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="w-6 h-6 text-gray-500 dark:text-gray-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
