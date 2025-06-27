import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, setPage }) => {
    return (
        <div className="app-wrapper">
            <Header setPage={setPage} />
            <main>{children}</main>
            <Footer setPage={setPage} />
        </div>
    );
};

export default Layout;