import "./header.scss";
import { useLocation } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

let user = null;
let dashboardLink = "";

export default function Header() {
  const location = useLocation();

  const { currentUser } = useAuth();

  const auth = getAuth();
  const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/importUser');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);
    

    if(currentUser && data){

      const FiltredUser = data.filter(item => item.uid === currentUser.uid);
      
      user = FiltredUser[0];

      if(user.roles === "admin"){
        dashboardLink = "/admin-dashboard"
      } else if(user.roles === "etudiant"){
        dashboardLink = "/etudiant-dashboard"
      }
    }
    
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate(dashboardLink);
  }

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
        <a href="/" className="espl-logo">
          <img src="/espl-logo.png" alt="logo" />
          <h1>ESPL Hub</h1>
        </a>
      </div>
      <nav className="nav">
        <a href="/addprojet">Ajouter un projet</a>
        {user && <span className="current-name">{user.prenom}</span>}
        <div className="profile-picture" onClick={toggleModal}>
          <img src="../../../defaultavatar.png" alt="" className="user-profile-picture" />
        </div>
        {isModalOpen && (
                    <div className="context-menu-profile-actions-wrapper">
                        <span className="context-menu-profile-close" onClick={toggleModal} >&times;</span>
                        <div className="context-menu-profile-actions">
                            <button onClick={handleDashboard}>Accéder au dashboard</button>
                            <button onClick={handleLogout}>Se déconnecter</button>
                        </div>
                    </div>
                )}
      </nav>
    </header>
  );
}
