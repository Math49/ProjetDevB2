import "./admin-dashboard.scoped.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjetCardAdminView from "../../components/projetCard/projetCardAdminView";
import Sidebar from "../../components/sidebar/sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notifications from "../../components/dashboardOnglet/notifications";
import Current from "../../components/dashboardOnglet/current";
import Finished from "../../components/dashboardOnglet/finished";
import Comptes from "../../components/dashboardOnglet/comptes";

export default function AdminDashboard() {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const [categories, setCategories] = useState({
        design: false,
        dev: false,
    });

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/importProjet");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;

        setCategories((prev) => ({
        ...prev,
        [name]: checked,
        }));
    };

    const filterProjects = (projects) => {
        return projects.filter((project) => {
        const matchesName = q
            ? project.nom.toLowerCase().includes(q.toLowerCase())
            : true;
        const competences = project.competences || {};
        const checkedCategories = Object.entries(categories)
            .filter(([_, value]) => value)
            .map(([key]) => key);
        const matchesCategories =
            checkedCategories.length > 0
            ? checkedCategories.some((category) => competences[category])
            : true;

        return matchesName && matchesCategories;
        });

    };

    const Index = () => {
        return (
            filterProjects(data).map((obj) => (
            <ProjetCardAdminView key={obj.id} data={obj} />
            ))
        )
    }

    return (
        <main class="admin-dashboard">
            
            <Sidebar />
            <div className="view-dashboard">
                <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/notifications" element={<Notifications/>} />
                    <Route path="/en-cours" element={<Current/>} />
                    <Route path="/projets-finis" element={<Finished/>} />
                    <Route path="/comptes" element={<Comptes/>} />
                </Routes>

            </div>
        </main>
    );
}
