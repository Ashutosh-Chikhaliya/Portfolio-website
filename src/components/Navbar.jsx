import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-scroll';

const NAV_LINKS = [
  { id: 'Home', label: 'Home' },
  { id: 'About-Me', label: 'About' },
  { id: 'Projects', label: 'Work' },
  { id: 'Skills', label: 'Skills' },
  { id: 'Resume', label: 'Resume' },
  { id: 'Contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [pillStyle, setPillStyle] = useState({});
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const linkRefs = useRef({});
  const { isDarkMode, toggleTheme } = useTheme();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update sliding pill position when active link changes
  const updatePill = useCallback(() => {
    const el = linkRefs.current[activeLink];
    const container = containerRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        width: `${elRect.width}px`,
        height: `${elRect.height}px`,
        transform: `translateX(${elRect.left - containerRect.left}px)`,
        opacity: 1,
      });
    }
  }, [activeLink]);

  useEffect(() => {
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [updatePill]);

  // Small delay on mount for initial pill render
  useEffect(() => {
    const t = setTimeout(updatePill, 100);
    return () => clearTimeout(t);
  }, [updatePill]);

  return (
    <header style={styles.header}>
      {/* Main glass bar */}
      <nav
        ref={navRef}
        style={{
          ...styles.nav,
          background: scrolled
            ? 'rgba(255,255,255,0.06)'
            : 'rgba(255,255,255,0.03)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.08)'
            : 'inset 0 1px 0 rgba(255,255,255,0.04)',
          borderColor: scrolled
            ? 'rgba(255,255,255,0.1)'
            : 'rgba(255,255,255,0.05)',
        }}
      >
        {/* Logo */}
        <Link
          to="Home"
          smooth
          duration={500}
          style={styles.logo}
          onClick={() => setActiveLink('Home')}
        >
          <span style={styles.logoText}>AC</span>
          <span style={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Links Container */}
        <div ref={containerRef} style={styles.linksContainer}>
          {/* Sliding glass pill indicator */}
          <div style={{ ...styles.pill, ...pillStyle }} />

          {/* Nav links */}
          {NAV_LINKS.map(({ id, label }) => (
            <span
              key={id}
              ref={el => { linkRefs.current[id] = el; }}
              style={{ display: 'inline-flex' }}
            >
              <Link
                to={id}
                spy
                smooth
                duration={500}
                offset={5}
                onSetActive={() => setActiveLink(id)}
                onClick={() => { setActiveLink(id); setMobileOpen(false); }}
                style={{
                  ...styles.navLink,
                  color: activeLink === id ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontWeight: activeLink === id ? 600 : 400,
                }}
              >
                {label}
              </Link>
            </span>
          ))}
        </div>

        {/* Right: theme toggle */}
        <div style={styles.rightSide}>
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            style={styles.themeBtn}
            aria-label="Toggle theme"
          >
            <div style={{
              ...styles.themeBtnInner,
              transform: isDarkMode ? 'rotate(0deg)' : 'rotate(180deg)',
            }}>
              {isDarkMode ? '🌙' : '☀️'}
            </div>
          </button>

          {/* Mobile burger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(v => !v)}
            style={styles.burger}
            aria-label="Menu"
          >
            <span style={{
              ...styles.burgerLine,
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              ...styles.burgerLine,
              opacity: mobileOpen ? 0 : 1,
              transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)',
            }} />
            <span style={{
              ...styles.burgerLine,
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown - liquid glass */}
      <div style={{
        ...styles.mobileMenu,
        transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? 'auto' : 'none',
        visibility: mobileOpen ? 'visible' : 'hidden',
      }}>
        {NAV_LINKS.map(({ id, label }) => (
          <Link
            key={id}
            to={id}
            spy
            smooth
            duration={500}
            offset={-80}
            onSetActive={() => setActiveLink(id)}
            style={{
              ...styles.mobileLink,
              ...(activeLink === id ? styles.mobileLinkActive : {}),
            }}
            onClick={() => { setActiveLink(id); setMobileOpen(false); }}
          >
            {activeLink === id && <span style={styles.mobileActiveDot} />}
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0.6rem 1rem',
  },
  nav: {
    position: 'relative',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0.5rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'saturate(180%) blur(24px)',
    WebkitBackdropFilter: 'saturate(180%) blur(24px)',
    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  logo: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1px',
    cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 800,
    fontSize: '1.2rem',
    letterSpacing: '-0.04em',
    flexShrink: 0,
    zIndex: 2,
  },
  logoText: {
    color: 'var(--text-primary)',
  },
  logoDot: {
    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '1.5rem',
  },
  linksContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  pill: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    pointerEvents: 'none',
    opacity: 0,
  },
  navLink: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.45rem 0.9rem',
    fontSize: '0.82rem',
    fontFamily: "'Inter', sans-serif",
    color: 'var(--text-muted)',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'color 0.3s ease, font-weight 0.3s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    zIndex: 1,
    letterSpacing: '-0.01em',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: 0,
    zIndex: 2,
  },
  themeBtn: {
    position: 'relative',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    cursor: 'pointer',
    width: '36px',
    height: '36px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
    overflow: 'hidden',
  },
  themeBtnInner: {
    fontSize: '1rem',
    lineHeight: 1,
    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  burger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    cursor: 'pointer',
    padding: '8px',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
  },
  burgerLine: {
    display: 'block',
    width: '18px',
    height: '2px',
    background: 'var(--text-primary)',
    borderRadius: '2px',
    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
    transformOrigin: 'center',
  },
  mobileMenu: {
    maxWidth: '900px',
    margin: '0.5rem auto 0',
    padding: '0.75rem',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'saturate(180%) blur(24px)',
    WebkitBackdropFilter: 'saturate(180%) blur(24px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  },
  mobileLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.75rem 1rem',
    fontSize: '0.92rem',
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    color: 'var(--text-muted)',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
    textDecoration: 'none',
  },
  mobileLinkActive: {
    color: 'var(--text-primary)',
    fontWeight: 600,
    background: 'rgba(255,255,255,0.08)',
  },
  mobileActiveDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
    boxShadow: '0 0 8px rgba(99,102,241,0.5)',
    flexShrink: 0,
  },
};

