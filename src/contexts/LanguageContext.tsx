import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'zh' | 'en'

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'zh',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) ?? 'zh'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggle = () => setLang(v => (v === 'zh' ? 'en' : 'zh'))

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

export function t<T extends { zh: string; en: string }>(obj: T, lang: Lang): string {
  return obj[lang]
}
