import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="card">
      <h2 className="section-title">Experience</h2>
      <ol className="relative space-y-9">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="group relative pl-7"
          >
            {/* Timeline rail and node. */}
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-2.5 h-full w-px bg-slate-200 group-last:hidden"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-accent-400 ring-4 ring-accent-50 transition-colors group-hover:bg-accent-600"
            />

            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-semibold text-slate-900">
                {job.role}
                <span className="font-normal text-slate-500"> · {job.company}</span>
              </h3>
              <span className="shrink-0 text-xs font-medium tabular-nums text-slate-500">
                {job.period}
              </span>
            </div>

            {(job.note || job.location) && (
              <p className="mt-1 text-sm italic text-slate-500">
                {[job.note, job.location].filter(Boolean).join(' · ')}
              </p>
            )}

            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-4 text-sm leading-relaxed text-slate-600 before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-accent-300"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
