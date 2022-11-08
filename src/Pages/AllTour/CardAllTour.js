import React from 'react';
import { Link } from 'react-router-dom';

const SingleTour = ({ singleTour }) => {
    const { name,img,category, description} = singleTour
    const dd = description
    const text= dd.slice(0, 100 , '...');

    console.log(singleTour);
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <hr class="my-8 border-gray-200 dark:border-gray-700"/>

                    <div>
                        <div className='text-left shadow-xl'>
                            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={img} alt=""/>

                                <div class="mt-8 p-10">
                                    <span class="text-blue-500 uppercase">{category}</span>

                                    <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                        {name}
                                    </h1>

                                    <p class="mt-2 text-1xl text-black font-medium dark:text-gray-400">
                                       {text}
                                    </p>

                                    <div class="flex items-center justify-between mt-4">

                                        <Link to={`/tour/${singleTour._id}`} class="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                                    </div>

                                </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default SingleTour;