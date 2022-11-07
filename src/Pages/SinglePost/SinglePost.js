import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePost = () => {
    const data = useLoaderData()
    const { name, img, category, ratingsCount, price, ratings, duration } = data
    console.log(data);
    return (
        <section class="bg-white container mx-auto dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex lg:-mx-6">
                    <div class="lg:w-3/4 lg:px-6">
                        <img class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={img} alt="" />

                        <div>
                            <p class="mt-6 text-sm text-blue-500 uppercase">{category}</p>

                            <h1 class="text-4xl mt-6 text-center font-semibold leading-tight text-gray-800 dark:text-white">
                                {name}
                            </h1>
                            <h1 class="text-3xl mt-6 text-center font-bold leading-tight text-blue-600  dark:text-white">
                               Price: ${price} / <span>Duration: {duration}</span>
                            </h1>
                        </div>
                    </div>

                    {/* <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 class="text-blue-500 capitalize">Design instument</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        How to raise $100k+ by using blox ui kit on your design
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">UI Resource</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Should you creat UI Product by using Blox?
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">Premium Collection</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Blocks you can get on Blox's collection.
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">Premium kits</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Ui kit you can get on Blox's collection.
                    </a>
                </div>
            </div> */}
                </div>
            </div>
        </section>
    );
};

export default SinglePost;