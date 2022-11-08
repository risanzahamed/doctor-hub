import React, { useEffect, useState } from 'react';

const MyAddedService = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/my-service")
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="overflow-x-auto container mx-auto">
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
        </div>
    );
};

export default MyAddedService;