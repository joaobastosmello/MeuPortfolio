import { Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Precisa de um <span className="text-primary">Site Profissional</span>?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            Quer um site para seu casamento, página do seu negócio ou landing page para impulsionar suas vendas?
            Desenvolvo sites modernos, responsivos e otimizados para converter visitantes em clientes.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors">
              <div className="text-primary text-3xl mb-3">💍</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Sites de Eventos</h3>
              <p className="text-sm text-muted-foreground">Casamentos, festas e celebrações especiais</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors">
              <div className="text-primary text-3xl mb-3">🚀</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Landing Pages</h3>
              <p className="text-sm text-muted-foreground">Páginas de vendas que convertem</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors">
              <div className="text-primary text-3xl mb-3">💼</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Sites Corporativos</h3>
              <p className="text-sm text-muted-foreground">Presença digital profissional para seu negócio</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-base tracking-wide group w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5521969091511?text=Olá!%20Gostaria%20de%20desenvolver%20um%20site"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading text-base tracking-wide group w-full sm:w-auto bg-transparent"
            >
              <a
                href="https://instagram.com/joaobastosmello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Instagram
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground mt-8">
            Entre em contato e vamos transformar sua ideia em realidade digital!
          </p>
        </div>
      </div>
    </section>
  )
}
