import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="card">
      <h2 className="section-title">Skills</h2>
      <dl className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.group}>
            <dt className="text-sm font-semibold text-slate-900">{skill.group}</dt>
            <dd className="mt-2.5">
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
