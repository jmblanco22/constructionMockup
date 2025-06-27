import React from 'react';

const AboutPage = () => {
    return (
        <div className="page-section container">
            <h1 className="page-title">About BuildRight LLC</h1>
            <div className="about-grid">
                <div>
                    <h2>Our Mission</h2>
                    <p>Our mission is to deliver high-quality, cost-effective construction projects on schedule by employing and supporting motivated, flexible, and focused teams. We value the importance of our relationships and will continue to remain fair and true in our dealings with all employees, clients, vendors, and partners.</p>
                    <h2>Our History</h2>
                    <p>Founded in 1998 by John Builder, BuildRight LLC started as a small local contractor with a passion for quality craftsmanship. Over the past 25 years, we have grown into a trusted construction firm known for our commitment to excellence and our ability to handle projects of all sizes.</p>
                </div>
                <div>
                    <img src="https://placehold.co/600x700/E2E8F0/4A5568?text=Our+Workshop" alt="Our Workshop" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;