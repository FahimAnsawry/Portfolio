import { motion } from 'framer-motion'
import { FiMonitor, FiServer, FiTool, FiShield } from 'react-icons/fi'
import { VscVscode } from 'react-icons/vsc'
import {
  SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiRedux, SiReactquery, SiFirebase,
  SiNodedotjs, SiExpress, SiMongodb,
  SiOpenai, SiClaude, SiPostman,
} from 'react-icons/si'
import AntigravityIcon from './icons/AntigravityIcon'

const groups = [
  {
    name: 'Frontend',
    icon: FiMonitor,
    items: [
      { name: 'HTML / CSS',      icon: SiHtml5,       color: '#e34f26' },
      { name: 'Tailwind CSS',    icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'JavaScript',      icon: SiJavascript,  color: '#f7df1e' },
      { name: 'React.js',        icon: SiReact,       color: '#61dafb' },
      { name: 'Next.js',         icon: SiNextdotjs,   color: '#ffffff' },
      { name: 'Firebase Auth',   icon: SiFirebase,    color: '#ffca28' },
      { name: 'Redux Toolkit',   icon: SiRedux,       color: '#764abc' },
      { name: 'TanStack Query',  icon: SiReactquery,  color: '#ff4154' },
    ],
  },
  {
    name: 'Backend',
    icon: FiServer,
    items: [
      { name: 'Node.js',    icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress,   color: '#ffffff' },
      { name: 'MongoDB',    icon: SiMongodb,   color: '#47A248' },
      { name: 'Zod',        icon: FiShield,    color: '#3068b7' },
    ],
  },
  {
    name: 'Tools',
    icon: FiTool,
    items: [
      { name: 'VS Code',     icon: VscVscode,      color: '#007acc' },
      { name: 'Antigravity', icon: AntigravityIcon, color: '#7C5CFF' },
      { name: 'Codex',       icon: SiOpenai,       color: '#10a37f' },
      { name: 'Claude Code', icon: SiClaude,       color: '#cc785c' },
      { name: 'Postman',     icon: SiPostman,      color: '#ff6c37' },
    ],
  },
]

function SkillCard({ skill, delay }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      className="rounded-2xl p-5 border bg-white dark:bg-[var(--color-card)] border-gray-200 dark:border-[var(--color-border)] flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(62,230,196,0.25)]"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `color-mix(in srgb, ${skill.color} 14%, transparent)` }}
      >
        <Icon size={30} color={skill.color} />
      </div>
      <div className="text-sm font-semibold text-center" style={{ color: 'var(--color-foreground)' }}>
        {skill.name}
      </div>
    </motion.div>
  )
}

export default function SkillsCards() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-5 max-w-3xl">

        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--color-primary)' }}>
            Skills
          </p>
          <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
            My skills
          </h3>
        </div>


        <div className="flex flex-col gap-14">
          {groups.map((group) => {
            const GroupIcon = group.icon
            return (
              <div key={group.name}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, transparent)' }}
                  >
                    <GroupIcon size={17} color="var(--color-primary)" />
                  </div>
                  <h4
                    className="text-xl font-bold uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
                  >
                    {group.name}
                  </h4>
                  <div
                    className="flex-1 h-[1px]"
                    style={{
                      background: 'linear-gradient(90deg, var(--color-border) 0%, transparent 100%)',
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.items.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} delay={i * 0.04} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
          opacity: 0.4,
        }}
      />
    </section>
  )
}
