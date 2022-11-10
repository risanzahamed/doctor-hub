import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';

const MyAddedService = () => {
    const [service, setService] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`https://server-xi-five.vercel.app/my-service?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[user?.email])


    return (
        <div className="overflow-x-auto container mx-auto">


            {
                service.length === 0 ? <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white"> No Service Added </h1> 
                
                : 
                
                <table className="table w-full">
               
                <thead>
                    <tr>
                        <th>Check</th>
                        <th>Name</th>
                        <th>Your Email</th>
                        <th>Your Message</th>
                        <th>Therapy Name</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        service.map(service =>{
                            return(
                            
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.message}</td>
                                <td>{service.therapy}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            }

           
            
        </div>
    );
};

export default MyAddedService;