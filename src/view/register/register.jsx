import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.scoped.scss';
import axios from 'axios';


export default function Register() {
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();


    const formSubmit = async (event) => {
        event.preventDefault();

        const userEmail = event.target.elements.userEmail.value;
        const userPassword = event.target.elements.userPassword.value;
        const userConfirmPassword = event.target.elements.userPasswordv.value;
        const prenom = event.target.elements.userfirstName.value;
        const nom = event.target.elements.userName.value;
        const role = event.target.elements.userRole.value;

        if (userPassword.length < 6) {
            setPasswordError('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }

        if (userPassword !== userConfirmPassword) {
            setPasswordError('Les mots de passe ne correspondent pas');
            return;
        }
        
        setPasswordError('');

        try {
            await axios.post('http://localhost:3000/signup', {
                userEmail,
                userPassword,
                prenom,
                nom,
                role
            });

            // Redirect to /admin-dashboard/comptes
            navigate("/admin-dashboard/comptes");

            window.alert('Compte créé avec succès');
            
        } catch (error) {
            console.error('Erreur lors de la création du compte', error);
            window.alert('Erreur lors de la création du compte');
        }
    };

    return (
        <main className='register-main'>
            <a href="/">
                <img src="/espl-logo.png" alt="logo ESPL" className='logo' />
            </a>
            <div className="auth-form">
                <h1>S'authentifier</h1>
                <form onSubmit={formSubmit}>
                    <div className="auth-form-inputs">
                        <div className="auth-form-input">
                            <select name="userRole" id="userRole" required>
                                <option value="">Choisissez un rôle</option>
                                <option value="etudiant">Étudiant</option>
                                <option value="admin">Admin</option>
                            </select>
                            <label htmlFor="userRole">Rôle</label>
                        </div>
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
                    </div>
                </form>
            </div>
        </main>
    );
}
