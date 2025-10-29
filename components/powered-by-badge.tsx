"use client"

import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function PoweredByBadge() {
  return (
    <div className="relative inline-block">
      <Badge
        variant="outline"
        className="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border-primary/20 text-primary"
      >
        
        Powered by Vértice
      </Badge>
    </div>
  )
}
