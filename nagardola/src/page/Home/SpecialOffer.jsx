import React from 'react'
import {Flex, Image} from 'antd'
import SpecialOfferCard from '../../components/SpecialOfferCard'

export default function SpecialOffer() {
  return (
    <div className='container section'>
    <div className='flex gap-10'>
    <div className="w-2/3 ">
        <img data-aos="fade-down-right" src='https://themes.pixelstrap.net/katie/assets/images/banner/banner-7.jpg'
        className='w-full h-[300px] object-cover mb-5' alt='banner' />
        <img data-aos="fade-up-right" src='https://themes.pixelstrap.net/katie/assets/images/banner/banner-8.jpg'
        className='w-full h-[300px] object-cover' alt='banner' />
    </div>
    <div data-aos="fade-left" className="w-1/3">
    <SpecialOfferCard />
    </div>
    </div>
    </div>
  )
}
