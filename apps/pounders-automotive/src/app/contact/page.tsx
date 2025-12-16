'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitStatus("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="relative bg-blue-600 rounded-2xl p-8 mb-8 text-white shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <h1 className="text-4xl font-bold">Contact Us</h1>
              </div>
              <p className="text-blue-100 text-lg">Get in touch with our automotive experts</p>
            </div>
            <div className="flex gap-3">
              <Link href="/welcome">
                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-medium">
                  ← Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">✉️</span>
                Send us a Message
              </h2>

              {submitStatus && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-700">{submitStatus}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Question</option>
                      <option value="parts">Parts & Accessories</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">📍</span>
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-blue-600">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      123 Main Street
                      <br />
                      Automotive District
                      <br />
                      City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-green-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-purple-600">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@pounders.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">🕒</span>
                Business Hours
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                <span className="text-lg">🚨</span>
                Emergency Service
              </h3>
              <p className="text-sm text-red-700 mb-3">24/7 emergency roadside assistance available</p>
              <p className="text-lg font-bold text-red-800">(555) 999-HELP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Premium Footer */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(to right, #0f172a, #1e293b, #0f172a)',
          color: 'white',
          overflow: 'hidden',
          marginTop: '64px',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Main Contact Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/30">
              <span className="mr-2">✨</span>
              Ready to Connect?
            </div>
            <h2
              style={{
                fontSize: '3xl',
                lineHeight: '1',
                fontWeight: 'bold',
                marginBottom: '24px',
                background: 'linear-gradient(to right, #ffffff, #dbeafe, #e9d5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="lg:text-5xl"
            >
              Get In Touch
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions, suggestions, or want to collaborate? We're here to help you on your automotive journey!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '48px',
              marginBottom: '64px',
              maxWidth: '900px',
              margin: '0 auto 64px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>📧</span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 8px 0' }}>Email Us</h3>
              <p style={{ color: '#93c5fd', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>
                hello@bullnbrains.com
              </p>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 8px 0' }}>We respond within 24 hours</p>
              <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: '500' }}>✓ Professional Support</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>💬</span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 8px 0' }}>Community</h3>
              <Link
                href="/forum"
                style={{
                  color: '#c4b5fd',
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'underline',
                  display: 'block',
                  margin: '0 0 4px 0',
                }}
                className="hover:text-purple-200 transition-colors"
              >
                Join Our Forum
              </Link>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 8px 0' }}>10,000+ active members</p>
              <span style={{ color: '#a78bfa', fontSize: '12px', fontWeight: '500' }}>✓ Expert Discussions</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>📱</span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 8px 0' }}>Follow Us</h3>
              <p style={{ color: '#6ee7b7', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>@BullnBrains</p>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 8px 0' }}>Daily automotive insights</p>
              <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: '500' }}>✓ Latest Updates</span>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">BullnBrains</h3>
                <p className="text-slate-400 max-w-md">
                  Empowering car enthusiasts with knowledge, community, and expert guidance since 2024.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Support
                </a>
                <a href="#" className="hover:text-white transition-colors text-sm font-medium">
                  Blog
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-slate-500 text-sm">
                © 2024 BullnBrains. All rights reserved. | Made with ❤️ for car enthusiasts worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
