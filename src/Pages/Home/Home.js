import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';
import useTitle from '../../Hooks/useTitle';
import AddedService from './AddedService/AddedService';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import OurRecommend from './OurRecommended/OurRecommend';
import Services from './Services/Service';

const Home = () => {

    const { user } = useContext(AuthContext)
    const data = useLoaderData()

    useTitle('Home')


    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`https://server-xi-five.vercel.app/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [user?.email])
    console.log(service);

    return (
        <div>
            <Banner />
            <Features />
            <OurRecommend />
            <Services />
            <h1>service {service.length}</h1>

            {
                user?.email ? <>
                    {
                        data.length === 0 ? <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white"> No Service Added </h1> :


                            <>

                                <h1 className='text-4xl text-center mt-20 font-bold m-10'>Your added Service {service.length}</h1>
                            </>
                    }
                </> : <></>
            }

            {
                service.map(service => {
                    return (

                        <div>

                            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


                                <div className="flex flex-col justify-center p-5 border rounded shadow-sm">
                                    <div>

                                        <h6 className="mb-2 font-semibold leading-5">Your Name: {service.name}</h6>
                                        <h6 className="mb-2 text-sm font-semibold leading-5">Your Email: {service.email}</h6>
                                        <p className="mb-3 text-sm text-gray-900">
                                            Your Message: {service.message}
                                        </p>
                                        <p className="mb-3 text-sm text-gray-900">
                                            Your Therapy: {service.therapy}
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    )
                })
            }




        </div >
    );
};

export default Home;