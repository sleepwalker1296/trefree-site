import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const pricingPlans = [
    {
      title: "Эконом",
      price: "800₽",
      description: "Базовая услуга в пределах города",
      features: ["Подача в течение 30 минут", "Опытный водитель", "Страховка включена"],
    },
    {
      title: "Комфорт",
      price: "1200₽",
      description: "Быстрая подача и премиум сервис",
      features: ["Подача в течение 15 минут", "Водитель высшей категории", "Полная страховка", "Помощь с багажом"],
    },
    {
      title: "Премиум",
      price: "1800₽",
      description: "VIP обслуживание",
      features: [
        "Подача в течение 10 минут",
        "Персональный водитель",
        "Расширенная страховка",
        "Дополнительные услуги",
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance text-blue-200"
          style={{
            background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Тарифы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden backdrop-blur-sm border-0 flex flex-col h-full ${
                plan.title === "Комфорт"
                  ? "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 ring-2 ring-gradient-to-r ring-from-blue-400 ring-to-pink-400"
                  : "bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-800/40"
              }`}
              style={{
                background:
                  plan.title === "Комфорт"
                    ? "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%)"
                    : "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(51, 65, 85, 0.4) 50%, rgba(30, 41, 59, 0.4) 100%)",
                border:
                  plan.title === "Комфорт" ? "1px solid rgba(147, 51, 234, 0.3)" : "1px solid rgba(71, 85, 105, 0.3)",
                boxShadow:
                  plan.title === "Комфорт"
                    ? "0 0 30px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    : "0 0 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />

              <CardHeader className="text-center relative z-10">
                <CardTitle className="text-2xl text-white mb-2">{plan.title}</CardTitle>
                <div
                  className={`text-4xl font-bold mb-2 ${plan.title === "Комфорт" ? "text-pink-300" : "text-blue-300"}`}
                  style={
                    plan.title === "Комфорт"
                      ? {
                          background: "linear-gradient(135deg, #60a5fa 0%, #ec4899 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : undefined
                  }
                >
                  {plan.price}
                </div>
                <p className="text-slate-300 text-sm text-center">{plan.description}</p>
              </CardHeader>
              <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
                <ul className="space-y-3 mb-6 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-200">
                      <div
                        className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                          plan.title === "Комфорт" ? "bg-gradient-to-r from-blue-400 to-pink-400" : "bg-blue-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full transition-all duration-300 ${
                    plan.title === "Комфорт"
                      ? "bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl hover:shadow-pink-500/25"
                      : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border border-slate-500/50 hover:border-blue-400/50"
                  }`}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
