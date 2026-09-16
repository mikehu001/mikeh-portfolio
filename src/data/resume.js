// ─────────────────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the portfolio.
// Source: "Mike Huynh Resume.pdf"
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mike Huynh',
  title: 'Senior Front-End Software Engineer',
  location: 'San Bruno, CA',
  // Replace public/assets/photo.jpg to change the portrait. If the file is
  // missing, the hero falls back to an initials avatar.
  photo: 'assets/photo.jpg',
  summary:
    'Front-end engineer building interactive web applications that turn machine learning and research output into interfaces people can actually use. I work in React, Next.js, and TypeScript, and care about accessible, well-tested products shipped alongside designers, researchers, and backend teams.',
  email: 'mhuynh517@gmail.com',
  // Your resume lists 415-216-5934. It is left off the public site by default —
  // a phone number on a public page attracts spam. Set it to the string to show it.
  phone: null,
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mikehuynh28' },
    { label: 'GitHub', href: 'https://github.com/mikehu001' },
  ],
}

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Infocusp',
    period: 'Nov 2024 — Present',
    note: "@ Alphabet's X moonshot factory",
    location: null,
    bullets: [
      'Collaborate with research scientists and ML/AI engineers on the Investigative team to prototype and productionize experimental ideas into interactive, scalable web applications.',
      'Develop and maintain Next.js and Tailwind CSS applications, translating complex machine learning and research output into intuitive, user-friendly interfaces.',
      'Partner with cross-functional teams to design data visualization and experiment dashboards that communicate insights effectively.',
      'Integrate Python-based ML/AI model services with front-end systems through REST APIs.',
      'Contribute to rapid prototyping cycles, helping validate hypotheses and accelerate project timelines from concept to demo.',
      'Collaborate with UX designers and researchers to align technical implementation with experimental goals and user experience standards.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Forma',
    period: 'Mar 2022 — Feb 2024',
    note: null,
    location: null,
    bullets: [
      'Led front-end development to build a new product line in-house, replacing an unreliable legacy vendor. Scoped the functional requirements to integrate key sections such as Onboarding and Account Details into the web app, migrating 20 customers and over 8,000 users.',
      'Led the accessibility initiative that improved the app for impaired users and secured a key deal with a Fortune 500. Introduced axe-core and jest-axe to detect violations, resulting in a 90% accessibility grade from a third-party tester and special recognition from the client.',
      'Mentored new hires and led discussions on new technology.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Forma',
    period: 'May 2021 — Mar 2022',
    note: null,
    location: null,
    bullets: [
      'Implemented integration and unit testing with Jest and Nock, increasing test coverage from 0 to 80% of the application.',
      'Part of an on-call rotation for bug-fixing activities, addressing issues across all dashboards to ensure a smooth user experience.',
    ],
  },
  {
    role: 'Frontend Software Engineer II',
    company: 'Synapse Financial Technologies',
    period: 'Oct 2019 — Jul 2020',
    note: null,
    location: null,
    bullets: [
      'Maintained and implemented new features on the Admin dashboard.',
      'During the dashboard revamp, used Redux caching and an optimistic-updates strategy to reduce reliance on frequent API queries — cutting load times by nearly a second per Chrome Lighthouse and measurably smoothing the user experience.',
      'Volunteered to work on the backend toward the end of my tenure, learning Python to help develop their chatbot and completing the chatroom matching feature within a month.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: 'Jan 2017 — Jan 2019',
    note: null,
    location: null,
    bullets: [
      'Used JavaScript and jQuery to help build and maintain small business websites.',
    ],
  },
]

// No projects on the resume yet. Add entries here and the Projects section
// will appear automatically:
//   { name, description, tags: [], href: 'https://…' | null }
export const projects = []

export const education = [
  {
    school: 'San Francisco State University',
    credential: 'B.S. Business Administration, concentration in Finance',
    period: null,
  },
]

export const skills = [
  {
    group: 'Languages & Frameworks',
    items: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    group: 'Platform & Tools',
    items: ['MongoDB', 'Firebase', 'GCP', 'LaunchDarkly', 'CircleCI'],
  },
  {
    group: 'AI Development Tools',
    items: ['Google Antigravity', 'GitHub Copilot'],
  },
]

// To enable the contact form, create a form at https://formspree.io and paste
// its endpoint URL here. While null, the contact section shows an email link.
export const formspreeEndpoint = null
