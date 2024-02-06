import React, { useState } from 'react';
import './register.scoped.scss';

export default function Register() {
    const [passwordError, setPasswordError] = useState('');

    // Récupère les infos à l'envoi du formulaire
    const formSubmit = (event) => {
        event.preventDefault();

        const userEmail = event.target.elements.userEmail.value;
        const userPassword = event.target.elements.userPassword.value;
        const userConfirmPassword = event.target.elements.userPasswordv.value;

        if (userPassword !== userConfirmPassword) {
            setPasswordError('Les mots de passe ne correspondent pas');
            return;
        }

        console.log("Email:", userEmail, "Password:", userPassword);
        
    };

    return (
        <main className='login-main'>
            <img src="espl logo.png" alt="logo ESPL" className='logo' />
            <div className="auth-form">
                <h1>S'authentifier</h1>
                <form onSubmit={formSubmit}>
                    <div className="auth-form-inputs">
                        <div className="auth-form-input">
                            <input type="email" name="userEmail" id="userEmail" placeholder=' ' autoComplete='email' required />
                            <label htmlFor="userEmail">E-mail</label>
                        </div>
                        <div className="auth-form-input">
                            <input type="firstname" name="userfirstName" id="userfirstName" placeholder=' ' autoComplete='firstName' required />
                            <label htmlFor="userEmail">Prénom</label>
                        </div>
                        <div className="auth-form-input">
                            <input type="name" name="userName" id="userName" placeholder=' ' autoComplete='Name' required />
                            <label htmlFor="userEmail">Nom</label>
                        </div>
                        <div className="auth-form-input">
                            <input type="password" name="userPassword" id="userPassword" placeholder=' ' autoComplete='password' required />
                            <label htmlFor="userPassword">Mot de passe</label>
                        </div>
                        <div className="auth-form-input">
                            <input type="password" name="userPasswordv" id="userPasswordv" placeholder=' ' autoComplete='password' required />
                            <label htmlFor="userPasswordv">Confirmer le mot de passe</label>
                            <span className="passwordError" style={{ display: passwordError ? 'block' : 'none' }}>{passwordError}</span>
                        </div>
                    </div>
                    <input type="submit" className='auth-form-submit' value='Créer mon compte' />
                    <div className="auth-form-bot-row">
                        <div className="remember-me">
                            <input type="checkbox" name="remember-me" id="rememberMeCheckbox" />
                            <label htmlFor="rememberMeCheckbox">Se souvenir de moi</label>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
