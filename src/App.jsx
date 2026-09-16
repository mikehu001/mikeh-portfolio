import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { profile } from './data/resume'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main>
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="section py-8 text-sm text-slate-400">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
