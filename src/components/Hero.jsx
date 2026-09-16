import { useState } from 'react'
import { profile } from '../data/resume'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <header className="relative overflow-hidden">
      {/* Decorative backdrop: soft gradient wash plus two blurred accent blobs. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent-50 via-slate-50 to-slate-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-32 -z-10 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 -z-10 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl"
      />

      <div className="shell animate-fade-up pb-14 pt-20 sm:pb-16 sm:pt-28">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-9">
          {photoFailed ? (
            <div
              aria-hidden="true"
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-2xl font-semibold text-white shadow-lift ring-4 ring-white"
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
              className="h-28 w-28 shrink-0 rounded-full object-cover shadow-lift ring-4 ring-white"
            />
          )}

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {profile.name}
            </h1>
            <p className="gradient-text mt-1.5 text-lg font-medium">
              {profile.title}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-slate-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a5.5 5.5 0 0 0-5.5 5.5c0 3.6 4.2 8.5 5.1 9.5a.55.55 0 0 0 .8 0c.9-1 5.1-5.9 5.1-9.5A5.5 5.5 0 0 0 10 2Zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                  clipRule="evenodd"
                />
              </svg>
              {profile.location}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              <li>
                <a className="chip" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              {profile.phone && (
                <li>
                  <a
                    className="chip"
                    href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                  >
                    {profile.phone}
                  </a>
                </li>
              )}
              {profile.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="chip"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="ml-1 h-3 w-3"
                    >
                      <path
                        d="M7 13l6-6M8 7h5v5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-9 max-w-2xl border-l-2 border-accent-300 pl-5 text-base leading-relaxed text-slate-600">
          {profile.summary}
        </p>
      </div>
    </header>
  )
}
