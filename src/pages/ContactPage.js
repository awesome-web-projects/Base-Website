import React from 'react';
import react, { useEffect, useState } from 'react';
import { Analytics, logEvent } from 'firebase/analytics';
import { db, analytics } from '../firebase/firebase.js';

const ContactPage = () => {
    // useEffect(() => {
    //     logEvent(analytics, 'visit_page:contacts_page_visit')
    // }, [])

    return (
        <div className="px-2 mx-auto max-w-screen-2xl lg:py-4 lg:px-12">
            <section class="bg-white dark:bg-gray-900"></section>
        </div>
    );
};

export default ContactPage;
