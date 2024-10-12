import React, { useState } from 'react';
import '../../public/stylesheets/contact.css'; // Custom CSS file
import Email from '../components/email';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact-page">
            <h2 id="about-me-section"><span className='highlight-blue'>//</span> Contact</h2>
            {/* Title Section */}
            <div className="text-center mb-12">
                <p className="subtitle">If you have any questions or would just like to say hello, feel free to email me.</p>
            </div>

            <div className='email-box'>
                <Email />
            </div>


            {/* Social Media Section */}
            <div className="social-media">
                <h2>Connect with me</h2>
                <div className="icons">
                    <a href="https://www.instagram.com/ashutosh_chikhaliya/" className="social-icon">
                        <img src="https://img.icons8.com/color/144/instagram.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Ashutosh-Chikhaliya" className="social-icon">
                        <img src="https://img.icons8.com/color/480/github--v1.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/ashutosh-chikhaliya/" className="social-icon">
                        <img src="https://img.icons8.com/color/480/linkedin-2--v1.png" alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
