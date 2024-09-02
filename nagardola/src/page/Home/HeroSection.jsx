import React from 'react'
import { PiInstagramLogo, PiFacebookLogo } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";

const categories = [
    {
        display: "Women's Clothing",
        link: `/products?category=womens_cloth`,
    },
    {
        display: "Men's Clothing",
        link: `/products?category=mens_cloth`,
    },
    {
        display: "Kid's Clothing",
        link: `/products?category=kids_cloth`,
    },
    {
        display: "Watch",
        link: `/products?category=watch`,
    },
    {
        display: "Sports Accessories",
        link: `/products?category=sports_accessories`,
    },
    {
        display: "Sunglass",
        link: `/products?category=sunglass`,
    },
    {
        display: "Bangs",
        link: `/products?category=bags`,
    },
    {
        display: "Sneakers",
        link: `/products?category=sneakers`,
    },
    {
        display: "Jewellery",
        link: `/products?category=Jewellery`,
    },
    {
        display: "Hair Accessories",
        link: `/products?category=hair_accessories`,
    },
    {
        display: "Other",
        link: `/products?category=other`,
    },
]
export default function HeroSection() {
    return (
        <div className='flex '>
            <ul data-aos="fade-right" className="w-1/4 flex flex-col gap-3 ps-10 text-center">
                {categories.map((category, index) =>
                    <li key={index}><a href={category.link} className='font-semibold'>{category.display}</a></li>)}
            </ul>
            <div data-aos="fade-left" className="w-3/4 relative  hero_banner bg-[url('https://themes.pixelstrap.net/katie/assets/images/layout-3/1.jpg')] bg-cover ">
                <div className="w-1/3 ps-10 py-20 float-right mr-20">
                    <p className='uppercase font-semibold text-accent'>Hot offer <span className='underline text-primary'>Start Today</span></p>
                    <h2 className='text-secondary text-4xl font-bold leading-[40px] py-5'>Explore Your True <br /> Creative Fashion</h2>
                    <p className='text_para '>Amet minim molit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
                <p                
                className='absolute top-20 -right-5 uppercase -rotate-90 flex items-center gap-2'>Follow us 
                    <PiInstagramLogo  className='text-accent'/>
                    <FaFacebookF  className='text-accent'/>                    
                </p>
            </div>
        </div>
    )
}
