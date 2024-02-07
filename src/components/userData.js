import { useState} from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function UserData() {

    const {currentUser} = useAuth();
    const [data, setData] = useState([]);
    if(currentUser){

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/importUser');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();

        const User = data.filter(item => item.uid === currentUser.uid);
        
        return User[0];
    }
}