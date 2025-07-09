"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { ProjectFilter } from "@/components/project-filter"
import { ContactForm } from "@/components/contact-form"
import { GitHubStats } from "@/components/github-stats"
import { BlogCard } from "@/components/blog-card"
import { BlogModal } from "@/components/blog-modal"
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
  Mail,
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
  Zap,
  Settings,
  TrendingUp,
  Layers,
  Monitor,
  Heart,
  FileText,
  Building,
  Mic,
  Users,
  ArrowRight,
  Github,
  Linkedin,
  CheckCircle,
  Clock,
  MessageSquare,
  ExternalLink,
  Calendar,
} from "lucide-react"

const greetings = [
  { text: "Hello", lang: "English", gradient: "from-purple-600 via-pink-500 to-blue-600" },
  { text: "Hola", lang: "Spanish", gradient: "from-blue-600 via-cyan-400 to-teal-600" },
  { text: "Bonjour", lang: "French", gradient: "from-teal-600 via-green-400 to-lime-600" },
  { text: "Hallo", lang: "German", gradient: "from-lime-600 via-yellow-400 to-orange-600" },
  { text: "Ciao", lang: "Italian", gradient: "from-orange-600 via-red-400 to-pink-600" },
  { text: "Olá", lang: "Portuguese", gradient: "from-pink-600 via-purple-400 to-indigo-600" },
]

