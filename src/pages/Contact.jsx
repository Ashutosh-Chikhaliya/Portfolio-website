import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const SOCIALS = [
  {
    name: 'GitHub',
    href: 'https://github.com/Ashutosh-Chikhaliya',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: '@Ashutosh-Chikhaliya',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashutosh-chikhaliya/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'ashutosh-chikhaliya',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ashutosh.chikhaliya/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: '@ashutosh.chikhaliya',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919913677238',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
    label: '+91 99136 77238',
    color: '#25d366',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent'
  useScrollReveal();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Ashutosh,\n\nI'm ${form.name}.\n\n${form.message}`);
    window.open(`https://wa.me/919913677238?text=${text}`, '_blank');
    setStatus('sent');
    setForm({ name: '', message: '' });
  };

  return (
    <section className="section-wrapper">
      <div className="section-container">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind, a wild idea at 2am, or just want to say hi?
            My inbox is always open - and I actually reply.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Left — form */}
          <form
            className="reveal glass-card"
            style={styles.form}
            onSubmit={handleSubmit}
          >
            <div style={styles.fieldRow}>
              <div style={styles.fieldGroup}>
                <label style={styles.label} htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label} htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Tell me about your project, your idea, or literally anything (I'm easy to talk to)..."
                value={form.message}
                onChange={handleChange}
                rows={6}
                style={{ ...styles.input, resize: 'vertical', minHeight: '140px' }}
              />
            </div>
            <button
              id="contact-submit"
              type="submit"
              style={styles.waBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              {status === 'sent' ? '✓ WhatsApp Opened!' : 'Message on WhatsApp'}
            </button>
            {status === 'sent' && (
              <p style={{ fontSize: '0.82rem', color: '#25d366', fontFamily: 'var(--font-mono)' }}>
                WhatsApp opened with your message - just hit send!
              </p>
            )}
          </form>

          {/* Right — contact info + socials */}
          <div className="reveal reveal-delay-2" style={styles.infoCol}>
            <div style={styles.emailCard}>
              <span style={styles.emailLabel}>Direct Email</span>
              <a href="mailto:ashutoshchikhaliya@gmail.com" style={styles.emailAddress}>
                ashutoshchikhaliya@gmail.com
              </a>
            </div>

            <div style={styles.socialsList}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Find me on
              </span>
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialRow}
                >
                  <div style={{
                    ...styles.socialIcon,
                    background: s.color ? `${s.color}18` : 'rgba(99,102,241,0.1)',
                    border: `1px solid ${s.color ? `${s.color}30` : 'rgba(99,102,241,0.2)'}`,
                    color: s.color || 'var(--accent-1)',
                  }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{s.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
                  </div>
                  <svg style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  form: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    padding: '2rem',
  },
  fieldRow: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  fieldGroup: {
    flex: '1 1 180px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  waBtn: {
    alignSelf: 'flex-start',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    background: 'linear-gradient(135deg, #25d366, #128c7e)',
    color: '#fff',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  infoCol: {
    flex: '0 1 280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  emailCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    padding: '1.5rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
  },
  emailLabel: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  emailAddress: {
    fontSize: '0.92rem',
    color: 'var(--accent-1)',
    fontWeight: 600,
    wordBreak: 'break-all',
  },
  socialsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  socialRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    padding: '1rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'rgba(99,102,241,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent-1)',
    flexShrink: 0,
  },
};

// Focus styles for inputs
const contactStyle = document.createElement('style');
contactStyle.textContent = `
  input:focus, textarea:focus { border-color: var(--accent-1) !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
  a[style*="socialRow"]:hover { border-color: var(--border-hover) !important; background: var(--bg-card-hover) !important; transform: translateX(4px); }
`;
document.head.appendChild(contactStyle);

export default Contact;
