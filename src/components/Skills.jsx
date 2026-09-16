import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <dl className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.group} className="sm:flex sm:gap-6">
            <dt className="w-48 shrink-0 text-sm font-medium text-slate-900">
              {skill.group}
            </dt>
            <dd className="mt-1 text-sm text-slate-600 sm:mt-0">
              {skill.items.join(' · ')}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
