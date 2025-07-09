"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { StaggerContainer, StaggerItem } from "./stagger-container"
import { Code, Palette, Database, Zap, Globe, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "WordPress Development",
    description: "Custom themes, plugins, and full-stack WordPress solutions",
    backDescription:
      "5+ years of experience building scalable WordPress applications with custom themes, plugins, and modern development practices.",
    color: "blue",
    level: 95,
    projects: 50,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces",
    backDescription:
      "Expertise in design systems, user research, and creating pixel-perfect interfaces that users love and convert.",
    color: "purple",
    level: 88,
    projects: 35,
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "PHP, MySQL, REST APIs, and server-side solutions",
    backDescription: "Building robust server-side applications with focus on performance, security, and scalability.",
    color: "green",
    level: 85,
    projects: 40,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, caching, and best practices",
    backDescription: "Optimizing WordPress sites for lightning-fast loading times and superior user experience.",
    color: "yellow",
    level: 92,
    projects: 25,
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "WooCommerce, payment gateways, and online stores",
    backDescription: "Creating powerful e-commerce experiences with WooCommerce and custom shopping solutions.",
    color: "red",
    level: 90,
    projects: 30,
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach and cross-device compatibility",
    backDescription: "Building responsive WordPress sites that work perfectly across all devices and screen sizes.",
    color: "indigo",
    level: 94,
    projects: 45,
  },
]

export function SkillsSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Services & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive WordPress development services covering the full spectrum of modern web solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <StaggerItem key={skill.title}>
                <motion.div
                  className="h-80 perspective-1000"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="relative w-full h-full preserve-3d cursor-pointer"
                    animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => toggleCard(index)}
                  >
                    {/* Front of card */}
                    <Card
                      className={`absolute inset-0 w-full h-full backface-hidden border-2 border-${skill.color}-100 dark:border-${skill.color}-800 hover:border-${skill.color}-200 dark:hover:border-${skill.color}-700 transition-all duration-300 hover:shadow-xl group bg-white dark:bg-gray-800`}
                    >
                      <CardContent className="p-8 h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <motion.div
                            className={`w-12 h-12 bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-${skill.color}-200 dark:group-hover:bg-${skill.color}-800/50 transition-colors`}
                            whileHover={{
                              rotate: 360,
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <skill.icon className={`w-6 h-6 text-${skill.color}-600 dark:text-${skill.color}-400`} />
                          </motion.div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.title}</h3>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                          {skill.description}
                        </p>

                        {/* Skill Level Bar with animation */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
                            <motion.span
                              className="text-sm font-bold text-gray-900 dark:text-white"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className={`h-3 bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 rounded-full relative overflow-hidden`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                              }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: index * 0.1 + 1.5,
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Click indicator */}
                        <motion.div
                          className="text-center mt-4 text-xs text-gray-400 dark:text-gray-500"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          Click to flip
                        </motion.div>
                      </CardContent>
                    </Card>

                    {/* Back of card */}
                    <Card
                      className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-2 border-${skill.color}-200 dark:border-${skill.color}-700 bg-gradient-to-br from-${skill.color}-50 to-white dark:from-${skill.color}-900/20 dark:to-gray-800`}
                    >
                      <CardContent className="p-8 h-full flex flex-col justify-center">
                        <motion.div
                          className={`w-16 h-16 bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-xl flex items-center justify-center mx-auto mb-6`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <skill.icon className={`w-8 h-8 text-${skill.color}-600 dark:text-${skill.color}-400`} />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                          {skill.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-6">
                          {skill.backDescription}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className={`bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-lg p-3`}>
                            <div className={`text-2xl font-bold text-${skill.color}-600 dark:text-${skill.color}-400`}>
                              {skill.projects}+
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                          </div>
                          <div className={`bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-lg p-3`}>
                            <div className={`text-2xl font-bold text-${skill.color}-600 dark:text-${skill.color}-400`}>
                              {skill.level}%
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Mastery</div>
                          </div>
                        </div>

                        <motion.div
                          className="text-center mt-4 text-xs text-gray-400 dark:text-gray-500"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          Click to flip back
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
