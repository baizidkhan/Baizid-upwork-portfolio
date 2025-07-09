"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { EnhancedMouseCursor } from "@/components/enhanced-mouse-cursor"
import { GSAPSectionReveal } from "@/components/gsap-section-reveal"
import { GSAPStaggerReveal } from "@/components/gsap-stagger-reveal"
import { FloatingElements } from "@/components/floating-elements"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Preloader } from "@/components/preloader"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SocialLinks } from "@/components/social-links"
import { TextReveal } from "@/components/text-reveal"
import { ImageZoom } from "@/components/image-zoom"
import { SectionBackground } from "@/components/section-background"
import { MagneticButton } from "@/components/magnetic-button"

import {
  MapPin,
  Globe,
  Star,
  Code,
  ShoppingCart,
  Briefcase,
  Palette,
  Database,
  UserCheck,
  ChevronDown,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Calendar,
} from "lucide-react"

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Hallo", lang: "German" },
  { text: "Ciao", lang: "Italian" },
  { text: "Olá", lang: "Portuguese" },
]

const blogPosts = [
  {
    id: "1",
    title: "10 WordPress Performance Optimization Tips That Actually Work",
    excerpt: "Discover proven techniques to speed up your WordPress site and improve user experience...",
    content: "Full blog post content here...",
    category: "WordPress Tips",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: "Baizid Khan",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["WordPress", "Performance", "SEO"],
  },
  {
    id: "2",
    title: "WooCommerce vs Shopify: Which Platform is Right for Your Business?",
    excerpt: "A comprehensive comparison of the two leading eCommerce platforms to help you make the right choice...",
    content: "Detailed comparison content here...",
    category: "eCommerce Trends",
    readTime: "8 min read",
    date: "Dec 10, 2024",
    author: "Baizid Khan",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["WooCommerce", "Shopify", "eCommerce", "Comparison", "Business"],
  },
  {
    id: "3",
    title: "How Custom WordPress Themes Can Transform Your Business",
    excerpt: "Learn why investing in a custom WordPress theme can be a game-changer for your online presence...",
    content: "Custom theme benefits content here...",
    category: "Business Solutions",
    readTime: "6 min read",
    date: "Dec 5, 2024",
    author: "Baizid Khan",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["WordPress", "Custom Themes", "Business", "ROI", "Web Design"],
  },
]

