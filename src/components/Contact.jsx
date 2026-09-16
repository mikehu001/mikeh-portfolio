import { useState } from 'react'
import { profile, formspreeEndpoint } from '../data/resume'

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
    <section id="contact" className="section border-t border-slate-100">
      <h2 className="section-title">Contact</h2>

      {!formspreeEndpoint ? (
        <p className="text-sm leading-relaxed text-slate-600">
          The best way to reach me is by email at{' '}
          <a
            className="text-accent-600 hover:text-accent-700 hover:underline"
            href={`mailto:${profile.email}`}
          >
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
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-700 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p role="status" aria-live="polite" className="text-sm">
            {status === 'sent' && (
              <span className="text-green-700">Thanks — I'll be in touch.</span>
            )}
            {status === 'error' && (
              <span className="text-red-700">
                Something went wrong. Email me at{' '}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                .
              </span>
            )}
          </p>
        </form>
      )}
    </section>
  )
}
