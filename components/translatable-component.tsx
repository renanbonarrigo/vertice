"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function TranslatableComponent() {
  const { language, setLanguage } = useLanguage()

  const translations = {
    en: {
      greeting: "Hello from a translatable component!",
      description: "This text changes based on the selected language.",
      button: "Change Language",
    },
    es: {
      greeting: "¡Hola desde un componente traducible!",
      description: "Este texto cambia según el idioma seleccionado.",
      button: "Cambiar Idioma",
    },
    fr: {
      greeting: "Bonjour depuis un composant traduisible !",
      description: "Ce texte change en fonction de la langue sélectionnée.",
      button: "Changer de langue",
    },
  }

  const currentTranslation = translations[language as keyof typeof translations] || translations.en

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === "en") return "es"
      if (prev === "es") return "fr"
      return "en"
    })
  }

  return (
    <div className="p-6 border rounded-lg shadow-md text-center space-y-4">
      <h2 className="text-2xl font-bold text-foreground">{currentTranslation.greeting}</h2>
      <p className="text-muted-foreground">{currentTranslation.description}</p>
      <Button onClick={toggleLanguage}>{currentTranslation.button}</Button>
      <p className="text-sm text-gray-500">Current language: {language.toUpperCase()}</p>
    </div>
  )
}