export default function Portfolio() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [showWelcome, setShowWelcome] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [selectedBlogPost, setSelectedBlogPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev < greetings.length - 1) return prev + 1
        clearInterval(timer)
        setTimeout(() => {
          setShowWelcome(false)
          setAnimationComplete(true)
        }, 800)
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleBlogReadMore = (post: (typeof blogPosts)[0]) => {
    setSelectedBlogPost(post)
    setIsBlogModalOpen(true)
  }

  if (showWelcome) {
    return (
      <ThemeProvider>
        <Preloader />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
        <SectionBackground />
        <EnhancedMouseCursor />
        <FloatingElements />
        <EnhancedNavigation />
        <ThemeToggle />
        <SocialLinks />
        <ScrollToTop />

        {/* Hero Section */}
        <section id="home" className="flex min-h-screen items-center justify-center pt-20 sm:pt-24">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={animationComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-blue-200 shadow-xl dark:ring-blue-800 sm:h-36 sm:w-36">
                <ImageZoom
                  src="/images/baizid-khan-profile.jpg"
                  alt="Baizid Khan"
                  className="h-full w-full object-cover"
                />
              </div>

              <TextReveal>
                <motion.h1
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent dark:from-white dark:to-gray-300 sm:text-5xl md:text-6xl"
                >
                  Baizid Khan
                </motion.h1>
              </TextReveal>

              <p className="mt-3 text-lg font-semibold text-blue-600 dark:text-blue-400 sm:text-xl">
                WordPress Customization Expert | Business Analyst @ GeekSSort
              </p>

              <div className="mx-auto mt-8 flex max-w-lg flex-col gap-4 sm:flex-row sm:justify-center">
                <MagneticButton
                  className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View My Work
                </MagneticButton>

                <MagneticButton
                  className="rounded-lg border-2 border-blue-600 bg-transparent px-6 py-3 text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/40"
                  onClick={() => window.open("https://tidycal.com/baizidkhan/30-minute-meeting", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </MagneticButton>
              </div>

              <motion.div
                className="mt-10 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <ChevronDown className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Professional Profile Section */}
        <GSAPSectionReveal id="about" className="py-12 sm:py-16 lg:py-20" sectionName="about">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <TextReveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 lg:mb-16 px-4">
                  Professional Profile
                </h2>
              </TextReveal>

              <GSAPStaggerReveal stagger={0.3}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="border-2 border-blue-100 dark:border-blue-800 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg group">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center mb-4 sm:mb-6">
                          <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                          </motion.div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Current Role</h3>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Business Analyst</h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">@ GeekSSort</p>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>Remote • Full-time</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="border-2 border-green-100 dark:border-green-800 hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 hover:shadow-lg group">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center mb-4 sm:mb-6">
                          <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                          </motion.div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                            Upwork Profile
                          </h3>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                              WordPress Customization Expert
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">eCommerce & Business Websites</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                                $18
                              </span>
                              <span className="text-gray-600 dark:text-gray-400 ml-1">/hr</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-gray-600 dark:text-gray-400 ml-1">5+ years exp</span>
                            </div>
                          </div>
                          <MagneticButton
                            className="w-full border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 bg-transparent transition-all duration-200 border-2 rounded-lg px-4 py-2"
                            onClick={() =>
                              window.open(
                                "https://www.upwork.com/freelancers/~010bf9d15201f00830?mp_source=share",
                                "_blank",
                              )
                            }
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Upwork Profile
                          </MagneticButton>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </GSAPStaggerReveal>

              <div className="mb-8 sm:mb-12 lg:mb-16">
                <TextReveal>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
                    Services Offered
                  </h3>
                </TextReveal>
                <GSAPStaggerReveal stagger={0.1}>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
                    {[
                      { icon: Briefcase, label: "Strategy & Client Acquisition", color: "blue" },
                      { icon: Code, label: "Software Solutions", color: "purple" },
                      { icon: Globe, label: "Web & App", color: "green" },
                      { icon: Palette, label: "UI/UX", color: "pink" },
                      { icon: Star, label: "Branding", color: "yellow" },
                      { icon: Database, label: "CMS", color: "indigo" },
                      { icon: UserCheck, label: "Tech Recruiting", color: "red" },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Card className="text-center p-3 sm:p-4 hover:shadow-lg transition-all duration-300 group border-0 shadow-sm">
                          <CardContent className="p-1 sm:p-2">
                            <motion.div
                              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                            </motion.div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                              {service.label}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </GSAPStaggerReveal>
              </div>

              <div className="mb-8 sm:mb-12 lg:mb-16">
                <TextReveal>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
                    Expertise Focus
                  </h3>
                </TextReveal>
                <GSAPStaggerReveal stagger={0.2}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                      {
                        icon: Code,
                        title: "WordPress Customization",
                        description: "Custom themes, plugins, and advanced WordPress solutions",
                        color: "blue",
                      },
                      {
                        icon: ShoppingCart,
                        title: "eCommerce Development",
                        description: "WooCommerce and custom eCommerce solutions",
                        color: "green",
                      },
                      {
                        icon: Globe,
                        title: "Shopify",
                        description: "Shopify store setup and customization",
                        color: "purple",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="text-center p-4 sm:p-6 border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg group">
                          <CardContent className="p-3 sm:p-4">
                            <motion.div
                              className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-400" />
                            </motion.div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </GSAPStaggerReveal>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 fill-current mr-2" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        5+ Years Experience
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      Specialized in WordPress CMS Customization with a proven track record of delivering high-quality,
                      conversion-focused websites for businesses worldwide.
                    </p>
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                      {["WordPress", "WooCommerce", "Shopify", "PHP", "JavaScript", "CSS", "HTML", "MySQL"].map(
                        (skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-xs sm:text-sm"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Experience Journey Section */}
        <GSAPSectionReveal
          id="experience"
          className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950"
          sectionName="experience"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <TextReveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 lg:mb-16">
                  Experience Journey
                </h2>
              </TextReveal>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 dark:from-blue-800 to-purple-200 dark:to-purple-800 hidden md:block"></div>

                <GSAPStaggerReveal stagger={0.3}>
                  <div className="space-y-12">
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <Badge className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 mr-2 sm:mr-3 text-xs sm:text-sm">
                                Current
                              </Badge>
                              <span className="text-blue-600 dark:text-blue-400 font-semibold">2024</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                              Business Analyst
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 sm:mb-3">@ GeekSSort</p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              Leading strategic analysis and client acquisition initiatives while maintaining technical
                              expertise in WordPress development.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-8"></div>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-green-600 dark:bg-green-400 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                        <Card className="border-2 border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <Badge
                                variant="secondary"
                                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mr-2 sm:mr-3 text-xs sm:text-sm"
                              >
                                Previous
                              </Badge>
                              <span className="text-green-600 dark:text-green-400 font-semibold">2022-2024</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                              Full Stack Developer
                            </h3>
                            <p className="text-green-600 dark:text-green-400 font-medium mb-2 sm:mb-3">@ Tripnao</p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              Developed comprehensive web solutions handling both frontend user experiences and backend
                              infrastructure.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                        <Card className="border-2 border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <Badge
                                variant="secondary"
                                className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 mr-2 sm:mr-3 text-xs sm:text-sm"
                              >
                                Previous
                              </Badge>
                              <span className="text-purple-600 dark:text-purple-400 font-semibold">2020-2022</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                              Frontend Developer
                            </h3>
                            <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 sm:mb-3">@ KeenCares</p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              Specialized in creating responsive, user-friendly interfaces with focus on healthcare
                              technology solutions.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-600 dark:bg-purple-400 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-8"></div>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                        <Card className="border-2 border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <Badge
                                variant="secondary"
                                className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 mr-2 sm:mr-3 text-xs sm:text-sm"
                              >
                                Specialty
                              </Badge>
                              <span className="text-yellow-600 dark:text-yellow-400 font-semibold">5+ Years</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                              WordPress CMS Customization
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              Deep expertise in WordPress development, theme customization, and plugin development
                              across all professional roles.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </GSAPStaggerReveal>
              </div>

              <div className="mt-8 sm:mt-12 lg:mt-16">
                <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400 mr-2 sm:mr-3" />
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        Now Entering Upwork Marketplace
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                      Bringing 5+ years of proven physical experience to the global freelance marketplace
                    </p>
                    <div className="flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <span className="font-semibold">Ready to deliver exceptional WordPress solutions</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Blog Section */}
        <GSAPSectionReveal id="blog" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900" sectionName="blog">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <TextReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Latest Insights
                  </h2>
                </TextReveal>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  WordPress tips, eCommerce trends, and business solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                      <CardContent className="p-4 sm:p-6">
                        <div className="mb-3 sm:mb-4">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="rounded-md w-full h-40 object-cover mb-2"
                          />
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                            <span>{post.date}</span>
                          </div>
                          <MagneticButton
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors hover:underline"
                            onClick={() => handleBlogReadMore(post)}
                          >
                            Read More
                          </MagneticButton>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Footer Section */}
        <footer className="py-6 sm:py-8 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Baizid Khan. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
