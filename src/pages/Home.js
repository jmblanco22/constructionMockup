import React from 'react';
import Hero from '../sections/Hero';
import AboutSummary from '../sections/AboutSummary';
import ServiceHighlight from '../sections/ServiceHighlight';
import Testimonials from '../sections/Testimonials';

const HomePage = ({ setPage }) => {
    return (
        <div>
            <Hero setPage={setPage} />
            <AboutSummary setPage={setPage} />
            <ServiceHighlight setPage={setPage} />
            <Testimonials />
        </div>
    );
};

export default HomePage;