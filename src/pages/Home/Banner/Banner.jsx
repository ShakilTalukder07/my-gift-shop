import React from 'react';
import giftBox1 from '../../../assets/giftBox.png';
import giftBox2 from '../../../assets/banner2.png';
import giftBox3 from '../../../assets/banner1.png';
import giftBox4 from '../../../assets/banner3.png';
import giftBox5 from '../../../assets/banner2.png';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#ECACAB] pb-[50px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full md:w-1/2 lg:w-1/2 h-full'>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={0}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 1500
                            }}
                            navigation
                            loop={true}
                            modules={[Pagination, Navigation, Autoplay]}

                            className="mySwiper"
                        >
                            <SwiperSlide><img src={giftBox1} alt='' className=' h-[530px]' /></SwiperSlide>
                            <SwiperSlide><img src={giftBox2} alt='' className=' h-[530px]' /></SwiperSlide>
                            <SwiperSlide><img src={giftBox3} alt='' className=' h-[530px]' /></SwiperSlide>
                            <SwiperSlide><img src={giftBox4} alt='' className=' h-[530px]' /></SwiperSlide>
                            <SwiperSlide><img src={giftBox5} alt='' className=' h-[530px]' /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Find Your Own <br /> Happiness</h1>
                        <p className="py-6">The best gifts for those you love. Desire gift delivery daily <br /> and around a clock.</p>
                        <Link className="bg-white text-black font-semibold px-8 py-4">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;