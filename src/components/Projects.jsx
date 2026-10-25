import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { m, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight, FiX } from 'react-icons/fi';
import {
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMongoose,
  SiPassport,
  SiReact,
  SiTailwindcss,
  SiReactquery,
  SiFramer,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiModelcontextprotocol,
  SiZod,
  SiBetterauth,
} from 'react-icons/si';
import { LuChartLine } from 'react-icons/lu';
import AccentLine from './AccentLine';
import PrismPreview from './previews/PrismPreview';

// Monochrome marks follow the foreground; brand colors are toned per theme by .brand-icon
const TECH = {
  node:     { name: 'Node.js',         Icon: SiNodedotjs,   color: '#5FA04E' },
  express:  { name: 'Express',         Icon: SiExpress,     color: 'var(--color-foreground)' },
  socketio: { name: 'Socket.IO',       Icon: SiSocketdotio, color: 'var(--color-foreground)' },
  mongodb:  { name: 'MongoDB',         Icon: SiMongodb,     color: '#47A248' },
  mongoose: { name: 'Mongoose',        Icon: SiMongoose,    color: '#C2413B' },
  passport: { name: 'Passport.js',     Icon: SiPassport,    color: '#34E27A' },
  react:    { name: 'React',           Icon: SiReact,       color: '#61DAFB' },
  tailwind: { name: 'Tailwind CSS 4',  Icon: SiTailwindcss, color: '#06B6D4' },
  tanstack: { name: 'TanStack Query',  Icon: SiReactquery,  color: '#FF4154' },
  framer:   { name: 'Framer Motion',   Icon: SiFramer,      color: '#0055FF' },
  recharts: { name: 'Recharts',        Icon: LuChartLine,   color: '#22C3E6' },
  typescript: { name: 'TypeScript',    Icon: SiTypescript,  color: '#3178C6' },
  postgres: { name: 'PostgreSQL',      Icon: SiPostgresql,  color: '#4169E1' },
  prisma:   { name: 'Prisma',          Icon: SiPrisma,      color: 'var(--color-foreground)' },
  mcp:      { name: 'MCP',             Icon: SiModelcontextprotocol, color: 'var(--color-foreground)' },
  zod:      { name: 'Zod',             Icon: SiZod,         color: '#3068B7' },
  betterauth: { name: 'Better Auth',   Icon: SiBetterauth,  color: 'var(--color-foreground)' },
};

