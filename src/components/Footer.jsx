const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.divider} />
        <div style={styles.row}>
          <span style={styles.copy}>
            © {year}{' '}
            <span className="gradient-text" style={{ fontWeight: 700 }}>
              Ashutosh Chikhaliya
            </span>
            . Built with React, ❤️ &amp; mild sleep deprivation.
          </span>
          <div style={styles.socials}>
            <a href="https://github.com/Ashutosh-Chikhaliya" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-chikhaliya/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/ashutosh.chikhaliya/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 0 1.5rem',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(to right, transparent, var(--border-color), transparent)',
    marginBottom: '1.5rem',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copy: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialLink: {
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    fontFamily: 'var(--font-mono)',
  },
};

export default Footer;
