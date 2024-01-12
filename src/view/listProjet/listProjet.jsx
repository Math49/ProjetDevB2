import "./listProjet.scss"
import ProjetCard from "../../components/projetCard/projetCard"
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function ListProjet() {


    const [data, setData] = useState([]);

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

    return  <div className="card-container">
                {data.map((obj) =>
                    <ProjetCard data={obj}/>
                )}
            </div>
}