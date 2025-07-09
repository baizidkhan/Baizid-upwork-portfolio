"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "BulkMedi - Medical eCommerce Platform",
    type: "ecommerce",
    description:
      "Comprehensive medical supplies eCommerce platform with advanced product catalog and secure checkout system.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "eCommerce",
    url: "https://bulkmedi.com/",
  },
  {
    id: 2,
    title: "GeeksSort - Business Solutions",
    type: "business",
    description: "Professional business website showcasing technology solutions and services with modern design.",
    technologies: ["WordPress", "Custom Theme", "PHP", "JavaScript"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "Business",
    url: "https://geekssort.com/",
  },
  {
    id: 3,
    title: "Baizid Khan - Personal Portfolio",
    type: "portfolio",
    description: "Professional portfolio website showcasing WordPress development expertise and project showcase.",
    technologies: ["WordPress", "Custom Design", "Responsive", "SEO"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "Portfolio",
    url: "https://baizidkhan.com/",
  },
  {
    id: 4,
    title: "Geeksfolio eCommerce Demo",
    type: "ecommerce",
    description: "Modern eCommerce demonstration site with clean design and optimized user experience.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "CSS3"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "eCommerce",
    url: "https://ecommerce01.geeksfolio.com/",
  },
  {
    id: 5,
    title: "AIT Business Solutions",
    type: "business",
    description: "Corporate business website with professional layout and comprehensive service presentation.",
    technologies: ["WordPress", "Business Theme", "PHP", "MySQL"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "Business",
    url: "https://ait02.geeksfolio.com/",
  },
  {
    id: 6,
    title: "iBraniq - Fashion eCommerce",
    type: "ecommerce",
    description: "Stylish fashion eCommerce store with advanced product filtering and modern checkout experience.",
    technologies: ["WordPress", "WooCommerce", "Custom CSS", "JavaScript"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "eCommerce",
    url: "https://ibraniq.com/",
  },
  {
    id: 7,
    title: "Beauty Care 101 - Cosmetics Store",
    type: "ecommerce",
    description: "Beautiful cosmetics and beauty products eCommerce platform with elegant design and smooth UX.",
    technologies: ["WordPress", "WooCommerce", "Custom Theme", "PHP"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "eCommerce",
    url: "https://beautycare101.geeksfolio.com/",
  },
  {
    id: 8,
    title: "Rupayan - Premium eCommerce",
    type: "ecommerce",
    description: "High-end eCommerce platform with premium product showcase and advanced shopping features.",
    technologies: ["WordPress", "WooCommerce", "Premium Theme", "Custom Code"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "eCommerce",
    url: "https://rupayan.geeksfolio.com/",
  },
  {
    id: 9,
    title: "TMB News - News & Blog Platform",
    type: "blog",
    description: "Dynamic news and blog platform with content management system and social sharing features.",
    technologies: ["WordPress", "Custom Post Types", "SEO", "Social Integration"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "Blog",
    url: "https://tmbnews.com/",
  },
  {
    id: 10,
    title: "KeenCares - Healthcare eCommerce",
    type: "ecommerce",
    description: "Healthcare and medical products eCommerce platform with secure payment and product management.",
    technologies: ["WordPress", "WooCommerce", "Security Features", "Custom Development"],
    status: "completed",
    image: "/placeholder.svg?height=200&width=300",
    category: "eCommerce",
    url: "https://keencares.com/",
  },
]

const filterOptions = [
  { label: "All Projects", value: "all" },
  { label: "Business", value: "business" },
  { label: "eCommerce", value: "ecommerce" },
  { label: "Portfolio", value: "portfolio" },
  { label: "Blog", value: "blog" },
]

export function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.type === activeFilter
  })

  return (
    <div>
      {/* Filter Options */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-0">
        {filterOptions.map((filter) => (
          <Button
            key={filter.value}
            variant="outline"
            size="sm"
            onClick={() => setActiveFilter(filter.value)}
            className={`transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 ${
              activeFilter === filter.value
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "hover:bg-gray-100 bg-transparent border-gray-300"
            }`}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {project.status === "coming-soon" && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Badge className="bg-yellow-500 text-white text-xs">Coming Soon</Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4 sm:p-5 lg:p-6">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
                {project.status === "completed" && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.status === "completed" && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-all duration-200 text-xs sm:text-sm py-2 sm:py-2.5"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    View Live Site
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
        </div>
      )}
    </div>
  )
}
