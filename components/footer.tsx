import Link from "next/link"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass-card border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Trefree</h3>
            <p className="text-muted-foreground">
              Надежный сервис трезвого водителя в Санкт-Петербурге и Ленинградской области
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-accent transition-colors">
                Главная
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-accent transition-colors">
                О сервисе
              </Link>
              <Link href="/prices" className="block text-muted-foreground hover:text-accent transition-colors">
                Тарифы
              </Link>
              <Link href="/contacts" className="block text-muted-foreground hover:text-accent transition-colors">
                Контакты
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2">
              <a
                href="tel:+78123456789"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={16} className="mr-2" />
                +7 (812) 345-67-89
              </a>
              <a
                href="mailto:info@trefree.ru"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={16} className="mr-2" />
                info@trefree.ru
              </a>
              <a
                href="https://t.me/trefree"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <MessageCircle size={16} className="mr-2" />
                @trefree
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-muted-foreground hover:text-accent transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Trefree. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
