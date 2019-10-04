import React, { useEffect, useState } from 'react';

import api  from '../../services/api';

export default function Dashboard(){

    const [spots, setSpot ] = useState([]);
    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/datashboard', {
                headers: { user_id }
            })
        } 

        loadSpots();
    }, []);

    return  (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li>
                        <header></header>
                        <strong>{spot.company}</strong>
                    </li>
                ))}
            </ul>
        </>
    );
}