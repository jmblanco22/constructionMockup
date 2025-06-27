import React from 'react';

const Testimonials = () => {
    const testimonials = [
        { name: 'John & Jane Doe', quote: 'BuildRight transformed our vision into a reality. The attention to detail was incredible. We couldn\'t be happier with our new home!' },
        { name: 'Corporate Solutions Inc.', quote: 'The renovation of our office space was seamless and completed ahead of schedule. Professional, reliable, and highly recommended.' },
    ];

    return (
        <div className="page-section testimonials">
            <div className="container">
                <h2 className="page-title">What Our Clients Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map(t => (
                        <div key={t.name} className="testimonial-card">
                            <p className="quote">"{t.quote}"</p>
                            <p className="author">- {t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;