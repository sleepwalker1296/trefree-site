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
      popular: true,
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Тарифы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`bg-card border-border relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-card-foreground mb-2">{plan.title}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-card-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                      : "bg-card border border-border hover:bg-muted"
                  } text-primary-foreground`}
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
