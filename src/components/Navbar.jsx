import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import AccentLine from './AccentLine';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn w-11 h-11 flex items-center justify-center rounded-full"
      aria-label={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    menuRef.current?.querySelector('a')?.focus();
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setIsMobileMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    // A tap anywhere outside the header closes the menu
    const onPointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        backgroundColor: 'var(--color-background)',
        transition: 'box-shadow 0.4s ease',
        boxShadow: isScrolled ? 'var(--shadow-header)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="min-h-11 flex items-center text-xl font-bold uppercase tracking-tighter z-50"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
        >
          Fahim<span style={{ color: 'var(--color-primary)' }}>.</span>
        </Link>

        {/* Right side: Nav + Toggle + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav aria-label="Main" className="flex items-center gap-6 text-sm font-medium">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                className="nav-link font-mono uppercase tracking-wider"
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <ThemeToggle />

          <Link
            to="/#contact"
            className="btn-hire px-5 py-2.5 text-sm font-semibold rounded-lg uppercase"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden z-50">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="icon-btn relative w-11 h-11 flex items-center justify-center rounded-full"
            style={{ color: 'var(--color-foreground)' }}
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
                  transition: 'opacity 200ms ease',
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

      <AccentLine opacity={0.5} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-label="Main"
          className="md:hidden absolute top-16 left-0 w-full py-4 px-6 flex flex-col gap-1"
          style={{ backgroundColor: 'var(--color-background)', boxShadow: 'var(--shadow-header)' }}
        >
          {NAV_ITEMS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className="nav-link min-h-11 flex items-center font-mono text-lg font-medium uppercase tracking-wider"
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/#contact"
            onClick={closeMenu}
            className="btn-hire mt-3 flex justify-center px-4 py-3 text-sm font-semibold rounded-lg text-center uppercase"
          >
            Hire Me
          </Link>
          <AccentLine opacity={0.5} />
        </nav>
      )}
    </header>
  );
}
