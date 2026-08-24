import { useEffect, useState } from 'react'
import { profile, projects } from '../data/resume'
import { useLang, t } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ITEMS_PER_PAGE = 3

export function Projects() {
  const { lang } = useLang()
  const ref = useScrollReveal()
  const [page, setPage] = useState(0)

  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE))

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1))
  }, [totalPages])

  const start = page * ITEMS_PER_PAGE
  const current = projects.slice(start, start + ITEMS_PER_PAGE)

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">
          {/* Section label */}
          <div className="reveal">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400 mb-2">
              03 / Projects
            </span>
            <div className="w-8 h-px bg-emerald-500 dark:bg-emerald-400" />
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-50 leading-snug mb-10">
              {lang === 'zh' ? '作品' : 'Projects'}
            </h2>

            <div className="flex flex-col gap-6 max-w-2xl">
              {current.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/60 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <div className="aspect-video overflow-hidden bg-stone-100 dark:bg-stone-900">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-display text-lg font-medium text-stone-900 dark:text-stone-50 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4 flex-1">
                      {t(project.description, lang)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-xs font-medium border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  aria-label="Previous page"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none"
                >
                  ‹
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      aria-label={`Page ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        i === page ? 'bg-emerald-500 dark:bg-emerald-400 w-5' : 'bg-stone-300 dark:bg-stone-600'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  aria-label="Next page"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none"
                >
                  ›
                </button>
              </div>
            )}

            {/* View all link */}
            <div className="mt-10">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                {lang === 'zh' ? '看全部作品' : 'View All Projects'}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
