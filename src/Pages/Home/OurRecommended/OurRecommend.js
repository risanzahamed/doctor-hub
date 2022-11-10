import React from 'react';
import { Link } from 'react-router-dom';

const OurRecommend = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center font-bold m-10'>My Best Services and 100% Successful</h1>
            </div>
            <div className='grid w-100 grid-cols-3 gap-4 container mx-auto'>
                <div>
                    <div>
                        <img src="http://jituchauhan.com/physiotherapy/physiotherapy-blue/images/service-3.jpg" alt="" srcSet="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="http://jituchauhan.com/physiotherapy/physiotherapy-blue/images/service-4.jpg" alt="" srcSet="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="http://jituchauhan.com/physiotherapy/physiotherapy-blue/images/service-5.jpg" alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRecommend;