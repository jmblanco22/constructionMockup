import React from 'react';

const ServicesPage = () => {
    const servicesList = [
        { title: 'General Contracting', description: 'We manage every aspect of your project, ensuring it stays on time and on budget.' },
        { title: 'Design-Build', description: 'A streamlined process where we handle both the design and construction phases.' },
        { title: 'Custom Home Building', description: 'From foundation to finishing touches, we build beautiful, high-quality custom homes.' },
        { title: 'Commercial Construction', description: 'We build and renovate retail spaces, offices, and other commercial properties.' },
        { title: 'Remodeling & Additions', description: 'Update your kitchen, finish your basement, or add a new wing to your home.' },
        { title: 'Project Management', description: 'Our expert project managers oversee every detail to ensure a smooth process.' },
    ];
    return (
        <div className="page-section container">
            <h1 className="page-title">Our Services</h1>
            <div className="services-grid">
                {servicesList.map(service => (
                    <div key={service.title} className="service-card" style={{textAlign: 'left'}}>
                        <h3 style={{color: '#b45309'}}>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;