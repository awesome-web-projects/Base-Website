import React from 'react';
import react, { useEffect, useState } from 'react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Analytics, logEvent } from 'firebase/analytics';
import { db, analytics } from '../firebase/firebase.js';

const RegistrationPage = () => {
    // useEffect(() => {
    //     logEvent(analytics, 'visit_page:registration_page_visit')
    // }, [])

    return (
        <div className="px-4 mx-auto py-6 max-w-screen-2xl lg:px-12">
            <section className="mx-auto px-4 max-w-screen-xl"></section>
        </div>
    );
};

export default RegistrationPage;
