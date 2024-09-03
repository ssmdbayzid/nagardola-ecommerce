import React from 'react'

export default function StyleBanner() {
  return (
    <div className='container section flex items-center gap-4'>
    <div data-aos="fade-right" className="w-1/2 lg:h-[500px] ">    
    <img 
    className='w-full h-full object-cover '
    src="https://themes.pixelstrap.net/katie/assets/images/banner/banner-4.png" alt="" />
    
    </div>
    <div 
    data-aos="fade-left"
    className="relative w-1/2 ">
        <div className="">
        <p className='uppercase underline text-2xl text-primary mb-3'>Wear your Style</p>
        <h2 className='heading text-4xl font-bold pb-4'>Top Brand Best 4+ Start Rated</h2>
        <p className='text_para text-2xl mb-5'>On Fashion Online  Shopping</p>
        </div>        
        <img 
        className=''
        src="https://themes.pixelstrap.net/katie/assets/images/banner/banner-5.jpg" alt="" />
        
    </div>
    </div>
  )
}
