import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile, projects } from './data/resume'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <Experience />
        {projects.length > 0 && <Projects />}
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="section py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
