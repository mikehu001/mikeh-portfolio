import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="card">
      <h2 className="section-title">Education</h2>
      <ul className="space-y-4">
        {education.map((entry) => (
          <li
            key={entry.school}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <span>
              <span className="font-semibold text-slate-900">{entry.school}</span>
              <span className="block text-sm text-slate-600 sm:inline sm:before:content-['_·_']">
                {entry.credential}
              </span>
            </span>
            {entry.period && (
              <span className="shrink-0 text-xs font-medium tabular-nums text-slate-500">
                {entry.period}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
