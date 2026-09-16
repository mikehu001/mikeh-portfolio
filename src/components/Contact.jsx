import { useState } from 'react'
import { profile, formspreeEndpoint } from '../data/resume'

const fieldClass =
  'mt-1.5 w-full rounded-lg border-0 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-accent-600'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      })
      if (!response.ok) throw new Error('Request failed')
      event.target.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="card relative overflow-hidden bg-gradient-to-br from-accent-50 to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-200/40 blur-3xl"
      />
      <div className="relative">
        <h2 className="section-title">Contact</h2>

        {!formspreeEndpoint ? (
          <p className="text-base leading-relaxed text-slate-600">
            The best way to reach me is by email at{' '}
            <a className="link font-medium" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            .
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input id="name" name="name" type="text" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea id="message" name="message" rows="5" required className={fieldClass} />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === 'sent' && (
                <span className="font-medium text-green-700">
                  Thanks — I'll be in touch.
                </span>
              )}
              {status === 'error' && (
                <span className="text-red-700">
                  Something went wrong. Email me at{' '}
                  <a className="link" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  .
                </span>
              )}
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
