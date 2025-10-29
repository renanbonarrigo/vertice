"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Globe,
  TrendingUp,
  Zap,
  Users,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeService, setActiveService] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const services = [
    {
      id: "website",
      title: "Website & Landing Pages",
      shortTitle: "Website",
      tagline: "Conversão Digital",
      description:
        "Design moderno com foco em conversão, experiência mobile otimizada e integração completa com CRM para maximizar seus resultados",
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-blue-500 via-cyan-400 to-blue-600",
      bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
      accentColor: "text-blue-400",
      price: "Sob consulta",
      timeline: "7-15 dias",
      rating: 4.9,
      projects: 50,
      keyFeatures: ["Design Moderno", "Foco em Conversão", "Experiência Mobile", "Integração com CRM"],
      results: "Páginas otimizadas para conversão • Experiência mobile perfeita • Integração total com CRM",
      technologies: ["Design Responsivo", "Otimização SEO", "Integração CRM", "Analytics"],
    },
    {
      id: "traffic",
      title: "Anúncios Multiplataforma",
      shortTitle: "Tráfego Pago",
      tagline: "Performance Digital",
      description:
        "Anúncios em múltiplas plataformas: Meta (Instagram/Facebook), Google Ads, TikTok, LinkedIn com estratégias segmentadas e criativas",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-purple-500 via-pink-400 to-purple-600",
      bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
      accentColor: "text-purple-400",
      price: "Sob consulta",
      timeline: "3-7 dias para setup",
      rating: 4.8,
      projects: 45,
      keyFeatures: ["Meta (Instagram/Facebook)", "Google Ads", "TikTok Ads", "LinkedIn Ads"],
      results: "Estratégias segmentadas • Campanhas criativas • ROI maximizado • Leads qualificados",
      technologies: ["Meta Business", "Google Ads", "TikTok Ads", "LinkedIn Ads"],
    },
    {
      id: "crm",
      title: "CRM e Integrações",
      shortTitle: "CRM",
      tagline: "Automação Inteligente",
      description:
        "Ferramentas de automação completas, nutrição estratégica de leads e análise detalhada do funil de vendas",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-emerald-500 via-teal-400 to-emerald-600",
      bgGradient: "from-emerald-500/20 via-teal-400/10 to-emerald-600/20",
      accentColor: "text-emerald-400",
      price: "Sob consulta",
      timeline: "5-10 dias",
      rating: 4.9,
      projects: 40,
      keyFeatures: ["Ferramentas de Automação", "Nutrição de Leads", "Análise de Funil", "Integrações Completas"],
      results: "Automação completa • Nutrição estratégica • Análise detalhada • Integração total",
      technologies: ["Automação", "Lead Scoring", "Funil de Vendas", "Integrações"],
    },
    {
      id: "training",
      title: "Treinamento Comercial",
      shortTitle: "Treinamento",
      tagline: "Capacitação de Vendas",
      description:
        "Capacitação completa para equipes internas com técnicas avançadas de abordagem e fechamento de vendas",
      icon: <Users className="w-12 h-12" />,
      gradient: "from-orange-500 via-red-400 to-orange-600",
      bgGradient: "from-orange-500/20 via-red-400/10 to-orange-600/20",
      accentColor: "text-orange-400",
      price: "Sob consulta",
      timeline: "Programa personalizado",
      rating: 5.0,
      projects: 25,
      keyFeatures: ["Capacitação para Equipes", "Técnicas de Abordagem", "Técnicas de Fechamento", "Suporte Contínuo"],
      results: "Equipes capacitadas • Técnicas avançadas • Fechamento eficaz • Resultados consistentes",
      technologies: ["Metodologia Própria", "Técnicas Avançadas", "Treinamento Prático", "Acompanhamento"],
    },
    {
      id: "prospection",
      title: "Prospecção Ativa",
      shortTitle: "Prospecção",
      tagline: "Outbound Strategy",
      description:
        "Estratégia outbound baseada em dados para acelerar a aquisição de novos clientes de forma eficiente",
      icon: <Target className="w-12 h-12" />,
      gradient: "from-indigo-500 via-purple-400 to-indigo-600",
      bgGradient: "from-indigo-500/20 via-purple-400/10 to-indigo-600/20",
      accentColor: "text-indigo-400",
      price: "Sob consulta",
      timeline: "Setup personalizado",
      rating: 4.8,
      projects: 30,
      keyFeatures: ["Estratégia Outbound", "Base de Dados", "Acelerar Aquisição", "Resultados Mensuráveis"],
      results: "Prospecção estratégica • Dados qualificados • Aquisição acelerada • ROI comprovado",
      technologies: ["Outbound Strategy", "Data Analysis", "Lead Generation", "CRM Integration"],
    },
    {
      id: "whatsapp-ai",
      title: "IA para Atendimento WhatsApp",
      shortTitle: "IA WhatsApp",
      tagline: "Automação Inteligente",
      description:
        "Atendimento automatizado 24/7 via WhatsApp com inteligência artificial para qualificar leads e responder dúvidas frequentes",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-green-500 via-emerald-400 to-green-600",
      bgGradient: "from-green-500/20 via-emerald-400/10 to-green-600/20",
      accentColor: "text-green-400",
      price: "Sob consulta",
      timeline: "3-5 dias",
      rating: 4.9,
      projects: 35,
      keyFeatures: ["Atendimento 24/7", "Qualificação de Leads", "Respostas Automáticas", "Integração com CRM"],
      results: "Atendimento automatizado • Qualificação inteligente • Disponibilidade total • Integração completa",
      technologies: ["WhatsApp Business API", "Inteligência Artificial", "Automação", "CRM Integration"],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length])

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length)
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const currentService = services[activeService]

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 opacity-40">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${currentService.gradient} rounded-full blur-3xl animate-pulse transition-all duration-1000`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r ${currentService.gradient} rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-lg font-bold text-primary">Nossas Soluções</span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <h2 className="text-5xl sm:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-emerald-400 leading-tight">
              Ofertas e<span className="block text-emerald-400">Soluções</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Estrutura completa: site ou landing page, tráfego pago, CRM, treinamento e prospecção integrada
            </p>
          </motion.div>

          {/* Interactive Service Showcase */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`group relative px-6 py-3 rounded-full border transition-all duration-300 ${
                    index === activeService
                      ? `bg-gradient-to-r ${service.gradient} text-white border-transparent shadow-lg`
                      : "bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`${index === activeService ? "text-white" : service.accentColor} transition-colors duration-300`}
                    >
                      {service.icon}
                    </div>
                    <span className="font-semibold">{service.shortTitle}</span>
                  </div>
                  {index === activeService && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Main Service Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left side - Service details */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentService.bgGradient} border border-primary/20`}
                    >
                      <Target className={`w-4 h-4 ${currentService.accentColor}`} />
                      <span className={`text-sm font-bold ${currentService.accentColor}`}>
                        {currentService.tagline}
                      </span>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                      {currentService.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{currentService.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20`}
                    >
                      <div className={`text-2xl font-bold ${currentService.accentColor}`}>{currentService.price}</div>
                      <div className="text-sm text-muted-foreground">Investimento</div>
                    </div>
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20`}
                    >
                      <div className="text-2xl font-bold text-foreground">{currentService.timeline}</div>
                      <div className="text-sm text-muted-foreground">Prazo</div>
                    </div>
                    <div
                      className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20`}
                    >
                      <div className="text-2xl font-bold text-emerald-400">{currentService.projects}+</div>
                      <div className="text-sm text-muted-foreground">Projetos</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${currentService.accentColor}`} />
                      Principais Recursos
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentService.keyFeatures.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border/50"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentService.gradient}`}></div>
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-r ${currentService.bgGradient} border border-primary/20`}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className={`w-5 h-5 ${currentService.accentColor}`} />
                      <span className={`font-bold ${currentService.accentColor}`}>O que Entregamos</span>
                    </div>
                    <p className="text-foreground font-semibold">{currentService.results}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => window.open("https://api.whatsapp.com/send?phone=5511987617220", "_blank")}
                      size="lg"
                      className={`flex-1 bg-gradient-to-r ${currentService.gradient} hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group`}
                    >
                      <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Solicitar Orçamento
                    </Button>
                    <Button
                      onClick={() => {
                        const element = document.querySelector("#cases")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      variant="outline"
                      size="lg"
                      className={`flex-1 border-primary/50 ${currentService.accentColor} hover:bg-primary/10`}
                    >
                      Ver Cases
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Right side - Visual showcase */}
                <div className="relative">
                  <div
                    className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentService.bgGradient} border border-primary/20 backdrop-blur-sm`}
                  >
                    {/* Large icon */}
                    <div
                      className={`flex justify-center mb-8 text-gradient bg-gradient-to-r ${currentService.gradient} p-8 rounded-2xl bg-white/10`}
                    >
                      <div className={`${currentService.accentColor}`}>{currentService.icon}</div>
                    </div>

                    {/* Rating and projects */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-2xl font-bold text-foreground">{currentService.rating}</span>
                        <span className="text-muted-foreground">avaliação</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className={`w-5 h-5 ${currentService.accentColor}`} />
                        <span className="text-2xl font-bold text-foreground">{currentService.projects}+</span>
                        <span className="text-muted-foreground">projetos</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground">Ferramentas</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentService.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${currentService.gradient} text-white`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${currentService.gradient} rounded-full opacity-20 blur-xl`}
                    ></div>
                    <div
                      className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${currentService.gradient} rounded-full opacity-20 blur-xl`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevService}
                className="rounded-full border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="ml-2 text-sm">{isAutoPlaying ? "Pausar" : "Play"}</span>
                </Button>

                <div className="flex space-x-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeService
                          ? `bg-gradient-to-r ${currentService.gradient} w-8`
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextService}
                className="rounded-full border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">Pronto para transformar seu negócio?</span>
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5511987617220", "_blank")}
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Agendar Consultoria Gratuita
              </Button>
              <Button
                onClick={() => {
                  const element = document.querySelector("#cases")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 px-12 py-4 text-lg bg-transparent"
              >
                <Target className="w-5 h-5 mr-2" />
                Ver Nossos Cases
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
