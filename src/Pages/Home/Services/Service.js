import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [service, setService] = useState([])

    useEffect(()=>{
        fetch('https://server-xi-five.vercel.app/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center mt-20 font-bold m-10'>Best Services Of The Year</h1>
            </div>
            <div className='grid grid-cols-3 gap-10  container mx-auto'>
            {
                service.map(singleService => <ServiceCard
                key={singleService._id}
                singleService={singleService}
                ></ServiceCard> )
            }
        </div>
        <Link to='/services'><button className='btn btn-primary'>See All Services</button></Link>
        </div>
    );
};

export default Services;