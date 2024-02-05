import './login.scoped.scss'
export default function Login(){

    const formSubmit = (event) => {
        
        // Empêche le formulaire de s'effacer avant la récup des infos
        event.preventDefault();
        
            // Récupère les infos à l'envoi du formulaire
            const userEmail = event.target.elements.userEmail.value
            const userPassword = event.target.elements.userPassword.value
            let rememberMe = false

            if (event.target.elements.rememberMeCheckbox.checked) {
                rememberMe = true
            }

            console.log("Email:", userEmail, "\nPassword:", userPassword, "\nWants to be remembered:", rememberMe);

            event.target.reset();

        }

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
                            <input type="password" name="userPassword" id="userPassword" placeholder=' ' autoComplete='password' required />
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