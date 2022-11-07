import React, { useEffect, useState } from 'react';

const Tours = () => {

    const [tour, setTour] = useState([])

    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => setTour(data))
    },[])
    return (
        <div>
            <h1>tour</h1>
        </div>
    );
};

export default Tours;