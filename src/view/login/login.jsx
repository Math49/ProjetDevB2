import './login.scoped.scss'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {app} from '../../firebaseConfig'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../AuthContext';

export default function Login(){

    const auth = getAuth(app);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User is logged in ", userCredential.user.uid);
            navigate("/"); // Redirect to home page
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <main className='login-main'>

            <img src="/espl-logo.png" alt="logo ESPL" className='logo' />

            <div className="auth-form">

                <h1>S'authentifier</h1>

                <form onSubmit={handleSubmit}>
                    <div className="auth-form-inputs">
                        <div className="auth-form-input">
                            <input type="email" name="userEmail" id="userEmail" placeholder=' ' autoComplete='email' value={email} onChange={e => setEmail(e.target.value)} required />
                            <label htmlFor="userEmail">E-mail</label>
                        </div>
                        <div className="auth-form-input">
                            <input type="password" name="userPassword" id="userPassword" placeholder=' ' autoComplete='password' value={password} onChange={e => setPassword(e.target.value)} required />
                            <label htmlFor="userPassword">Mot de passe</label>
                        </div>
                    </div>
                    
                    <input type="submit" className='auth-form-submit' value='Se connecter' />

                    <div className="auth-form-bot-row">
                        <div className="remember-me">
                            <input type="checkbox" name="remember-me" id="rememberMeCheckbox" />
                            <label htmlFor="rememberMeCheckbox">Se souvenir de moi</label>
                        </div>
                    </div>

                </form>

            </div>

        </main>

    )

}