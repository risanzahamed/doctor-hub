import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen  min-h-full" style={{ backgroundImage: `url("http://jituchauhan.com/physiotherapy/physiotherapy-blue/images/slider-3.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 lg:text-8xl text-2xl p-5 font-bold">Dr. Mihfuzur Rahman  Best  <br />
                       Therapist in Chittagong</h1>

                   <Link to='/services'> <button className='btn btn-primary capitalize mt-5 '>See My All Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;