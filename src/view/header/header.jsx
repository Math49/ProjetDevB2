import "./header.scss";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { getAuth, signOut } from 'firebase/auth';

export default function Header() {
  const location = useLocation();
  const { currentUser } = useAuth();

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
    <header style={{ display: location.pathname === "/login" ? "none" : "flex" }}>
      <div className="title">
        <img src="/espl-logo.png" alt="image" />
        <h1>ESPL Hub</h1>
      </div>
      <nav className="nav">
        <a href="#">Ajouter un projet</a>
        {currentUser && <h2>{currentUser.email}</h2>}
        <button onClick={handleLogout}>Se déconnecter</button>
      </nav>
    </header>
  );
}
