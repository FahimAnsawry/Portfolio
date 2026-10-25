import { FiCode, FiMonitor, FiServer, FiTool, FiShield } from 'react-icons/fi'
import { VscVscode } from 'react-icons/vsc'
import {
  SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiRedux, SiReactquery, SiFirebase,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiPython, SiFastapi, SiSqlalchemy, SiLaravel, SiSocketdotio, SiModelcontextprotocol,
  SiOpenai, SiClaude, SiPostman,
} from 'react-icons/si'
import AntigravityIcon from './icons/AntigravityIcon'
import TanstackIcon from './icons/TanstackIcon'
import AccentLine from './AccentLine'

// Monochrome marks follow the foreground; brand colors are toned per theme by .brand-icon
const groups = [
  {
    name: 'Languages',
    icon: FiCode,
    items: [
      { name: 'HTML / CSS', icon: SiHtml5,      color: '#e34f26' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Python',     icon: SiPython,     color: '#3776ab' },
      { name: 'SQL',        icon: SiPostgresql, color: '#4169e1' },
    ],
  },
  {
    name: 'Frontend',
    icon: FiMonitor,
    items: [
      { name: 'React.js',        icon: SiReact,       color: '#61dafb' },
      { name: 'Next.js',         icon: SiNextdotjs,   color: 'var(--color-foreground)' },
      { name: 'Tailwind CSS',    icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Redux Toolkit',   icon: SiRedux,       color: '#764abc' },
      { name: 'TanStack Query',  icon: SiReactquery,  color: '#ff4154' },
      { name: 'TanStack Router', icon: TanstackIcon,  color: '#ff4154' },
      { name: 'Firebase Auth',   icon: SiFirebase,    color: '#ffca28' },
    ],
  },
  {
    name: 'Backend',
    icon: FiServer,
    items: [
      { name: 'Node.js',    icon: SiNodedotjs,            color: '#339933' },
      { name: 'Express.js', icon: SiExpress,              color: 'var(--color-foreground)' },
      { name: 'MongoDB',    icon: SiMongodb,              color: '#47A248' },
      { name: 'Prisma',     icon: SiPrisma,               color: 'var(--color-foreground)' },
      { name: 'FastAPI',    icon: SiFastapi,              color: '#009688' },
      { name: 'SQLAlchemy', icon: SiSqlalchemy,           color: '#d71f00' },
      { name: 'Laravel',    icon: SiLaravel,              color: '#ff2d20' },
      { name: 'Socket.io',  icon: SiSocketdotio,          color: 'var(--color-foreground)' },
      { name: 'MCP',        icon: SiModelcontextprotocol, color: 'var(--color-foreground)' },
      { name: 'Zod',        icon: FiShield,               color: '#3068b7' },
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

function SkillItem({ skill }) {
  const Icon = skill.icon
  return (
    <li className="flex items-center gap-3" style={{ '--brand': skill.color }}>
      <div className="brand-pad w-9 h-9 shrink-0 rounded-lg flex items-center justify-center" aria-hidden="true">
        <Icon size={18} className="brand-icon" />
      </div>
      <span className="font-mono text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>
        {skill.name}
      </span>
    </li>
  )
}

function CategoryCard({ group }) {
  const GroupIcon = group.icon
  return (
    <div
      className="glow-card-sm rounded-2xl p-5 border flex flex-col"
      style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
    >
      <div className="flex items-center gap-3 pb-4 mb-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          aria-hidden="true"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, transparent)' }}
        >
          <GroupIcon size={17} color="var(--color-primary)" />
        </div>
        <h3
          className="text-lg font-bold uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
        >
          {group.name}
        </h3>
      </div>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
        {group.items.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  )
}

export default function SkillsCards() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-5 max-w-5xl">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
            My skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map((group) => (
            <CategoryCard key={group.name} group={group} />
          ))}
        </div>

      </div>

      <AccentLine />
    </section>
  )
}
