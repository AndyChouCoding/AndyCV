import { useDarkMode } from './hooks/useDarkMode'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
        <Navbar isDark={isDark} onToggle={toggle} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
