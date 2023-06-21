import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useAppState, useActions } from '../overmind';
import { Link } from 'react-router-dom';
import iitklogo from '../assets/iitklogo.png';

const NavbarComponent = () => {
    const state = useAppState();
    const actions = useActions();
    let navigate = useNavigate();

    // async function handleLogout(event) {
    //     event.preventDefault()
    //     await actions.setIsLogged(false)
    //     window.localStorage.removeItem('isLogged')
    //     navigate('/', { replace: true })
    // }

    return (
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"></div>
        </nav>
    );
};

export default NavbarComponent;
