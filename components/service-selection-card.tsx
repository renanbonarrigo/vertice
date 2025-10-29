"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cog, Laptop, Globe, Smartphone, Package, Building2 } from 'lucide-react'

export function ServiceSelectionCard() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const services = [
    {
      id: "mechanical",
      name: "Mechanical",
      icon: <Cog className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      hoverColor: "from-orange-400 to-orange-500",
      borderColor: "border-orange-500/30",
      textColor: "text-orange-400",
    },
    {
      id: "digital",
      name: "Digital Systems",
      icon: <Laptop className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-400 to-blue-500",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
    },
    {
      id: "website",
      name: "Website",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-400 to-green-500",
      borderColor: "border-green-500/30",
      textColor: "text-green-400",
    },
    {
      id: "mobile",
      name: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      hoverColor: "from-purple-400 to-purple-500",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
    },
    {
      id: "product",
      name: "Product Dev",
      icon: <Package className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      hoverColor: "from-red-400 to-red-500",
      borderColor: "border-red-500/30",
      textColor: "text-red-400",
    },
    {
      id: "architecture",
      name: "Architecture Design",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      hoverColor: "from-cyan-400 to-cyan-500",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400",
    },
  ]

  const questions = [
    {
      id: "businessName",
      question: "What's your business name?",
      type: "input",
      placeholder: "Enter your business name",
    },
    {
      id: "businessType",
      question: "What type of business do you have?",
      options: ["Startup", "Small Business", "Enterprise", "Non-Profit"],
    },
    {
      id: "companySize",
      question: "How many employees does your company have?",
      options: ["1-10", "11-50", "51-200", "201+"],
    },
    {
      id: "goal",
      question: "What's your primary goal?",
      options: ["Increase Revenue", "Improve Efficiency", "Scale Operations", "Digital Transformation"],
    },
    {
      id: "budget",
      question: "What's your budget range?",
      options: ["$1K-$5K", "$5K-$15K", "$15K-$50K", "$50K+"],
    },
    {
      id: "timeline",
      question: "What's your timeline?",
      options: ["ASAP", "1-3 Months", "3-6 Months", "6+ Months"],
    },
    {
      id: "location",
      question: "Where is your business located?",
      options: ["North America", "Europe", "Asia", "Other"],
    },
    {
      id: "contactName",
      question: "Who is the primary contact for this project?",
      type: "input",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      question: "What's the best email to reach you?",
      type: "input",
      placeholder: "Enter your email address",
    },
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setCurrentQuestion(0)
    setAnswers({})
    setIsCompleted(false)
  }

  const handleAnswerSelect = (answer: string) => {
    const currentQuestionData = questions[currentQuestion]
    const newAnswers = { ...answers, [currentQuestionData.id]: answer }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
      // Send email with inquiry details
      sendInquiryEmail(newAnswers, selectedService)
    }
  }

  const handleCustomAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const answer = formData.get("customAnswer") as string

    if (answer && answer.trim()) {
      handleAnswerSelect(answer.trim())
    }
  }

  const sendInquiryEmail = async (inquiryData: Record<string, string>, serviceType: string | null) => {
    try {
      const selectedServiceData = services.find((s) => s.id === serviceType)
      const emailBody = `
New Consultation Inquiry

Service: ${selectedServiceData?.name || "Unknown"}
Business Name: ${inquiryData.businessName || "Not provided"}
Business Type: ${inquiryData.businessType || "Not provided"}
Company Size: ${inquiryData.companySize || "Not provided"}
Primary Goal: ${inquiryData.goal || "Not provided"}
Budget: ${inquiryData.budget || "Not provided"}
Timeline: ${inquiryData.timeline || "Not provided"}
Location: ${inquiryData.location || "Not provided"}
Contact Name: ${inquiryData.contactName || "Not provided"}
Email: ${inquiryData.email || "Not provided"}

Submitted at: ${new Date().toLocaleString()}
      `

      // This would typically be handled by a server endpoint
      // For now, we'll use mailto as a fallback
      const mailtoLink = `mailto:andrdyer@gmail.com?subject=New Consultation Inquiry - ${selectedServiceData?.name}&body=${encodeURIComponent(emailBody)}`
      window.open(mailtoLink)
    } catch (error) {
      console.error("Error sending inquiry:", error)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      setSelectedService(null)
      setCurrentQuestion(0)
      setAnswers({})
      setIsCompleted(false)
    }
  }

  if (selectedService && !isCompleted) {
    const selectedServiceData = services.find((s) => s.id === selectedService)
    const currentQuestionData = questions[currentQuestion]

    return (
      <div className="h-full rounded-lg border border-border bg-black text-white overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedServiceData?.color} flex items-center justify-center`}
              >
                {selectedServiceData?.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{selectedServiceData?.name} Consultation</h3>
                <p className="text-sm text-gray-400">
                  Step {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            </div>
            <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-white text-sm">
              ← Back
            </button>
          </div>
        </div>

        {/* Question */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6 text-center">{currentQuestionData.question}</h2>

          {currentQuestionData.type === "input" ? (
            <form onSubmit={handleCustomAnswer} className="space-y-4">
              <input
                type={currentQuestionData.id === "email" ? "email" : "text"}
                name="customAnswer"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                placeholder={currentQuestionData.placeholder}
                required
              />
              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors"
              >
                Continue
              </button>
            </form>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {currentQuestionData.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  className="p-3 border border-gray-700 rounded-lg hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 text-left"
                >
                  <span className="text-green-400 font-medium text-sm">{option}</span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">{questions.length - currentQuestion - 1} questions remaining</p>
          </div>
        </div>
      </div>
    )
  }

  if (isCompleted) {
    return (
      <div className="h-full rounded-lg border border-border bg-black text-white p-6 flex flex-col justify-center items-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <div className="w-8 h-8 bg-green-500 rounded-full" />
          </div>
          <h3 className="text-xl font-bold">Thank you!</h3>
          <p className="text-gray-400 text-sm">
            Your inquiry has been sent to our team. We'll get back to you within 24 hours with a customized
            consultation.
          </p>
          <div className="pt-4">
            <button
              onClick={() => (window.location.href = "/consultation")}
              className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors text-sm font-medium"
            >
              Schedule Consultation
            </button>
          </div>
          <button
            onClick={() => {
              setSelectedService(null)
              setCurrentQuestion(0)
              setAnswers({})
              setIsCompleted(false)
            }}
            className="mt-4 text-sm text-gray-400 hover:text-white"
          >
            Start Another Consultation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full rounded-lg border border-border bg-background/50 p-6 hover:border-primary/50 transition-all duration-300">
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">Select a Service</h3>
          <p className="text-muted-foreground">Choose the service you're interested in to start a consultation</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className="relative p-4 rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}
              />

              {/* Border */}
              <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-300" />

              {/* Animated glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12">
                  <motion.div
                    className="h-full w-1/3 bg-white/10"
                    animate={{
                      x: ["-100%", "400%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                      repeatDelay: 0.5,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col items-center space-y-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <span
                  className={`text-sm font-medium ${service.textColor} group-hover:text-white transition-colors duration-300`}
                >
                  {service.name}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
