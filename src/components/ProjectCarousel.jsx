import { useState } from 'react';
import PropTypes from 'prop-types';
import { Projects } from '../projectData.js';

const ProjectCarousel = ({ onProjectClick }) => {
    const [activeFilter] = useState('all');

    // Extract unique tags for filtering (for future use)
    const allTags = [...new Set(Projects.flatMap(project => project.tags))];
    // eslint-disable-next-line no-unused-vars
    const filters = ['all', ...allTags.slice(0, 5)]; // Show first 5 tags + 'all'

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all' 
        ? Projects 
        : Projects.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="responsive-projects-container">
            {/* Optional Filter Tabs - Uncomment if needed */}
            {/* <div className="filter-tabs">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                    >
                        {filter === 'all' ? 'All Projects' : filter}
                    </button>
                ))}
            </div> */}

            {/* Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div 
                        key={project.id}
                        className="project-card-responsive group"
                        onClick={() => onProjectClick(project)}
                    >
                        {/* Project Image */}
                        <div className="project-image-container">
                            <img 
                                src={project.thumbnail || project.image} 
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <svg className="view-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span className="view-text">View Details</span>
                                </div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>

                            {/* Action Buttons */}
                            <div className="card-actions">
                                <button className="action-btn primary">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Details
                                </button>
                                {project.liveLink && (
                                    <button 
                                        className="action-btn secondary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.liveLink, '_blank');
                                        }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="empty-state">
                    <p>No projects found with the selected filter.</p>
                </div>
            )}
        </div>
    );
};

ProjectCarousel.propTypes = {
    onProjectClick: PropTypes.func.isRequired,
};

export default ProjectCarousel;
