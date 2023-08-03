import React from 'react';
import { Link } from 'react-router-dom';
import box1 from '../../../assets/box1.jpg';
import box2 from '../../../assets/box2.jpg';
import box3 from '../../../assets/box3.jpg';

const ItemBanner = () => {
    return (
        <div>
            <div className="hero bg-white text-black py-[70px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='grid grid-cols-2 gap-4'>
                        <div className=' flex flex-col gap-4'>
                            <img className='h-[200px] w-[250px]' src={box1} alt="" />
                            <img className='h-[200px] w-[250px]' src={box2} alt="" />
                        </div>
                        <div>
                            <img className='h-[416px] w-[250px]' src={box3} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2 text-center'>
                        <h2 className='text-3xl font-semibold text-center mb-4'>Desire Gifts</h2>
                        <h1 className="text-5xl font-bold">From Our Hand to Your Table</h1>
                        <p className="py-6">Flowers are carefully selected and handpicked by expert florists to bring smile and happiness.</p>
                        <Link className="bg-black text-white font-semibold px-8 py-4">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemBanner;