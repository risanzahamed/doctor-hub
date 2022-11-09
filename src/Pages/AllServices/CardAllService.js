import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import SingleService from './SingleService';
import CardAllTour from './SingleService';

const CardAllService = () => {
    const allservice = useLoaderData()
    useTitle('Services')

    return (
        <div>
            <h1 className='text-4xl text-center font-bold m-10'>All Of our Services</h1>

            <div className=' grid lg:grid-cols-3'>
            {
                allservice.map(singleService => <SingleService
                key={singleService._id}
                singleService= {singleService}
                ></SingleService>)
            }
            </div>
            
        </div>
    );
};

export default CardAllService;