import React from 'react';
import box4 from '../../../assets/box-4.png';
import box5 from '../../../assets/box-5.png';
import person from '../../../assets/person1.png';

const OrderSystem = () => {
    return (
        <div>
            <div className='flex justify-evenly py-5'>
                <img className='h-40 w-40' src={box4} alt="" />
                <div className='text-center'>
                    <h3 className='text-2xl mb-5 font-semibold'>Order Now</h3>
                    <h1 className='text-5xl font-bold mb-5'>Our Products Collections</h1>
                    <p className='mb-5'>Blossoms live in every color and aroma.
                        Beautifully share your emotions with our garden flowers.
                    </p>
                </div>
                <img className='h-40 w-40' src={box5} alt="" />
            </div>
            <div className="hero bg-white text-black py-[50px]">
                <div className="hero-content flex-col lg:flex-row">

                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <img className='h-[400px] w-[1200px]' src={person} alt="" />
                    </div>

                    <div className='w-full md:w-1/2 lg:w-1/2 text-center'>
                        <div className='flex flex-col gap-4 text-start'>
                            <div className='flex'>
                                <span className='text-3xl shadow-lg rounded-full p-5 m-3'>1</span>
                                <div>
                                    <h1 className='text-2xl'>Choose Gifts</h1>
                                    <p>
                                        Facilisis sed odio morbi quis commodo odio. Tristique et egestas quis ipsum suspendisse ultrices.
                                    </p>
                                </div>
                            </div>
                            <div className='flex'>
                                <span className='text-3xl shadow-lg rounded-full p-5 m-3'>2</span>
                                <div>
                                    <h1 className='text-2xl'>Place an Order</h1>
                                    <p>
                                        Facilisis sed odio morbi quis commodo odio. Tristique et egestas quis ipsum suspendisse ultrices.
                                    </p>
                                </div>
                            </div>
                            <div className='flex'>
                                <span className='text-3xl shadow-lg rounded-full p-5 m-3'>3</span>
                                <div>
                                    <h1 className='text-2xl'>Get Plants Delivered</h1>
                                    <p>
                                        Facilisis sed odio morbi quis commodo odio. Tristique et egestas quis ipsum suspendisse ultrices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSystem;