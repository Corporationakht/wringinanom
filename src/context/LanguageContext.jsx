import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('dewi-anom-lang') || 'id'
    } catch {
      return 'id'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('dewi-anom-lang', lang)
    } catch { /* silent */ }
  }, [lang])

  const toggleLang = () => setLang(prev => (prev === 'id' ? 'en' : 'id'))
  const t = (obj) => obj[lang] || obj['id']

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
