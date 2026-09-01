import { Projects } from '../projectData';
import ProjectCard from '../components/ProjectCard';
import useScrollReveal from '../hooks/useScrollReveal';

const ProjectsPage = () => {
  useScrollReveal();

  return (
    <section className="section-wrapper">
      <div className="section-container">
        {/* Heading */}
        <div className="reveal" style={styles.headingArea}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Shipped & Live</h2>
          <p className="section-subtitle">
            Real products, real users. Here's what I've built and deployed - web apps,
            mobile apps, and everything in between.
          </p>
        </div>

        {/* Project grid */}
        {Projects.length > 0 ? (
          <div style={styles.grid}>
            {Projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div style={styles.empty}>
            <span style={{ fontSize: '2.5rem' }}>🚀</span>
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              New projects dropping soon...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const styles = {
  headingArea: {
    marginBottom: '2.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '4rem 0',
    color: 'var(--text-muted)',
  },
  addHint: {
    marginTop: '2.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid var(--border-color)',
    textAlign: 'center',
  },
};

export default ProjectsPage;
