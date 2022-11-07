import React from 'react';
import { Link } from 'react-router-dom';

const OurRecommend = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center font-bold m-10'>All Our Recommended Destinations</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 container mx-auto'>
            <div>
                <div className="hero lg:min-h-screen min-h-full" style={{  backgroundImage: `url("https://detour.hibootstrap.com/images/tour/single-tour-4.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 lg:text-4xl  font-bold">Australia</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="hero lg:min-h-screen min-h-full" style={{ backgroundImage: `url("https://detour.hibootstrap.com/images/tour/rec_tour_2.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 lg:text-4xl  font-bold">Newzealand</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="hero lg:min-h-screen min-h-full" style={{ backgroundImage: `url("https://detour.hibootstrap.com/images/tour/rec_tour_3.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 lg:text-4xl  font-bold">Egypt</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurRecommend;