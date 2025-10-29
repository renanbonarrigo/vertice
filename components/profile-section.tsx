"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, TrendingUp, Users, Zap, Award, Rocket } from "lucide-react"

export function ProfileSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      name: "Website & Landing Pages",
      icon: <Target className="w-6 h-6" />,
      description: "Design moderno com foco em conversão e experiência mobile",
    },
    {
      name: "Tráfego Pago",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Anúncios estratégicos em Meta, Google Ads, TikTok e LinkedIn",
    },
    {
      name: "CRM & Automação",
      icon: <Zap className="w-6 h-6" />,
      description: "Ferramentas de automação e nutrição de leads integradas",
    },
    {
      name: "Treinamento Comercial",
      icon: <Users className="w-6 h-6" />,
      description: "Capacitação para equipes com técnicas de fechamento",
    },
    {
      name: "Prospecção Ativa",
      icon: <Rocket className="w-6 h-6" />,
      description: "Estratégia outbound baseada em dados para acelerar vendas",
    },
    {
      name: "Análise de Performance",
      icon: <Award className="w-6 h-6" />,
      description: "Monitoramento de ROI e otimização contínua de resultados",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="profile" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Bio section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Quem Somos</h2>
            <div className="h-px w-20 bg-primary/50"></div>
            <p className="text-foreground leading-relaxed max-w-3xl">
              A New4 Marketing é uma agência criativa especializada em atração e conversão de leads. Desde 2021, já
              impactamos mais de 50 clientes, gerando mais de R$10 milhões em faturamento para nossos parceiros.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Transformamos ideias em estruturas digitais que vendem, combinando estratégia, branding, tráfego e
              capacitação comercial. Somos especialistas em marketing de vendas com atuação forte na captação de leads.
            </p>
          </motion.div>

          {/* Skills section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Nossas Especialidades</h2>
            <div className="h-px w-20 bg-primary/50"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg border border-border bg-background/50 hover:bg-muted/30 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Nossa Missão</h2>
            <div className="h-px w-20 bg-primary/50"></div>
            <p className="text-foreground leading-relaxed max-w-3xl">
              Transformar negócios em marcas digitais com estrutura completa: site ou landing page, tráfego pago, CRM,
              treinamento e prospecção integrada. Ser a ponte entre o digital e a performance comercial, gerando
              resultados reais e mensuráveis para os clientes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
