import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';

const ReviewDetails = ({ reviewdetails }) => {


    const [displayReview, setDisplayReview] = useState([])


    const handledelete = reviewdetails => {
        console.log("user deleted with id:", reviewdetails._id);

        const agree = window.confirm(`are you sure you want to delete this item?`, reviewdetails.name)
        console.log(agree);

        if (agree) {
            fetch(`https://server-xi-five.vercel.app/my-review/${reviewdetails._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (reviewdetails.deletedCount > 0) {
                        const remainingReview =
                        displayReview.filter(rev => rev._id !== reviewdetails._id)
                        setDisplayReview(remainingReview)
                        toast('successfully delete this item')
                    }
                })
                .catch(err => console.log(err))

        }
    }

    const { updatePhoto } = useContext(AuthContext)
    return (
        <div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <button className='btn btn-primary ml-10' onClick={() => handledelete(reviewdetails)}>Delete</button>
                <Link to={`/update-review/${reviewdetails._id}`} > <button className='btn btn-primary ml-10 '>Update</button></Link>
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    {reviewdetails.review}.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={updatePhoto} alt="" />

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">{reviewdetails.name}</h1>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default ReviewDetails;