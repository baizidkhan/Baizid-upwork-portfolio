"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StaggerContainer, StaggerItem } from "./stagger-container"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior WordPress Developer",
    company: "Freelance & Agency Work",
    location: "Remote",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Leading WordPress development projects for enterprise clients, creating custom themes, plugins, and full-stack solutions with modern technologies.",
    achievements: [
      "Delivered 50+ WordPress projects",
      "Improved site performance by 60%",
      "Built custom e-commerce solutions",
    ],
    color: "blue",
  },
  {
    title: "Full Stack WordPress Developer",
    company: "Digital Agency",
    location: "Remote",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Developed scalable WordPress solutions from scratch using React, PHP, and modern development practices. Collaborated with design and marketing teams.",
    achievements: [
      "Launched 30+ client websites",
      "Reduced development time by 40%",
      "Implemented headless WordPress solutions",
    ],
    color: "green",
  },
  {
    title: "WordPress Developer",
    company: "Web Development Studio",
    location: "New York, NY",
    period: "2019 - 2020",
    type: "Full-time",
    description:
      "Created responsive WordPress websites and custom functionality for various clients. Gained expertise in theme customization and plugin development.",
    achievements: ["Completed 25+ WordPress projects", "Mastered custom post types", "Optimized site loading speeds"],
    color: "purple",
  },
  {
    title: "Junior Web Developer",
    company: "Tech Startup",
    location: "San Francisco, CA",
    period: "2018 - 2019",
    type: "Full-time",
    description:
      "Started career in web development, learning WordPress, PHP, and frontend technologies. Contributed to team projects and client deliverables.",
    achievements: [
      "Built first 10 WordPress sites",
      "Learned PHP and MySQL",
      "Contributed to team workflow improvements",
    ],
    color: "orange",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and key milestones in WordPress development
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 hidden md:block" />

            <StaggerContainer className="space-y-12">
              {experiences.map((exp, index) => (
                <StaggerItem key={exp.title}>
                  <div className="relative flex items-start">
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-6 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block z-10`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    />

                    {/* Content */}
                    <motion.div
                      className="md:ml-16 w-full"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card
                        className="border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 bg-white dark:bg-gray-900"
                      >
                        <CardContent className="p-6 min-h-[320px] flex flex-col justify-between">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                                <Building className="w-4 h-4 mr-2" />
                                <span className={`font-medium text-${exp.color}-600 dark:text-${exp.color}-400`}>
                                  {exp.company}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col sm:items-end">
                              <Badge
                                className={`bg-${exp.color}-100 dark:bg-${exp.color}-900/30 text-${exp.color}-800 dark:text-${exp.color}-300 mb-2`}
                              >
                                {exp.type}
                              </Badge>
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Calendar className="w-4 h-4 mr-1" />
                                {exp.period}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.2 + i * 0.1 }}
                                >
                                  <div className={`w-2 h-2 bg-${exp.color}-500 rounded-full mr-3`} />
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
