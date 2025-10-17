"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
              <Image
                src="/images/design-mode/imagemsobre.jpg"
                alt="João Gabriel Bastos"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Me chamo <span className="text-foreground font-semibold">João Gabriel Bastos</span>, tenho 20 anos.
                Estou procura de uma oportunidade para minha carreira como desenvolvedor. Atualmente venho trabalhando
                em projetos próprios em busca de encontrar uma vaga na área.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Minha especialidade inclui:{" "}
                <span className="text-primary font-semibold">React, JavaScript, Python, PowerApps</span>. Trabalho
                atualmente na <span className="text-foreground font-semibold">Globo</span>.
              </p>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300" asChild>
                <a
                  href="https://www.linkedin.com/in/joão-gabriel-bastos-301728259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} className="invert" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-primary/50 hover:bg-primary/10 transition-all duration-300 bg-transparent"
                asChild
              >
                <a
                  href="https://instagram.com/joaobastosmello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
