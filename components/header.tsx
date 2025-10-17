"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-primary/10" : "bg-black"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-28 md:w-32 h-8 md:h-10 transition-transform hover:scale-105">
            <Image src="/images/logotipo.png" alt="João Mello" fill className="object-contain" priority />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 font-heading">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                INÍCIO
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("especialidades")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                ESPECIALIDADES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                SOBRE MIM
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                PORTFÓLIO
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                CONTATO
              </button>
            </li>
          </ul>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 mt-4 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 font-heading">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide w-full text-left py-2"
              >
                INÍCIO
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("especialidades")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide w-full text-left py-2"
              >
                ESPECIALIDADES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide w-full text-left py-2"
              >
                SOBRE MIM
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide w-full text-left py-2"
              >
                PORTFÓLIO
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide w-full text-left py-2"
              >
                CONTATO
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
