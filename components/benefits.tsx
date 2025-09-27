"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Wallet, Star, Users, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: Shield,
    title: "Безопасность",
    description: "Все водители проходят тщательную проверку и имеют большой опыт вождения",
  },
  {
    icon: Clock,
    title: "Быстрая подача",
    description: "Среднее время ожидания составляет всего 15-20 минут в любое время суток",
  },
  {
    icon: Wallet,
    title: "Доступные цены",
    description: "Честные тарифы без скрытых комиссий и переплат за ожидание",
  },
  {
    icon: Star,
    title: "Высокое качество",
    description: "Только опытные водители с рейтингом выше 4.8 звезд",
  },
  {
    icon: Users,
    title: "Круглосуточно",
    description: "Работаем 24/7 без выходных и праздников для вашего удобства",
  },
  {
    icon: MapPin,
    title: "Вся СПб",
    description: "Обслуживаем весь Санкт-Петербург и Ленинградскую область",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Benefits() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
            Преимущества
          </h2>
          <p className="text-[#B8C5FF] text-lg max-w-2xl mx-auto">
            Почему тысячи клиентов выбирают именно нас для безопасных поездок
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-6 hover:border-[#00D1FF]/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,209,255,0.1)] h-full">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20 group-hover:from-[#00D1FF]/30 group-hover:to-[#FF4FD8]/30 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-[#00D1FF] group-hover:text-[#FF4FD8] transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#E8EBFF] mb-2">{benefit.title}</h3>
                      <p className="text-[#B8C5FF] leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
