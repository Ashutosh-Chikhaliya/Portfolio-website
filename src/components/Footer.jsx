import React from 'react';
import '../stylesheets/footer.css'; // Import the CSS for the footer

const Footer = () => {
    return (
        <footer className="footer py-5 border-t-2 border-black ">
            <div className="footer-container flex justify-between items-center py-0 px-5 max-w-6xl">
                <p className="copyright text-md ">© 2024 | Ashutosh Chikhaliya</p>
                <div className="social-icons flex gap-5">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
