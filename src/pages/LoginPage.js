import React from 'react';
import { json, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useAppState, useActions, useEffects } from '../overmind';

const LoginPage = () => {
    const state = useAppState();
    const actions = useActions();
    const effects = useEffects();
    let navigate = useNavigate();

    // const [remeberMe, setRemeberMode] = useState(false)
    // const [loginIdSlug, setLoginIdSlug] = useState('')

    // async function handleSubmit(event) {
    //     event.preventDefault()

    //     const checkLoginFlag = await effects.checkLogin(
    //         `hall7_${loginIdSlug}`,
    //         state.isLogged
    //     )

    //     if (checkLoginFlag) {
    //         await actions.setIsLogged(true)
    //         await actions.setLoginId(loginIdSlug)
    //         if (remeberMe) {
    //             window.localStorage.setItem(
    //                 'loginId',
    //                 JSON.stringify(loginIdSlug)
    //             )
    //             window.localStorage.setItem('isLogged', JSON.stringify(true))
    //             window.localStorage.setItem('rememberMe', JSON.stringify(true))
    //         } else {
    //             window.localStorage.removeItem('loginId')
    //             window.localStorage.removeItem('isLogged')
    //             window.localStorage.removeItem('rememberMe')
    //         }
    //         navigate('/dashboard', { replace: true })
    //     } else {
    //         alert(
    //             `Your login Id is not found! Please generate one from 'registration' page.`
    //         )
    //     }
    // }

    // async function handleSetLoginIdSlug(event) {
    //     event.preventDefault()
    //     setLoginIdSlug(event.target.value)
    // }

    // async function handleRemeberCreds(event) {
    //     if (event.target.value === 'on') setRemeberMode(true)
    //     else setRemeberMode(false)
    // }

    // useEffect(() => {
    //     if (state.isLogged && state.loginId != '')
    //         navigate('/dashboard', { replace: true })
    //     const rememberMe = JSON.parse(window.localStorage.getItem('rememberMe'))
    //     const loginiD = JSON.parse(window.localStorage.getItem('loginId'))
    //     const isLogged = JSON.parse(window.localStorage.getItem('isLogged'))
    // }, [])

    return (
        <div className="flex justify-center items-center mx-auto h-full max-w-screen-2xl lg:py-4 lg:px-12">
            <section class="py-32"></section>
        </div>
    );
};

export default LoginPage;
