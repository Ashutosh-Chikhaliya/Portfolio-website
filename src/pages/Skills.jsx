import React from 'react';
import skillsData from "../skillsData.json";
import "../../public/stylesheets/skills.css"
const Skills = () => {
    return (
        <section className="skills-section">
            <h2 id="about-me-section"><span className='highlight-blue'>//</span> Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
