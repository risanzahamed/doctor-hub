import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CardAllTour from './CardAllTour';

const AllTour = () => {
    const allTour = useLoaderData()
    console.log(allTour);
    return (
        <div>
            <h1 className='text-4xl text-center font-bold m-10'>All Of our Tour Collections</h1>

            <div className=' grid lg:grid-cols-3'>
            {
                allTour.map(singleTour => <CardAllTour
                key={singleTour._id}
                singleTour= {singleTour}
                ></CardAllTour>)
            }
            </div>
            
        </div>
    );
};

export default AllTour;