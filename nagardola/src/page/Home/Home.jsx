import React from 'react'
import HeroSection from './HeroSection'
import  './Home.css'
import Facilities from './Facilities'
import SpecialOffer from './SpecialOffer'
import StyleBanner from './StyleBanner'
import SpecialProduct from './SpecialProduct'
import SaleProduct from './SaleProduct'
import TopBrands from './TopBrands'
import Subscribe from './Subscribe'
import Testimonial from './Testimonial'


export default function Home() {
  return (
    <>
    <HeroSection />
    <Facilities />
    <SpecialOffer />
    <SpecialProduct />
    <StyleBanner />
    <SaleProduct />
    <TopBrands />    
    <Subscribe />
    <Testimonial />
    </>
  )
}
