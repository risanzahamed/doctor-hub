import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';

const MyaddService = () => {

    const [service, setService] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`https://server-xi-five.vercel.app/services?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[user?.email])
    return (
        <div>
            {service.length}
        </div>
    );
};

export default MyaddService;