import { experiences } from '../data/resume'
import { useLang, t } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Experience() {
  const { lang } = useLang()
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-24 px-6 bg-stone-100/60 dark:bg-stone-800/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">
          {/* Section label */}
          <div className="reveal">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400 mb-2">
              02 / Experience
            </span>
            <div className="w-8 h-px bg-emerald-500 dark:bg-emerald-400" />
          </div>

          {/* Timeline */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-50 leading-snug mb-12">
              {lang === 'zh' ? '工作經歷' : 'Work Experience'}
            </h2>

            <div className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-200 dark:bg-stone-700" />

              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.id}
                    className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative pl-8`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] border-2 transition-colors ${
                      exp.isCurrent
                        ? 'bg-emerald-500 border-emerald-500 dark:bg-emerald-400 dark:border-emerald-400'
                        : exp.isPersonal
                        ? 'bg-stone-300 border-stone-300 dark:bg-stone-600 dark:border-stone-600'
                        : 'bg-stone-50 border-stone-400 dark:bg-stone-900 dark:border-stone-500'
                    }`} />

                    {/* Period */}
                    <time className="block text-xs font-medium tracking-wide text-stone-400 dark:text-stone-500 mb-1">
                      {exp.period}
                      {exp.isCurrent && (
                        <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                          {lang === 'zh' ? '現在' : 'Now'}
                        </span>
                      )}
                    </time>

                    {/* Title + Company */}
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                      <h3 className={`font-display text-lg font-medium leading-snug ${
                        exp.isPersonal
                          ? 'text-stone-500 dark:text-stone-400 italic'
                          : 'text-stone-900 dark:text-stone-50'
                      }`}>
                        {t(exp.title, lang)}
                      </h3>
                      <span className="text-sm text-stone-500 dark:text-stone-400">
                        @ {t(exp.company, lang)}
                      </span>
                    </div>

                    {/* Items */}
                    <ul className="space-y-2">
                      {exp.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-emerald-500/60 dark:bg-emerald-400/60 flex-shrink-0" />
                          {t(item, lang)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
