import { skillGroups } from '../data/resume'
import { useLang, t } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Skills() {
  const { lang } = useLang()
  const ref = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">
          {/* Section label */}
          <div className="reveal">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400 mb-2">
              04 / Skills
            </span>
            <div className="w-8 h-px bg-emerald-500 dark:bg-emerald-400" />
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-50 leading-snug mb-10">
              {lang === 'zh' ? '專業技能' : 'Technical Skills'}
            </h2>

            <div className="space-y-8">
              {skillGroups.map((group, i) => (
                <div key={group.label.zh} className={`reveal reveal-delay-${Math.min(i + 2, 5)}`}>
                  <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-stone-400 dark:text-stone-500 mb-3">
                    {t(group.label, lang)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-400 hover:text-emerald-700 dark:hover:border-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
