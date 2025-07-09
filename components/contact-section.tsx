"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "./contact-form"
import { MagneticButton } from "./magnetic-button"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@baizidkhan.com",
    link: "mailto:hello@baizidkhan.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    link: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    link: null,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WordPress Site?
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 font-medium">
              Let's discuss your project and create something amazing together. I'm here to help bring your vision to
              life.
            </p>

            {/* CTA Button */}
            <MagneticButton
              variant="black"
              size="lg"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </MagneticButton>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium">
                  Ready to start your next project? I'd love to hear about your ideas and discuss how we can work
                  together to create something exceptional.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-700">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                            <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{info.value}</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 shadow-xl border-0 bg-white dark:bg-gray-700">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
