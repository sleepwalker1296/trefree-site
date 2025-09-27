import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Clock, MapPin, Car } from "lucide-react"

const pricingPlans = [
  {
    name: "Эконом",
    price: "от 800",
    description: "Базовый тариф для коротких поездок по городу",
    features: [
      "Поездки по СПб в пределах КАД",
      "Время ожидания до 15 минут",
      "Опытные водители",
      "Чистые автомобили",
      "Оплата наличными или картой",
    ],
    popular: false,
  },
  {
    name: "Комфорт",
    price: "от 1200",
    description: "Оптимальный выбор для большинства поездок",
    features: [
      "Поездки по СПб и ближайшие пригороды",
      "Время ожидания до 10 минут",
      "Водители с рейтингом 4.8+",
      "Автомобили комфорт-класса",
      "Все способы оплаты",
      "Предварительный заказ",
    ],
    popular: true,
  },
  {
    name: "Премиум",
    price: "от 1800",
    description: "Максимальный комфорт и сервис",
    features: [
      "Поездки по всей Ленинградской области",
      "Приоритетная подача до 5 минут",
      "Лучшие водители с рейтингом 4.9+",
      "Автомобили премиум-класса",
      "Все способы оплаты + корпоративные счета",
      "Персональный менеджер",
      "Дополнительные услуги",
    ],
    popular: false,
  },
]

const additionalServices = [
  {
    name: "Ожидание",
    price: "50 руб/мин",
    description: "После 10 минут бесплатного ожидания",
  },
  {
    name: "Детское кресло",
    price: "200 руб",
    description: "Безопасная перевозка детей",
  },
  {
    name: "Помощь с багажом",
    price: "300 руб",
    description: "Погрузка и выгрузка тяжелых вещей",
  },
  {
    name: "Поездка за КАД",
    price: "+30 руб/км",
    description: "Доплата за километры за пределами КАД",
  },
]

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-[#0B0E2A] text-[#E8EBFF] relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0B0E2A] via-[#1a237e] to-[#4a148c] opacity-50" />
      <div className="fixed inset-0 bg-gradient-radial from-[#00D1FF]/10 via-transparent to-[#FF4FD8]/10 animate-pulse" />

      <div className="relative z-10">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                Тарифы и цены
              </h1>
              <p className="text-xl text-[#B8C5FF] max-w-3xl mx-auto leading-relaxed">
                Честные цены без скрытых комиссий. Выберите тариф, который подходит именно вам.
              </p>
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-8 relative ${
                      plan.popular ? "border-[#00D1FF]/50 shadow-[0_0_30px_rgba(0,209,255,0.1)]" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Популярный
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-[#E8EBFF] mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent mb-2">
                        {plan.price} ₽
                      </div>
                      <p className="text-[#B8C5FF]">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#00D1FF] flex-shrink-0 mt-0.5" />
                          <span className="text-[#B8C5FF]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] hover:from-[#00B8E6] hover:to-[#E63EC7] text-white shadow-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.3)]"
                          : "bg-[#2A3284] hover:bg-[#3A4294] text-[#E8EBFF]"
                      }`}
                    >
                      Выбрать тариф
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                  Дополнительные услуги
                </h2>
                <p className="text-[#B8C5FF] text-lg">Сделайте вашу поездку еще более комфортной</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-[#E8EBFF]">{service.name}</h3>
                      <span className="text-[#00D1FF] font-bold">{service.price}</span>
                    </div>
                    <p className="text-[#B8C5FF]">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Info */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent text-center">
                  Как формируется цена
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-[#00D1FF] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-[#E8EBFF] mb-2">Время</h3>
                    <p className="text-[#B8C5FF]">Учитывается время поездки и сложность маршрута</p>
                  </div>

                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#FF4FD8] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-[#E8EBFF] mb-2">Расстояние</h3>
                    <p className="text-[#B8C5FF]">Километраж и зона обслуживания влияют на стоимость</p>
                  </div>

                  <div className="text-center">
                    <Car className="w-8 h-8 text-[#00D1FF] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-[#E8EBFF] mb-2">Тариф</h3>
                    <p className="text-[#B8C5FF]">Выбранный класс обслуживания и дополнительные услуги</p>
                  </div>
                </div>

                <div className="bg-[#0B0E2A]/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#E8EBFF] mb-4">Важная информация:</h3>
                  <ul className="space-y-2 text-[#B8C5FF]">
                    <li>• Минимальная стоимость поездки — 800 рублей</li>
                    <li>• Первые 10 минут ожидания бесплатно</li>
                    <li>• Цена фиксируется при заказе</li>
                    <li>• Никаких скрытых комиссий и доплат</li>
                    <li>• Возможна оплата наличными, картой или переводом</li>
                  </ul>
                </div>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
