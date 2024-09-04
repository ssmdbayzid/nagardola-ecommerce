import React from 'react'
import HeroSection from './HeroSection'
import  './Home.css'
import Facilities from './Facilities'
import SpecialOffer from './SpecialOffer'
import StyleBanner from './StyleBanner'
import SpecialProduct from './SpecialProduct'
import SaleProduct from './SaleProduct'


export default function Home() {
  return (
    <>
    <HeroSection />
    <Facilities />
    <SpecialOffer />
    <SpecialProduct />
    <StyleBanner />
    <SaleProduct />
    </>
  )
}
