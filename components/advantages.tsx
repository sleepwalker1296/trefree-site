import { Shield, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Advantages() {
  const advantages = [
    {
      icon: Shield,
      title: "Безопасность",
      description: "Опытные водители с чистой историей вождения и полной страховкой",
    },
    {
      icon: Clock,
      title: "Быстрая подача",
      description: "Прибытие водителя в течение 15-30 минут в любое время суток",
    },
    {
      icon: DollarSign,
      title: "Доступные цены",
      description: "Честные тарифы без скрытых комиссий и переплат",
    },
  ]

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-primary to-secondary rounded-full w-fit">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
