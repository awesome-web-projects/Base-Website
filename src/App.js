import { Link } from 'react-router-dom';
import react, { useEffect, useState } from 'react';
import { useAppState, useActions, useEffects, useReaction } from './overmind';
import React, { lazy, Suspense } from 'react';
import { Analytics, logEvent } from 'firebase/analytics';
import { db, analytics } from './firebase/firebase.js';

const App = () => {
    // General
    const state = useAppState();
    const actions = useActions();
    const effects = useEffects();
    const reaction = useReaction();

    // useEffect(() => {
    //     logEvent(analytics, 'visit_page:app_start')
    //     logEvent(analytics, 'screen_view', {
    //         firebase_screen: 'screen_base',
    //         firebase_screen_class: 'App.js',
    //     })
    // }, [])

    // useEffect(() => {
    //     const t_LoginId = JSON.parse(window.localStorage.getItem('loginId'))
    //     const t_isLogged = JSON.parse(window.localStorage.getItem('isLogged'))
    //     actions.setIsLogged(t_isLogged)
    //     actions.setLoginId(t_LoginId)
    // }, [])

    return (
        <div className="App">
            <section class="bg-white dark:bg-gray-900"></section>
            <section className="mx-auto px-4 py-10 max-w-screen-xl"></section>
        </div>
    );
};

export default App;
