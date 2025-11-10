import React from 'react';

const Resume = () => {
    const resumeDriveLink = "https://drive.google.com/file/d/1lwOA5GariLv9GwPXfiLUNpXH2vEM-CWj/view?usp=drive_link";

    return (
        <section className="resume-container relative overflow-hidden py-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Heading */}
                <h2 className='font-semibold text-4xl text-center mb-12'>
                    <span className='highlight-blue'>{'// '}</span>Resume
                </h2>

                {/* Resume Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-center text-center space-y-6">
                        {/* Icon */}
                        <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>

                        {/* Title */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                My Resume
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Download or view my professional resume
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            {/* View Resume Button */}
                            <a
                                href={resumeDriveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View Resume
                            </a>

                            {/* Download Resume Button */}
                            <a
                                href={resumeDriveLink}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 font-medium border border-gray-300 dark:border-gray-600"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Download Resume
                            </a>
                        </div>

                        {/* Additional Info */}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            PDF format • Updated regularly
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
