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
        <section className="projects-container relative overflow-hidden pt-12 pb-12 pl-0 pr-0">
            <h2 className='font-semibold text-4xl text-center' id="about-me-section"><span className='highlight-blue'>//</span> Projects</h2>

            <div className="timeline overflow-hidden" ref={projectsContainerRef}>
                {Projects.map((project, index) => ( // Use the renamed variable here
                    <div className={`project-wrapper ${index % 2 === 0 ? 'left' : 'right'} relative flex justify-center items-center mt-12 mb-12 ml-0 mr-0 w-full`} key={project.id}>
                        <div className="project-card relative m-6 ml-0  bg-cover bg-center">
                            <img src={project.image} alt="Project Image" />
                            <div className="links-overlay absolute opacity-0 z-10 flex">
                                <a href={project.codeLink} className="link-btn flex justify-center items-center w-16 h-16 m-1 text-lg cursor-pointer rounded-xl border-none"> <i className="fas fa-code"></i></a>
                                <a href={project.liveLink} className="link-btn flex justify-center items-center w-16 h-16 m-1 text-lg cursor-pointer rounded-xl border-none"> <i className="fas fa-external-link-alt"></i></a>
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

            {Projects.length > 2 && ( // Use the renamed variable here
                <div className="show-more-container flex align-center justify-center text-center">
                    <button onClick={() => setShowAllProjects(!showAllProjects)} className="show-more-btn bg-none border-none text-black text-xl cursor-pointer">
                        Show {showAllProjects ? 'Less' : 'More'}
                        <span className={`arrow text-xl ml-3`}>&#x2193;</span>
                    </button>
                </div>
            )}
        </section>
    );
};

export default ProjectsPage;
