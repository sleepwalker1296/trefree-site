"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, MapPin, Phone, ArrowRight } from "lucide-react"

export function Hero() {
  const [fromAddress, setFromAddress] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Order submitted:", { fromAddress, toAddress, phone })
  }

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
            className="bg-[#1A1F3A]/80 backdrop-blur-xl border border-[#2A3284]/50 rounded-lg p-4 sm:p-6 lg:p-8 mb-8 max-w-2xl mx-auto shadow-[0_0_30px_rgba(0,209,255,0.1)]"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div className="relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="from-address" className="sr-only">
                    Адрес подачи
                  </label>
                  <MapPin
                    className="absolute left-3 top-3 h-4 w-4 text-[#00D1FF] pointer-events-none"
                    aria-hidden="true"
                  />
                  <Input
                    id="from-address"
                    type="text"
                    placeholder="Откуда"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                    className="pl-10 bg-[#0B0E2A]/50 border-[#2A3284] text-[#E8EBFF] placeholder:text-[#6B7280] focus:border-[#00D1FF] focus:ring-[#00D1FF]/20 transition-all duration-300 min-h-[44px]"
                    aria-describedby="from-help"
                    required
                  />
                  <div id="from-help" className="sr-only">
                    Введите адрес, откуда вас забрать
                  </div>
                </motion.div>

                <motion.div className="relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="to-address" className="sr-only">
                    Адрес назначения
                  </label>
                  <MapPin
                    className="absolute left-3 top-3 h-4 w-4 text-[#FF4FD8] pointer-events-none"
                    aria-hidden="true"
                  />
                  <Input
                    id="to-address"
                    type="text"
                    placeholder="Куда"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                    className="pl-10 bg-[#0B0E2A]/50 border-[#2A3284] text-[#E8EBFF] placeholder:text-[#6B7280] focus:border-[#FF4FD8] focus:ring-[#FF4FD8]/20 transition-all duration-300 min-h-[44px]"
                    aria-describedby="to-help"
                    required
                  />
                  <div id="to-help" className="sr-only">
                    Введите адрес назначения
                  </div>
                </motion.div>
              </div>

              <motion.div className="relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label htmlFor="phone-number" className="sr-only">
                  Номер телефона
                </label>
                <Phone
                  className="absolute left-3 top-3 h-4 w-4 text-[#00D1FF] pointer-events-none"
                  aria-hidden="true"
                />
                <Input
                  id="phone-number"
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 bg-[#0B0E2A]/50 border-[#2A3284] text-[#E8EBFF] placeholder:text-[#6B7280] focus:border-[#00D1FF] focus:ring-[#00D1FF]/20 transition-all duration-300 min-h-[44px]"
                  aria-describedby="phone-help"
                  required
                />
                <div id="phone-help" className="sr-only">
                  Введите ваш номер телефона для связи
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] hover:from-[#00B8E6] hover:to-[#E63EC7] text-white font-semibold py-3 px-6 shadow-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] transition-all duration-300 group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#FF4FD8] focus:ring-offset-2 focus:ring-offset-[#0B0E2A]"
                  aria-describedby="submit-help"
                >
                  Вызвать водителя
                  <ArrowRight
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </Button>
                <div id="submit-help" className="sr-only">
                  Нажмите, чтобы отправить заказ на вызов водителя
                </div>
              </motion.div>
            </form>
          </motion.div>

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
