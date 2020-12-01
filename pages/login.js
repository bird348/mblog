import React, { useState } from 'react';
import firebase from '../firebaseClient';
import LoginForm from '../components/form/LoginForm';
import Link from 'next/link';
import Head from 'next/head';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    function handleChangeFormLogin(e) {
        const val = e.target.value;
        const id = e.target.id;
        if(id === "email") {
            setEmail(val);
        }
        if(id === "password") {
            setPassword(val);
        }
        setMsg("");
    }

    async function handleCreate(e) {
        e.preventDefault();
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            window.location.href = "/"
        }).catch(function(error) {
            const message = error.message;
            setMsg(message);
        })
    }

    async function handleLogin(e) {
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
            window.location.href = "/"
        }).catch(function(error) {
            const message = error.message;
            setMsg(message);
        })
    }

    return(
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LoginForm
             msg={msg}
             email={email}
             password={password} 
             onHandleChangeFormLogin={handleChangeFormLogin}
             onHandleCreate={handleCreate}
             onHandleLogin={handleLogin}
             />
             <div className="container col-6">
                <Link href="/">
                    <a>
                        <p>
                            กลับไปหน้าหลัก
                        </p>
                    </a>
                </Link>
             </div>
        </>
    )
}