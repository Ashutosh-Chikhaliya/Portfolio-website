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
            <nav className={` header ${isOpen ? 'active' : ''} h-28 w-full my-0 mx-auto fixed z-10`}>
                <div className="flex justify-between items-center navbar fixed h-28 left-2/4 ">
                    <h1 className="text-2xl font-bold cursor-pointer logo" data-text="ASHU">
                        <Link
                            to="Home" // Target the Home section
                            spy={true}
                            smooth={true}
                            duration={500}
                            data-text="ASHU" // Display duplicate text for scroll effect
                            className='logo-link'
                            onClick={() => setActiveLink('Home')} // Set active link on click
                        >
                        </Link>
                        <span className='logo-name'>ASHU<span className="highlight-blue">.</span></span>

                    </h1>

                    <ul className={`nav-links ${isOpen ? 'active' : ''} flex justify-center items-center`}>
                        {['Home', 'About-Me', 'Projects', 'Skills', 'Contact'].map((link) => (
                            <li key={link} className='cursor-pointer'>
                                <Link
                                    to={link} // Match section id
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    data-text={link}
                                    className={`text-lg navlink relative ${activeLink === link ? "active" : ""}`}
                                    onClick={() => {
                                        setActiveLink(link);
                                        setIsOpen(false);
                                    }}
                                >
                                    <span className="navlink-content px-2">{link}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='right-side flex items-center'>
                        <div className="burger" onClick={toggleMenu}>
                            <div className={`line w-6 my-1 border-none  outline-none ${isOpen ? 'active' : ''}`}></div>
                            <div className={`line w-6 my-1 border-none  outline-none ${isOpen ? 'active' : ''}`}></div>
                            <div className={`line w-6 my-1 border-none  outline-none ${isOpen ? 'active' : ''}`}></div>
                        </div>

                        <button onClick={toggleTheme} className={`text-xl ${isDarkMode ? 'text-blue-500' : 'text-black'} theme-button w-6 h-6`}>
                            <img src={isDarkMode ? moonImg : sunImg} alt={isDarkMode ? "moon icon" : "sun icon"} />

                        </button>
                    </div>
                </div>

                <div>
                    <div className="social-media-links flex flex-col fixed left-9 top-full z-10">
                        <a href="https://github.com/Ashutosh-Chikhaliya" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github text-2xl mb-3"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ashutosh-chikhaliya/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin text-2xl mb-3"></i>
                        </a>
                    </div>
                </div>
            </nav>



        </>
    );
};

export default Navbar;
