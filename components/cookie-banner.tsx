"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasReadPolicy, setHasReadPolicy] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }

    const policyRead = localStorage.getItem("policyRead")
    if (policyRead) {
      setHasReadPolicy(true)
    }

    const handleStorageChange = () => {
      const policyRead = localStorage.getItem("policyRead")
      if (policyRead) {
        setHasReadPolicy(true)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const acceptCookies = () => {
    if (hasReadPolicy) {
      localStorage.setItem("cookieConsent", "accepted")
      setIsVisible(false)
    }
  }

  const closeBanner = () => {
    if (hasReadPolicy) {
      setIsVisible(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-lg border border-white/20 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 border border-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-lg" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4">
            <div className="flex-1">
              <p className="text-sm text-gray-200 leading-relaxed">
                Пользуясь сайтом вы соглашаетесь на использование файлов cookie.{" "}
                <a
                  href="/privacy"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Политика конфиденциальности
                </a>
              </p>
              {!hasReadPolicy && (
                <p className="text-xs text-yellow-400 mt-2">
                  Для продолжения необходимо ознакомиться с политикой конфиденциальности
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={acceptCookies}
                disabled={!hasReadPolicy}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  hasReadPolicy
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                Принять
              </Button>
              <Button
                onClick={closeBanner}
                disabled={!hasReadPolicy}
                variant="ghost"
                size="sm"
                className={`p-2 ${
                  hasReadPolicy
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-600 cursor-not-allowed"
                }`}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
