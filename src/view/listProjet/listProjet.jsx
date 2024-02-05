import "./listProjet.scss"
import ProjetCard from "../../components/projetCard/projetCard"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigation, useNavigate, useLocation } from "react-router-dom";



export default function ListProjet() {

    const data = [{competences:{"test1.1":false,"test1":true},objectifs:"test1",concept:"test1",description:"test1",id:1,nom:"test1"},{objectifs:"test2",concept:"test2",description:"test2",id:2,nom:"test2",competences:{"test2":true,"test2.1":true}}]

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3000/importProjet');
    //         setData(response.data);
    //     } catch (error) {
    //         console.error("Error fetching data: ", error);
    //     }
    //     };

    //     fetchData();
    // }, []);

    const navigate = useNavigate();

    const navigateToProject = (project) => {
        navigate(`/projet/${project.id}`, { state: {project: project} })
    }

    return  <div className="card-container">
                {data.map((obj) =>
                    <a onClick={() => navigateToProject(obj)}>
                        <ProjetCard data={obj}/>
                    </a>
                )}
            </div>
}