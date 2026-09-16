import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <ul className="space-y-4">
        {education.map((entry) => (
          <li
            key={entry.school}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span>
              <span className="font-medium text-slate-900">{entry.school}</span>
              <span className="text-slate-600"> · {entry.credential}</span>
            </span>
            {entry.period && (
              <span className="shrink-0 text-sm tabular-nums text-slate-500">
                {entry.period}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
