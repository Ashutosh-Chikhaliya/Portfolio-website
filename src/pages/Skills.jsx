import React from 'react';
import skillsData from "../skillsData.json";
import "../../public/stylesheets/skills.css"
const Skills = () => {
    return (
        <section className="skills-section my-0 mx-auto py-12 mt-4">
            <h2 className='font-semibold text-4xl text-center' id="about-me-section"><span className='highlight-blue'>//</span> Skills</h2>
            <div className="skills-grid flex flex-wrap justify-center gap-6 mt-16">
                {skillsData.map((skill, index) => (
                    <div className="skill-card bg-neutral-50 rounded-lg p-5 flex flex-col items-center w-28 h-28" key={index}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon w-12 h-12 mb-3" />
                        <span className="skill-name text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
