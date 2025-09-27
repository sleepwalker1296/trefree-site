import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageCircle, Clock } from "lucide-react"

export function ContactTeaser() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-[#1A1F3A]/90 to-[#2A3284]/90 backdrop-blur-xl border-[#00D1FF]/30 p-8 md:p-12 text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00D1FF] to-[#FF4FD8] bg-clip-text text-transparent">
              Нужна помощь?
            </h2>
            <p className="text-[#B8C5FF] text-lg max-w-2xl mx-auto">
              Наша служба поддержки работает круглосуточно. Мы всегда готовы помочь вам с заказом или ответить на любые
              вопросы.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20">
                <Phone className="w-6 h-6 text-[#00D1FF]" />
              </div>
              <div>
                <h3 className="text-[#E8EBFF] font-semibold mb-1">Телефон</h3>
                <p className="text-[#B8C5FF]">+7 (812) 123-45-67</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20">
                <MessageCircle className="w-6 h-6 text-[#FF4FD8]" />
              </div>
              <div>
                <h3 className="text-[#E8EBFF] font-semibold mb-1">Telegram</h3>
                <p className="text-[#B8C5FF]">@trefree_spb</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#00D1FF]/20 to-[#FF4FD8]/20">
                <Clock className="w-6 h-6 text-[#00D1FF]" />
              </div>
              <div>
                <h3 className="text-[#E8EBFF] font-semibold mb-1">Режим работы</h3>
                <p className="text-[#B8C5FF]">24/7</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#00D1FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.3)]">
              <Phone className="w-4 h-4 mr-2" />
              Позвонить
            </Button>
            <Button
              variant="outline"
              className="border-[#FF4FD8] text-[#FF4FD8] hover:bg-[#FF4FD8] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 bg-transparent"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
