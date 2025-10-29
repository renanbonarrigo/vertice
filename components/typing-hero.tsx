"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TypingHero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showSubtitle, setShowSubtitle] = useState(false)

  const mainText = "Transformamos sua presença digital em vendas reais"
  const subtitle = "Atribuindo vida digital ao seu negócio"

  useEffect(() => {
    if (currentIndex < mainText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(mainText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      // Show subtitle after main text is complete
      setTimeout(() => setShowSubtitle(true), 500)
    }
  }, [currentIndex, mainText])

  return (
    <div className="space-y-6">
      {/* Main hero text */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
        <span className="text-white">{displayedText}</span>
        <motion.span
          className="text-emerald-400"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          |
        </motion.span>
      </h1>

      {/* Subtitle with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-background/60 dark:bg-transparent rounded-xl blur-2xl"></div>
        <p className="relative z-10 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      </motion.div>
    </div>
  )
}
