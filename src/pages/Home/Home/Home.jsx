import React from 'react';
import ItemBanner from '../ItemBanner/ItemBanner';
import OrderSystem from '../orderSystem/OrderSystem';
import Testimonial from '../testimonial/Testimonial';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ItemBanner></ItemBanner>
            <OrderSystem></OrderSystem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;