import React from 'react';
import '../../public/stylesheets/contact.css'; // Custom CSS file
import Email from '../components/Email.jsx';

const Contact = () => {


    return (
        <div className="contact-page pt-12 pb-12 pl-5 pr-5">
            <h2 className='font-semibold text-4xl text-center' id="about-me-section"><span className='highlight-blue'>//</span> Contact</h2>
            {/* Title Section */}
            <div className="text-center mb-8">
                <p className="subtitle mt-12 text-xl text-zinc-500">If you have any questions or would just like to say hello, feel free to email me.</p>
            </div>

            <div className='email-box flex justify-center align-center'>
                <Email />
            </div>


            {/* Social Media Section */}
            <div className="social-media mt-5 ">
                <h2 className='mb-5 text-center text-3xl font-semibold'>Connect with me</h2>
                <div className="icons flex justify-center gap-5">
                    <a href="https://www.instagram.com/ashutosh_chikhaliya/" className="social-icon w-12 h-12">
                        <img src="https://img.icons8.com/color/144/instagram.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Ashutosh-Chikhaliya" className="social-icon w-12 h-12">
                        <img src="https://img.icons8.com/color/480/github--v1.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/ashutosh-chikhaliya/" className="social-icon w-12 h-12">
                        <img src="https://img.icons8.com/color/480/linkedin-2--v1.png" alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
