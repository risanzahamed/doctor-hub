import React from 'react';
import img1 from '../../../assets/01.jpg'
import img2 from '../../../assets/02.jpg'
import img3 from '../../../assets/03.jpg'

const OurRecommend = () => {
    return (
        <div>
            <div>
                <h1 className='lg:text-4xl text-2xl text-center font-bold m-10'>My Best Services and 100% Successful</h1>
            </div>
            <div className='grid w-100 grid-cols-3 gap-4 container mx-auto'>
                <div>
                    <div>
                        <img src={img1} alt="" srcSet="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={img2}alt="" srcSet="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={img3} alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRecommend;