import "./listProjet.scss";
import ProjetCard from "../../components/projetCard/projetCard";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Checkbox from "./checkbox";

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

    return (
        <div className="listing-projet">
            <div className="filtre-menu">
                <h2>Filtrer les projets</h2>
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </label>
                </div>
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
            <div className="card-container">
                {filterProjects(data).map((obj) => 
                    <ProjetCard key={obj.id} data={obj}/>
                )}
            </div>
        </div>
    );
}
