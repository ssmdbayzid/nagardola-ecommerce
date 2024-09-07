import { Carousel } from 'antd'
import React, { useRef } from 'react'
import  './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay } from 'swiper/modules';


export default function Testimonial() {
    
  return (
    <div className="section container">
      <div className="mb-5">
        <p className='sub_title flex items-center gap-4'>Follow Us On Insta <span className='inline-block h-1 w-[75px] bg-accent/40'></span> </p>
        <h2 className='title'>Our Instagram Post</h2>
      </div>
      <Swiper
        modules={[Autoplay]}                
        slidesPerView={3}
        spaceBetween={30}       
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}        
        className="swiper1"
        id="swiperId"
      >        
        <SwiperSlide >
        <div className="h-[400px]">
        <img 
        className='w-full h-full object-cover'
        src="https://themes.pixelstrap.net/katie/assets/images/instagram/7.jpg" alt="" />
        </div>          
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[400px]">
        <img 
        className='w-full h-full object-cover'
        src="https://themes.pixelstrap.net/katie/assets/images/instagram/8.jpg" alt="" />    
        </div>  
        </SwiperSlide>              
        <SwiperSlide>
        <div className="h-[400px]">
        <img 
        className='w-full h-full object-cover'
        src="https://themes.pixelstrap.net/katie/assets/images/instagram/9.jpg" alt="" />    
        </div>  
        </SwiperSlide>              
        <SwiperSlide>
        <div className="h-[400px]">
        <img 
        className='w-full h-full object-cover'
        src="https://themes.pixelstrap.net/katie/assets/images/instagram/10.jpg" alt="" />    
        </div>  
        </SwiperSlide>              
        <SwiperSlide>
        <div className="h-[400px]">
        <img 
        className='w-full h-full object-cover'
        src="https://themes.pixelstrap.net/katie/assets/images/instagram/7.jpg" alt="" />    
        </div>  
        </SwiperSlide>              
      </Swiper>
    </div>
  )
}
