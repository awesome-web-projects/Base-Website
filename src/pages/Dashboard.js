import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useAppState, useActions, useEffects } from '../overmind';
import { Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const DashboardPage = () => {
    const state = useAppState();
    const actions = useActions();
    const effects = useEffects();
    let navigate = useNavigate();

    // useEffect(() => {
    //     const t_LoginId = JSON.parse(window.localStorage.getItem('loginId'))
    //     const t_isLogged = JSON.parse(window.localStorage.getItem('isLogged'))
    //     actions.setIsLogged(t_isLogged)
    //     actions.setLoginId(t_LoginId)
    // }, [])

    return (
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
            <section className="mx-auto max-w-screen-xl">
                {state.isLogged && <CourseComponent />}
                {!state.isLogged && <LoginPage />}
            </section>
        </div>
    );
};

export default DashboardPage;
