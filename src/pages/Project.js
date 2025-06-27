import React from 'react';

const ProjectPage = () => {
    const projects = [
        { title: 'Downtown Office Complex', category: 'Commercial', image: 'https://placehold.co/600x400/334155/E2E8F0?text=Office+Complex' },
        { title: 'Lakeside Family Home', category: 'Residential', image: 'https://placehold.co/600x400/52525B/E2E8F0?text=Lakeside+Home' },
        { title: 'The Millner Restaurant', category: 'Commercial', image: 'https://placehold.co/600x400/44403C/E2E8F0?text=Restaurant' },
        { title: 'Suburban Villa', category: 'Residential', image: 'https://placehold.co/600x400/3F3F46/E2E8F0?text=Suburban+Villa' },
        { title: 'Community Sports Center', category: 'Public', image: 'https://placehold.co/600x400/27272A/E2E8F0?text=Sports+Center' },
        { title: 'Historic Building Restoration', category: 'Renovation', image: 'https://placehold.co/600x400/18181B/E2E8F0?text=Restoration' },
    ];
    return (
        <div className="page-section container">
            <h1 className="page-title">Our Portfolio</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.title} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <div className="project-card-content">
                            <p className="category">{project.category}</p>
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;