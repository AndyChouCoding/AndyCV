import { profile } from '../data/resume'
import { useLang } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Contact() {
  const { lang } = useLang()
  const ref = useScrollReveal()

  const copy = {
    heading: { zh: '聯絡我', en: 'Get In Touch' },
    subtitle: {
      zh: '對我的經歷感興趣，或有合作機會？歡迎隨時與我聯繫。',
      en: 'Interested in my background or have a collaboration opportunity? Feel free to reach out anytime.',
    },
    footer: { zh: '© 2025 周慶隆 Andy Chou', en: '© 2025 Andy Chou 周慶隆' },
  }

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">
          {/* Section label */}
          <div className="reveal">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400 mb-2">
              05 / Contact
            </span>
            <div className="w-8 h-px bg-emerald-500 dark:bg-emerald-400" />
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-50 leading-snug mb-4">
              {copy.heading[lang]}
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-base leading-relaxed mb-10 max-w-prose">
              {copy.subtitle[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-emerald-400 dark:hover:border-emerald-400 bg-white dark:bg-stone-800/60 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mb-0.5">Email</p>
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-emerald-400 dark:hover:border-emerald-400 bg-white dark:bg-stone-800/60 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-600 dark:text-emerald-400">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mb-0.5">GitHub</p>
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    @AndyChouCoding
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-400 dark:text-stone-600">
          {copy.footer[lang]}
        </p>
        <p className="text-xs text-stone-400 dark:text-stone-600">
          Built with React + Tailwind CSS
        </p>
      </div>
    </section>
  )
}
