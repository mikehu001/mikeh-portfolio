import { useState } from 'react'
import { profile } from '../data/resume'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <header className="section pb-8 pt-16 sm:pt-24">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        {photoFailed ? (
          <div
            aria-hidden="true"
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-accent-50 text-2xl font-semibold text-accent-600 ring-1 ring-slate-200"
          >
            {initials}
          </div>
        ) : (
          <img
            src={profile.photo}
            alt={profile.name}
            width="112"
            height="112"
            onError={() => setPhotoFailed(true)}
            className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-slate-200"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-slate-600">{profile.title}</p>
          <p className="mt-1 text-sm text-slate-500">{profile.location}</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <a
                className="text-accent-600 hover:text-accent-700 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            {profile.phone && (
              <li>
                <a
                  className="text-accent-600 hover:text-accent-700 hover:underline"
                  href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                >
                  {profile.phone}
                </a>
              </li>
            )}
            {profile.links.map((link) => (
              <li key={link.label}>
                <a
                  className="text-accent-600 hover:text-accent-700 hover:underline"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-10 border-l-2 border-slate-100 pl-5 text-base leading-relaxed text-slate-600">
        {profile.summary}
      </p>
    </header>
  )
}
