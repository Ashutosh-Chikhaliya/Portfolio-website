import React from 'react';
import "../stylesheets/projects.css"; // Your existing styles
import { Projects } from '../projectData.js';

const ProjectsPage = () => {
    return (
        <section className="projects-container relative overflow-hidden pt-12 pb-12 pl-0 pr-0">
            <h2 className='font-semibold text-4xl text-center' id="about-me-section">
                <span className='highlight-blue'>//</span> Projects
            </h2>

            <div className="timeline overflow-hidden">
                {Projects.map((project, index) => (
                    <div className={`project-wrapper ${index % 2 === 0 ? 'left' : 'right'} relative flex justify-center items-center mt-12 mb-12 ml-0 mr-0 w-full`} key={project.id}>
                        <div className="project-card relative m-6 ml-0 bg-cover bg-center rounded-2xl">
                            <img src={project.image} alt="Project Image" className='rounded-2xl' />
                            <div className="links-overlay absolute opacity-0 z-10 flex rounded-2xl">
                                <a href={project.codeLink} className="link-btn flex justify-center items-center w-16 h-16 m-1 text-lg cursor-pointer rounded-xl border-none">
                                    <i className="fas fa-code"></i>
                                </a>
                                <a href={project.liveLink} className="link-btn flex justify-center items-center w-16 h-16 m-1 text-lg cursor-pointer rounded-xl border-none">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>

                        <div className="project-details w-1/2 ml-5 flex flex-col justify-center">
                            <h3 className='m-1 text-2xl font-medium'>{project.title}</h3>
                            <p className='m-1 text-md text-zinc-600'>{project.description}</p>
                            <div className="tags mt-3">
                                {project.tags.map((tag, i) => (
                                    <span className="tag inline-block mr-2 mb-2 text-sm rounded-2xl px-3 py-2" key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
