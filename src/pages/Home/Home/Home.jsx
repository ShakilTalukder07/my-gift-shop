import React from 'react';
import Banner from '../Banner/Banner';
import ItemBanner from '../ItemBanner/ItemBanner';
import OrderSystem from '../orderSystem/OrderSystem';
import Testimonial from '../testimonial/Testimonial';

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