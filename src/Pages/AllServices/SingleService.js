import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = ({ singleService }) => {
    const { name, img, category, description,price } = singleService
    const dd = description
    const text = dd.slice(0, 100, '...');

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                    <div className='text-left shadow-xl'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="mt-8 p-10">
                            <span className="text-blue-500 uppercase">{category}</span>

                            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                {name}
                            </h1>

                            <p className="mt-2 text-1xl text-black font-medium dark:text-gray-400">
                                {text}
                            </p>

                            <div className='mt-5'>
                                <h1>Package Price: <span className='font-bold'>${price}</span> </h1>
                            </div>

                            <div className="flex items-center justify-between mt-4">

                                <Link to={`/services/${singleService._id}`} className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleService;