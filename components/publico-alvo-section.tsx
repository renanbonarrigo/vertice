"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Users, Target, Briefcase, TrendingUp } from "lucide-react"
import { Store, Rocket, HeartHandshake } from "lucide-react"

export function PublicoAlvoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Updated cards to a broader, less generic set (5 items), matching the provided reference
  const cards = [
    {
      icon: Briefcase,
      title: "Profissionais Liberais",
      description:
        "Médicos, advogados, dentistas, arquitetos e outros que buscam mais clientes e reconhecimento online.",
    },
    {
      icon: Store,
      title: "Pequenas e Médias Empresas",
      description:
        "Comércios locais, prestadores de serviço e indústrias que querem expandir sua presença digital e vendas.",
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Novos negócios que precisam de estratégias de marketing ágeis para escalar e conquistar mercado.",
    },
    {
      icon: HeartHandshake,
      title: "Empreendedores Digitais",
      description: "Infoprodutores, e-commerces e criadores de conteúdo que buscam otimizar funis de venda e tráfego.",
    },
    {
      icon: Building2,
      title: "Grandes Empresas",
      description: "Corporações que necessitam de otimização de campanhas e análise de dados para alta performance.",
    },
  ]

  const objetivos = [
    { icon: <Target className="w-6 h-6" />, text: "Atrair leads qualificados" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Aumentar taxas de conversão e vendas" },
    { icon: <Briefcase className="w-6 h-6" />, text: "Fortalecer a marca com prova social" },
    { icon: <Users className="w-6 h-6" />, text: "Otimizar processos internos de vendas" },
    { icon: <Building2 className="w-6 h-6" />, text: "Maximizar o ROI de tráfego pago" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Section header (kept structure, updated title content) */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10 space-y-16"
      >
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <Target className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-lg font-bold text-primary">Público-Alvo</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black leading-tight">
            <span className="text-foreground">Para Quem </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-new-green-400">
              Atendemos?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nossas soluções são desenhadas para diversos perfis de negócios que buscam crescimento real.
          </p>
        </motion.div>

        {/* Updated 5-card grid to match the reference style */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-[rgba(12,14,18,0.75)] backdrop-blur-sm p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-new-green-500/20 text-new-green-400 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">{card.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* The following sections remain UNCHANGED as requested */}
        {/* Objetivos Estratégicos */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Objetivos Estratégicos</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos objetivos são claros e focados em resultados mensuráveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {objetivos.map((objetivo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="text-emerald-400 mb-4 flex justify-center">{objetivo.icon}</div>
                <p className="text-sm font-medium text-foreground">{objetivo.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proposta de Valor */}
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Nossa Proposta de Valor</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
              <h4 className="text-lg font-bold text-emerald-400 mb-3">Solução Integrada</h4>
              <p className="text-sm text-muted-foreground">Marketing digital + estrutura comercial completa</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <h4 className="text-lg font-bold text-blue-400 mb-3">Suporte Humano</h4>
              <p className="text-sm text-muted-foreground">Capacitação contínua e acompanhamento personalizado</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <h4 className="text-lg font-bold text-purple-400 mb-3">Foco em ROI</h4>
              <p className="text-sm text-muted-foreground">Resultados práticos e retorno sobre investimento</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
              <h4 className="text-lg font-bold text-orange-400 mb-3">Realidade do Cliente</h4>
              <p className="text-sm text-muted-foreground">Conteúdo e execução alinhados ao seu negócio</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
