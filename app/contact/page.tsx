"use client"

import { useState } from "react"
import Image from "next/image"
import { contactInfo, storeInfo, contactPageContent } from "@/data/shop-data"
import { cn } from "@/lib/utils"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setError(
        "Failed to submit form. Please check your connection and try again."
      )
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-my-peach min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-great-vibes text-my-lavender text-shadow-sm text-shadow-black/50 mb-4">
            {contactPageContent.pageTitle}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {contactPageContent.pageDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-5 bg-my-sage/40 p-8 rounded-lg shadow-lg drop-shadow-black">
            <h2 className="text-2xl font-semibold mb-6 text-my-lavender text-shadow-sm text-shadow-black/50">
              {contactPageContent.infoTitle}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full mr-4 shadow-md">
                  <MapPin className="h-5 w-5 text-my-lavender" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {contactPageContent.addressLabel}
                  </h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                  <p className="text-gray-600">
                    {contactInfo.city}, {contactInfo.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full mr-4 shadow-md">
                  <Mail className="h-5 w-5 text-my-lavender" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {contactPageContent.emailLabel}
                  </h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full mr-4 shadow-md">
                  <Phone className="h-5 w-5 text-my-lavender" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {contactPageContent.phoneLabel}
                  </h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full mr-4 shadow-md">
                  <Clock className="h-5 w-5 text-my-lavender" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {contactPageContent.hoursLabel}
                  </h3>
                  {contactInfo.hours.map((timeSlot, index) => (
                    <div key={index} className="text-gray-600">
                      <span className="font-medium">{timeSlot.days}:</span>{" "}
                      {timeSlot.hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-800 mb-2">
                {contactPageContent.deliveryTitle}
              </h3>
              <div className="bg-white/80 p-4 rounded-md shadow-sm">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">
                    {contactPageContent.deliveryAreasLabel}
                  </span>{" "}
                  {contactInfo.delivery.areas.join(", ")}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">
                    {contactPageContent.pickupLocationLabel}
                  </span>{" "}
                  {contactInfo.delivery.pickupLocation}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">
                    {contactPageContent.orderLeadTimeLabel}
                  </span>{" "}
                  {contactInfo.delivery.orderLeadTime}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="h-48 relative rounded-md overflow-hidden shadow-md">
                <Image
                  src={contactPageContent.storeImage}
                  alt={storeInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 bg-white/80 p-8 rounded-lg shadow-lg drop-shadow-black">
            <h2 className="text-2xl font-semibold mb-6 text-my-lavender text-shadow-sm text-shadow-black/50">
              {contactPageContent.formTitle}
            </h2>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                <p className="font-medium">
                  {contactPageContent.successMessage.title}
                </p>
                <p>{contactPageContent.successMessage.message}</p>
              </div>
            ) : null}

            {error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                <p className="font-medium">
                  {contactPageContent.errorMessage.title}
                </p>
                <p>{error}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {contactPageContent.form.nameLabel} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-my-lavender focus:border-my-lavender"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {contactPageContent.form.emailLabel} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-my-lavender focus:border-my-lavender"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {contactPageContent.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-my-lavender focus:border-my-lavender"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {contactPageContent.form.subjectLabel} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-my-lavender focus:border-my-lavender"
                  >
                    <option value="">
                      {contactPageContent.form.subjectPlaceholder}
                    </option>
                    {contactPageContent.form.subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {contactPageContent.form.messageLabel} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-my-lavender focus:border-my-lavender"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "px-6 py-3 bg-my-lavender text-white font-medium rounded-md shadow-md hover:bg-my-lavender/90 transition-colors",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                )}
              >
                {isSubmitting
                  ? contactPageContent.form.sendingButtonText
                  : contactPageContent.form.submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
