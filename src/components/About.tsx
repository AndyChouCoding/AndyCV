import { profile, aboutFacts } from '../data/resume'
import { useLang, t } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const { lang } = useLang()
  const ref = useScrollReveal()

  const heading = {
    zh: <>你好，我是 Andy —<br /><span className="italic text-stone-500 dark:text-stone-400 font-normal">設計與工程的交集</span></>,
    en: <>Hi, I'm Andy —<br /><span className="italic text-stone-500 dark:text-stone-400 font-normal">Where Design Meets Engineering</span></>,
  }

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">
          {/* Section label */}
          <div className="reveal">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400 mb-2">
              01 / About
            </span>
            <div className="w-8 h-px bg-emerald-500 dark:bg-emerald-400" />
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-50 leading-snug mb-6">
              {heading[lang]}
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed max-w-prose">
              {t(profile.bio, lang)}
            </p>

            {/* Quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {aboutFacts.map((fact) => (
                <div key={fact.label.zh} className="border-l-2 border-emerald-500/30 dark:border-emerald-400/30 pl-4">
                  <dt className="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wide mb-1">{t(fact.label, lang)}</dt>
                  <dd className="text-sm font-medium text-stone-800 dark:text-stone-200">{t(fact.value, lang)}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
