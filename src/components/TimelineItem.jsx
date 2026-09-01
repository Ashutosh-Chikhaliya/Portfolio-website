const TimelineItem = ({ item, isLast }) => {
  return (
    <div style={styles.wrapper}>
      {/* Connector line */}
      {!isLast && <div style={styles.line} />}

      {/* Dot */}
      <div style={styles.dotWrapper}>
        <div style={styles.dot} />
      </div>

      {/* Content */}
      <div className="reveal glass-card" style={styles.content}>
        <div style={styles.header}>
          <div>
            <h3 style={styles.role}>{item.role}</h3>
            <span style={styles.company}>{item.company}</span>
          </div>
          <div style={styles.metaRight}>
            <span style={styles.period}>{item.period}</span>
            <span style={styles.typeBadge}>{item.type}</span>
          </div>
        </div>
        <p style={styles.description}>{item.description}</p>
        {item.tags && (
          <div style={styles.tags}>
            {item.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    paddingLeft: '3rem',
    paddingBottom: '2rem',
  },
  line: {
    position: 'absolute',
    left: '13px',
    top: '26px',
    bottom: 0,
    width: '1px',
    background: 'linear-gradient(to bottom, var(--accent-1), transparent)',
  },
  dotWrapper: {
    position: 'absolute',
    left: 0,
    top: '6px',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'var(--accent-gradient)',
    boxShadow: '0 0 12px rgba(99,102,241,0.5)',
    border: '2px solid var(--bg-primary)',
  },
  content: {
    padding: '1.25rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  role: {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.2rem',
  },
  company: {
    fontSize: '0.88rem',
    color: 'var(--accent-1)',
    fontWeight: 500,
    fontFamily: 'var(--font-mono)',
  },
  metaRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.3rem',
  },
  period: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
  },
  typeBadge: {
    padding: '0.2rem 0.6rem',
    borderRadius: '9999px',
    background: 'rgba(99,102,241,0.1)',
    border: '1px solid rgba(99,102,241,0.2)',
    fontSize: '0.7rem',
    color: 'var(--accent-1)',
    fontFamily: 'var(--font-mono)',
  },
  description: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.7,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  },
};

export default TimelineItem;
