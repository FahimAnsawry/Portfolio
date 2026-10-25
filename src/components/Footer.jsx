import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from './socialLinks';

const FOOTER_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="text-xl font-bold tracking-tighter mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
            Fahim<span style={{ color: 'var(--color-primary)' }}>.</span>
          </div>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
            &copy; {new Date().getFullYear()} Fahim Ansary. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-2 text-sm font-medium">
          {FOOTER_NAV.map(({ label, to }) => (
            <Link key={label} to={to} className="text-link min-h-11 px-2 flex items-center">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-center md:justify-end gap-3">
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-link w-11 h-11 rounded-lg flex items-center justify-center"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
