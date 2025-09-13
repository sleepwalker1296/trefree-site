import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Shield, Users, Award, MapPin, Heart } from "lucide-react"

const stats = [
  { number: "5000+", label: "Довольных клиентов" },
  { number: "50+", label: "Опытных водителей" },
  { number: "24/7", label: "Круглосуточная работа" },
  { number: "4.9", label: "Средний рейтинг" },
]

const values = [
  {
    icon: Shield,
    title: "Безопасность",
    description:
      "Все наши водители проходят тщательную проверку, имеют чистые водительские права и большой опыт вождения.",
  },
  {
    icon: Heart,
    title: "Забота",
    description:
      "Мы заботимся о каждом клиенте и стремимся сделать каждую поездку максимально комфортной и безопасной.",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Высокие стандарты обслуживания и постоянное совершенствование наших услуг - наш приоритет.",
  },
  {
    icon: Users,
    title: "Команда",
    description: "Профессиональная команда диспетчеров и водителей работает для вашего удобства и безопасности.",
  },
]

export default function AboutPage() {
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
                О сервисе Trefree
              </h1>
              <p className="text-xl text-[#B8C5FF] max-w-3xl mx-auto leading-relaxed">
                Мы — команда профессионалов, которая уже более 5 лет обеспечивает безопасные поездки в Санкт-Петербурге.
                Наша миссия — сделать каждую поездку комфортной и безопасной.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#B8C5FF]">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                  Наша история
                </h2>
                <div className="space-y-6 text-[#B8C5FF] leading-relaxed">
                  <p>
                    Сервис Trefree был создан в 2019 году группой энтузиастов, которые понимали важность безопасных
                    поездок в городе. Мы начинали с небольшой команды из 5 водителей и одного диспетчера.
                  </p>
                  <p>
                    За годы работы мы выросли в надежную службу с более чем 50 профессиональными водителями, которые
                    обслуживают весь Санкт-Петербург и Ленинградскую область. Каждый день мы помогаем сотням людей
                    добраться домой безопасно.
                  </p>
                  <p>
                    Сегодня Trefree — это не просто служба трезвых водителей, это команда, которая заботится о
                    безопасности каждого клиента и стремится к постоянному улучшению качества обслуживания.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                  Наши ценности
                </h2>
                <p className="text-[#B8C5FF] text-lg">Принципы, которыми мы руководствуемся в работе</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <Card
                      key={index}
                      className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-6 hover:border-[#00D1FF]/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20">
                          <Icon className="w-6 h-6 text-[#00D1FF]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#E8EBFF] mb-2">{value.title}</h3>
                          <p className="text-[#B8C5FF] leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Coverage Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-8 md:p-12 text-center">
                <MapPin className="w-12 h-12 text-[#00D1FF] mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                  География работы
                </h2>
                <p className="text-[#B8C5FF] text-lg leading-relaxed">
                  Мы обслуживаем весь Санкт-Петербург и Ленинградскую область. Наши водители знают город как свои пять
                  пальцев и всегда найдут оптимальный маршрут для вашей поездки.
                </p>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
