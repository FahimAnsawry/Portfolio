import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const highlights = [
  'React & Next.js on the frontend',
  'Node, Express & MongoDB on the backend',
  'REST APIs, auth, and database design',
  'Ships features end-to-end, not just the UI',
];

export default function About() {
  return (
    <section id="about" className="relative px-5   py-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto  max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
          
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-primary)' }}>
              About Me
            </p>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
              I build the whole thing — UI to database.
            </h2>
            <p className="mb-4 text-lg leading-relaxed tracking-tight" style={{ color: 'var(--color-muted-foreground)' }}>
              I'm a fullstack developer. I work mostly with React, Next.js, Node, Express, and MongoDB. I care about the parts most people skip — readable code, sensible APIs, and not breaking things in production.
            </p>
            <p className="text-lg leading-relaxed tracking-tight"  style={{ color: 'var(--color-muted-foreground)' }}>
              Dashboards, auth flows, REST APIs, the boring CRUD that holds an app together — I've built enough of these that I know where the sharp edges are. If it runs in a browser and talks to a database, I can ship it.
            </p>
          </motion.div>

          {/* Right: "Why work with me?" card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] p-10 md:p-12 relative group bg-white dark:bg-[var(--color-card)] border border-gray-200 dark:border-[var(--color-border)] shadow-[0_0_60px_-15px_rgba(62,230,196,0.08)] hover:shadow-[0_0_80px_-15px_rgba(62,230,196,0.25)] transition-all duration-500"
          >
            <h3 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Why work with me?
            </h3>
            <ul className="flex flex-col gap-8">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
                  className="flex items-center gap-5"
                >
                  <div 
                    className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(62, 230, 196, 0.15)' }} /* Slight mint/teal ring */
                  >
                    <FiCheckCircle size={18} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span className="font-semibold text-[15px] md:text-base text-gray-700 dark:text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Accent gradient divider line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
          opacity: 0.4,
        }}
      />
    </section>
  );
}
