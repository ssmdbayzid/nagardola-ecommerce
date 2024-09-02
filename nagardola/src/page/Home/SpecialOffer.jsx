import React from 'react'
import {Flex, Image} from 'antd'
import SpecialOfferCard from '../../components/SpecialOfferCard'

export default function SpecialOffer() {
  return (
    <div className='container'>
    <div className='flex gap-10'>
    <div className="w-2/3 ">
        <img src='https://themes.pixelstrap.net/katie/assets/images/banner/banner-7.jpg'
        className='w-full h-[300px] object-cover mb-5' alt='banner' />
        <img src='https://themes.pixelstrap.net/katie/assets/images/banner/banner-8.jpg'
        className='w-full h-[300px] object-cover' alt='banner' />
    </div>
    <div className="w-1/3">
    <SpecialOfferCard />
    </div>
    </div>
    </div>
  )
}
