import { education } from '../data/resume'
import { useLang, t } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Education() {
  const { lang } = useLang()
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-24 px-6 bg-stone-100/60 dark:bg-stone-800/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">
          {/* Section label */}
          <div className="reveal">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400 mb-2">
              04 / Education
            </span>
            <div className="w-8 h-px bg-emerald-500 dark:bg-emerald-400" />
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-50 leading-snug mb-10">
              {lang === 'zh' ? '學歷' : 'Education'}
            </h2>

            <div className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/60 p-8 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent dark:from-emerald-400/10 rounded-bl-full" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-xl font-medium text-stone-900 dark:text-stone-50 mb-1">
                    {t(education.school, lang)}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 font-medium mb-1">
                    {t(education.department, lang)}・{t(education.degree, lang)}
                  </p>
                  <time className="text-sm text-stone-400 dark:text-stone-500">
                    {education.period}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
