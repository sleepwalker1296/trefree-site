import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface NeonCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function NeonCard({ children, className, hover = true }: NeonCardProps) {
  return (
    <Card
      className={cn(
        "glass-card border-white/10 p-6",
        hover && "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300",
        className,
      )}
    >
      {children}
    </Card>
  )
}
