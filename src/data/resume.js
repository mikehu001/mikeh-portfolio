// ─────────────────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the portfolio.
// Values marked PLACEHOLDER are awaiting the real resume.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mike Huynh',
  title: 'PLACEHOLDER — professional title',
  location: 'PLACEHOLDER — city, state',
  // Drop your photo at public/assets/photo.jpg
  photo: 'assets/photo.jpg',
  summary:
    'PLACEHOLDER — a two or three sentence professional summary pulled from the top of your resume.',
  email: 'mhuynh517@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/mikehu001' },
    { label: 'LinkedIn', href: 'PLACEHOLDER' },
  ],
}

export const experience = [
  {
    role: 'PLACEHOLDER — job title',
    company: 'PLACEHOLDER — company',
    period: '2023 — Present',
    location: 'PLACEHOLDER',
    bullets: [
      'PLACEHOLDER — accomplishment bullet from your resume.',
      'PLACEHOLDER — accomplishment bullet from your resume.',
    ],
  },
]

export const projects = [
  {
    name: 'PLACEHOLDER — project name',
    description: 'PLACEHOLDER — one or two sentences on what it does.',
    tags: ['PLACEHOLDER'],
    href: null,
  },
]

export const education = [
  {
    school: 'PLACEHOLDER — school',
    credential: 'PLACEHOLDER — degree',
    period: 'PLACEHOLDER',
  },
]

export const skills = [
  { group: 'PLACEHOLDER — category', items: ['PLACEHOLDER'] },
]

// Set to a Formspree endpoint (https://formspree.io) to enable the contact
// form. While null, the contact section renders a mailto link instead.
export const formspreeEndpoint = null
