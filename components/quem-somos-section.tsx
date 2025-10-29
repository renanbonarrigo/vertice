"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, TrendingUp, Award, Target, Zap, Star } from "lucide-react"

export function QuemSomosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50+", label: "Clientes Impactados", color: "text-blue-400" },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "R$ 10M+",
      label: "Faturamento Gerado",
      color: "text-new-green-400",
    },
    { icon: <Award className="w-8 h-8" />, value: "2021", label: "Desde", color: "text-purple-400" },
    { icon: <Star className="w-8 h-8" />, value: "100%", label: "Foco em Resultados", color: "text-orange-400" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="quem-somos"
      className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-background to-primary/5"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-new-green-500 to-new-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <Target className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-lg font-bold text-primary">Quem Somos</span>
            </div>
            
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Description (photo removed) */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A <span className="text-new-green-400 font-bold">Vértice</span> é uma{" "}
                  <span className="text-white font-semibold">
                    agência criativa especializada em atração e conversão de leads
                  </span>
                  .
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desde <span className="text-new-green-400 font-bold">2021</span>, já impactamos mais de{" "}
                  <span className="text-white font-semibold">50 clientes</span>, gerando mais de{" "}
                  <span className="text-new-green-400 font-bold">R$10 milhões em faturamento</span> para nossos
                  parceiros.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="text-white font-semibold">
                    Transformamos ideias em estruturas digitais que vendem
                  </span>
                  , combinando estratégia, branding, tráfego e capacitação comercial.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos <span className="text-new-green-400 font-bold">especialistas em marketing de vendas</span> com{" "}
                  <span className="text-white font-semibold">atuação forte em captação de leads</span>.
                </p>
              </div>

              {/* Mission and Purpose */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-r from-new-green-500/20 to-new-green-500/20 border border-new-green-500/30">
                  <h3 className="text-xl font-bold text-new-green-400 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Nossa Missão
                  </h3>
                  <p className="text-foreground font-medium">
                    Transformar negócios em marcas digitais com estrutura completa: site ou landing page, tráfego pago,
                    CRM, treinamento e prospecção integrada.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Nosso Propósito
                  </h3>
                  <p className="text-foreground font-medium">
                    Ser a ponte entre o digital e a performance comercial, gerando resultados reais e mensuráveis para
                    os clientes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 rounded-2xl bg-background/50 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className={`${stat.color} mb-4 flex justify-center`}>{stat.icon}</div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Additional info */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-background/80 to-primary/10 border border-primary/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Especialidade</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-new-green-400"></div>
                    <span className="text-muted-foreground">Marketing de Vendas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-muted-foreground">Captação de Leads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-muted-foreground">Conversão Digital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-muted-foreground">Performance Comercial</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
