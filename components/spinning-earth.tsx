"use client"

import { useRef, useEffect } from "react"

export function SpinningEarth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let rotation = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw a simple animated earth-like sphere
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.15

      // Create gradient for earth-like appearance
      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius,
      )
      gradient.addColorStop(0, "#4ade80")
      gradient.addColorStop(0.3, "#22c55e")
      gradient.addColorStop(0.7, "#16a34a")
      gradient.addColorStop(1, "#15803d")

      // Draw main sphere
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw rotating continents (simple shapes)
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      ctx.fillStyle = "#065f46"
      ctx.globalAlpha = 0.7

      // Simple continent shapes
      ctx.beginPath()
      ctx.ellipse(-radius * 0.3, -radius * 0.2, radius * 0.4, radius * 0.2, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.ellipse(radius * 0.2, radius * 0.3, radius * 0.3, radius * 0.15, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.ellipse(-radius * 0.1, radius * 0.4, radius * 0.2, radius * 0.1, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      // Add subtle glow effect
      ctx.shadowColor = "#22c55e"
      ctx.shadowBlur = 20
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "#22c55e"
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.3
      ctx.stroke()

      rotation += 0.005
      animationFrameId.current = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)
    draw()

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: -1,
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
