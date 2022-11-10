import React, { useContext } from 'react';
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




    return (
        <div>
            <Banner />
            <Features />
            <OurRecommend />
            <Services />

            {
                user?.email ? <>
                {
                    data.length === 0 ? <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white"> No Service Added </h1> :


                        <>

                            <h1 className='text-4xl text-center mt-20 font-bold m-10'>Your added Service {data.length}</h1>


                            <div>
                                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                    {
                                        data.map(data => <AddedService
                                            key={data._id}
                                            data={data}
                                        ></AddedService>)
                                    }
                                </div>
                            </div>
                        </>
                }
            </> : <></>


                    
            }



        </div>
    );
};

export default Home;