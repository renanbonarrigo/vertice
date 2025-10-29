"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000) // Open after 5 seconds
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., send email)
    console.log("Email:", email, "Message:", message)
    alert("Thank you for your message!")
    setIsOpen(false)
    setEmail("")
    setMessage("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="fixed bottom-4 right-4 z-50 w-full max-w-sm bg-background border border-border rounded-lg shadow-lg p-6 space-y-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Have a question?</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Fill out the form below or contact us directly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="flex justify-around text-sm text-muted-foreground">
            <a href="mailto:info@example.com" className="flex items-center space-x-1 hover:text-primary">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-primary">
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
