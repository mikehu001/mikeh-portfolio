import { skills, education } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <dl className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.group} className="sm:flex sm:gap-6">
            <dt className="w-40 shrink-0 text-sm font-medium text-slate-900">
              {skill.group}
            </dt>
            <dd className="mt-1 text-sm text-slate-600 sm:mt-0">
              {skill.items.join(' · ')}
            </dd>
          </div>
        ))}
      </dl>

      <h2 className="section-title mt-14">Education</h2>
      <ul className="space-y-4">
        {education.map((entry) => (
          <li
            key={entry.school}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span>
              <span className="font-medium text-slate-900">{entry.school}</span>
              <span className="text-slate-500"> · {entry.credential}</span>
            </span>
            {entry.period && (
              <span className="shrink-0 text-sm tabular-nums text-slate-400">
                {entry.period}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
