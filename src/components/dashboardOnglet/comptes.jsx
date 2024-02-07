
import AdminUserCard from "../adminUserCard/adminUserCard"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Comptes() {

    const [data, setData] = useState([]);

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

    return (
        <div className="comptes">

            <a href="/register" className="add-account">
                <img src="../../../add-user.png" alt="Ajouter un utilisateur" className="add-user-icon" />
                Ajouter un compte
            </a>

            <div className="comptes-list">
            {data.map((obj) =>
                <AdminUserCard key={obj.id} data={obj} />
            )}
            </div>


        </div>
    )
}