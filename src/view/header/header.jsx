import "./header.scss";
import { useLocation } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import UserData from "../../components/userData.js";

export default function Header() {
  const location = useLocation();

  const user = UserData();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Déconnexion réussie');
      // Redirection ou mise à jour de l'UI ici si nécessaire
    } catch (error) {
      console.error('Erreur de déconnexion', error);
    }
  };

  return (
    <header style={{ display: location.pathname === "/login" || location.pathname === "/register" ? "none" : "flex" }}>
      <div className="title">
        <a href="/">
          <img src="/espl-logo.png" alt="logo" />
        </a>
        <h1>ESPL Hub</h1>
      </div>
      <nav className="nav">
        <a href="/addprojet">Ajouter un projet</a>
        {user && <h2>{user.prenom}</h2>}
        <button onClick={handleLogout}>Se déconnecter</button>
      </nav>
    </header>
  );
}
