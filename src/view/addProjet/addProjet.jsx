import "./addProjet.scss";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProjet() {

    const navigate = useNavigate();

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
            navigate("/");

            window.alert('Projet créé avec succès');
            
        } catch (error) {
            console.error('Erreur lors de la création du Projet', error);
            window.alert('Erreur lors de la création du Projet');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="formulaire">
                <label htmlFor="name">
                    Nom du projet :
                    <input type="text" name="nom" id="name" value={projetData.nom} onChange={handleInputChange} />
                </label>
                <label htmlFor="description">
                    Description :
                    <textarea name="description" id="description" value={projetData.description} onChange={handleInputChange} />
                </label>
                <label htmlFor="objectifs">
                    Objectifs :
                    <input type="text" name="objectifs" id="objectifs" value={projetData.objectifs} onChange={handleInputChange} />
                </label>
                    <div className="competences">
                        Compétences :
                        <div className="competences-container">
                            <label htmlFor="devCheckbox">
                                Dev
                                <input type="checkbox" name="dev" id="devCheckbox" checked={projetData.competences.dev} onChange={handleInputChange} />
                            </label>
                            <label htmlFor="designCheckbox">
                                Design
                                <input type="checkbox" id="designCheckbox" name="design" checked={projetData.competences.design} onChange={handleInputChange} />
                            </label>
                        </div>
                        </div>
                <button className="submit-button"  type="submit">Ajouter</button>
            </form>
        </div>
    );
}