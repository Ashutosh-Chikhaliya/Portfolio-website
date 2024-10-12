import { useState } from 'react';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-scroll';
import moonImg from "../assets/night-mode.png"
import sunImg from "../assets/brightness.png"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const [activeLink, setActiveLink] = useState('Home'); // Default active link

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`${isDarkMode ? 'bg-black' : 'bg-light'} ${isDarkMode ? 'text-white' : 'text-black'} header ${isOpen ? 'active' : ''}`}>
                <div className="container mx-auto flex justify-between items-center navbar">
                    <h1 className="text-2xl font-bold">AC<span className='highlight-blue'>.</span></h1>
                    <ul className={`nav-links ${isOpen ? 'active' : ''} flex justify-center items-center`}>
                        {['Home', 'About-Me', 'Projects', 'Skills', 'Contact'].map((link) => (
                            <li key={link}>
                                <Link
                                    to={link} // Match section id
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={`text-lg navlink relative ${activeLink === link ? "active" : ""}`}
                                    onClick={() => {
                                        setActiveLink(link);
                                        setIsOpen(false); // Close menu on link click
                                    }}
                                >
                                    <span className="curly-bracket">{'{'}</span>
                                    <span> </span>
                                    {link}
                                    <span> </span>
                                    <span className="curly-bracket">{'}'}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='right-side flex items-center'>
                        <div className="burger" onClick={toggleMenu}>
                            <div className={`line ${isOpen ? 'active' : ''}`}></div>
                            <div className={`line ${isOpen ? 'active' : ''}`}></div>
                            <div className={`line ${isOpen ? 'active' : ''}`}></div>
                        </div>

                        <button onClick={toggleTheme} className={`text-xl ${isDarkMode ? 'text-blue-500' : 'text-black'} theme-button`}>
                            <img src={isDarkMode ? moonImg : sunImg} alt={isDarkMode ? "moon icon" : "sun icon"} />

                        </button>
                    </div>
                </div>

                <div>
                    <div className="social-media-links">
                        <a href="https://github.com/Ashutosh-Chikhaliya" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ashutosh-chikhaliya/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Overlay to dim and blur background */}
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div> {/* Close menu on overlay click */}

            {/* Main Content Area */}
            <div className={`content ${isOpen ? 'blur' : ''}`}>
                {/* Your main content goes here */}
            </div>
        </>
    );
};

export default Navbar;
