import React from 'react';

const Footer = ({ setPage }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3><span style={{color: '#f59e0b'}}>Build</span>Right LLC</h3>
                        <p>Building your future, one project at a time. Quality and integrity are the cornerstones of our business.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><button onClick={() => setPage('Home')}>Home</button></li>
                            <li><button onClick={() => setPage('About')}>About Us</button></li>
                            <li><button onClick={() => setPage('Services')}>Services</button></li>
                            <li><button onClick={() => setPage('Projects')}>Projects</button></li>
                            <li><button onClick={() => setPage('Contact')}>Contact</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>123 Construction Ave,<br/>Buildsville, USA 12345</p>
                        <p>Email: contact@buildright.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <a href="#" style={{marginRight: '1rem'}}>FB</a>
                        <a href="#" style={{marginRight: '1rem'}}>TW</a>
                        <a href="#">IN</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} BuildRight LLC. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;