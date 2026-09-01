import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  const delay = `${(index % 4) * 0.08}s`;

  // Gradient accent per card index for visual variety
  const accents = [
    'linear-gradient(135deg, #6366f1, #a855f7)',
    'linear-gradient(135deg, #06b6d4, #6366f1)',
    'linear-gradient(135deg, #a855f7, #ec4899)',
    'linear-gradient(135deg, #10b981, #06b6d4)',
  ];
  const accent = accents[index % accents.length];

  return (
    <article
      className="reveal"
      style={{
        ...styles.card,
        transitionDelay: delay,
        '--card-accent': accent,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div style={{ ...styles.accentBar, background: accent, opacity: hovered ? 1 : 0.5 }} />

      {/* Thumbnail area */}
      <div style={styles.imgWrapper}>
        {project.thumbnail || project.image ? (
          <img
            src={project.thumbnail || project.image}
            alt={project.title}
            style={{
              ...styles.img,
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
            }}
            loading="lazy"
          />
        ) : (
          <div style={{ ...styles.imgPlaceholder, background: accent }}>
            <span style={{ fontSize: '2.5rem', filter: 'grayscale(0.2)' }}>🛠️</span>
          </div>
        )}

        {/* Dark gradient overlay for smooth blend */}
        <div style={styles.imgGradient} />

        {/* Category badge */}
        {project.category && (
          <div style={{ ...styles.categoryBadge, background: accent }}>
            {project.category}
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={styles.body}>
        {/* Title row */}
        <div style={styles.titleRow}>
          <h3 style={styles.title}>{project.title}</h3>
          <div style={styles.externalLinks}>
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={styles.iconBtn} title="GitHub">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={styles.iconBtn} title="Live">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={styles.desc} title={project.description}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={styles.tags}>
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span style={{ ...styles.tag, opacity: 0.5 }}>+{project.tags.length - 4}</span>
          )}
        </div>
      </div>
    </article>
  );
};

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: '18px',
    border: '1px solid var(--border-color)',
    background: 'var(--bg-card)',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
  },
  accentBar: {
    height: '3px',
    width: '100%',
    flexShrink: 0,
    transition: 'opacity 0.3s ease',
  },
  imgWrapper: {
    position: 'relative',
    width: '100%',
    height: '210px',
    overflow: 'hidden',
    background: 'var(--bg-secondary)',
    flexShrink: 0,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  imgPlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  imgGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    background: 'linear-gradient(to top, rgba(10,10,20,0.7) 0%, transparent 100%)',
    pointerEvents: 'none',
  },
  categoryBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '0.25rem 0.65rem',
    borderRadius: '9999px',
    fontSize: '0.65rem',
    fontFamily: "'Fira Code', monospace",
    fontWeight: 600,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },

  body: {
    padding: '1.25rem 1.4rem 1.4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
    flex: 1,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '0.75rem',
  },
  title: {
    fontSize: '1.02rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
    lineHeight: 1.3,
    flex: 1,
  },
  externalLinks: {
    display: 'flex',
    gap: '0.35rem',
    flexShrink: 0,
    marginTop: '2px',
  },
  iconBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-muted)',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  },
  desc: {
    fontSize: '0.86rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.35rem',
    marginTop: 'auto',
    paddingTop: '0.5rem',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.2rem 0.6rem',
    borderRadius: '6px',
    background: 'var(--bg-card-hover)',
    border: '1px solid var(--border-color)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.68rem',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    letterSpacing: '0.02em',
  },

};

// Card hover styles injected once
const cardStyle = document.createElement('style');
cardStyle.textContent = `
  article.reveal:hover {
    border-color: rgba(99,102,241,0.35) !important;
    transform: translateY(-6px) !important;
    box-shadow: 0 24px 48px rgba(0,0,0,0.35) !important;
  }
  article.reveal a[style*="iconBtn"]:hover {
    border-color: var(--accent-1) !important;
    color: var(--accent-1) !important;
    background: rgba(99,102,241,0.1) !important;
  }
`;
if (!document.getElementById('project-card-styles')) {
  cardStyle.id = 'project-card-styles';
  document.head.appendChild(cardStyle);
}

export default ProjectCard;
