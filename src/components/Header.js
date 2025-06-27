import React from 'react';

const Header = ({ setPage }) => {
    const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-logo" onClick={() => setPage('Home')}>
                    <span>Build</span>Right LLC
                </div>
                <nav className="header-nav">
                    {navLinks.map(link => (
                        <button key={link} onClick={() => setPage(link)}>
                            {link}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;