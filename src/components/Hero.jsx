import { m, useReducedMotion } from 'framer-motion';
import { LuArrowDownToLine } from 'react-icons/lu';
import { useState, useEffect } from 'react';

const roles = ["Full-Stack Developer"];
// Reserves the widest role's space so the line doesn't shift while typing
const longestRole = roles.reduce((a, b) => (b.length > a.length ? b : a));
// Shown without the typing loop when the visitor prefers reduced motion
const staticRole = roles[0];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const currentRole = roles[currentRoleIndex];
    let delay = isDeleting ? 40 : 100;
    let step;

    if (!isDeleting && currentText === currentRole) {
      delay = 2000;
      step = () => setIsDeleting(true);
    } else if (isDeleting && currentText === "") {
      step = () => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      };
    } else {
      step = () =>
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
    }

    const timeout = setTimeout(step, delay);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, reduceMotion]);

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">

      {/* Accent glow — blooms in behind content that is already painted */}
      <m.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">

        <p
          className="font-mono text-xl md:text-2xl font-medium mb-2"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          Hi, I am
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl uppercase font-bold mb-2 leading-none"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}
        >
          Fahim Ansary
        </h1>

        {/* Role */}
        <p
          className="font-mono text-lg md:text-xl font-semibold mb-6 max-w-full"
          style={{ color: 'var(--color-foreground)' }}
        >
          <span className="sr-only">I am a full-stack developer.</span>
          <span aria-hidden="true">
            I am a{' '}
            <span className="inline-grid text-left align-bottom" style={{ color: 'var(--color-primary)' }}>
              <span className="invisible col-start-1 row-start-1">{longestRole}|</span>
              <span className="col-start-1 row-start-1">
                {reduceMotion ? staticRole : currentText}
                {!reduceMotion && <span className="animate-pulse font-bold">|</span>}
              </span>
            </span>
          </span>
        </p>

        <p
          className="max-w-xl text-base md:text-lg leading-relaxed mb-10 px-2 text-pretty"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          I like building things from start to finish — the screens people click on and the server that makes them work. Most days that's React or Next.js up front, with Node.js, FastAPI, or Laravel behind it. Lately I've been hooked on real-time and AI tools, like a whiteboard where coding agents sketch right alongside you. I care about code that's easy to come back to, and features that just work.
        </p>

        <a
          href="/resume.pdf"
          download
          className="btn-resume inline-flex items-center gap-2.5 px-8 py-3.5 uppercase rounded-xl font-semibold text-base"
        >
          <LuArrowDownToLine size={18} className="download-icon" strokeWidth={2.5} aria-hidden="true" />
          Resume
        </a>

      </div>
    </section>
  );
}
