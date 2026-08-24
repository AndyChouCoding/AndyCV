import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LanguageContext'

interface NavbarProps {
  isDark: boolean
  onToggle: () => void
}

const navLinks = {
  zh: [
    { label: '關於', href: '#about' },
    { label: '經歷', href: '#experience' },
    { label: '作品', href: '#projects' },
    { label: '技能', href: '#skills' },
    { label: '學歷', href: '#education' },
    { label: '聯絡', href: '#contact' },
  ],
  en: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
}

export function Navbar({ isDark, onToggle }: NavbarProps) {
  const { lang, toggle: toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = navLinks[lang]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm border-b border-stone-200 dark:border-stone-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-display text-lg font-medium text-stone-900 dark:text-stone-50 tracking-tight hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          Andy Chou
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors tracking-wide"
            >
              {link.label}
            </button>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 hover:border-emerald-400 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-stone-500 dark:text-stone-400 transition-all duration-200"
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={onToggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-200 dark:border-stone-700 hover:border-emerald-400 dark:hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 text-stone-600 dark:text-stone-300"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs font-semibold tracking-widest px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400"
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>

          <button
            onClick={onToggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-3 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 border-b border-stone-100 dark:border-stone-800 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
