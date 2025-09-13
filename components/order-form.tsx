"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react"

export function OrderForm() {
  const [fromAddress, setFromAddress] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Order submitted:", { fromAddress, toAddress, phone })
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
            Заказать поездку
          </h2>
          <p className="text-[#B8C5FF] text-lg">Заполните форму и мы свяжемся с вами в течение 2 минут</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-8 relative overflow-hidden">
            {/* Success overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20 backdrop-blur-sm flex items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isSubmitted ? 1 : 0, scale: isSubmitted ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: isSubmitted ? "auto" : "none" }}
            >
              <motion.div
                className="text-center"
                initial={{ y: 20 }}
                animate={{ y: isSubmitted ? 0 : 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <CheckCircle className="w-16 h-16 text-[#00D1FF] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#E8EBFF] mb-2">Заказ принят!</h3>
                <p className="text-[#B8C5FF]">Мы свяжемся с вами в ближайшее время</p>
              </motion.div>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="from" className="text-[#E8EBFF] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00D1FF]" />
                    Откуда
                  </Label>
                  <Input
                    id="from"
                    type="text"
                    placeholder="Введите адрес подачи"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                    className="bg-[#0B0E2A]/50 border-[#2A3284] text-[#E8EBFF] placeholder:text-[#6B7280] focus:border-[#00D1FF] focus:ring-[#00D1FF]/20 transition-all duration-300"
                  />
                </motion.div>

                <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="to" className="text-[#E8EBFF] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF4FD8]" />
                    Куда
                  </Label>
                  <Input
                    id="to"
                    type="text"
                    placeholder="Введите адрес назначения"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                    className="bg-[#0B0E2A]/50 border-[#2A3284] text-[#E8EBFF] placeholder:text-[#6B7280] focus:border-[#FF4FD8] focus:ring-[#FF4FD8]/20 transition-all duration-300"
                  />
                </motion.div>
              </div>

              <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Label htmlFor="phone" className="text-[#E8EBFF] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00D1FF]" />
                  Номер телефона
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#0B0E2A]/50 border-[#2A3284] text-[#E8EBFF] placeholder:text-[#6B7280] focus:border-[#00D1FF] focus:ring-[#00D1FF]/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                className="flex items-center gap-2 text-[#B8C5FF] text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Clock className="w-4 h-4" />
                <span>Среднее время подачи: 15-20 минут</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] hover:from-[#00B8E6] hover:to-[#E63EC7] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] disabled:opacity-50"
                >
                  {isSubmitted ? "Заказ отправлен..." : "Вызвать водителя"}
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
