import { MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contacts() {
  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Контакты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Telegram</h3>
            <Button
              variant="outline"
              className="bg-transparent border-border text-card-foreground hover:bg-muted"
              asChild
            >
              <a href="https://t.me/trefree_spb" target="_blank" rel="noopener noreferrer">
                @trefree_spb
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Телефон</h3>
            <Button
              variant="outline"
              className="bg-transparent border-border text-card-foreground hover:bg-muted"
              asChild
            >
              <a href="tel:+78123456789">+7 (812) 345-67-89</a>
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Email</h3>
            <Button
              variant="outline"
              className="bg-transparent border-border text-card-foreground hover:bg-muted"
              asChild
            >
              <a href="mailto:info@trefree.ru">info@trefree.ru</a>
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-3"
          >
            Заказать водителя сейчас
          </Button>
        </div>
      </div>
    </section>
  )
}
