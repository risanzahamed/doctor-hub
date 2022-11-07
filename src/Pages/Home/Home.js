import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import OurRecommend from './OurRecommended/OurRecommend';
import Tours from './Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <OurRecommend/>
            <Tours/>

        </div>
    );
};

export default Home;