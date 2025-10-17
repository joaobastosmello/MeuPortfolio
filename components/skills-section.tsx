"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "React", icon: "/images/react-icon.png" },
  { name: "JavaScript", icon: "/images/javascript-icon.png" },
  { name: "Python", icon: "/images/python-icon.png" },
  { name: "PowerApps", icon: "/images/powerapps-icon.png" },
  { name: "Google Cloud", icon: "/images/google-cloud-icon.png" },
]

export function SkillsSection() {
  return (
    <section id="especialidades" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Especialidades</h2>
          </div>
          <p className="text-muted-foreground text-lg">Tecnologias e ferramentas que domino</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-secondary border border-border rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={`${skill.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
