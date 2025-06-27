import React from 'react';

const AboutSummary = ({ setPage }) => {
    return (
        <div className="page-section about-summary">
            <div className="container">
                <div className="about-grid">
                    <div>
                        <img src="https://placehold.co/600x400/E2E8F0/4A5568?text=Our+Team" alt="Our Team" />
                    </div>
                    <div>
                        <h2>25 Years of Trusted Construction</h2>
                        <p>BuildRight LLC has been a leader in the regional construction industry for over two decades. We specialize in commercial and residential projects, always prioritizing safety, quality, and client satisfaction. Our experienced team is dedicated to bringing your vision to life with precision and care.</p>
                        <button onClick={() => setPage('About')} className="btn btn-dark">
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSummary;