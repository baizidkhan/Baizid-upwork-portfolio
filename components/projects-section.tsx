"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "./stagger-container"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    color: "blue",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    color: "green",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with advanced animations, responsive design, and optimized performance. Built with Next.js and Framer Motion.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    color: "purple",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive charts, and responsive design. Integrates with multiple weather APIs.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Chart.js", "Weather API", "CSS Grid", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    color: "orange",
  },
  {
    title: "Social Media App",
    description:
      "A social media platform with real-time messaging, image sharing, and user profiles. Built with modern React patterns and Firebase.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Firebase", "Redux", "Material-UI", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    color: "pink",
  },
  {
    title: "Learning Management System",
    description:
      "An educational platform with course management, video streaming, progress tracking, and interactive quizzes for online learning.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "PostgreSQL", "Video.js", "Stripe", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
    color: "indigo",
  },
]

export function ProjectsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various skills and technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            className="bg-white text-gray-900 hover:bg-gray-100"
                            onClick={() => window.open(project.liveUrl, "_blank")}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white border-white text-gray-900 hover:bg-gray-100"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`bg-${project.color}-50 text-${project.color}-700 hover:bg-${project.color}-100 transition-colors`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button
                          size="sm"
                          className={`w-full bg-${project.color}-600 hover:bg-${project.color}-700 text-white`}
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                          <Github className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
