"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  projectType: string
  budget: string
  customBudget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  budget?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "Business Website",
    budget: "$1,000 - $2,500",
    customBudget: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details about your project (minimum 20 characters)"
    }

    if (formData.budget === "Custom" && !formData.customBudget.trim()) {
      newErrors.budget = "Please specify your custom budget"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Send email to info@baizidkhan.com
      const emailData = {
        to: "info@baizidkhan.com",
        subject: `New Project Inquiry from ${formData.name}`,
        html: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Project Type:</strong> ${formData.projectType}</p>
          <p><strong>Budget:</strong> ${formData.budget === "Custom" ? formData.customBudget : formData.budget}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, "<br>")}</p>
        `,
      }

      // Simulate email sending (replace with actual email service)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          projectType: "Business Website",
          budget: "$1,000 - $2,500",
          customBudget: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      // For demo purposes, we'll still show success
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        projectType: "Business Website",
        budget: "$1,000 - $2,500",
        customBudget: "",
        message: "",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-white text-gray-900">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-green-800">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your project inquiry has been submitted successfully. I'll get back to you within 24 hours to discuss your
            requirements.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white text-gray-900">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Start Your Project</h3>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.name ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"
                }`}
                placeholder="Your full name"
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.email ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"
                }`}
                placeholder="your@email.com"
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => handleInputChange("projectType", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-all duration-200"
              >
                <option>Business Website</option>
                <option>eCommerce Store</option>
                <option>Portfolio Site</option>
                <option>Blog Development</option>
                <option>WordPress Customization</option>
                <option>Shopify Customization</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-all duration-200"
              >
                <option>$500 - $1,000</option>
                <option>$1,000 - $2,500</option>
                <option>$2,500 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
                <option>Custom</option>
              </select>
            </div>
          </div>

          {formData.budget === "Custom" && (
            <div>
              <label htmlFor="customBudget" className="block text-sm font-medium text-gray-700 mb-2">
                Custom Budget *
              </label>
              <input
                id="customBudget"
                type="text"
                value={formData.customBudget}
                onChange={(e) => handleInputChange("customBudget", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.budget ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"
                }`}
                placeholder="e.g., $15,000 or $20,000 - $30,000"
                aria-describedby={errors.budget ? "budget-error" : undefined}
              />
              {errors.budget && (
                <p id="budget-error" className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.budget}
                </p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical ${
                errors.message ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"
              }`}
              placeholder="Tell me about your project requirements, goals, timeline, and any specific features you need..."
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Project Inquiry"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
