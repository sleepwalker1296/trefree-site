"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Как быстро приедет водитель?",
    answer: "Среднее время подачи составляет 15-20 минут. В час пик может увеличиться до 30 минут.",
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем наличные, банковские карты, переводы через СБП и электронные кошельки.",
  },
  {
    question: "Работаете ли вы ночью?",
    answer: "Да, мы работаем круглосуточно 24/7 без выходных и праздников.",
  },
  {
    question: "Можно ли заказать поездку заранее?",
    answer: "Да, вы можете заказать поездку на определенное время. Предварительный заказ принимается за 24 часа.",
  },
  {
    question: "Что делать, если я забыл что-то в машине?",
    answer: "Свяжитесь с нами по телефону, мы поможем связаться с водителем и вернуть забытые вещи.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
            Частые вопросы
          </h2>
          <p className="text-[#B8C5FF] text-lg">Ответы на самые популярные вопросы наших клиентов</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#2A3284]/20 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#E8EBFF] pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#00D1FF] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#00D1FF] flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#B8C5FF] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
