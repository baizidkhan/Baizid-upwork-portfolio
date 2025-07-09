"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, FolderOpen, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    const handleSectionChange = (e: CustomEvent) => {
      setActiveSection(e.detail)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("sectionEnter", handleSectionChange as EventListener)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("sectionEnter", handleSectionChange as EventListener)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => scrollToSection("#home")}
                className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                data-hover="Home"
              >
                Baizid Khan
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      activeSection === item.href.substring(1)
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-hover={item.name}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-hover="Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Navigation</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === item.href.substring(1)
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 10 }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.href.substring(1) ? "bg-blue-600 scale-125" : "bg-gray-400 hover:bg-blue-400"
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              data-hover={item.name}
            />
          ))}
        </div>
      </div>
    </>
  )
}
