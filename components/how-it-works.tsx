"use client"

import { useEffect, useState } from "react"

const steps = [
  {
    number: 1,
    title: "Позвоните по телефону или напишите в WhatsApp",
    description: "Назовите точный адрес, маршрут и гос. номер",
  },
  {
    number: 2,
    title: "Диспетчер сразу (или к назначенному времени)",
    description: "Отправит Вам водителя. По приезду, водитель свяжется с Вами",
  },
  {
    number: 3,
    title: "Водитель предоставит Вам свои документы",
    description: "И может попросить Ваши документы на автомобиль",
  },
  {
    number: 4,
    title: "Вы наслаждаетесь комфортной поездкой",
    description: "На пассажирском сидении своего автомобиля",
  },
  {
    number: 5,
    title: "Оплачиваете услугу согласно нашим тарифам",
    description: "Уже по завершению поездки",
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-mobile px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-responsive-3xl font-bold mb-4 text-center"
            style={{
              background: "linear-gradient(135deg, #00D1FF 0%, #FF4FD8 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "#00D1FF", // fallback
            }}
          >
            КАК РАБОТАЕТ ТРЕЗВЫЙ ВОДИТЕЛЬ
          </h2>
        </div>

        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 via-[#FF4FD8]/5 to-[#00D1FF]/5 rounded-3xl blur-xl" />

          {/* Main container */}
          <div className="relative bg-black/20 backdrop-blur-sm border border-[#00D1FF]/20 rounded-3xl p-8 md:p-12">
            {/* Steps container */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 relative">
              {steps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  {/* Step number with neon effect */}
                  <div className="relative mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-full blur-lg transition-all duration-500 ${
                        activeStep === index
                          ? "bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] opacity-80 scale-110"
                          : "bg-gradient-to-r from-[#00D1FF]/30 to-[#FF4FD8]/30 opacity-40"
                      }`}
                    />

                    {/* Number circle */}
                    <div
                      className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                        activeStep === index
                          ? "border-[#00D1FF] bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20 text-[#00D1FF] scale-110"
                          : "border-[#00D1FF]/40 bg-black/40 text-[#00D1FF]/70"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="space-y-3">
                    <h3
                      className={`font-semibold text-sm md:text-base leading-tight transition-all duration-500 ${
                        activeStep === index ? "text-[#00D1FF]" : "text-[#E8EBFF]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs md:text-sm leading-relaxed transition-all duration-500 ${
                        activeStep === index ? "text-[#E8EBFF]" : "text-[#E8EBFF]/70"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connecting line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-8 mb-4">
                      <div className="w-px h-8 bg-gradient-to-b from-[#00D1FF]/40 to-[#FF4FD8]/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
