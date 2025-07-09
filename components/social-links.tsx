"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/baizidkhan",
    icon: Github,
    color: "hover:text-gray-900 hover:bg-gray-100",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/baizidkhan",
    icon: Linkedin,
    color: "hover:text-blue-600 hover:bg-blue-50",
  },
  {
    name: "Email",
    url: "mailto:info@baizidkhan.com",
    icon: Mail,
    color: "hover:text-red-600 hover:bg-red-50",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~010bf9d15201f00830?mp_source=share",
    icon: Globe,
    color: "hover:text-green-600 hover:bg-green-50",
  },
]

export function SocialLinks() {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-600 transition-all duration-300 ${link.color}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.9 }}
            data-hover={link.name}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
