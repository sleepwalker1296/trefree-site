import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin, Clock, Users } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (812) 123-45-67",
    description: "Звоните круглосуточно для заказа или консультации",
    action: "Позвонить",
    href: "tel:+78121234567",
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    value: "@trefree_spb",
    description: "Быстрые ответы в мессенджере, заказ через бота",
    action: "Написать",
    href: "https://t.me/trefree_spb",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@trefree.ru",
    description: "Для деловых предложений и обратной связи",
    action: "Написать",
    href: "mailto:info@trefree.ru",
  },
]

const officeInfo = [
  {
    icon: MapPin,
    title: "Адрес офиса",
    value: "Санкт-Петербург, Невский пр., 100",
    description: "Центральный офис (только по предварительной записи)",
  },
  {
    icon: Clock,
    title: "Режим работы",
    value: "24/7 без выходных",
    description: "Диспетчерская служба работает круглосуточно",
  },
  {
    icon: Users,
    title: "Служба поддержки",
    value: "Всегда на связи",
    description: "Решаем любые вопросы в течение 5 минут",
  },
]

export default function ContactsPage() {
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
                Контакты
              </h1>
              <p className="text-xl text-[#B8C5FF] max-w-3xl mx-auto leading-relaxed">
                Мы всегда готовы помочь вам. Выберите удобный способ связи или закажите поездку прямо сейчас.
              </p>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                  Способы связи
                </h2>
                <p className="text-[#B8C5FF] text-lg">Выберите наиболее удобный для вас способ</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card
                      key={index}
                      className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-8 text-center hover:border-[#00D1FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,209,255,0.1)]"
                    >
                      <div className="p-4 rounded-full bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20 w-fit mx-auto mb-6">
                        <Icon className="w-8 h-8 text-[#00D1FF]" />
                      </div>

                      <h3 className="text-2xl font-bold text-[#E8EBFF] mb-2">{method.title}</h3>
                      <div className="text-xl font-semibold bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent mb-3">
                        {method.value}
                      </div>
                      <p className="text-[#B8C5FF] mb-6 leading-relaxed">{method.description}</p>

                      <Button
                        asChild
                        className="bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] hover:from-[#00B8E6] hover:to-[#E63EC7] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.3)]"
                      >
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Office Information */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                  Информация о компании
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {officeInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-6 text-center">
                      <Icon className="w-8 h-8 text-[#00D1FF] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-[#E8EBFF] mb-2">{info.title}</h3>
                      <div className="text-[#00D1FF] font-semibold mb-2">{info.value}</div>
                      <p className="text-[#B8C5FF] text-sm">{info.description}</p>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-[#1A1F3A]/90 to-[#2A3284]/90 backdrop-blur-xl border-[#FF4FD8]/30 p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FF4FD8] to-[#00D1FF] bg-clip-text text-transparent">
                  Экстренная связь
                </h2>
                <p className="text-[#B8C5FF] text-lg mb-6">
                  Если у вас возникла экстренная ситуация во время поездки, немедленно свяжитесь с нами
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#FF4FD8] to-[#E63EC7] hover:from-[#E63EC7] hover:to-[#CC2FB8] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,79,216,0.3)]"
                  >
                    <a href="tel:+78121234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Экстренный вызов
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#00D1FF] text-[#00D1FF] hover:bg-[#00D1FF] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 bg-transparent"
                  >
                    <a href="https://t.me/trefree_spb" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Telegram SOS
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* FAQ Quick Links */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-[#1A1F3A]/80 backdrop-blur-xl border-[#2A3284]/50 p-8">
                <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
                  Часто задаваемые вопросы
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-[#E8EBFF]">Популярные вопросы:</h3>
                    <ul className="space-y-2 text-[#B8C5FF]">
                      <li>• Как быстро приедет водитель?</li>
                      <li>• Какие способы оплаты принимаете?</li>
                      <li>• Работаете ли вы ночью?</li>
                      <li>• Можно ли заказать заранее?</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-[#E8EBFF]">Полезная информация:</h3>
                    <ul className="space-y-2 text-[#B8C5FF]">
                      <li>• Что делать, если забыл вещи?</li>
                      <li>• Как отменить заказ?</li>
                      <li>• Политика возврата средств</li>
                      <li>• Программа лояльности</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#00D1FF] text-[#00D1FF] hover:bg-[#00D1FF] hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 bg-transparent"
                  >
                    <a href="/#faq">Посмотреть все вопросы</a>
                  </Button>
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
