import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'react-icons/si';
import { LuChartLine } from 'react-icons/lu';

const TECH = {
  node:     { name: 'Node.js',         Icon: SiNodedotjs,   color: '#5FA04E' },
  express:  { name: 'Express',         Icon: SiExpress,     color: '#FFFFFF' },
  socketio: { name: 'Socket.IO',       Icon: SiSocketdotio, color: '#FFFFFF' },
  mongodb:  { name: 'MongoDB',         Icon: SiMongodb,     color: '#47A248' },
  mongoose: { name: 'Mongoose',        Icon: SiMongoose,    color: '#880000' },
  passport: { name: 'Passport.js',     Icon: SiPassport,    color: '#34E27A' },
  react:    { name: 'React',           Icon: SiReact,       color: '#61DAFB' },
  tailwind: { name: 'Tailwind CSS 4',  Icon: SiTailwindcss, color: '#06B6D4' },
  tanstack: { name: 'TanStack Query',  Icon: SiReactquery,  color: '#FF4154' },
  framer:   { name: 'Framer Motion',   Icon: SiFramer,      color: '#0055FF' },
  recharts: { name: 'Recharts',        Icon: LuChartLine,   color: '#22C3E6' },
};

const PROJECTS = [
  {
    title: 'AI Bridge — Local Proxy & Dashboard for AI Coding Tools',
    description:
      'A local proxy that keeps your AI coding tools running smoothly — handles provider switching, key rotation, format translation, and token optimization, with a dashboard to see it all in real time.',
    image: '/projects/ai-bridge.png',
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

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const openProject = openIndex !== null ? PROJECTS[openIndex] : null;

  useEffect(() => {
    if (openProject) {
      const onKey = (e) => e.key === 'Escape' && setOpenIndex(null);
      window.addEventListener('keydown', onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [openProject]);

  return (
    <section id="projects" className="relative pt-[76px] md:pt-[108px] pb-24 md:pb-32 overflow-hidden">

      {/* Soft mint glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, color-mix(in srgb, var(--color-primary) 8%, transparent), transparent 70%)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">


        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl md:text-5xl font-bold uppercase text-center mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
        >
          Projects
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-xl mx-auto text-center text-base md:text-lg leading-relaxed mb-16"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          Stuff I've built. Write-ups and live links are on the way.
        </motion.p>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 + i * 0.08 }}
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
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Body */}
              <div className="px-6 pb-6 pt-2 flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(({ name, Icon, color }) => (
                    <span
                      key={name}
                      title={name}
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-md border"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-primary) 6%, transparent)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-muted-foreground)',
                      }}
                    >
                      <Icon size={12} style={{ color }} />
                      {name}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-lg font-bold uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
                >
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-auto pt-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip-btn-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest border"
                      style={{
                        backgroundColor: 'var(--color-primary)',
                        borderColor: 'var(--color-primary)',
                        color: 'var(--color-primary-foreground)',
                      }}
                    >
                      <FiExternalLink size={12} />
                      Live
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest border"
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                      }}
                    >
                      <FiGithub size={12} />
                      Code
                    </a>
                  )}
                  {project.fullDescription && (
                    <button
                      type="button"
                      onClick={() => setOpenIndex(i)}
                      className="chip-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest border cursor-pointer"
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                      }}
                    >
                      <FiArrowUpRight size={12} />
                      Details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom glow line */}
        <div
          className="mt-20 h-[1px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
            opacity: 0.4,
          }}
        />
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {openProject && (
          <motion.div
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
            role="dialog"
            aria-modal="true"
            aria-label={openProject.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border rounded-xl"
              style={{
                backgroundColor: 'var(--color-card)',
                borderColor: 'var(--color-border)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="modal-close absolute top-7 right-7 md:top-9 md:right-9 z-10 w-7 h-7 rounded-full flex items-center justify-center border cursor-pointer"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-background) 70%, transparent)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-foreground)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <FiX size={14} />
              </button>

              {/* Image */}
              <div
                className="relative aspect-[16/9] overflow-hidden m-4 md:m-6 rounded-lg"
                style={{ backgroundColor: 'var(--color-background-alt)' }}
              >
                <img
                  src={openProject.image}
                  alt={`${openProject.title} screenshot`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {openProject.tags.map(({ name, Icon, color }) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-md border"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-primary) 6%, transparent)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-muted-foreground)',
                      }}
                    >
                      <Icon size={12} style={{ color }} />
                      {name}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-xl md:text-2xl font-bold uppercase tracking-wider leading-snug"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
                >
                  {openProject.title}
                </h3>

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
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Features
                    </p>
                    <ul className="flex flex-col gap-2">
                      {openProject.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {openProject.live && (
                    <a
                      href={openProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip-btn-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest border"
                      style={{
                        backgroundColor: 'var(--color-primary)',
                        borderColor: 'var(--color-primary)',
                        color: 'var(--color-primary-foreground)',
                      }}
                    >
                      <FiExternalLink size={12} />
                      Live
                    </a>
                  )}
                  {openProject.repo && (
                    <a
                      href={openProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest border"
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                      }}
                    >
                      <FiGithub size={12} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
