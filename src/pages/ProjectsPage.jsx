import { useState } from 'react';
import "../stylesheets/projects.css"; // Your existing styles
import ProjectCarousel from '../components/ProjectCarousel.jsx';

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="projects-container relative overflow-hidden pt-12 pb-12">
            <h2 className='font-semibold text-4xl text-center mb-24' id="projects-section">
                <span className='highlight-blue'>{'// '}</span>Projects
            </h2>

            {/* Netflix Style Carousel - Main Projects Section */}
            <ProjectCarousel onProjectClick={openModal} />

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="modal-content no-scrollbar bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center rounded-t-2xl">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                {selectedProject.title}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                            >
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body - Two Column Layout */}
                        <div className="flex flex-col lg:flex-row min-h-[500px]">
                            {/* Left Column - Project Image Gallery (60%) */}
                            <div className="lg:w-[60%] p-6 flex flex-col bg-gray-50 dark:bg-gray-900/50">
                                {/* Main Image Display */}
                                <div className="flex-1 flex items-center justify-center mb-4">
                                    <img 
                                        src={selectedProject.gallery ? selectedProject.gallery[currentImageIndex] : selectedProject.image} 
                                        alt={`${selectedProject.title} - Screenshot ${currentImageIndex + 1}`}
                                        className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-lg"
                                    />
                                </div>

                                {/* Image Gallery Navigation (only show if gallery exists) */}
                                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                                    <div className="space-y-3">
                                        {/* Navigation Buttons */}
                                        <div className="flex justify-center items-center gap-4">
                                            <button
                                                onClick={() => setCurrentImageIndex(prev => 
                                                    prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
                                                )}
                                                className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
                                            >
                                                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            
                                            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                                {currentImageIndex + 1} / {selectedProject.gallery.length}
                                            </span>
                                            
                                            <button
                                                onClick={() => setCurrentImageIndex(prev => 
                                                    prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
                                                )}
                                                className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
                                            >
                                                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Thumbnail Strip */}
                                        <div className="flex gap-2 overflow-x-auto pb-2">
                                            {selectedProject.gallery.map((image, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                                                        index === currentImageIndex 
                                                            ? 'border-blue-500 ring-2 ring-blue-200' 
                                                            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                                                    }`}
                                                >
                                                    <img 
                                                        src={image} 
                                                        alt={`Screenshot ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column - Project Details (40%) */}
                            <div className="lg:w-[40%] p-6 pb-16 flex flex-col justify-start overflow-y-auto">
                                {/* Project Description */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                        About this project
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Technologies Used */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span 
                                                key={i}
                                                className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-3 mt-auto">
                                    {/* Download APK Button - Only for Kheti-Khata-Book */}
                                    {selectedProject.id === 4 && (
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.tidyinfoway.khetihisabapp"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 font-medium text-sm"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            Download APK from Play Store
                                        </a>
                                    )}
                                    {selectedProject.liveLink && (
                                        <a
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View Live Demo
                                        </a>
                                    )}
                                    {selectedProject.codeLink && (
                                        <a
                                            href={selectedProject.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-sm border border-gray-300 dark:border-gray-600"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            View Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsPage;
