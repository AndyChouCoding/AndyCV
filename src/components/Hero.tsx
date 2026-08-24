import { profile } from '../data/resume'
import { useLang, t } from '../contexts/LanguageContext'

export function Hero() {
  const { lang } = useLang()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 sm:pt-0 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-stone-50 dark:bg-stone-900" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-stone-900 dark:text-stone-50" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/5 dark:bg-emerald-400/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center animate-fade-up">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/30 dark:ring-emerald-400/30 shadow-xl shadow-emerald-500/10 dark:shadow-emerald-400/10">
              <img
                src="/avatar.png"
                alt={`${profile.nameZh} ${profile.nameEn}`}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-stone-50 dark:border-stone-900 rounded-full" />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-stone-900 dark:text-stone-50 leading-tight tracking-tight mb-3">
          {lang === 'zh' ? profile.nameZh : profile.nameEn}
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-2 tracking-widest uppercase font-medium">
          {lang === 'zh' ? profile.nameEn : profile.nameZh}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-12 bg-stone-300 dark:bg-stone-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
          <div className="h-px w-12 bg-stone-300 dark:bg-stone-700" />
        </div>

        {/* Title */}
        <p className="font-display italic text-xl md:text-2xl text-stone-600 dark:text-stone-300 mb-8">
          {t(profile.title, lang)}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-sm font-medium hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-stone-400 dark:text-stone-600">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-stone-400 to-transparent dark:from-stone-600 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