// Inject responsive CSS + hover effects
const navCSS = document.createElement('style');
navCSS.id = 'navbar-liquid-glass';
navCSS.textContent = `
  @media (max-width: 768px) {
    header > nav > div:nth-child(2) { display: none !important; }
    button[id="mobile-menu-toggle"] { display: flex !important; }
  }
  @media (min-width: 769px) {
    header > div:last-child { display: none !important; }
  }

  /* Light mode overrides */
  .light header > nav {
    background: rgba(255,255,255,0.55) !important;
    border-color: rgba(0,0,0,0.08) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6) !important;
  }
  .light header > nav > div:nth-child(2) > div:first-child {
    background: rgba(0,0,0,0.05) !important;
    border-color: rgba(0,0,0,0.06) !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5) !important;
  }
  .light header button[id="theme-toggle"] {
    background: rgba(0,0,0,0.04) !important;
    border-color: rgba(0,0,0,0.06) !important;
  }
  .light header button[id="mobile-menu-toggle"] {
    background: rgba(0,0,0,0.04) !important;
    border-color: rgba(0,0,0,0.06) !important;
  }
  .light header > div:last-child {
    background: rgba(255,255,255,0.65) !important;
    border-color: rgba(0,0,0,0.08) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.06) !important;
  }

  /* Hover effects */
  header button[id="theme-toggle"]:hover {
    background: rgba(255,255,255,0.12) !important;
    border-color: rgba(255,255,255,0.15) !important;
    transform: scale(1.05);
  }
  .light header button[id="theme-toggle"]:hover {
    background: rgba(0,0,0,0.08) !important;
    border-color: rgba(0,0,0,0.1) !important;
  }
`;
if (!document.getElementById('navbar-liquid-glass')) {
  document.head.appendChild(navCSS);
}

export default Navbar;
