"use client"

import { motion } from "framer-motion"
import { Award, Calendar, MapPin, Star, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MagneticButton } from "./magnetic-button"
import { ImageZoom } from "./image-zoom"

export function ProfileSection() {
  const stats = [
    { label: "Years Experience", value: "5+", icon: Calendar },
    { label: "Projects Completed", value: "150+", icon: Award },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Countries Served", value: "25+", icon: MapPin },
  ]

  const highlights = [
    "Top Rated WordPress Developer on Upwork",
    "Specialized in Custom Theme Development",
    "Expert in WooCommerce & E-commerce Solutions",
    "Advanced React & Next.js Development",
    "SEO Optimization & Performance Tuning",
    "Responsive Design & Mobile-First Approach",
  ]

  return (
    <section id="profile" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Profile</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Passionate developer with expertise in creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <ImageZoom
                src="/images/baizid-khan-profile.jpg"
                alt="Baizid Khan - WordPress Developer"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">Available for Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional WordPress Developer
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
                With over 5 years of experience in web development, I specialize in creating custom WordPress solutions,
                modern React applications, and responsive websites that deliver exceptional user experiences. My passion
                lies in transforming ideas into functional, beautiful digital products.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Highlights:</h4>
              <div className="grid gap-2">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <MagneticButton
                variant="black"
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
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto"
              >
                Let's Work Together
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                    <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
