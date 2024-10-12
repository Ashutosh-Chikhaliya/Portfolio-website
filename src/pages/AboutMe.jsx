import React, { useEffect } from 'react';
import '../../public/stylesheets/about.css'; // Import your custom CSS file for styles
import { Link } from 'react-scroll';
import Contact from './Contact';

const AboutMe = () => {


    return (
        <>
            <h2 id="about-me-section"> <span className='highlight-blue'>//</span>  About me</h2>
            <section className="about-me">
                <div className="about-content">
                    <p>
                        Hi, my name is <strong>Ashutosh Chikhaliya</strong>. I'm passionate about technology and a web development enthusiast.
                        I've been using React, Node.js, Express, and more in my projects.
                    </p>
                    <p>
                        Currently studying, practicing, and looking for new opportunities.
                    </p>
                    <Link to="" className="contact-link">Contact me →</Link>
                </div>

                <img className='aboutImg' src="../../public/Images/coding-html-svgrepo-com (1).svg" alt="" />

            </section>
        </>
    );
};

export default AboutMe;
