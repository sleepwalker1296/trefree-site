"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  useEffect(() => {
    localStorage.setItem("policyRead", "true")
    // Trigger storage event for other tabs/windows
    window.dispatchEvent(new Event("storage"))
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0E2A] text-[#E8EBFF] relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0B0E2A] via-[#1a237e] to-[#4a148c] opacity-50" />
      <div className="fixed inset-0 bg-gradient-radial from-[#00D1FF]/10 via-transparent to-[#FF4FD8]/10 animate-pulse" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl font-bold text-center mb-8"
              style={{
                background: "linear-gradient(135deg, #00D1FF 0%, #FF4FD8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#00D1FF", // fallback
              }}
            >
              Политика конфиденциальности
            </h1>

            <div className="prose prose-invert max-w-none">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-[#00D1FF]/20 shadow-2xl">
                <h2 className="text-2xl font-semibold text-[#E8EBFF] mb-4">Использование файлов cookie</h2>
                <p className="text-[#E8EBFF]/90 mb-4 leading-relaxed">
                  Наш сайт использует файлы cookie для улучшения пользовательского опыта и анализа трафика.
                </p>

                <h3 className="text-xl font-semibold text-[#00D1FF] mb-3">Что такое cookie?</h3>
                <p className="text-[#E8EBFF]/90 mb-4 leading-relaxed">
                  Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении
                  веб-сайтов.
                </p>

                <h3 className="text-xl font-semibold text-[#00D1FF] mb-3">Как мы используем cookie?</h3>
                <ul className="text-[#E8EBFF]/90 mb-4 list-disc list-inside space-y-2 leading-relaxed">
                  <li>Для запоминания ваших предпочтений</li>
                  <li>Для анализа посещаемости сайта</li>
                  <li>Для улучшения функциональности сайта</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#00D1FF] mb-3">Контактная информация</h3>
                <p className="text-[#E8EBFF]/90 leading-relaxed">
                  По вопросам обработки персональных данных обращайтесь:
                  <a href="mailto:info@trefree.ru" className="text-[#FF4FD8] hover:text-[#FF4FD8]/80 ml-1 underline">
                    info@trefree.ru
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
