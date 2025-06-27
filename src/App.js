import React, { useState } from 'react';

// Import all the components and pages
import Layout from './components/Layout';
import HomePage from './pages/Home.js';
import AboutPage from './pages/About.js';
import ServicesPage from './pages/Services.js';
// Corrected the import path to match your file name 'Project.js'
import ProjectPage from './pages/Project.js';
import ContactPage from './pages/COntact.js';

function App() {
  const [page, setPage] = useState('Home');

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <HomePage setPage={setPage} />;
      case 'About':
        return <AboutPage />;
      case 'Services':
        return <ServicesPage />;
      // Corrected the component name to ProjectPage
      case 'Projects':
        return <ProjectPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <Layout setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;