"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Bot,
  User,
  Sparkles,
  Linkedin,
  Instagram,
  Globe,
  MessageSquare,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Olá! Sou o assistente da New4 Marketing. Como posso ajudar você a transformar sua presença digital em vendas reais hoje?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Enhanced AI response function with New4 Marketing context
  const generateAdvancedBotResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    // Pricing responses
    if (
      lowerMessage.includes("preço") ||
      lowerMessage.includes("custo") ||
      lowerMessage.includes("valor") ||
      lowerMessage.includes("orçamento")
    ) {
      if (lowerMessage.includes("site") || lowerMessage.includes("landing") || lowerMessage.includes("página")) {
        return "Para desenvolvimento de sites e landing pages, oferecemos soluções personalizadas com design moderno, foco em conversão, experiência mobile e integração com CRM. Os valores são definidos sob consulta, baseados nas suas necessidades específicas. Gostaria de agendar uma consultoria gratuita para um orçamento personalizado?"
      }
      if (lowerMessage.includes("tráfego") || lowerMessage.includes("anúncios") || lowerMessage.includes("ads")) {
        return "Para gestão de tráfego pago, trabalhamos com anúncios em múltiplas plataformas: Meta (Instagram/Facebook), Google Ads, TikTok e LinkedIn. Desenvolvemos estratégias segmentadas e criativas para maximizar seu ROI. Os investimentos são definidos sob consulta. Quer saber mais sobre nossa estratégia?"
      }
      return "Nossos investimentos são personalizados conforme suas necessidades: Sites/Landing Pages, Tráfego Pago Multiplataforma, CRM e Integrações, Treinamento Comercial e Prospecção Ativa. Todos os valores são definidos sob consulta após análise das suas necessidades. Oferecemos consultoria gratuita para definir a melhor estratégia!"
    }

    // Services responses
    if (
      lowerMessage.includes("serviços") ||
      lowerMessage.includes("o que fazem") ||
      lowerMessage.includes("soluções")
    ) {
      return "A New4 Marketing oferece estrutura completa: 🌐 Website/Landing Pages (design moderno, foco em conversão, experiência mobile, integração CRM), 📈 Anúncios Multiplataforma (Meta, Google Ads, TikTok, LinkedIn), ⚡ CRM e Integrações (automação, nutrição de leads, análise de funil), 👥 Treinamento Comercial (capacitação, técnicas de abordagem e fechamento), 🎯 Prospecção Ativa (estratégia outbound baseada em dados). Qual área mais te interessa?"
    }

    // Results and cases
    if (lowerMessage.includes("resultados") || lowerMessage.includes("cases") || lowerMessage.includes("clientes")) {
      return "Temos cases incríveis! 📸 Elton Amorin (fotógrafo): faturamento médio de 10k, iniciamos as estratégias e em 2 meses fechou 25 contratos, totalizando R$87 mil. ✈️ Cash Milhas: faturamento pulou de R$17k para R$400k mensais com Google Ads e Landing Page estratégica. 🏢 Terceirize Soluções: de 10k chegou a R$150k/mês em contratos. Desde 2021, já impactamos 50+ clientes, gerando R$10M+ em faturamento!"
    }

    // About company
    if (lowerMessage.includes("quem são") || lowerMessage.includes("empresa") || lowerMessage.includes("agência")) {
      return "A New4 Marketing é uma agência criativa especializada em atração e conversão de leads. Desde 2021, já impactamos mais de 50 clientes, gerando mais de R$10 milhões em faturamento para nossos parceiros. Transformamos ideias em estruturas digitais que vendem, combinando estratégia, branding, tráfego e capacitação comercial. Somos especialistas em marketing de vendas com atuação forte em captação de leads."
    }

    // Mission and purpose
    if (lowerMessage.includes("missão") || lowerMessage.includes("propósito") || lowerMessage.includes("objetivo")) {
      return "Nossa MISSÃO: transformar negócios em marcas digitais com estrutura completa: site ou landing page, tráfego pago, CRM, treinamento e prospecção integrada. Nosso PROPÓSITO: ser a ponte entre o digital e a performance comercial, gerando resultados reais e mensuráveis para os clientes. Focamos em atrair leads qualificados, aumentar conversões, fortalecer marcas e maximizar ROI."
    }

    // Consultation and meeting
    if (
      lowerMessage.includes("consultoria") ||
      lowerMessage.includes("reunião") ||
      lowerMessage.includes("conversar") ||
      lowerMessage.includes("agendar")
    ) {
      return "Perfeito! Oferecemos uma consultoria gratuita onde vamos: ✅ Analisar seu negócio atual, ✅ Identificar oportunidades de crescimento, ✅ Apresentar estratégias personalizadas, ✅ Definir próximos passos. Entre em contato pelo joaovitor@new4marketing.com.br para agendar. Qual horário funciona melhor para você?"
    }

    // General greeting responses
    if (
      lowerMessage.includes("olá") ||
      lowerMessage.includes("oi") ||
      lowerMessage.includes("bom dia") ||
      lowerMessage.includes("boa tarde")
    ) {
      return "Olá! Seja bem-vindo à New4 Marketing! 🚀 Somos uma agência criativa especializada em atração e conversão de leads. Desde 2021, já impactamos 50+ clientes, gerando R$10M+ em faturamento. Transformamos sua presença digital em vendas reais com estrutura completa. Como posso ajudar você hoje?"
    }

    // Default intelligent response
    return "Excelente pergunta! A New4 Marketing está aqui para ser a ponte entre o digital e a performance comercial do seu negócio. Nossa equipe especializada pode te ajudar com soluções integradas que geram resultados reais e mensuráveis. Entre em contato pelo joaovitor@new4marketing.com.br ou agende uma consultoria gratuita. Sobre qual aspecto do marketing digital você gostaria de saber mais?"
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(async () => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: await generateAdvancedBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "joaovitor@new4marketing.com.br",
      description: "Resposta em até 2 horas",
      href: "mailto:joaovitor@new4marketing.com.br",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      description: "Seg-Sex das 8h às 18h",
      href: "tel:+5511999999999",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Atendimento online",
      href: "#",
    },
    {
      icon: Clock,
      title: "Tempo de Resposta",
      value: "< 2 horas",
      description: "Suporte rápido e eficiente",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Globe, href: "#", label: "Website" },
    { icon: MessageSquare, href: "#", label: "WhatsApp" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CodeRain />
      </div>
      <NavBar />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white">Entre em </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                Contato
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Converse com nosso assistente inteligente ou entre em contato diretamente. Estamos aqui para transformar
              sua presença digital em vendas reais.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced AI Chat - Now takes more space */}
            <div className="lg:col-span-3">
              <motion.div
                className="bg-background/50 border border-border rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Enhanced Chat Header */}
                <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 border-b border-border p-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-r from-primary to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(52,211,153,0.3)",
                          "0 0 30px rgba(52,211,153,0.5)",
                          "0 0 20px rgba(52,211,153,0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Bot className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold">Assistente New4 Marketing</h3>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Sparkles className="w-5 h-5 text-emerald-400" />
                        </motion.div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-sm text-muted-foreground">Online • Resposta instantânea</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Messages */}
                <div className="h-[500px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-background/30 to-background/50">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] px-6 py-4 rounded-2xl shadow-lg ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-primary to-emerald-500 text-white"
                              : "bg-gradient-to-r from-muted to-muted/80 text-foreground border border-border/50"
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            {message.sender === "bot" && (
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <Bot className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              </motion.div>
                            )}
                            {message.sender === "user" && <User className="w-5 h-5 text-white flex-shrink-0 mt-1" />}
                            <div className="flex-1">
                              <p className="text-sm leading-relaxed">{message.content}</p>
                              <p
                                className={`text-xs mt-2 ${message.sender === "user" ? "text-white/70" : "text-muted-foreground"}`}
                              >
                                {message.timestamp.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Enhanced Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gradient-to-r from-muted to-muted/80 px-6 py-4 rounded-2xl border border-border/50 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Bot className="w-5 h-5 text-primary" />
                          </motion.div>
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-primary rounded-full"
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">Assistente digitando...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced Message Input */}
                <div className="border-t border-border p-6 bg-background/80">
                  <form onSubmit={handleSendMessage} className="flex space-x-4">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm shadow-inner"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={!inputMessage.trim()}
                      className="px-6 py-4 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-xl hover:from-primary/90 hover:to-emerald-500/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold">Formas de Contato</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-primary/5 to-emerald-500/5 hover:from-primary/10 hover:to-emerald-500/10 border border-primary/20 hover:border-primary/40 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{info.title}</h4>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                      <div className="text-primary font-semibold text-xs bg-primary/10 px-2 py-1 rounded-full">
                        {info.value}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Follow Us */}
              <motion.div
                className="bg-background/50 border border-border rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="font-medium mb-4">Siga-nos</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
