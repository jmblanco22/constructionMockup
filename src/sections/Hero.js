import React from 'react';

const Hero = ({ setPage }) => {
    return (
        <div className="hero" style={{ backgroundImage: "url('https://placehold.co/1600x800/222/FFF?text=Building+Excellence')" }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Excellence in Every Build</h1>
                <p>From concept to completion, we deliver unparalleled craftsmanship and service.</p>
                <button onClick={() => setPage('Services')} className="hero-button">
                    Explore Our Services
                </button>
            </div>
        </div>
    );
};

export default Hero;