import "./etudiant-dashboard.scoped.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjetCardAdminView from "../../components/projetCard/projetCardAdminView";
import Sidebar from "../../components/sidebar/sidebar-etudiant";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notifications from "../../components/dashboardOnglet/notifications";
import Current from "../../components/dashboardOnglet/current";
import Finished from "../../components/dashboardOnglet/finished";

export default function EtudiantDashboard() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/importProjet");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (uid) => {
        try {
            await axios.delete(`http://localhost:3000/progressProjet/${uid}`);
            // Refresh the data after deletion
            fetchData();
        } catch (error) {
            console.error("Error deleting project: ", error);
        }
    };

    const Index = () => {
        return (
            <>
            {data.map((obj) => (
                <div>
                    <ProjetCardAdminView key={obj.id} data={obj}/>
                    <button onClick={() => handleDelete(obj.uid)}>En cours</button>
                </div>
            ))}
            </>
        )
    }

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpened(!isMenuOpened);
    };

    return (
        <main class="etudiant-dashboard">
            
            <Sidebar />
            <div className="view-dashboard">
                <div className={`burger ${isMenuOpened ? 'menu-opened' : ''}`} onClick={toggleMenu}>
                    <svg class="menu-burger" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
                        <path d="M4 18L20 18" stroke="#013746" stroke-width="2" stroke-linecap="round"/>
                        <path d="M4 12L20 12" stroke="#013746" stroke-width="2" stroke-linecap="round"/>
                        <path d="M4 6L20 6" stroke="#013746" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/notifications" element={<Notifications/>} />
                    <Route path="/en-cours" element={<Current/>} />
                    <Route path="/projets-finis" element={<Finished/>} />
                </Routes>

            </div>
        </main>
    );
}
