import { useState, useEffect } from 'react';
import { Projects } from '../projectData.js';

const NetflixProjectCarousel = ({ onProjectClick }) => {
    // Create infinite loop: [last, ...original, first]
    const infiniteProjects = [Projects[Projects.length - 1], ...Projects, Projects[0]];
    
    // Load saved index from localStorage, or default to 1 (first real item)
    const [currentIndex, setCurrentIndex] = useState(() => {
        const savedIndex = localStorage.getItem('carouselIndex');
        if (savedIndex) {
            const parsed = parseInt(savedIndex, 10);
            // Ensure the saved index is within valid range (1 to Projects.length)
            if (parsed >= 1 && parsed <= Projects.length) {
                return parsed;
            }
        }
        return 1; // Default to first project (index 1 in infinite array)
    });
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Save current index to localStorage whenever it changes (only save stable positions)
    useEffect(() => {
        // Only save if we're in the valid range (not on duplicate slides) and not transitioning
        if (!isTransitioning && currentIndex >= 1 && currentIndex <= Projects.length) {
            localStorage.setItem('carouselIndex', currentIndex.toString());
            console.log('💾 Saved carousel position:', currentIndex);
        }
    }, [currentIndex, isTransitioning]);

    const goToPrevious = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentIndex(prev => {
            const newIndex = prev - 1;
            
            // Schedule the jump after transition
            setTimeout(() => {
                setIsTransitioning(false);
                // If we're at the duplicate last item (index 0), jump to real last item
                if (newIndex === 0) {
                    setCurrentIndex(Projects.length);
                }
            }, 500);
            
            return newIndex;
        });
    };

    const goToNext = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentIndex(prev => {
            const newIndex = prev + 1;
            
            // Schedule the jump after transition
            setTimeout(() => {
                setIsTransitioning(false);
                // If we're at the duplicate first item, jump to real first item
                if (newIndex === infiniteProjects.length - 1) {
                    setCurrentIndex(1);
                }
            }, 500);
            
            return newIndex;
        });
    };

    return (
        <div className="netflix-scroll-container relative overflow-visible group py-8 pb-16">
            {/* Left Arrow */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 z-30 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ top: 'calc(50% - 40px)', transform: 'translateY(-50%)' }}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button
                onClick={goToNext}
                className="absolute right-4 z-30 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ top: 'calc(50% - 40px)', transform: 'translateY(-50%)' }}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

                <div 
                    className={`netflix-projects-track flex gap-4 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{ 
                        transform: `translateX(-${currentIndex * 360}px)`,
                        width: `${infiniteProjects.length * 360}px`
                    }}
                >
                    {infiniteProjects.map((project, index) => {
                        // Calculate rank number based on original position
                        let rankNumber;
                        if (index === 0) {
                            rankNumber = Projects.length; // Last item duplicate
                        } else if (index === infiniteProjects.length - 1) {
                            rankNumber = 1; // First item duplicate
                        } else {
                            rankNumber = index; // Original items
                        }
                        return (
                            <div 
                                key={`${project.id}-${index}`}
                                className="netflix-project-item flex items-end flex-shrink-0"
                            >
                                {/* Giant Rank Number - Behind and touching card */}
                                <div className="rank-container relative z-10 flex items-end" style={{ height: '320px', paddingBottom: '10px' }}>
                                    <div className="rank-number-netflix font-black leading-none" style={{
                                        fontSize: '280px',
                                        lineHeight: '280px',
                                        WebkitTextStroke: '3px rgba(156, 163, 175, 0.8)',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '4px 4px 0px rgba(0,0,0,0.7), 8px 8px 0px rgba(0,0,0,0.2)',
                                        marginRight: '-30px',
                                        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                                    }}>
                                        {rankNumber}
                                    </div>
                                </div>

                                {/* Project Card - No container, just image and title */}
                                <div 
                                    className="netflix-card-wrapper cursor-pointer group z-20"
                                    onClick={() => onProjectClick(project)}
                                    style={{ width: '280px' }}
                                >
                                    {/* Project Image - Natural size */}
                                    <div className="relative rounded-lg overflow-hidden mb-3">
                                        <img 
                                            src={project.thumbnail || project.image} 
                                            alt={project.title}
                                            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                                            style={{ display: 'block' }}
                                        />
                                        
                                        {/* New Badge for specific projects */}
                                        {project.id === 5 && (
                                            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                                NEW
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Title - Below the image, always fully visible */}
                                    <h4 className="text-white font-bold text-lg leading-tight text-left px-1">
                                        {project.title}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
        </div>
    );
};

export default NetflixProjectCarousel;