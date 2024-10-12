import React, { useState, useRef, useEffect } from 'react';
import "../../public/stylesheets/projects.css"; // Your existing styles
import { Projects } from '../projectData.js';
import { Link } from 'react-scroll';


const ProjectsPage = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const projectsContainerRef = useRef(null);

    useEffect(() => {
        if (projectsContainerRef.current) {
            if (showAllProjects) {
                projectsContainerRef.current.style.maxHeight = `${projectsContainerRef.current.scrollHeight}px`;
            } else {
                projectsContainerRef.current.style.maxHeight = "810px";
            }
        }
    }, [showAllProjects]);

    return (
        <section className="projects-container">
            <h2 id="about-me-section"><span className='highlight-blue'>//</span> Projects</h2>

            <div className="timeline" ref={projectsContainerRef}>
                {Projects.map((project, index) => ( // Use the renamed variable here
                    <div className={`project-wrapper ${index % 2 === 0 ? 'left' : 'right'}`} key={project.id}>
                        <div class="project-card">
                            <img src={project.image} alt="Project Image" />
                            <div class="links-overlay">
                                <a href={project.codeLink} class="link-btn"> <i className="fas fa-code"></i></a>
                                <a href={project.liveLink} class="link-btn"> <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag, i) => (
                                    <span className="tag" key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {Projects.length > 2 && ( // Use the renamed variable here
                <div className="show-more-container">
                    <button onClick={() => setShowAllProjects(!showAllProjects)} className="show-more-btn">
                        Show {showAllProjects ? 'Less' : 'More'}
                        <span className={`arrow ${showAllProjects ? 'rotate' : ''}`}>&#x2193;</span>
                    </button>
                </div>
            )}
        </section>
    );
};

export default ProjectsPage;
