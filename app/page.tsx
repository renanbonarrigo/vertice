"use client"

import { CodeRain } from "@/components/code-rain"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { PoweredByBadge } from "@/components/powered-by-badge"
import { SpinningEarth } from "@/components/spinning-earth"
import { TypingHero } from "@/components/typing-hero"
import { QuemSomosSection } from "@/components/quem-somos-section"
import { PublicoAlvoSection } from "@/components/publico-alvo-section"
import { ServicesSection } from "@/components/services-section"
import { motion } from "framer-motion"
import { Zap, Target, TrendingUp, Users, Mail, MessageSquare } from "lucide-react"
import { ProfileDropdown } from "@/components/profile-dropdown"

export default function Home() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        {/* Spinning Earth */}
        <div className="opacity-10">
          <SpinningEarth />
        </div>
        {/* Code rain */}
        <div className="opacity-10 dark:opacity-10 light:opacity-3">
          <CodeRain />
        </div>
      </div>

      {/* Hero Video - Full screen background */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          style={{
            filter: "contrast(1.2) brightness(0.7) grayscale(100%)",
          }}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp%20%283%29%20%281%29%20%282%29%20%282%29-i8U3zTcWrQss8nKM5ekseP7qFR5KVP.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <NavBar />
        <ProfileDropdown />

        {/* Hero section */}
        <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="mb-8">
              <PoweredByBadge />
            </div>

            {/* Enhanced hero with better contrast */}
            <div className="relative">
              {/* Background for better contrast in light mode */}
              <div className="absolute inset-0 bg-background/80 dark:bg-transparent rounded-2xl blur-3xl"></div>
              <div className="relative z-10">
                <TypingHero />
              </div>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div>

            {/* Button section */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => scrollToSection("#solucoes")}
                  className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                >
                  <span className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Nossas Soluções</span>
                  </span>
                </button>

                <button
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=5511987617220", "_blank")}
                  className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Consultoria Gratuita</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos section */}
        <QuemSomosSection />

        {/* Público-Alvo section */}
        <PublicoAlvoSection />

        {/* Services section */}
        <div id="solucoes">
          <ServicesSection />
        </div>

        {/* Cases de Sucesso section - Exatamente como no briefing */}
        <section id="cases" className="py-20 px-4 sm:px-6 relative bg-gradient-to-br from-background to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white">Quem confia no nosso trabalho </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-new-green-400 to-new-green-600 tracking-tighter">
                  {" "}
                  (Depoimentos Reais)
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Cases reais de clientes que transformaram seus negócios conosco
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case 1 - Elton Amorin Fotógrafo */}
              <motion.div
                className="bg-background/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Elton Amorin</h3>
                      <p className="text-sm text-muted-foreground">Fotógrafo</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Faturamento médio:</span>
                      <span className="text-lg font-bold text-red-400">R$ 10.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Resultado em 2 meses:</span>
                      <span className="text-lg font-bold text-new-green-400">R$ 87.000</span>{" "}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Contratos fechados:</span>
                      <span className="text-lg font-bold text-primary">25 contratos</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Iniciamos as estratégias e em 2 meses fechou 25 contratos, totalizando R$87 mil em vendas."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2 - Cash Milhas */}
              <motion.div
                className="bg-background/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Cash Milhas</h3>
                      <p className="text-sm text-muted-foreground">Programa de Milhas</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Faturamento médio:</span>
                      <span className="text-lg font-bold text-red-400">R$ 17.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Faturamento atual:</span>
                      <span className="text-lg font-bold text-new-green-400">R$ 400.000</span>{" "}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Estratégia:</span>
                      <span className="text-sm font-bold text-primary">Google Ads + Landing</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Faturamento médio pulou de R$17 mil para R$400 mil mensais em 1 ano de projeto com Google Ads e
                      Landing Page estratégica."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 3 - Terceirize Soluções */}
              <motion.div
                className="bg-background/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-new-green-500 to-new-green-500 rounded-full flex items-center justify-center">
                      {" "}
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Terceirize Soluções</h3>
                      <p className="text-sm text-muted-foreground">Serviços Empresariais</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Faturamento inicial:</span>
                      <span className="text-lg font-bold text-red-400">R$ 10.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Faturamento atual:</span>
                      <span className="text-lg font-bold text-new-green-400">R$ 150.000/mês</span>{" "}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Crescimento:</span>
                      <span className="text-lg font-bold text-primary">1.500%</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                      "De 10 mil, chegou a R$150 mil/mês em contratos em 8 meses com nossa estratégia integrada."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact section */}
        <section id="contato" className="py-20 px-4 sm:px-6 relative bg-black">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-foreground">Pronto para </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-new-green-400 to-new-green-600">
                  {" "}
                  Transformar?
                </span>
              </motion.h2>
              <motion.div
                className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Vamos conversar sobre como ser a ponte entre o digital e a performance comercial do seu negócio, gerando
                resultados reais e mensuráveis.
              </motion.p>
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col items-center space-y-8">
                {/* Main CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => scrollToSection("#solucoes")}
                    className="group relative px-6 py-3 bg-new-green-500 text-white rounded-lg font-medium text-base hover:bg-new-green-600 transition-all duration-300 transform hover:scale-105 border border-new-green-500"
                  >
                    <span className="flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span>Ver Soluções</span>
                    </span>
                  </button>

                  <a
                    href="https://api.whatsapp.com/send?phone=5511987617220"
                    className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Consultoria Gratuita</span>
                    </span>
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=5511987617220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                  >
                    <span className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </span>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full">
                  <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
                    <Mail className="w-8 h-8 text-new-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                    <a
                      href="mailto:joaovitor@new4marketing.com.br"
                      className="text-sm text-muted-foreground hover:text-new-green-400 transition-colors break-all"
                    >
                      joaovitor@new4marketing.com.br
                    </a>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
                    <MessageSquare className="w-8 h-8 text-new-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511987617220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-new-green-400 transition-colors"
                    >
                      Conversar agora
                    </a>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
                    <Zap className="w-8 h-8 text-new-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Consultoria</h3>
                    <p className="text-sm text-muted-foreground">Gratuita de 30min</p>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-2xl">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Consultoria gratuita de 30min</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Estratégia personalizada</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Resultados mensuráveis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
