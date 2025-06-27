import React from 'react';

const ServiceHighlight = ({ setPage }) => {
    const services = [
        { title: 'General Contracting', description: 'Comprehensive project management from start to finish.', icon: 'G' },
        { title: 'Custom Homes', description: 'Building the home of your dreams with personalized details.', icon: 'H' },
        { title: 'Commercial Renovations', description: 'Modernizing your business space to meet new demands.', icon: 'R' },
    ];

    return (
        <div className="page-section">
            <div className="container">
                <div className="services-intro">
                    <h2 className="page-title" style={{marginBottom: '0.5rem'}}>Our Core Services</h2>
                    <p>We offer a wide range of services to meet every client's needs.</p>
                </div>
                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.title} className="service-card">
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                 <div style={{textAlign: 'center', marginTop: '3rem'}}>
                    <button onClick={() => setPage('Services')} className="hero-button">
                        View All Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceHighlight;