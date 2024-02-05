import "./addProjet.scss";
import axios from 'axios';
import React, { useState } from 'react';

export default function AddProjet() {
    const [projetData, setProjetData] = useState({
        concept: null,
        description: null,
        nom: null,
        objectifs: null,
        competences: {
            dev: false,
            design: false
        }
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        if (name === 'dev' || name === 'design') {
            setProjetData({
                ...projetData,
                competences: {
                    ...projetData.competences,
                    [name]: newValue
                }
            });
        } else {
            setProjetData({
                ...projetData,
                [name]: newValue
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put('http://localhost:3000/addProjet', projetData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Concept:
                    <input type="text" name="concept" value={projetData.concept} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" value={projetData.description} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nom:
                    <input type="text" name="nom" value={projetData.nom} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Objectifs:
                    <input type="text" name="objectifs" value={projetData.objectifs} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Compétences:
                    <input type="checkbox" name="dev" checked={projetData.competences.dev} onChange={handleInputChange} /> Dev
                    <input type="checkbox" name="design" checked={projetData.competences.design} onChange={handleInputChange} /> Design
                </label>
                <br />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}