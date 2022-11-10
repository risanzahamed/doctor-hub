import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';

const UpdateReview = () => {
    const data = useLoaderData()
    console.log(data);

    const [updatedReview, setUpdatedReview] = useState(data)

    const [myreview, mySetReview] = useState(data)

    const { user } = useContext(AuthContext)
    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviews = {
            name: form.name.value,
            review: form.review.value,
        }
        setUpdatedReview(reviews)

        fetch(`https://server-xi-five.vercel.app/my-review/${data._id}`,{
            method: 'PUT',
            Headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
        .then(res => res.json())
        .then(data =>{
            toast('review changed')
            console.log(data)
        })



    }

    useEffect(() => {
        fetch("https://server-xi-five.vercel.app/my-review")
            .then(res => res.json())
            .then(data => mySetReview(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            
            <form onSubmit={handleUpdateReview}  action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                <h1 className='text-2xl '>
                </h1>
                <label htmlFor="username" className="self-start text-xs font-semibold">You Name</label>
                <input type="text" name="name" placeholder="Type here" className="input input-bordered input-primary   w-full max-w-xs" defaultValue={user?.displayName || "unknown"} readOnly />
                <label htmlFor="review" className="self-start mt-3 text-xs font-semibold " >Your Review</label>
                <textarea name="review" className="textarea textarea-bordered" placeholder="Your Review" defaultValue={data.review}></textarea>
                <input type="submit" className='btn btn-primary mt-5' value="Submit Your Review" />
            </form>
        </div>
    );
};

export default UpdateReview;