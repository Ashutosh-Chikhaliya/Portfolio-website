import useScrollReveal from '../hooks/useScrollReveal';

// Flatten all skills into one big pool for a single mega-strip
const ALL_SKILLS = [
  { id: 1, name: 'JavaScript', icon: 'https://img.icons8.com/color/480/javascript--v1.png' },
  { id: 2, name: 'React', icon: 'https://img.icons8.com/ultraviolet/480/react--v1.png' },
  { id: 3, name: 'Node.js', icon: 'https://img.icons8.com/fluency/480/node-js.png' },
  { id: 4, name: 'CSS', icon: 'https://img.icons8.com/color/480/css3.png' },
  { id: 5, name: 'HTML', icon: 'https://img.icons8.com/color/480/html-5--v1.png' },
  { id: 6, name: 'Express', icon: 'https://img.icons8.com/color/480/express-js.png' },
  { id: 7, name: 'TailwindCSS', icon: 'https://img.icons8.com/color/480/tailwindcss.png' },
  { id: 8, name: 'Git', icon: 'https://img.icons8.com/color/480/git.png' },
  { id: 9, name: 'MongoDB', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/384/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png' },
  { id: 10, name: 'PHP', icon: 'https://img.icons8.com/officel/480/php-logo.png' },
  { id: 11, name: 'MySQL', icon: 'https://img.icons8.com/color/480/mysql-logo.png' },
  { id: 12, name: 'React Native', icon: 'https://img.icons8.com/ultraviolet/480/react--v1.png' },
  { id: 13, name: 'Expo', icon: 'https://img.icons8.com/color/480/expo.png' },
  { id: 14, name: 'Socket.IO', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg' },
  { id: 15, name: 'D3.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg' },
  { id: 16, name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { id: 17, name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
];

// Marquee strip — renders items 4x for seamless infinite loop on any screen size
const MarqueeStrip = ({ skills, direction = 'left', speed = 10 }) => {
  const items = [...skills, ...skills, ...skills, ...skills]; // 4x ensures always filled
  const animName = direction === 'left' ? 'marqueeLeft' : 'marqueeRight';

  return (
    <div style={styles.stripOuter}>
      {/* Fade edges */}
      <div style={{ ...styles.fadeEdge, left: 0, background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 100%)' }} />
      <div style={{ ...styles.fadeEdge, right: 0, background: 'linear-gradient(to left, var(--bg-primary) 0%, transparent 100%)' }} />

      <div
        style={{
          ...styles.stripTrack,
          animation: `${animName} ${speed}s linear infinite`,
        }}
        className="marquee-track"
      >
        {items.map((skill, i) => (
          <div key={`${skill.id}-${i}`} style={styles.chip}>
            <img
              src={skill.icon}
              alt={skill.name}
              style={styles.chipIcon}
              loading="lazy"
            />
            <span style={styles.chipName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  useScrollReveal();

  // Both rows use ALL skills — enough to fill any screen width
  return (
    <section className="section-wrapper" style={{ overflow: 'hidden' }}>
      <div className="section-container">
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring ideas to life - from pixels to databases.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="reveal">
        <MarqueeStrip skills={ALL_SKILLS} direction="left" speed={40} />
      </div>

      {/* Gap */}
      <div style={{ height: '1.25rem' }} />

      {/* Row 2 — scrolls right */}
      <div className="reveal reveal-delay-1">
        <MarqueeStrip skills={ALL_SKILLS} direction="right" speed={32} />
      </div>

      {/* Footnote */}
      <div className="section-container">
        <p className="reveal reveal-delay-2" style={styles.footnote}>
          * Honourable mentions: Claude, Google, Antigravity, Gemini and that one blog post from 2014 that still works.
        </p>
      </div>
    </section>
  );
};

const styles = {
  stripOuter: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    padding: '0.25rem 0',
  },
  fadeEdge: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '120px',
    zIndex: 2,
    pointerEvents: 'none',
  },
  stripTrack: {
    display: 'flex',
    gap: '0.85rem',
    width: 'max-content',
    willChange: 'transform',
  },
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.6rem 1.1rem',
    borderRadius: '9999px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    transition: 'border-color 0.2s ease, background 0.2s ease',
    cursor: 'default',
  },
  chipIcon: {
    width: '22px',
    height: '22px',
    objectFit: 'contain',
    flexShrink: 0,
  },
  chipName: {
    fontSize: '0.82rem',
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    color: 'var(--text-secondary)',
    letterSpacing: '-0.01em',
  },
  footnote: {
    marginTop: '3rem',
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
};

export default Skills;
