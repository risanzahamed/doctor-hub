import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';
import useTitle from '../../Hooks/useTitle';
import ReviewDetails from './ReviewDetails';

const MyReview = () => {
    useTitle('My Review')
    const {updatePhoto, user} = useContext(AuthContext)

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://doctor-hub-8d110.web.app/my-review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.log(err))
    }, [user?.email])

    return (
        <section className="bg-white dark:bg-gray-900">
            
            <div className="container px-6 py-10 mx-auto">
                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                            {
                                review.length === 0 ? "No review added" : <></>
                            }
                        </h1>
                    </div>
                </div>

                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">

                    {
                        review.map(reviewdetails => <ReviewDetails
                        key={reviewdetails._id}
                        reviewdetails={reviewdetails}
                        ></ReviewDetails>)
                    }

                </section>
            </div>
        </section>
    );
};

export default MyReview;