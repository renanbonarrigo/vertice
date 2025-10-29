"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSelector } from "@/components/language-selector"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <div className="flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/design-mode/Ve%CC%81rtice-Logo-03.png"
              alt="Vértice Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Serviços
            </Link>
            <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfólio
            </Link>
            <Link href="/process" className="text-sm font-medium transition-colors hover:text-primary">
              Processo
            </Link>
            <Link href="/clientele" className="text-sm font-medium transition-colors hover:text-primary">
              Clientes
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contato
            </Link>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ModeToggle />
              <Button asChild className="bg-[#10b981] hover:bg-[#059669] text-white">
                <Link href="/consultation">Consultoria Gratuita</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-3">
            <Link
              href="/services"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Serviços
            </Link>
            <Link
              href="/portfolio"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Portfólio
            </Link>
            <Link
              href="/process"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Processo
            </Link>
            <Link
              href="/clientele"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Clientes
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Contato
            </Link>
            <div className="flex items-center space-x-2 pt-2">
              <LanguageSelector />
              <ModeToggle />
            </div>
            <Button asChild className="w-full bg-[#10b981] hover:bg-[#059669] text-white">
              <Link href="/consultation">Consultoria Gratuita</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
