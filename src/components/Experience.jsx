import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold text-slate-900">
                {job.role}
                <span className="font-normal text-slate-500"> · {job.company}</span>
              </h3>
              <span className="shrink-0 text-sm tabular-nums text-slate-400">
                {job.period}
              </span>
            </div>
            {job.location && (
              <p className="mt-0.5 text-sm text-slate-400">{job.location}</p>
            )}
            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-sm leading-relaxed text-slate-600 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-slate-300"
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
