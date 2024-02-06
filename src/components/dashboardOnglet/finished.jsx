import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjetCardAdminView from "../projetCard/projetCardAdminView";

export default function Finished() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/importProjetFinished");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        };

        fetchData();
    }, []);

    return (
        data.map((obj) => (
            <ProjetCardAdminView key={obj.id} data={obj} />
        ))
    )
}