import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Анна К.",
    rating: 5,
    text: "Отличный сервис! Водитель приехал точно в срок, машина чистая, поездка комфортная. Обязательно буду пользоваться еще.",
    date: "2 дня назад",
  },
  {
    name: "Михаил С.",
    rating: 5,
    text: "Пользуюсь услугами уже полгода. Всегда вежливые водители, адекватные цены. Рекомендую всем друзьям!",
    date: "1 неделю назад",
  },
  {
    name: "Елена В.",
    rating: 5,
    text: "Заказывала поездку ночью после корпоратива. Водитель был очень терпеливым и аккуратным. Спасибо за безопасность!",
    date: "3 дня назад",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <p className="text-[#B8C5FF] text-lg">Что говорят о нас наши клиенты</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-6 hover:border-[#00D1FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,209,255,0.1)]"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>

              <p className="text-[#B8C5FF] mb-4 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex justify-between items-center">
                <span className="text-[#E8EBFF] font-semibold">{testimonial.name}</span>
                <span className="text-[#6B7280] text-sm">{testimonial.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
