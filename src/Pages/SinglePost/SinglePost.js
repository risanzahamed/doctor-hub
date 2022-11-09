import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';



const SinglePost = () => {
    useTitle('Post')
    const data = useLoaderData()
    const { user,updateName } = useContext(AuthContext);
    const { name, img, category, description, images, ratingsCount, price, ratings, reviews, specialCare } = data
    const { img1, img2, img3 } = images
    const {care1, care2} =specialCare
    console.log(reviews);


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = {
            name: form.name.value,
            review: form.review.value,
        }

        fetch('http://localhost:5000/my-review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast("successfully review added")
                console.log(data)
            })
            .catch(err => err.message(err))

    }

    return (
        <section class="bg-white container mx-auto dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex text-left lg:-mx-6">
                    <div class="lg:w-3/4 text-left lg:px-6">
                        <img class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={img} alt="" />

                        <div className='text-left'>
                            <p class="mt-6 text-4xl text-blue-500 uppercase">{category}</p>

                            <h1 class="text-4xl mt-6 text-left font-semibold leading-tight text-gray-800 dark:text-white">
                                {name}
                            </h1>

                            <p class="mt-6 text-lg text-blue-500 uppercase"> {ratings} star Rating </p>
                            <p class="mt-6 text-lg text-blue-500 uppercase"> Total {ratingsCount} Count </p>
                            <h1 class="text-3xl mt-6 text-left font-bold leading-tight text-blue-600  dark:text-white">
                                Price: ${price}
                            </h1>
                        </div>
                        <div >
                            <p class="mt-6 text-left text-1xl text-black font-medium uppercase">{description}</p>
                        </div>


                        <div className='grid grid-cols-3 gap-4 mt-10'>
                            <div>
                                <PhotoProvider>
                                    <PhotoView src={img1}>
                                        <img className='rounded-lg' src={img1} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>

                            <div>
                                <PhotoProvider>
                                    <PhotoView src={img2}>
                                        <img className='rounded-lg' src={img2} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>

                            <div>
                                <PhotoProvider>
                                    <PhotoView src={img3}>
                                        <img className='rounded-lg' src={img3} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>

                        <div className='text-xl font-medium mt-10'>
                            Some Special Care From Us:
                            <div>
                                {care1}
                            </div>
                            <div>
                                {care2}
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        reviews.map(review => {
                            return (
                                <div class="p-8 border rounded-lg dark:border-gray-700">
                                    <p class="leading-loose text-gray-500 dark:text-gray-400">
                                        {review.review01}, {review.review02}, {review.review03}.
                                    </p>
                                    <div class="flex justify-center align-middle items-center mt-8 -mx-2">
                                        <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>

            <div className='container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8'>
                {
                    user?.email ? <div className="flex mt-10 text-center dark:bg-gray-900 dark:text-gray-100">
                        <form onSubmit={handleReview} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                            <h1 className='text-2xl '>


                                Hii {user?.displayName ?
                                    user?.displayName : user?.email
                                } Now You can submit your review



                            </h1>
                            <label for="username" className="self-start text-xs font-semibold">You Name</label>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered input-primary   w-full max-w-xs" defaultValue={user?.displayName} readOnly/>
                            <label htmlfor="review" className="self-start mt-3 text-xs font-semibold">Your Review</label>
                            <textarea name="review" className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                            <input type="submit" className='btn btn-primary mt-5' value="Submit Your Review" />
                        </form>

                        <ToastContainer />
                    </div> :

                        <h2 className='text-3xl ml-5 text-left mt-5 font-semibold '> Please <span className='text-red-600 '><Link to='/login'>login</Link></span> For Sumit Your Review</h2>


                }
            </div>

        </section>
    );
};

export default SinglePost;