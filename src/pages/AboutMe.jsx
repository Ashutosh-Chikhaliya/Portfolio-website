import { useState, useRef } from 'react';
import ashutoshImg from '../assets/ashutosh.png';
import useScrollReveal from '../hooks/useScrollReveal';

const STATS = [
  { value: '5+', label: 'Projects Delivered' },
  { value: '2+', label: 'Years Experience' },
  { value: '3+', label: 'Tech Stacks' },
  { value: '∞', label: 'Cups of Coffee' },
  { value: '99%', label: 'Stack Overflow Tabs' },
];

/* Floating badges around the photo card */
const BADGES = [];

/* ── 3D Tilt Card component ── */
const TiltCard = () => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div style={styles.tiltWrapper}>
      {/* Ghost frame — depth layer */}
      <div style={{
        ...styles.ghostFrame,
        transform: hovered ? 'rotate(-2deg) translate(8px, 10px)' : 'rotate(-5deg) translate(14px, 14px)',
        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
      }} />

      {/* Main card */}
      <div
        ref={cardRef}
        style={{
          ...styles.card,
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'scale(1.03)' : 'scale(1)'}`,
          transition: hovered
            ? 'transform 0.12s ease-out, box-shadow 0.4s ease'
            : 'transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease',
          boxShadow: hovered
            ? '0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)'
            : '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shine that follows tilt */}
        <div style={{
          ...styles.shine,
          background: `radial-gradient(circle at ${50 + tilt.y * 5}% ${50 + tilt.x * 5}%, rgba(255,255,255,0.1) 0%, transparent 65%)`,
        }} />

        {/* Scan-line texture */}
        <div style={styles.scanlines} />

        {/* Photo */}
        <img src={ashutoshImg} alt="Ashutosh Chikhaliya" style={styles.photo} />

        {/* Bottom gradient */}
        <div style={styles.photoOverlay} />
      </div>
    </div>
  );
};

const getBadgePos = (b) => {
  const pos = {};
  if (b.top !== undefined) pos.top = b.top;
  if (b.bottom !== undefined) pos.bottom = b.bottom;
  if (b.left !== undefined) pos.left = b.left;
  if (b.right !== undefined) pos.right = b.right;
  return pos;
};

/* ── Main page ── */
const AboutMe = () => {
  useScrollReveal();

  return (
    <section className="section-wrapper" style={styles.section}>
      <div className="section-container">
        <div style={styles.grid}>

          {/* Left — text + stats */}
          <div style={styles.textCol}>
            <div className="reveal">
              <span className="section-label">Who I am</span>
              <h2 className="section-title">About Me</h2>
            </div>

            <p className="reveal reveal-delay-1" style={styles.para}>
              Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>Ashutosh Chikhaliya</strong> - a full-stack
              software engineer and freelancer who ships real products that real people use.
              (The clean code part takes a few Stack Overflow tabs, but we get there.)
            </p>
            <p className="reveal reveal-delay-2" style={styles.para}>
              I've built and deployed web and mobile applications using{' '}
              <span className="gradient-text" style={{ fontWeight: 600 }}>React, Node.js, React Native</span>{' '}
              for clients across agriculture, finance, and e-commerce - live apps with real users.
            </p>
            <p className="reveal reveal-delay-3" style={styles.para}>
              Got a product idea? I take it from zero to deployed - I promise I comment my code.
            </p>

            {/* Stats */}
            <div className="reveal reveal-delay-4" style={styles.statsGrid}>
              {STATS.map((s, i) => (
                <div key={i} className="glass-card" style={styles.statBox}>
                  <span className="gradient-text" style={styles.statValue}>{s.value}</span>
                  <span style={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D tilt card */}
          <div className="reveal" style={styles.imageCol}>
            <TiltCard />
          </div>

        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { paddingTop: '5rem', paddingBottom: '5rem' },

  grid: {
    display: 'flex',
    gap: '5rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  /* ── Image column ── */
  imageCol: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
  },

  tiltWrapper: {
    position: 'relative',
    width: '280px',
    margin: '32px',
  },

  rotatingRing: {
    position: 'absolute',
    inset: '-3px',
    borderRadius: '23px',
    background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #6366f1)',
    zIndex: 0,
    animation: 'spinRing 4s linear infinite',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  },

  ghostFrame: {
    position: 'absolute',
    inset: '3px',
    borderRadius: '18px',
    background: 'linear-gradient(135deg, rgba(99,102,241,0.35), rgba(168,85,247,0.35))',
    zIndex: 0,
    filter: 'blur(1px)',
  },

  card: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    zIndex: 1,
    cursor: 'crosshair',
    willChange: 'transform',
  },

  shine: {
    position: 'absolute',
    inset: 0,
    zIndex: 3,
    pointerEvents: 'none',
    borderRadius: '20px',
  },

  scanlines: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    pointerEvents: 'none',
    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)',
    borderRadius: '20px',
  },

  photo: {
    width: '100%',
    height: '370px',
    objectFit: 'cover',
    objectPosition: 'top center',
    display: 'block',
  },

  photoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45%',
    background: 'linear-gradient(to top, rgba(6,6,20,0.9) 0%, transparent 100%)',
    pointerEvents: 'none',
    zIndex: 2,
  },



  /* ── Text column ── */
  textCol: {
    flex: '1 1 340px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  para: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.8,
  },

  /* ── Stats ── */
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.85rem',
    marginTop: '0.5rem',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.1rem 0.5rem',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: 900,
    letterSpacing: '-0.03em',
    lineHeight: 1,
    marginBottom: '0.35rem',
  },
  statLabel: {
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
};

export default AboutMe;
