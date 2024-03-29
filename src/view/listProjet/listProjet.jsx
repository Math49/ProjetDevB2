import "./listProjet.scss";
import ProjetCard from "../../components/projetCard/projetCard";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Checkbox from "./checkbox";
import {useNavigate} from "react-router-dom";



export default function ListProjet() {

    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const [categories, setCategories] = useState({
        design: false,
        dev: false
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/importProjet');
                setData(response.data);
                console.log("load");
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = e => {
        const { name, checked } = e.target;

        setCategories(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const filterProjects = projects => {
        return projects.filter(project => {
            const matchesName = q ? project.nom.toLowerCase().includes(q.toLowerCase()) : true;
            const competences = project.competences || {};
            const checkedCategories = Object.entries(categories).filter(([_, value]) => value).map(([key]) => key);
            const matchesCategories = checkedCategories.length > 0 ? checkedCategories.some(category => competences[category]) : true;

            return matchesName && matchesCategories;
        });
    };

    const navigate = useNavigate();

    const navigateToProject = (project) => {
        navigate(`/projet/${project.uid}`, { state: {project: project} })
    }

    return (
        <div className="listing-projet">
            <div className="filtre-menu">
                <div className="filtre-menu-content">
                    <h2>Filtrer les projets</h2>
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Rechercher..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </label>
                    </div>
                    <h3>Compétences</h3>
                    <div className="checkbox-list">

                        <Checkbox
                            id="design"
                            title="Design"
                            name="design"
                            checked={categories.design}
                            handleChange={handleChange}
                        />
                        <Checkbox
                            id="dev"
                            title="Dev"
                            name="dev"
                            checked={categories.dev}
                            handleChange={handleChange}
                        />

                    </div>
                </div>
            </div>
                <div className="card-container">
                    {filterProjects(data).map((obj) =>
                        <button key={obj.uid} onClick={() => navigateToProject(obj)}>
                            <ProjetCard key={obj.uid} data={obj}/>
                        </button>
                    )}
                </div>
        </div>
    );
}
