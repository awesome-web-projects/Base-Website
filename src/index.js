import React from 'react';
import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';

import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQpage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './pages/Dashboard';

import './index.css';
import App from './App';

import { Analytics, logEvent } from 'firebase/analytics';
import { db, analytics } from './firebase/firebase.js';

import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './overmind';

export const overmind = createOvermind(config, {
    devtools: false,
});

export default function Application() {
    // useEffect(() => {
    //     logEvent(analytics, 'visit_page:first_log_visit')
    //     logEvent(analytics, 'screen_view', {
    //         firebase_screen: 'screen_start',
    //         firebase_screen_class: 'index.js',
    //     })
    // }, [])

    return (
        <Router>
            <NavbarComponent />
            <div className="py-10"></div>
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/" element={<App />} />
                <Route path="/faqs" element={<FAQPage />} />
                <Route path="/registerflow" element={<RegistrationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<App />} />
                <Route path="/dashboard" element={<App />} />
            </Routes>
            <div className="py-10"></div>
            <FooterComponent />
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('data-tag-main'));
root.render(
    <Provider value={overmind}>
        <Application />
    </Provider>
);
