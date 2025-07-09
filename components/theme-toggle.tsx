"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      data-hover="Toggle Theme"
    >
      <motion.div initial={false} animate={{ rotate: theme === "dark" ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {theme === "light" ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
      </motion.div>
    </motion.button>
  )
}
