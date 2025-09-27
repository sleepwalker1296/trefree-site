"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GlowButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  type?: "button" | "submit"
}

export function GlowButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
}: GlowButtonProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-300 hover:scale-105 neon-glow"

  const variantClasses = {
    primary: "bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-white",
    secondary: "glass-card border-accent/50 text-accent hover:bg-accent/10",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </Button>
  )
}