const blogPosts = [
  {
    id: "1",
    title: "10 WordPress Performance Optimization Tips That Actually Work",
    excerpt: "Discover proven techniques to speed up your WordPress site and improve user experience...",
    content: `WordPress performance optimization is crucial for user experience and SEO rankings. Here are 10 proven techniques that will significantly improve your site's loading speed:

1. **Choose a Fast Hosting Provider**
Your hosting provider is the foundation of your website's performance. Invest in quality hosting with SSD storage, CDN integration, and optimized server configurations.

2. **Optimize Images**
Large images are often the biggest culprit of slow loading times. Use tools like TinyPNG or WebP format to compress images without losing quality.

3. **Use Caching Plugins**
Implement caching solutions like WP Rocket, W3 Total Cache, or WP Super Cache to serve static versions of your pages.

4. **Minimize HTTP Requests**
Reduce the number of elements on your page and combine CSS/JS files to minimize HTTP requests.

5. **Enable GZIP Compression**
Compress your website files to reduce their size during transfer from server to browser.

6. **Optimize Your Database**
Regularly clean up your WordPress database by removing spam comments, post revisions, and unused plugins.

7. **Use a Content Delivery Network (CDN)**
Distribute your content across multiple servers worldwide to reduce loading times for global visitors.

8. **Minimize Plugins**
Only use essential plugins and regularly audit your plugin list to remove unnecessary ones.

9. **Optimize CSS and JavaScript**
Minify and combine your CSS and JavaScript files to reduce file sizes and HTTP requests.

10. **Choose a Lightweight Theme**
Select themes that are coded efficiently and don't include unnecessary features that slow down your site.

Implementing these techniques can reduce your site's loading time from several seconds to under 2 seconds, significantly improving user experience and search engine rankings.`,
    category: "WordPress Tips",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: "Baizid Khan",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["WordPress", "Performance", "SEO", "Optimization", "Speed"],
  },
  {
    id: "2",
    title: "WooCommerce vs Shopify: Which Platform is Right for Your Business?",
    excerpt: "A comprehensive comparison of the two leading eCommerce platforms to help you make the right choice...",
    content: `Choosing the right eCommerce platform is crucial for your online business success. Let's compare WooCommerce and Shopify across key factors:

**Cost Comparison**
WooCommerce is free but requires hosting, domain, and potentially premium themes/plugins. Shopify has monthly fees starting at $29 but includes hosting and basic features.

**Ease of Use**
Shopify offers a more user-friendly interface for beginners, while WooCommerce requires more technical knowledge but offers greater flexibility.

**Customization**
WooCommerce wins in customization with thousands of themes and plugins. Shopify has limitations but offers a more streamlined experience.

**SEO Capabilities**
Both platforms offer good SEO features, but WooCommerce with WordPress gives you more control over SEO optimization.

**Payment Options**
Shopify has its own payment gateway but charges transaction fees for third-party processors. WooCommerce supports all major payment gateways without additional fees.

**Scalability**
Both platforms can handle large stores, but WooCommerce might require more server resources as you scale.

**Support**
Shopify offers 24/7 support, while WooCommerce relies on community support and documentation.

**Conclusion**
Choose Shopify if you want simplicity and don't mind monthly fees. Choose WooCommerce if you want full control and have technical expertise.`,
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
    content: `A custom WordPress theme is more than just a visual upgrade – it's a strategic business investment that can transform your online presence and drive real results.

**Brand Identity and Recognition**
Custom themes allow you to create a unique visual identity that sets you apart from competitors using generic templates. Your brand colors, fonts, and design elements create a cohesive experience that builds trust and recognition.

**Performance Optimization**
Custom themes are built specifically for your needs, eliminating unnecessary code and features that slow down generic themes. This results in faster loading times and better user experience.

**SEO Advantages**
Clean, semantic code structure in custom themes helps search engines better understand and index your content. This can lead to improved search rankings and organic traffic.

**User Experience (UX)**
Custom themes are designed with your specific audience in mind, creating intuitive navigation and user flows that guide visitors toward your business goals.

**Scalability and Flexibility**
As your business grows, custom themes can be easily modified and expanded to accommodate new features and functionality without starting from scratch.

**Mobile Responsiveness**
Custom themes ensure your site looks and functions perfectly across all devices, which is crucial since mobile traffic now accounts for over 50% of web traffic.

**Conversion Optimization**
Every element in a custom theme can be optimized for conversions, from button placement to form design, leading to higher conversion rates and more leads.

**Long-term Value**
While the initial investment is higher, custom themes provide long-term value through better performance, lower maintenance costs, and improved business results.

**Case Study Results**
Our clients typically see 40-60% improvement in loading speeds, 25-35% increase in conversion rates, and 50-70% improvement in mobile user engagement after switching to custom themes.

Investing in a custom WordPress theme is investing in your business's digital future.`,
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
        if (prev < greetings.length - 1) {
          return prev + 1
        } else {
          clearInterval(timer)
          setTimeout(() => {
            setShowWelcome(false)
            setAnimationComplete(true)
          }, 100)
          return prev
        }
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
      <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
        <SectionBackground />
        <EnhancedMouseCursor />
        <FloatingElements />
        <EnhancedNavigation />
        <ThemeToggle />
        <SocialLinks />
        <ScrollToTop />

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-16"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={animationComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 ring-2 sm:ring-4 ring-blue-200 dark:ring-blue-800 shadow-xl hover:ring-blue-300 dark:hover:ring-blue-700 transition-all duration-300 rounded-full overflow-hidden">
                <ImageZoom
                  src="/images/baizid-khan-profile.jpg"
                  alt="Baizid Khan"
                  className="w-full h-full"
                />
              </div>

              <TextReveal>
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text leading-tight"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Baizid Khan
                </motion.h1>
              </TextReveal>

              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-3 sm:mb-4 px-2 sm:px-4 leading-relaxed">
                WordPress Developer | Business Analyst <a href="https://geekssort.com/">@GeekSSort</a>
              </h2>

              <TextReveal>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-6">
                  "Transforming WordPress themes into high-converting business solutions"
                </p>
              </TextReveal>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <MagneticButton
                  variant="material"
                  color="blue"
                  className="text-white border-2 border-white"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View My Work
                </MagneticButton>
                <MagneticButton
                  variant="outline"
                  className="border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700"
                  onClick={() => window.open("https://tidycal.com/baizidkhan/30-minute-meeting", "_blank")}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Free Consultation
                </MagneticButton>
              </div>

              <motion.div
                className="animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 dark:text-gray-500 mx-auto cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
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
                  {/* Current Role */}
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card
                      className="border-2 border-blue-100 dark:border-blue-800 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg group card bg-white dark:bg-gray-800"
                      data-hover="Current Role"
                    >
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

                  {/* Upwork Profile */}
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card
                      className="border-2 border-green-100 dark:border-green-800 hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 hover:shadow-lg group card bg-white dark:bg-gray-800"
                      data-hover="Upwork Profile"
                    >
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center mb-4 sm:mb-6">
                          <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                          </motion.div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Upwork Profile</h3>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">WordPress Developer</h4>
                            <p className="text-gray-600 dark:text-gray-400">eCommerce & Business Websites</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">$18</span>
                              <span className="text-gray-600 dark:text-gray-400 ml-1">/hr</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-gray-600 dark:text-gray-400 ml-1">5+ years exp</span>
                            </div>
                          </div>
                          <MagneticButton
                            variant="material"
                            color="blue"
                            className="w-full text-white border-2 border-white px-4 py-2"
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

              {/* Services Offered */}
              <div className="mb-8 sm:mb-12 lg:mb-16">
                <TextReveal>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Services Offered</h3>
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
                        <Card
                          className="text-center p-3 sm:p-4 hover:shadow-lg transition-all duration-300 group border-0 shadow-sm card bg-white dark:bg-gray-800"
                          data-hover={service.label}
                        >
                          <CardContent className="p-1 sm:p-2">
                            <motion.div
                              className={`w-8 h-8 sm:w-10 sm:h-10 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-${service.color}-200 dark:group-hover:bg-${service.color}-800 transition-colors`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <service.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${service.color}-600 dark:text-${service.color}-400`} />
                            </motion.div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{service.label}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </GSAPStaggerReveal>
              </div>

              {/* Expertise Focus */}
              <div className="mb-8 sm:mb-12 lg:mb-16">
                <TextReveal>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Expertise Focus</h3>
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
                        <Card
                          className={`text-center p-4 sm:p-6 border-2 border-${item.color}-100 dark:border-${item.color}-800 hover:border-${item.color}-200 dark:hover:border-${item.color}-700 transition-all duration-300 hover:shadow-lg group card bg-white dark:bg-gray-800`}
                          data-hover={item.title}
                        >
                          <CardContent className="p-3 sm:p-4">
                            <motion.div
                              className={`w-12 h-12 sm:w-16 sm:h-16 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-${item.color}-200 dark:group-hover:bg-${item.color}-800 transition-colors`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${item.color}-600 dark:text-${item.color}-400`} />
                            </motion.div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </GSAPStaggerReveal>
              </div>

              {/* Experience Highlight */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow duration-300 card bg-white dark:bg-gray-800"
                  data-hover="Experience"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 fill-current mr-2" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">5+ Years Experience</h3>
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
                              data-hover={skill}
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

        {/* Experience Journey Section with GSAP */}
        <GSAPSectionReveal id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950" sectionName="experience">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <TextReveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 lg:mb-16">
                  Experience Journey
                </h2>
              </TextReveal>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 dark:from-blue-800 to-purple-200 dark:to-purple-800 hidden md:block"></div>

                <GSAPStaggerReveal stagger={0.3}>
                  <div className="space-y-12">
                    {/* Current Position */}
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                        <Card
                          className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hover:shadow-lg transition-all duration-300 card bg-white dark:bg-gray-800"
                          data-hover="Current Position"
                        >
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <Badge className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 mr-2 sm:mr-3 text-xs sm:text-sm">Current</Badge>
                              <span className="text-blue-600 dark:text-blue-400 font-semibold">2024</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Business Analyst</h3>
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

                    {/* Previous Position 1 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-green-600 dark:bg-green-400 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                        <Card
                          className="border-2 border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 hover:shadow-lg transition-all duration-300 card bg-white dark:bg-gray-800"
                          data-hover="Full Stack Developer"
                        >
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

                    {/* Previous Position 2 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                        <Card
                          className="border-2 border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 hover:shadow-lg transition-all duration-300 card bg-white dark:bg-gray-800"
                          data-hover="Frontend Developer"
                        >
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

                    {/* Specialty Highlight */}
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                        <Card
                          className="border-2 border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 hover:shadow-lg transition-all duration-300 card bg-white dark:bg-gray-800"
                          data-hover="WordPress Specialist"
                        >
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
                              Deep expertise in WordPress development, theme customization, and plugin development across
                              all professional roles.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </GSAPStaggerReveal>
              </div>

              {/* Transition Highlight */}
              <div className="mt-8 sm:mt-12 lg:mt-16">
                <Card
                  className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-shadow duration-300 card bg-white dark:bg-gray-800"
                  data-hover="Upwork Journey"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400 mr-2 sm:mr-3" />
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Now Entering Upwork Marketplace</h3>
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

        {/* Services & Expertise Section with GSAP */}
        <GSAPSectionReveal id="services" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900" sectionName="services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <TextReveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8">
                  Services & Expertise
                </h2>
              </TextReveal>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Comprehensive WordPress customization services tailored to transform your vision into high-converting,
                professional websites
              </p>

              <GSAPStaggerReveal stagger={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      icon: Building,
                      title: "Business Websites",
                      description: "Professional corporate sites that establish credibility and drive conversions",
                      color: "blue",
                    },
                    {
                      icon: Briefcase,
                      title: "Portfolio Sites",
                      description: "Stunning showcases for creatives and professionals to display their work",
                      color: "purple",
                    },
                    {
                      icon: ShoppingCart,
                      title: "eCommerce Stores",
                      description: "WooCommerce-powered online stores optimized for sales and user experience",
                      color: "green",
                    },
                    {
                      icon: Star,
                      title: "Entertainment Sites",
                      description: "Engaging platforms for media, gaming, and entertainment businesses",
                      color: "yellow",
                    },
                    {
                      icon: Heart,
                      title: "Wedding Sites",
                      description: "Beautiful, romantic websites for couples and wedding service providers",
                      color: "pink",
                    },
                    {
                      icon: FileText,
                      title: "Blog Development",
                      description: "Content-focused sites with SEO optimization and reader engagement features",
                      color: "indigo",
                    },
                    {
                      icon: Zap,
                      title: "Landing Pages",
                      description: "High-converting single-page sites designed to capture leads and drive action",
                      color: "orange",
                    },
                    {
                      icon: Users,
                      title: "Non-profit Sites",
                      description: "Mission-driven websites that inspire donations and volunteer engagement",
                      color: "teal",
                    },
                    {
                      icon: Mic,
                      title: "Podcast Sites",
                      description: "Audio-focused platforms with episode management and audience engagement tools",
                      color: "red",
                    },
                    {
                      icon: Settings,
                      title: "Form Integration",
                      description: "Custom forms and data collection systems integrated seamlessly into your site",
                      color: "gray",
                    },
                    {
                      icon: Monitor,
                      title: "SaaS Websites",
                      description: "Software service sites with subscription management and user dashboards",
                      color: "cyan",
                    },
                    {
                      icon: Globe,
                      title: "Shopify Customization",
                      description: "Expert Shopify theme customization and store optimization services",
                      color: "emerald",
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -10, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card
                        className={`hover:shadow-xl transition-all duration-300 border-0 shadow-md group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 card bg-white dark:bg-gray-800`}
                        data-hover={service.title}
                      >
                        <CardContent className="p-4 sm:p-6">
                          <motion.div
                            className={`w-10 h-10 sm:w-12 sm:h-12 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-${service.color}-200 dark:group-hover:bg-${service.color}-800 transition-colors`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${service.color}-600 dark:text-${service.color}-400`} />
                          </motion.div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </GSAPStaggerReveal>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Technical Skills Section with GSAP */}
        <GSAPSectionReveal id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950" sectionName="skills">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <TextReveal>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
                  Technical Skills
                </h2>
              </TextReveal>

              <GSAPStaggerReveal stagger={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      icon: Database,
                      title: "CMS",
                      skills: [
                        { name: "WordPress", level: "Expert" },
                        { name: "Shopify", level: "Advanced" },
                      ],
                      color: "blue",
                    },
                    {
                      icon: Layers,
                      title: "Page Builders",
                      skills: [
                        { name: "Elementor", level: "Expert" },
                        { name: "WPBakery", level: "Advanced" },
                      ],
                      color: "green",
                    },
                    {
                      icon: ShoppingCart,
                      title: "eCommerce",
                      skills: [
                        { name: "WooCommerce", level: "Expert" },
                        { name: "Optimization", level: "Advanced" },
                      ],
                      color: "purple",
                    },
                    {
                      icon: Code,
                      title: "Development",
                      skills: [
                        { name: "Frontend", level: "Expert" },
                        { name: "Backend", level: "Advanced" },
                      ],
                      color: "orange",
                    },
                    {
                      icon: Zap,
                      title: "Performance",
                      skills: [
                        { name: "Speed Optimization", level: "Expert" },
                        { name: "Responsive Design", level: "Expert" },
                      ],
                      color: "red",
                    },
                    {
                      icon: Settings,
                      title: "Additional",
                      skills: [
                        { name: "Migration", level: "Expert" },
                        { name: "Maintenance", level: "Expert" },
                      ],
                      color: "teal",
                    },
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card
                        className={`border-2 border-${category.color}-100 dark:border-${category.color}-800 hover:border-${category.color}-200 dark:hover:border-${category.color}-700 transition-all duration-300 hover:shadow-lg group card bg-white dark:bg-gray-800`}
                        data-hover={category.title}
                      >
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center mb-3 sm:mb-4">
                            <motion.div
                              className={`w-10 h-10 sm:w-12 sm:h-12 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-${category.color}-200 dark:group-hover:bg-${category.color}-800 transition-colors`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                          </div>
                          <div className="space-y-2 sm:space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center justify-between">
                                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                                <Badge
                                  className={`bg-${category.color}-100 dark:bg-${category.color}-900 text-${category.color}-800 dark:text-${category.color}-200 text-xs sm:text-sm`}
                                  data-hover={skill.level}
                                >
                                  {skill.level}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </GSAPStaggerReveal>

              {/* Skills Summary */}
              <div className="mt-8 sm:mt-12">
                <Card
                  className="bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 card bg-white dark:bg-gray-800"
                  data-hover="Skills Summary"
                >
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                      Complete WordPress Ecosystem Mastery
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Core Technologies</h4>
                        <div className="flex flex-wrap">
                          {["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "jQuery", "AJAX", "REST API"].map(
                            (tech, index) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-xs sm:text-sm"
                                  data-hover={tech}
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Specializations</h4>
                        <div className="flex flex-wrap">
                          {[
                            "Custom Themes",
                            "Plugin Development",
                            "API Integration",
                            "SEO Optimization",
                            "Security",
                            "Performance",
                          ].map((spec, index) => (
                            <motion.div
                              key={spec}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-xs sm:text-sm"
                                data-hover={spec}
                              >
                                {spec}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* GitHub Integration Section with GSAP */}
        <GSAPSectionReveal className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900" sectionName="github">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <TextReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">GitHub Activity</h2>
                </TextReveal>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Live development activity and code contributions
                </p>
                <motion.a
                  href="https://github.com/baizidkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors hover:underline"
                  whileHover={{ scale: 1.05 }}
                  data-hover="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  github.com/baizidkhan
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </motion.a>
              </div>

              <GitHubStats />

              {/* Language Stats */}
              <div className="mt-6 sm:mt-8">
                <TextReveal>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Most Used Languages</h3>
                </TextReveal>
                <GSAPStaggerReveal stagger={0.1}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {[
                      { name: "PHP", percentage: 45, color: "blue" },
                      { name: "JavaScript", percentage: 25, color: "yellow" },
                      { name: "CSS", percentage: 15, color: "green" },
                      { name: "HTML", percentage: 15, color: "red" },
                    ].map((lang, index) => (
                      <motion.div key={index} className="text-center group" whileHover={{ scale: 1.1 }}>
                        <motion.div
                          className={`w-12 h-12 sm:w-16 sm:h-16 bg-${lang.color}-100 dark:bg-${lang.color}-900 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 group-hover:bg-${lang.color}-200 dark:group-hover:bg-${lang.color}-800 transition-colors cursor-pointer`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          data-hover={`${lang.name} ${lang.percentage}%`}
                        >
                          <span className={`text-${lang.color}-600 dark:text-${lang.color}-400 font-bold`}>{lang.percentage}%</span>
                        </motion.div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{lang.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </GSAPStaggerReveal>
              </div>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Projects Portfolio Section with GSAP */}
        <GSAPSectionReveal id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950" sectionName="projects">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <TextReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Projects Portfolio
                  </h2>
                </TextReveal>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Showcasing successful WordPress customization projects across various industries
                </p>
              </div>

              <ProjectFilter />
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Upwork Pitch Deck Section with GSAP */}
        <GSAPSectionReveal
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
          sectionName="upwork"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <TextReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Why Choose Me on Upwork?
                  </h2>
                </TextReveal>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4 sm:mb-6">"New to Upwork, Proven in Practice"</p>
              </div>

              <GSAPStaggerReveal stagger={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  {/* Value Proposition */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card
                      className="border-2 border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 card"
                      data-hover="Value Proposition"
                    >
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">My Value Proposition</h3>
                        <div className="space-y-4 sm:space-y-6">
                          {[
                            {
                              title: "5+ Years Hands-On Experience",
                              description: "Proven WordPress expertise across multiple companies and projects",
                            },
                            {
                              title: "On-Site Project Delivery Track Record",
                              description: "Successfully delivered projects at KeenCares, Tripnao, and GeekSSort",
                            },
                            {
                              title: "Business Transformation Focus",
                              description: "Passionate about creating web solutions that drive real business results",
                            },
                            {
                              title: "Ready to Prove Expertise",
                              description: "Eager to demonstrate my skills and build a strong Upwork reputation",
                            },
                          ].map((item, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Special Offers */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card
                      className="border-2 border-green-200 dark:border-green-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 card"
                      data-hover="Special Offers"
                    >
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                          Special Launch Offers
                        </h3>
                        <div className="space-y-4 sm:space-y-6">
                          <div
                            className="bg-green-50 dark:bg-green-900/10 p-4 sm:p-6 rounded-lg border border-green-200 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors"
                            data-hover="Free Maintenance"
                          >
                            <div className="flex items-center mb-2 sm:mb-3">
                              <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 mr-2 sm:mr-3" />
                              <h4 className="font-bold text-green-800 dark:text-green-200">4-6 Months Free Maintenance</h4>
                            </div>
                            <p className="text-green-700 dark:text-green-300 leading-relaxed">
                              Post-project maintenance and support included at no extra cost for the first 4-6 months
                            </p>
                          </div>
                          <div
                            className="bg-blue-50 dark:bg-blue-900/10 p-4 sm:p-6 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
                            data-hover="Communication"
                          >
                            <div className="flex items-center mb-2 sm:mb-3">
                              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 mr-2 sm:mr-3" />
                              <h4 className="font-bold text-blue-800 dark:text-blue-200">Clear Communication Promise</h4>
                            </div>
                            <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                              Regular updates, transparent progress reports, and reliable delivery timelines
                            </p>
                          </div>
                          <div
                            className="bg-purple-50 dark:bg-purple-900/10 p-4 sm:p-6 rounded-lg border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                            data-hover="Pricing"
                          >
                            <div className="flex items-center mb-2 sm:mb-3">
                              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400 mr-2 sm:mr-3" />
                              <h4 className="font-bold text-purple-800 dark:text-purple-200">Competitive Introductory Rate</h4>
                            </div>
                            <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
                              Starting at $18/hr - exceptional value for enterprise-level WordPress expertise
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </GSAPStaggerReveal>

              {/* Call to Action */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className="bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-700 hover:shadow-xl transition-shadow duration-300 card"
                  data-hover="Hire Me"
                >
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      Ready to Be My First Upwork Success Story?
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                      Join me on this journey and benefit from my proven expertise at an unbeatable value
                    </p>
                    <MagneticButton
                      className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 rounded-lg"
                      onClick={() =>
                        window.open("https://www.upwork.com/freelancers/~010bf9d15201f00830?mp_source=share", "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Hire Me on Upwork
                    </MagneticButton>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Blog Section with GSAP */}
        <GSAPSectionReveal id="blog" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900" sectionName="blog">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <TextReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Latest Insights</h2>
                </TextReveal>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  WordPress tips, eCommerce trends, and business solutions
                </p>
              </div>

              <GSAPStaggerReveal stagger={0.2}>
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                      <BlogCard post={post} onReadMore={handleBlogReadMore} />
                    </div>
                  ))}
                </div>
              </GSAPStaggerReveal>

              {/* Coming Soon Notice */}
              <div className="mt-6 sm:mt-8 text-center">
                <Card
                  className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 card"
                  data-hover="Coming Soon"
                >
                  <CardContent className="p-4 sm:p-6">
                    <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-500 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">More Content Coming Soon</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      I'm working on more valuable content about WordPress development, eCommerce optimization, and
                      business growth strategies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Enhanced Contact & CTA Section with GSAP */}
        <GSAPSectionReveal
          id="contact"
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-900 dark:to-gray-900 text-white"
          sectionName="contact"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <TextReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                    Ready to Transform Your WordPress Site?
                  </h2>
                </TextReveal>
                <p className="text-xl text-blue-100 dark:text-blue-300 mb-4 sm:mb-6 leading-relaxed">
                  Let's discuss how I can help you create a high-converting WordPress solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                  <MagneticButton
                    variant="material"
                    color="blue"
                    className="text-white border-2 border-white"
                    onClick={() => window.open("https://tidycal.com/baizidkhan/30-minute-meeting", "_blank")}
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get Free Consultation
                  </MagneticButton>
                  <MagneticButton
                    variant="outline"
                    className="border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700"
                    onClick={() =>
                      window.open("https://www.upwork.com/freelancers/~010bf9d15201f00830?mp_source=share", "_blank")
                    }
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Check My Upwork Profile
                  </MagneticButton>
                </div>
              </div>

              <GSAPStaggerReveal stagger={0.3}>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Contact Form */}
                  <div>
                    <ContactForm />
                  </div>

                  {/* Contact Info & Availability */}
                  <div className="space-y-6 sm:space-y-8">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card
                        className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/15 transition-colors duration-300 card"
                        data-hover="Contact Info"
                      >
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-xl font-bold mb-3 sm:mb-4">Contact Information</h3>
                          <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center hover:text-blue-200 transition-colors" data-hover="Email">
                              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                              <span>info@baizidkhan.com</span>
                            </div>
                            <div
                              className="flex items-center hover:text-blue-200 transition-colors"
                              data-hover="LinkedIn"
                            >
                              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                              <span>linkedin.com/in/baizidkhan</span>
                            </div>
                            <div className="flex items-center hover:text-blue-200 transition-colors" data-hover="GitHub">
                              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                              <span>github.com/baizidkhan</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card
                        className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/15 transition-colors duration-300 card"
                        data-hover="Availability"
                      >
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-xl font-bold mb-3 sm:mb-4">Availability</h3>
                          <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3" />
                              <span>Open to Upwork projects</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2 sm:mr-3" />
                              <span>Available for immediate start</span>
                            </div>
                            <div className="flex items-center">
                              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 mr-2 sm:mr-3" />
                              <span>Remote work worldwide</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card
                        className="bg-green-500/20 backdrop-blur border-green-400/30 text-white hover:bg-green-500/30 transition-colors duration-300 card"
                        data-hover="Special Offer"
                      >
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-xl font-bold mb-2">Special Offer</h3>
                          <p className="text-green-100 leading-relaxed">
                            <strong>Free consultation</strong> for all new Upwork clients + 4-6 months post-project
                            maintenance included!
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </GSAPStaggerReveal>
            </div>
          </div>
        </GSAPSectionReveal>

        {/* Blog Modal */}
        <BlogModal post={selectedBlogPost} isOpen={isBlogModalOpen} onClose={() => setIsBlogModalOpen(false)} />
      </div>
    </ThemeProvider>
  )
}
