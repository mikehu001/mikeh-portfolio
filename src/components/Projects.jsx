import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="section">
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
              className={`block rounded-lg border border-slate-200 p-5 transition ${
                project.href ? 'hover:border-accent-600 hover:shadow-sm' : ''
              }`}
            >
              <h3 className="font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500"
                  >
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
