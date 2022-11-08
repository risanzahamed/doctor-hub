import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';
import { toast } from 'react-toastify';



const SinglePost = () => {
    const data = useLoaderData()
    const { user, UserlogOut } = useContext(AuthContext);

    const handleUserLogout = () => {
        UserlogOut()
            .then(toast('User logged out!'))
            .catch(error => console.log(error))
    }
    console.log(user);
    const { name, img, category, description, tourImages, ratingsCount, price, ratings, duration } = data
    const { img1, img2, img3 } = tourImages

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
                                Price: ${price} / <span>Duration: {duration}</span>
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



                    </div>

                    <div>
                        <h1 className='text-3xl ml-5 font-medium text-blue-600'>Book A Tour</h1>
                        {
                            user?.email ? <div className="flex mt-10 text-center dark:bg-gray-900 dark:text-gray-100">
                            <form novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                                <h1 className='text-2xl '>


                                    Hii {user?.displayName ?
                                        user?.displayName : user?.email
                                    } Now You can book a tour

                                </h1>
                                <label for="username" className="self-start text-xs font-semibold">You Name</label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-primary   w-full max-w-xs" />
                                <label htmlfor="review" className="self-start mt-3 text-xs font-semibold">Your Review</label>
                                <textarea className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                                <input type="submit" className='btn btn-primary mt-5' value="Submit Your Review" />
                            </form>
                        </div> : <h2 className='text-3xl mt-5 ml-5 font-semibold '> Please <span className='text-red-600 '><Link to='/login'>login</Link></span> For Book a tour</h2>
                        }
                    </div>
                </div>
            </div>

            <div>
                {
                    user?.email ? <div className="flex mt-10 text-center dark:bg-gray-900 dark:text-gray-100">
                    <form novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                        <h1 className='text-2xl '>


                            Hii {user?.displayName ?
                                user?.displayName : user?.email
                            } Now You can submit your review

                            

                        </h1>
                        <label for="username" className="self-start text-xs font-semibold">You Name</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary   w-full max-w-xs" />
                        <label htmlfor="review" className="self-start mt-3 text-xs font-semibold">Your Review</label>
                        <textarea className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                        <input type="submit" className='btn btn-primary mt-5' value="Submit Your Review" />
                    </form>
                </div> :
                
                <h2 className='text-3xl ml-5 text-left mt-5 font-semibold '> Please <span className='text-red-600 '><Link to='/login'>login</Link></span> For Sumit Your Review</h2>


                }
            </div>
        </section>
    );
};

export default SinglePost;