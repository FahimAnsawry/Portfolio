# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Fahim Ansary for full-time or contract full-stack roles. They scan quickly, decide whether to keep reading, and want proof of shipped work and a route to contact or the resume.

Secondary audiences (freelance and startup clients) are not a confirmed priority. Do not optimize the page for them at the expense of the recruiter path.

## Product Purpose

A personal portfolio site for Fahim Ansary, a full-stack developer. It introduces who he is, what he builds, showcases shipped work, and makes it easy to download the resume or get in touch.

Success: a recruiter understands within about 30 seconds that Fahim ships whole features (UI, API, and database), then reaches the resume, a project, or the contact form.

## Positioning

Fahim builds complete features end to end: React and Next.js on the front, Node, Express, and MongoDB on the back, with REST APIs and authentication. The differentiator is that one person owns the feature from interface to database and ships it working the way users expect. Copy and proof should show this full-stack ownership, not isolated frontend or backend skills.

## Operating Context

Visitors arrive from a resume, LinkedIn, or a recruiter message, usually on a laptop or phone. Many will skim on mobile, so the first viewport and the resume download must work at phone width.

## Capabilities and Constraints

- Sections: Hero (typing role animation), Projects (modal detail view), About, Skills, Contact (EmailJS form), Footer.
- Routes: Home, About, Projects.
- Light and dark themes, controlled by CSS variables.
- Stack: Vite, React 19, Tailwind CSS v4 (configured in `src/index.css`), Framer Motion, React Router v6, react-icons.
- Contact uses EmailJS, which requires client-side keys in `.env`.
- Resume is served from `public/Md_Thasan_Ansary_Fahim_Resume.pdf`.
- Project data is inline in `src/components/Projects.jsx`.

Terminology: "Full-stack developer" is the primary self-description. The role shown in the hero is "Full-Stack Developer". Do not use "MERN stack".

## Brand Commitments

- Name: Fahim Ansary, shown in uppercase display type in the hero.
- Positioning voice: first person, plain and direct, focused on clean code and features that work in production. Avoid hype.
- Stack claims must match real experience: React, Next.js, Node, Express, MongoDB, REST APIs, authentication.

## Evidence on Hand

- `public/Md_Thasan_Ansary_Fahim_Resume.pdf`: downloadable resume.
- AI Bridge: local proxy and real-time dashboard for AI coding tools. Live at https://ai-bridge-zag2.onrender.com, source at https://github.com/FahimAnsawry/Ai-Bridge. Screenshot at `public/projects/ai-bridge.png`.
- Project highlights and descriptions in `src/components/Projects.jsx`.

Absences: no testimonials, client logos, metrics, or case studies exist. Future work must not invent any of them.

## Product Principles

- Lead with shipped work and ownership, not a list of tools.
- Make the resume and contact paths obvious within the first viewport.
- Keep copy specific and first-person; claims must be provable from real projects.
- Work at phone width first; recruiters often review on mobile.
- Motion supports reading and orientation; it never delays access to content.

## Accessibility & Inclusion

Not yet established by the user. Default to the platform baseline: keyboard-operable navigation and modals, visible focus, sufficient contrast in both themes, and reduced-motion respect for the typing and entrance animations.
