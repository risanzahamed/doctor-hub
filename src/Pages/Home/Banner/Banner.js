import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen min-h-full" style={{ backgroundImage: `url("https://detour.hibootstrap.com/images/banner1.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 lg:text-8xl  font-bold">Make Tour & Explore <br />
                        Incredible Destinations</h1>

                   <Link to='/tour'> <button className='btn btn-success text-1xl mt-5 font-bold'>See Our Tour</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;