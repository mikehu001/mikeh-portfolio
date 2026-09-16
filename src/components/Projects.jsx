import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const Wrapper = project.href ? 'a' : 'div'
          const linkProps = project.href
            ? { href: project.href, target: '_blank', rel: 'noreferrer' }
            : {}
          return (
            <Wrapper
              key={project.name}
              {...linkProps}
              className={`block rounded-xl bg-slate-50 p-5 ring-1 ring-inset ring-slate-900/5 transition ${
                project.href ? 'hover:bg-white hover:shadow-card hover:ring-accent-200' : ''
              }`}
            >
              <h3 className="font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}
