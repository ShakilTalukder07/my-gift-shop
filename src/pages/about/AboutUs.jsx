import React from 'react';
import box from '../../assets/box1.jpg';
import quote from '../../assets/quote.svg';
import company1 from '../../assets/company1.png';
import company2 from '../../assets/company2.png';
import company3 from '../../assets/company3.png';
import company4 from '../../assets/company4.png';
import { FiSettings } from 'react-icons/fi';
import { GiWorld } from "react-icons/gi";
import { BsFillPersonFill, BsFillEyeFill } from "react-icons/bs";


const AboutUs = () => {
    return (
        <div>
            <div className='bg-[#ECACAB] py-14'>
                <h1 className='text-3xl text-white text-center font-semibold'>ABOUT</h1>
                <p className='text-white text-center mt-2'>Home / About</p>
            </div>
            <div className="hero bg-white text-black py-[50px]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full md:w-1/2 lg:w-1/2 text-start'>
                        <div>
                            <h1 className='text-3xl '>GIFTS WORTH REMEMBERING</h1>
                            <hr className='w-20 mb-10' />
                            <p className='mb-10'>Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat</p>
                            <img className='w-3 lg:w-6' src={quote} alt="" />
                            <p className='text-xl mb-5'>Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod. Sed arcu. Cras consequat</p>
                            <p className='font-bold'>Julia Donovan.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <img className='h-[400px] w-[1200px]' src={box} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-3xl font-semibold text-center mb-5'>BETTER PRODUCTS.LOWER PRICES....</h1>
                    <p className='text-3xl text-center font-semibold mb-5'>&</p>
                    <h2 className='text-xl font-semibold text-center mb-5'>Put A Smile On Their Face... Show That You Care</h2>
                    <p className='text-center'>Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh,viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-20 mx-20'>
                    <div className='flex'>
                        <span className='text-3xl m-3'><GiWorld /> </span>
                        <div>
                            <h3 className='text-xl mb-2'>Perfect Gift For Your Beloved</h3>
                            <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <span className='text-3xl m-3'><FiSettings /> </span>
                        <div>
                            <h3 className='text-xl mb-2'>Making Any Occasion Better</h3>
                            <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <span className='text-3xl m-3'> <BsFillPersonFill /> </span>
                        <div>
                            <h3 className='text-xl mb-2'>We Sell The Sign Of Love</h3>
                            <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <span className='text-3xl m-3'> <BsFillEyeFill /> </span>
                        <div>
                            <h3 className='text-xl mb-2'>The Rare Heavenly Flowers</h3>
                            <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-3xl text-center font-semibold mb-14'>OUR CUSTOMERS</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 mb-32'>
                    <img src={company1} alt="" />
                    <img src={company2} alt="" />
                    <img src={company3} alt="" />
                    <img src={company4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;