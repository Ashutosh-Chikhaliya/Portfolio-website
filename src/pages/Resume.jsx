import TimelineItem from '../components/TimelineItem';
import useScrollReveal from '../hooks/useScrollReveal';

const RESUME_LINK = "https://drive.google.com/file/d/1lwOA5GariLv9GwPXfiLUNpXH2vEM-CWj/view?usp=drive_link";

const TIMELINE = [
  {
    id: 1,
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    period: '2024 – Present',
    type: 'Freelance',
    description:
      'Shipped end-to-end web and mobile applications for clients across agriculture, finance, and e-commerce. Both are live, actively used products - Kheti-Khata-Book handles real farm data for farmers, and the Transaction Management System secures real financial records for businesses.',
    tags: ['React', 'React Native', 'Node.js', 'Laravel', 'MySQL', 'MongoDB'],
  },
  {
    id: 2,
    role: 'Independent Developer',
    company: 'Shipped Products',
    period: '2023 – 2024',
    type: 'Project',
    description:
      'Designed and shipped multiple live applications - a real-time multiplayer chess game (deployed on Render), a Nike e-commerce frontend (live on Vercel), and a D3.js social network visualization (live on Vercel). All publicly accessible.',
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'D3.js', 'TailwindCSS'],
  },
  {
    id: 3,
    role: 'B.Tech in Computer Science',
    company: 'University',
    period: '2021 – 2025',
    type: 'Education',
    description:
      'B.Tech in Computer Science with a strong focus on practical application. Spent as much time shipping real projects as studying theory - which turned out to be the better investment.',
    tags: ['DSA', 'DBMS', 'OS', 'Software Engineering'],
  },
];

const Resume = () => {
  useScrollReveal();

  return (
    <section className="section-wrapper">
      <div className="section-container">
        {/* Heading */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <span className="section-label">Background</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My journey as a developer - projects, freelance work, and formal education.
          </p>
        </div>

        <div style={styles.layout}>
          {/* Timeline */}
          <div style={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={i === TIMELINE.length - 1}
              />
            ))}
          </div>

          {/* Resume download card */}
          <div className="reveal glass-card" style={styles.downloadCard}>
            <div style={styles.downloadIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-1)' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 style={styles.downloadTitle}>My Resume</h3>
            <p style={styles.downloadSub}>
              Full details of my experience, education, and technical skills - in one PDF.
            </p>
            <div style={styles.downloadBtns}>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="resume-view-btn"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                View Resume
              </a>
              <a
                href={RESUME_LINK}
                download
                target="_blank"
                rel="noopener noreferrer"
                id="resume-download-btn"
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
            </div>
            <p style={styles.downloadNote}>PDF · Updated regularly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  layout: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  timeline: {
    flex: '1 1 400px',
  },
  downloadCard: {
    flex: '0 0 260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem 1.5rem',
    textAlign: 'center',
    position: 'sticky',
    top: '6rem',
  },
  downloadIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: 'rgba(99,102,241,0.1)',
    border: '1px solid rgba(99,102,241,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadTitle: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
  downloadSub: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
  },
  downloadBtns: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    width: '100%',
  },
  downloadNote: {
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
  },
};

export default Resume;
