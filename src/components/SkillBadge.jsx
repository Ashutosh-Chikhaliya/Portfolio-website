import { useState } from 'react';

const SkillBadge = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.badge,
        borderColor: hovered ? 'var(--border-hover)' : 'var(--border-color)',
        background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 8px 24px rgba(99,102,241,0.15)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={skill.name}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        style={styles.icon}
        loading="lazy"
      />
      <span style={styles.label}>{skill.name}</span>
    </div>
  );
};

const styles = {
  badge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '1.25rem 1rem',
    borderRadius: '14px',
    border: '1px solid var(--border-color)',
    backdropFilter: 'blur(10px)',
    cursor: 'default',
    transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
    minWidth: '90px',
  },
  icon: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    textAlign: 'center',
    fontFamily: 'var(--font-mono)',
  },
};

export default SkillBadge;
