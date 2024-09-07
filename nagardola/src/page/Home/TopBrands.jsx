import React, { useRef, useState } from 'react';
import { ArrowRightOutlined, SwapRightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

import './TopBrands.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const brandLogo = [
    "https://themes.pixelstrap.net/katie/assets/images/logos/1.png",
    "https://themes.pixelstrap.net/katie/assets/images/logos/2.png",
    "https://themes.pixelstrap.net/katie/assets/images/logos/3.png",
    "https://themes.pixelstrap.net/katie/assets/images/logos/4.png",
    "https://themes.pixelstrap.net/katie/assets/images/logos/5.png",
    "https://themes.pixelstrap.net/katie/assets/images/logos/6.png",
    "https://themes.pixelstrap.net/katie/assets/images/logos/7.png"
]

export default function TopBrands() {
  
    return (
        <div className='section container flex items-center gap-4'>
            <div className="w-full max-w-[200px]">
                <h2 className='title'>Top Brands</h2>
                <p className='text_para'>Up to 40% off</p>
                <div className="relative overflow-hidden group py-2">
                    <a href="#" className='absolute w-full top-2 left-0 group-hover:-top-[120%] text-primary underline transition-all duration-500 text-xl font-bold flex items-center gap-2'>
                        Shop Now
                        <ArrowRightOutlined className='text-lg' />
                    </a>
                    <a href="#" className='relative text-secondary underline translate-y-[120%]  group-hover:translate-y-0 transition-all duration-500 text-xl font-bold flex items-center gap-2'>
                        Shop Now
                        <ArrowRightOutlined className='text-lg' />
                    </a>
                </div>
            </div>                
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}                   
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    navigation={true}
                    className="swiper2"
                >
                    {brandLogo.map(image =>
                    <SwiperSlide className="">
                    <img src={image} key={image}  alt='Brand Logo' className='' />
                    </SwiperSlide>)}
                </Swiper>                            
        </div>
    )
}
