import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

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

        <nav className="flex items-center gap-6 text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
          {['Home', 'About', 'Projects'].map(item => (
            <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="transition-colors"
              style={{ color: 'var(--color-muted-foreground)' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-foreground)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-muted-foreground)'}
            >{item}</a>
          ))}
        </nav>

        <div className="flex-1 flex justify-center md:justify-end gap-3">
          {[
            { Icon: FiGithub,   bg: '#181717', label: 'GitHub' },
            { Icon: FiLinkedin, bg: '#0A66C2', label: 'LinkedIn' },
            { Icon: FiTwitter,  bg: '#1DA1F2', label: 'Twitter' },
          ].map(({ Icon, bg, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--color-border)',
                color: 'var(--color-muted-foreground)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = bg;
                e.currentTarget.style.borderColor = bg;
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-muted-foreground)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
