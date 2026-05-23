import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkColor = (isActive) =>
    isActive ? 'var(--color-foreground)' : 'var(--color-muted-foreground)';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        backgroundColor: 'var(--color-background)',
        transition: 'box-shadow 0.4s ease',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold uppercase tracking-tighter z-50"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
        >
          Fahim<span style={{ color: 'var(--color-primary)' }}>.</span>
        </Link>

        {/* Right side: Nav + Toggle + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                className="uppercase tracking-wider transition-colors"
                style={({ isActive }) => ({ color: linkColor(isActive) })}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-foreground)')}
                onMouseLeave={e => {
                  const active = e.currentTarget.getAttribute('aria-current') === 'page';
                  e.currentTarget.style.color = linkColor(active);
                }}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors"
            style={{ color: 'var(--color-muted-foreground)' }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <Link
            to="/#contact"
            className="btn-hire px-5 py-2 text-sm font-semibold rounded-lg uppercase"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors"
            style={{ color: 'var(--color-muted-foreground)' }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="relative w-11 h-11 flex items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2"
            style={{
              color: 'var(--color-foreground)',
              '--tw-ring-color': 'var(--color-primary)',
            }}
          >
            <span className="relative block w-6 h-[14px]" aria-hidden="true">
              <span
                className="absolute left-0 top-0 h-[2px] rounded-full"
                style={{
                  width: '100%',
                  backgroundColor: 'currentColor',
                  transformOrigin: 'center',
                  transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), top 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  top: isMobileMenuOpen ? '6px' : '0',
                  transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none',
                }}
              />
              <span
                className="absolute right-0 top-[6px] h-[2px] rounded-full"
                style={{
                  width: '60%',
                  backgroundColor: 'currentColor',
                  transition: 'opacity 200ms ease, width 250ms ease',
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute left-0 bottom-0 h-[2px] rounded-full"
                style={{
                  width: '100%',
                  backgroundColor: 'currentColor',
                  transformOrigin: 'center',
                  transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), bottom 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  bottom: isMobileMenuOpen ? '6px' : '0',
                  transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'none',
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Purple gradient glow line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
          opacity: 0.5,
        }}
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 w-full py-6 px-6 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          {NAV_ITEMS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium uppercase tracking-wider transition-colors"
              style={({ isActive }) => ({ color: linkColor(isActive) })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-hire mt-2 flex justify-center px-4 py-3 text-sm font-semibold rounded-lg text-center"
          >
            Hire Me
          </Link>
          {/* Purple glow line at bottom of mobile menu */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
              opacity: 0.5,
            }}
          />
        </div>
      )}
    </header>
  );
}