const PROJECTS = [
  {
    title: 'Prism — Real-time Whiteboard Where AI Agents Draw With You',
    description:
      'A collaborative whiteboard and wireframing tool where AI coding agents like Claude Code and Codex join the board over MCP — drawing screens, ER diagrams, and mind maps, and reading designs back as code.',
    Preview: PrismPreview,
    tags: [
      TECH.react,
      TECH.typescript,
      TECH.tailwind,
      TECH.tanstack,
      TECH.node,
      TECH.express,
      TECH.socketio,
      TECH.mcp,
      TECH.postgres,
      TECH.prisma,
      TECH.betterauth,
      TECH.zod,
    ],
    live: 'https://prism-ai-app.onrender.com',
    repo: 'https://github.com/FahimAnsawry/Prism',
    fullDescription: [
      'Prism is a real-time whiteboard and wireframing tool built for working alongside AI. Coding agents connect over remote MCP, sign in through the browser, and edit the board as collaborators — sketching UI screens, ER diagrams, and mind maps, then reading frames back as code.',
      'The drawing engine is built from scratch in React and SVG — no canvas or drawing libraries. A React client and a Node server (Express, Socket.IO, MCP) share logic through a common package, and every element change flows through a single write path, so humans and agents always see the same board.',
    ],
    highlights: [
      'Full whiteboard toolkit — shapes, connectors, freehand, sticky notes, charts, mind maps, database tables, snapping, grouping, undo/redo, and PNG/PDF export.',
      'Live collaboration — real-time sync with presence and cursors, plus sharing by email invite, invite link, or read-only public link.',
      'AI agents as editors — 26 MCP tools and 3 prompts; select any element, hit "Ask AI", and an agent picks up the request.',
      'Design to code and back — agents build screens from layout trees or HTML + Tailwind and read frames back as nested code; themes export as CSS, JSON, or Dart.',
      'Schema export — ER diagrams export straight to Prisma, Postgres SQL, or Drizzle.',
      'Built-in design guidance — a design guide for agents plus linting for overflow, contrast, and text sizing.',
      'Secure by default — OAuth 2.1 for MCP, a single shared access check, per-user rate limits, SSRF protection, and SVG sanitization.',
    ],
  },
  {
    title: 'AI Bridge — Local Proxy & Dashboard for AI Coding Tools',
    description:
      'A local proxy that keeps your AI coding tools running smoothly — handles provider switching, key rotation, format translation, and token optimization, with a dashboard to see it all in real time.',
    image: {
      src: '/projects/ai-bridge-1600.webp',
      srcSet: '/projects/ai-bridge-960.webp 960w, /projects/ai-bridge-1600.webp 1600w',
      fallback: '/projects/ai-bridge.png',
      width: 1600,
      height: 775,
    },
    tags: [
      TECH.node,
      TECH.express,
      TECH.socketio,
      TECH.mongodb,
      TECH.mongoose,
      TECH.passport,
      TECH.react,
      TECH.tailwind,
      TECH.tanstack,
      TECH.framer,
      TECH.recharts,
    ],
    live: 'https://ai-bridge-zag2.onrender.com',
    repo: 'https://github.com/FahimAnsawry/Ai-Bridge',
    fullDescription: [
      'AI Bridge sits between your AI coding tools (Claude Code, Kilo Code, Continue, Cline) and the upstream LLM providers — Anthropic, OpenAI, OpenRouter — and quietly fixes the things that break flow: rate limits, provider outages, format mismatches between APIs, and runaway token bills.',
      'A real-time dashboard tracks total requests, tokens consumed, latency, error rate, model distribution, and a live request feed streamed over Socket.IO. You can leave it running in the background and trust that your tooling will keep working.',
    ],
    highlights: [
      'One bridge for every AI coding tool — works seamlessly with Claude Code, Cline, Roo Code, and Kilo Code without changing how they talk to AI.',
      'Connect any provider you want — Anthropic, OpenAI, GitHub Copilot, and any OpenAI-compatible API, all from one place.',
      'Speaks both languages fluently — translates between Anthropic and OpenAI formats on the fly, so tools built for one provider can use any of them.',
      'Never get rate-limited again — automatically rotates through your API keys when one hits a limit, so your work doesn\'t stop.',
      'Smart provider failover — if a model goes down or rejects a request, it quietly switches to the next provider you\'ve configured.',
      'Keeps token usage in check — trims oversized prompts and summarizes long conversations before they blow your token budget.',
      'Caches repeat responses — saves you money and time by reusing answers for identical requests.',
      'GitHub Copilot, unlocked — built-in Device Flow login lets you use your Copilot subscription through any tool that speaks Anthropic.',
      'Real-time dashboard — watch every request fly through live, with logs streamed over WebSockets.',
    ],
  },
];

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

const chipClass = 'inline-flex items-center gap-2 min-h-11 px-4 rounded-lg font-mono text-xs font-semibold uppercase tracking-widest border';

function TechTags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {tags.map(({ name, Icon, color }) => (
        <li
          key={name}
          className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-md border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 6%, transparent)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-muted-foreground)',
          }}
        >
          <Icon size={12} className="brand-icon" style={{ '--brand': color }} aria-hidden="true" />
          {name}
        </li>
      ))}
    </ul>
  );
}

function ProjectImage({ image, Preview, alt, lazy }) {
  // Illustrated previews are drawn in theme tokens instead of a static screenshot
  if (Preview) {
    return (
      <div role="img" aria-label={alt} className="w-full h-full">
        <Preview />
      </div>
    );
  }

  return (
    <picture className="block w-full h-full">
      <source type="image/webp" srcSet={image.srcSet} sizes="(min-width: 1024px) 720px, (min-width: 768px) 50vw, 100vw" />
      <img
        src={image.fallback}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={lazy ? 'lazy' : undefined}
        decoding="async"
        className="w-full h-full object-cover object-top"
      />
    </picture>
  );
}

function ProjectLinks({ project, onDetails, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`chip-btn-primary ${chipClass}`}
        >
          <FiExternalLink size={14} aria-hidden="true" />
          Live
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className={`chip-btn ${chipClass}`}
        >
          <FiGithub size={14} aria-hidden="true" />
          Code
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
      {onDetails && (
        <button
          type="button"
          onClick={onDetails}
          aria-haspopup="dialog"
          className={`chip-btn ${chipClass}`}
        >
          <FiArrowUpRight size={14} aria-hidden="true" />
          Details
        </button>
      )}
    </div>
  );
}

