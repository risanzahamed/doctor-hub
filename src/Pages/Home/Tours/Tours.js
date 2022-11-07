import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const Tours = () => {

    const [tour, setTour] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/tour')
        .then(res => res.json())
        .then(data => setTour(data))
    },[])
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center font-bold m-10'>Best Tour Of The Year</h1>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-10 container mx-auto'>
            {
                tour.map(singletour => <TourCard
                key={singletour._id}
                singletour={singletour}
                ></TourCard> )
            }
        </div>
        </div>
    );
};

export default Tours;