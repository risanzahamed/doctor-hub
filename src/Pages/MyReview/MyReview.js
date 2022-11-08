import React, { useEffect, useState } from 'react';

const MyReview = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/my-review")
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.log(err))
    }, [])
    console.log(review);
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="mt-6 md:flex md:items-center md:justify-between">
                    <div>
                        <h1 class="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                            Your Review
                        </h1>
                    </div>
                </div>

                <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        review.map(review => {
                            return (
                                <div class="p-8 border rounded-lg dark:border-gray-700">
                                    <p class="leading-loose text-gray-500 dark:text-gray-400">
                                        {review.review}.
                                    </p>

                                    <div class="flex items-center mt-8 -mx-2">
                                        <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                        <div class="mx-2">
                                            <h1 class="font-semibold text-gray-800 dark:text-white">{review.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    );
};

export default MyReview;