export default function Projects({ headingAs = 'h2' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const openProject = openIndex !== null ? PROJECTS[openIndex] : null;
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const Heading = headingAs === 'h1' ? 'h1' : 'h2';
  const TitleTag = headingAs === 'h1' ? 'h2' : 'h3';

  useEffect(() => {
    if (!openProject) return;
    const trigger = document.activeElement;
    closeButtonRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenIndex(null);
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      // Keep Tab focus inside the dialog
      const focusable = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // The dialog is portaled outside #root, so the whole page behind it can go inert
    const appRoot = document.getElementById('root');
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (appRoot) appRoot.inert = true;
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      if (appRoot) appRoot.inert = false;
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, [openProject]);

  return (
    <section id="projects" className="relative pt-[76px] md:pt-[108px] pb-24 md:pb-32 overflow-hidden">

      {/* Soft mint glow background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, color-mix(in srgb, var(--color-primary) 8%, transparent), transparent 70%)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <Heading
          className="text-4xl md:text-5xl font-bold uppercase text-center mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
        >
          Projects
        </Heading>

        {/* Subtitle */}
        <p
          className="max-w-xl mx-auto text-center text-base md:text-lg leading-relaxed mb-16"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          Stuff I've built. More write-ups are on the way.
        </p>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className="relative rounded-2xl border overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'var(--color-card)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Screenshot */}
              <div
                className="relative aspect-[16/9] overflow-hidden rounded-xl m-4"
                style={{ backgroundColor: 'var(--color-background-alt)' }}
              >
                {/* Screenshot settles into its frame as it scrolls in — visible throughout */}
                <m.div
                  className="w-full h-full"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectImage image={project.image} Preview={project.Preview} alt={`${project.title} preview`} lazy />
                </m.div>
              </div>

              {/* Body */}
              <div className="px-6 pb-6 pt-2 flex flex-col gap-3 flex-1">
                <TechTags tags={project.tags} />

                <TitleTag
                  className="text-lg font-bold uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
                >
                  {project.title}
                </TitleTag>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                  {project.description}
                </p>

                <ProjectLinks
                  project={project}
                  onDetails={project.fullDescription ? () => setOpenIndex(i) : undefined}
                  className="mt-auto pt-3"
                />
              </div>
            </article>
          ))}
        </div>

        <AccentLine className="mt-20 w-full" />
      </div>

      {/* Details Modal */}
      {createPortal(
        <AnimatePresence>
          {openProject && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-background) 70%, transparent)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              onClick={() => setOpenIndex(null)}
            >
              <m.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-dialog-title"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full max-w-3xl max-h-[90vh] supports-[height:100dvh]:max-h-[90dvh] overflow-y-auto border rounded-xl"
                style={{
                  backgroundColor: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                  boxShadow: 'var(--shadow-modal)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close project details"
                  className="modal-close absolute top-6 right-6 md:top-8 md:right-8 z-10 w-11 h-11 rounded-full flex items-center justify-center border"
                >
                  <FiX size={18} aria-hidden="true" />
                </button>

                {/* Image */}
                <div
                  className="relative aspect-[16/9] overflow-hidden m-4 md:m-6 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background-alt)' }}
                >
                  <ProjectImage image={openProject.image} Preview={openProject.Preview} alt={`${openProject.title} preview`} />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col gap-5">
                  <TechTags tags={openProject.tags} />

                  <h2
                    id="project-dialog-title"
                    className="text-xl md:text-2xl font-bold uppercase tracking-wider leading-snug"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
                  >
                    {openProject.title}
                  </h2>

                  <div className="flex flex-col gap-3">
                    {openProject.fullDescription.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {openProject.highlights && (
                    <div className="flex flex-col gap-2">
                      <h3
                        className="font-mono text-xs font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Features
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {openProject.highlights.map((h, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm leading-relaxed"
                            style={{ color: 'var(--color-muted-foreground)' }}
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              aria-hidden="true"
                              style={{ backgroundColor: 'var(--color-primary)' }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ProjectLinks project={openProject} className="pt-2" />
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
