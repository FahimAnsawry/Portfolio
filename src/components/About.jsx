import { m } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import AccentLine from './AccentLine';

const highlights = [
  'React, Next.js, and TypeScript on the frontend',
  'Node.js, Express, PostgreSQL, and MongoDB on the backend',
  'REST APIs, real-time sync, and authentication',
  'Complete features from start to finish',
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">

          {/* Left: Text content */}
          <div>
            <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
              I build the whole thing from UI to database
            </h1>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
              I'm a full-stack developer who builds web applications with React, Next.js, and TypeScript on the front, and Node.js, FastAPI, or Laravel on the back — backed by PostgreSQL or MongoDB. I focus on writing clean code, designing good APIs, and making sure things work smoothly in production.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
              I have built dashboards, authentication systems, REST APIs, and the everyday features that keep applications running. If it needs a frontend and a database working together, I can build it.
            </p>
          </div>

          {/* Right: "Why work with me?" card */}
          <div
            className="glow-card rounded-[2rem] p-10 md:p-12 relative border"
            style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
          >
            <h2 className="text-2xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
              Why work with me?
            </h2>
            <ul className="flex flex-col gap-8">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-center gap-5">
                  {/* Checks tick in one by one; the text never waits on them */}
                  <m.div
                    className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center"
                    aria-hidden="true"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)' }}
                    initial={{ scale: 0.4 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <FiCheckCircle size={18} style={{ color: 'var(--color-primary)' }} />
                  </m.div>
                  <span className="font-semibold text-[15px] md:text-base" style={{ color: 'var(--color-foreground)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <AccentLine />
    </section>
  );
}
