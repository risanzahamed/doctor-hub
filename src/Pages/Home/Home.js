import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import OurRecommend from './OurRecommended/OurRecommend';
import Services from './Services/Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <OurRecommend/>
            <Services/>

        </div>
    );
};

export default Home;