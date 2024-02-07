import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NotificationsEtudiant() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/importProjetValidation");
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
            await axios.delete(`http://localhost:3000/valideProjet/${uid}`);
            // Refresh the data after deletion
            fetchData();
        } catch (error) {
            console.error("Error deleting project: ", error);
        }
    };

    return (
        <div></div>
    )
}