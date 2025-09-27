"use client"

import { motion } from "framer-motion"
import { Car } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #00D1FF 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #FF4FD8 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, #00D1FF 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, #FF4FD8 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <Car className="h-10 w-10 sm:h-12 sm:w-12 text-[#00D1FF]" />
            </motion.div>
            <motion.h1
              id="hero-title"
              className="text-responsive-3xl sm:text-responsive-4xl font-bold text-balance text-[#E8EBFF] [background:linear-gradient(to_right,#00D1FF,#FF4FD8)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] supports-[background-clip:text]:text-transparent"
              style={{
                background: "linear-gradient(to right, #00D1FF, #FF4FD8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#E8EBFF", // Fallback color for better accessibility
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trefree — Трезвый водитель
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-responsive-lg md:text-responsive-xl text-[#B8C5FF] mb-8 text-balance max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Безопасная доставка вас и вашего автомобиля в Санкт-Петербурге
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            role="region"
            aria-label="Статистика сервиса"
          >
            {[
              { number: "15 мин", label: "Среднее время подачи" },
              { number: "24/7", label: "Работаем круглосуточно" },
              { number: "4.9★", label: "Рейтинг сервиса" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-3 sm:p-4"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-responsive-lg sm:text-responsive-xl font-bold text-[#00D1FF] mb-1">
                  {stat.number}
                </div>
                <div className="text-responsive-xs sm:text-responsive-sm text-[#B8C5FF] text-pretty">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
