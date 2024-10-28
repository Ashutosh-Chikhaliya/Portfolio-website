import React, { useEffect } from 'react';
import '../stylesheets/about.css'; // Import your custom CSS file for styles
import { Link } from 'react-scroll';
import aboutImage from "../../public/Images/coding-html-svgrepo-com (1).svg"

const AboutMe = () => {


    return (
        <>
            <h2 className='font-semibold text-4xl text-center' id="about-me-section"> <span className='highlight-blue'>//</span>  About me</h2>
            <section className="about-me flex justify-between my-0 mx-auto mt-16">
                <div className="about-content max-w-screen-sm text-xl leading-8">
                    <p className='mb-5'>
                        Hi, my name is <strong>Ashutosh Chikhaliya</strong>. I'm passionate about technology and a web development enthusiast.
                        I've been using React, Node.js, Express, and more in my projects.
                    </p>
                    <p>
                        Currently studying, practicing, and looking for new opportunities.
                    </p>
                    <Link to="Contact" className="contact-link inline-block mt-4 font-bold text-xl cursor-pointer text-[#007bff] hover:scale-110 transition duration-300 ease-out hover:ease-in ">Contact me →</Link>
                </div>

                <img className='aboutImg relative h-80 w-80' src={aboutImage} alt="" />

            </section>
        </>
    );
};

export default AboutMe;
