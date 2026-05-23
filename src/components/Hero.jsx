import { motion } from 'framer-motion';
import { LuArrowDownToLine } from 'react-icons/lu';
import { useState, useEffect } from 'react';

const roles = ["Fullstack Developer", "MERN Stack Developer"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100;
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.35,
        }} />
        {/* Purple glow centered */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 70%)',
        }} />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">

        {/* Hi, I am */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-xl md:text-2xl font-medium mb-2"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          Hi, I am
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl uppercase font-bold mb-2 leading-none"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}
        >
        Fahim Ansary
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="text-lg md:text-xl font-semibold mb-6 flex justify-center items-center gap-2 h-8"
          style={{ color: 'var(--color-foreground)' }}
        >
          I am a{' '}
          <span
            style={{
              color: 'var(--color-primary)',
              fontSize: 'inherit',
              fontWeight: 'inherit',
            }}
          >
            {currentText}
          </span>
          <span
            className="animate-pulse"
            style={{
              color: 'var(--color-primary)',
              fontSize: 'inherit',
              fontWeight: 'bold',
            }}
          >
            |
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.29 }}
          className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed mb-10 px-2 text-justify sm:text-center"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          I build web apps end-to-end — React and Next.js on the front, Node, Express, and MongoDB on the back. I like writing code that's easy to read six months later, and shipping features that actually work the way users expect.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="btn-resume inline-flex items-center gap-2.5 px-8 py-3.5 uppercase rounded-xl font-semibold text-base"
          >
            <LuArrowDownToLine size={18} className="download-icon" strokeWidth={2.5} />
            Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
