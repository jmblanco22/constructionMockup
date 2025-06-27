import React from 'react';

const ContactPage = () => {
    return (
        <div className="page-section container">
            <h1 className="page-title">Get In Touch</h1>
            <div className="contact-form-wrapper">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Have a project in mind? We'd love to hear from you. Reach out to us via phone, email, or the contact form.</p>
                        <p><strong>Address:</strong> 123 Construction Ave, Buildsville, USA</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                        <p><strong>Email:</strong> contact@buildright.com</p>
                        <h3>Business Hours</h3>
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;