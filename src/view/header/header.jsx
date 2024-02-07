import "./header.scss";
import { useLocation } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import React, { useState, useEffect } from "react";
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

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

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
        {user && <span className="current-email">{user.prenom}</span>}
        <div className="profile-picture" onClick={toggleModal}>
          <img src="../../../defaultavatar.png" alt="" className="user-profile-picture" />
        </div>
        {isModalOpen && (
                    <div className="context-menu-profile-actions-wrapper">
                        <span className="context-menu-profile-close" onClick={toggleModal} >&times;</span>
                        <div className="context-menu-profile-actions">
                            <button onClick={() => window.location.href = '/admin-dashboard'}>Accéder au dashboard</button>
                            <button onClick={handleLogout}>Se déconnecter</button>
                        </div>
                    </div>
                )}
      </nav>
    </header>
  );
}
