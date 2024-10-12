import React from 'react';
import '../../public/stylesheets/footer.css'; // Import the CSS for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="copyright">© 2024 | Ashutosh Chikhaliya</p>
                <div className="social-icons">
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
