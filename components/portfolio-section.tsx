"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Site Bodas",
    description: "Site de festa de bodas de prata de Herica e Luis",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SITEBODAS-YP99sq1ai2nmEyeqjBmtODYruBxEZv.png",
    link: "https://sitebodas.web.app",
  },
  {
    title: "Página Glau",
    description: "Landing page para vendas da nutricionista Glaucia Bastos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paginaglau-F6T3tbsPCNfqiMA6xcEd7XWXnFjSMb.png",
    link: null,
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Meu <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-muted-foreground text-lg">Projetos que desenvolvi recentemente</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-secondary border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Image container with scroll effect */}
                <div className="relative h-[400px] overflow-hidden">
                  <motion.div
                    className="relative w-full h-auto"
                    whileHover={{ y: "-50%" }}
                    transition={{ duration: 3, ease: "linear" }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={1600}
                      className="w-full h-auto object-top"
                    />
                  </motion.div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visitar Site
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
