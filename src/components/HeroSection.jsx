import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const ROLES = [
  'Full-Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'Mobile App Developer',
  'Professional Bug Whisperer', // 🤫
  'Freelance Engineer',
];

const CODE_SNIPPET = `const engineer = {
  name: "Ashutosh Chikhaliya",
  focus: ["React", "Node.js", "Mobile"],
  available: true,
  fuelledBy: "chai > coffee (controversial)",
  bugsFixed: Infinity, // and counting
  passion: "building impactful products"
};`;

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(prev => prev + current[charIdx]);
          setCharIdx(i => i + 1);
        }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(prev => prev.slice(0, -1));
          setCharIdx(i => i - 1);
        }, 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, roleIdx]);

  return (
    <section style={styles.hero} id="hero">
      {/* Decorative orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.inner}>
        {/* Left: text content */}
        <div style={styles.textCol}>
          {/* Availability badge */}
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#22c55e' }}>
              Available for freelance
            </span>
          </div>

          <h1 style={styles.heading}>
            Hi, I'm{' '}
            <span className="gradient-text">Ashutosh</span>
            <br />
            Chikhaliya
          </h1>

          <div style={styles.roleRow}>
            <span style={styles.roleLabel}>&gt; </span>
            <span style={styles.roleText}>{displayed}</span>
            <span style={styles.cursor}>|</span>
          </div>

          <p style={styles.bio}>
            I build and ship real digital products - from pixel-perfect
            frontends to production back-end systems. Let's build something people actually use.
          </p>

          <div style={styles.ctaRow}>
            <Link to="Projects" smooth duration={500} offset={-80}>
              <button id="hero-view-work" className="btn-primary">
                View My Work
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </button>
            </Link>
            <Link to="Contact" smooth duration={500} offset={-80}>
              <button id="hero-hire-me" className="btn-outline">
                Hire Me
              </button>
            </Link>
          </div>

          {/* Social links */}
          <div style={styles.socials}>
            <a href="https://github.com/Ashutosh-Chikhaliya" target="_blank" rel="noopener noreferrer" style={styles.socialLink} title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-chikhaliya/" target="_blank" rel="noopener noreferrer" style={styles.socialLink} title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:ashutoshchikhaliya@gmail.com" style={styles.socialLink} title="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: code snippet card */}
        <div style={styles.codeCol}>
          <div style={styles.codeCard}>
            <div style={styles.codeHeader}>
              <div style={{ ...styles.trafficLight, background: '#ff5f57' }} />
              <div style={{ ...styles.trafficLight, background: '#febc2e' }} />
              <div style={{ ...styles.trafficLight, background: '#28c840' }} />
              <span style={styles.codeFileName}>engineer.js</span>
            </div>
            <pre style={styles.codePre}>{CODE_SNIPPET}</pre>
          </div>

          {/* Stats row */}
          <div style={styles.statsRow}>
            {[
              { value: '5+', label: 'Projects Built' },
              { value: '2+', label: 'Years Coding' },
              { value: '100%', label: 'Dedicated' },
            ].map((s, i) => (
              <div key={i} style={styles.statBox}>
                <span className="gradient-text" style={{ fontSize: '1.75rem', fontWeight: 800 }}>{s.value}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={styles.scrollIndicator}>
        <div style={styles.scrollLine} />
        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '7rem 2rem 4rem',
  },
  orb1: {
    position: 'absolute',
    top: '-15%',
    right: '-5%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  orb2: {
    position: 'absolute',
    bottom: '-10%',
    left: '-5%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  inner: {
    maxWidth: '1100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  textCol: {
    flex: '1 1 420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 1rem',
    background: 'rgba(34,197,94,0.1)',
    border: '1px solid rgba(34,197,94,0.25)',
    borderRadius: '9999px',
    width: 'fit-content',
  },
  badgeDot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22c55e',
    boxShadow: '0 0 8px #22c55e',
    animation: 'pulse-dot 2s ease-in-out infinite',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 900,
    letterSpacing: '-0.04em',
    lineHeight: 1.1,
    color: 'var(--text-primary)',
  },
  roleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    fontFamily: 'var(--font-mono)',
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: 'var(--text-secondary)',
  },
  roleLabel: {
    color: 'var(--accent-1)',
    marginRight: '0.5rem',
  },
  roleText: {
    color: 'var(--accent-2)',
  },
  cursor: {
    color: 'var(--accent-1)',
    animation: 'blink 1s step-end infinite',
    marginLeft: '1px',
  },
  bio: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.8,
    maxWidth: '480px',
  },
  ctaRow: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginTop: '0.25rem',
  },
  socialLink: {
    color: 'var(--text-muted)',
    transition: 'color 0.2s ease, transform 0.2s ease',
    display: 'flex',
    alignItems: 'center',
  },
  codeCol: {
    flex: '1 1 340px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  codeCard: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    overflow: 'hidden',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  codeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.75rem 1rem',
    borderBottom: '1px solid var(--border-color)',
    background: 'rgba(255,255,255,0.02)',
  },
  trafficLight: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
  codeFileName: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    marginLeft: '0.5rem',
  },
  codePre: {
    padding: '1.5rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.82rem',
    lineHeight: 1.7,
    color: 'var(--text-secondary)',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto',
  },
  statsRow: {
    display: 'flex',
    gap: '1rem',
  },
  statBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  scrollLine: {
    width: '1px',
    height: '40px',
    background: 'linear-gradient(to bottom, var(--accent-1), transparent)',
    animation: 'scrollBounce 1.5s ease-in-out infinite',
  },
};

// Inject keyframes
const heroStyle = document.createElement('style');
heroStyle.textContent = `
  @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
  @keyframes pulse-dot { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(1.4); } }
  @keyframes scrollBounce { 0%,100% { transform:scaleY(1); opacity:1; } 50% { transform:scaleY(0.6); opacity:0.4; } }
  #hero a.social-link:hover, #hero a[style*="socialLink"]:hover { color: var(--accent-1) !important; transform: translateY(-2px); }
`;
document.head.appendChild(heroStyle);

export default HeroSection;
