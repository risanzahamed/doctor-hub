import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';

const MyService = () => {
    const { user } = useContext(AuthContext)

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;

        const service = {
            name: form.name.value,
            email: form.email.value,
            therapy: form.therapy.value,
            message: form.message.value,
        }

        fetch('http://localhost:5000/my-service', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                toast("successfully service added")
                form.reset()
                console.log(data)
            })
            .catch(err => err.message(err))

    }
    return (
        <div>
            <div className='container mx-auto w-full'>
                <h1 className='text-3xl ml-5 font-medium text-blue-600'>Add a service</h1>
                {
                    user?.email ?

                        <div className="w-full mt-10 text-center dark:bg-gray-900 dark:text-gray-100">
                            <form onSubmit={handleAddService} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100  ng-valid">
                                <h1 className='text-2xl '>


                                    Hii {user?.displayName ?
                                        user?.displayName : user?.email
                                    } Now You can add a service

                                </h1>
                                <label htmlfor="username" className="self-start text-xs font-semibold">Your Name</label>
                                <input type="text" name='name' placeholder="Type here" className="input input-bordered input-primary   w-full max-w-xs" />
                                <label htmlfor="email" className="self-start text-xs font-semibold">Your Email</label>
                                <input type="email" name='email' placeholder="Type here" className="input input-bordered input-primary   w-full max-w-xs" />
                                <label htmlfor="therapy" className="self-start text-xs font-semibold">Which Therapy Do You Need?</label>
                                <input type="text" name='therapy' placeholder="Type here" className="input input-bordered input-primary   w-full max-w-xs" />
                                <label htmlfor="review" className="self-start mt-3 text-xs font-semibold">Describe About your problem!</label>
                                <textarea className="textarea textarea-bordered" name='message' placeholder="Your Message"></textarea>
                                <input type="submit" className='btn btn-primary mt-5' value="Submit Your Service" />
                            </form>

                            <ToastContainer />
                        </div> : <h2 className='text-3xl mt-5 ml-5 font-semibold '> Please <span className='text-red-600 '><Link to='/login'>login</Link></span> For Add a service</h2>
                }
            </div>
        </div>
    );
};

export default MyService;