# mikeh-portfolio

Personal portfolio site for Mike Huynh — built with Vite, React, and Tailwind CSS,
deployed to GitHub Pages at **https://mikehu001.github.io/mikeh-portfolio/**.

## Editing content

All copy lives in a single file: [`src/data/resume.js`](src/data/resume.js).
Edit it and the page updates — no component changes needed.

| Export | What it controls |
| --- | --- |
| `profile` | Name, title, location, summary, photo path, email, phone, social links |
| `experience` | The work history timeline |
| `projects` | Projects grid (hidden entirely while the array is empty) |
| `education` | Education list |
| `skills` | Grouped skills |
| `formspreeEndpoint` | Enables the contact form (see below) |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/mikeh-portfolio/
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

Requires Node 20.

## Remaining setup

### 1. Add the portrait

Save the photo to `public/assets/photo.jpg` (square crops best — it renders in a
112px circle). Until that file exists the hero shows an "MH" initials avatar, so
the site never renders broken.

### 2. Turn on GitHub Pages

In the repo on GitHub: **Settings → Pages → Build and deployment → Source**, and
choose **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` then
builds and publishes on every push to `main`.

### 3. Enable the contact form (optional)

The contact section currently shows an email link. To make it a real form:

1. Create a form at [formspree.io](https://formspree.io) using `mhuynh517@gmail.com`.
2. Paste the endpoint URL into `formspreeEndpoint` in `src/data/resume.js`.

The form component is already written — setting that one value swaps it in.

## Notes

- The phone number from the resume is intentionally **not** published. Set
  `profile.phone` in `src/data/resume.js` if you want it on the public page.
- `npm audit` reports two dev-only esbuild advisories. They affect the local dev
  server, not the built static site; clearing them requires Vite 8, which needs a
  newer Node than 20.9.
