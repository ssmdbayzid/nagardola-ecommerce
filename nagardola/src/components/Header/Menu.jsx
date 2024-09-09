import React, { useState } from 'react'
import { CiSearch, CiHeart, CiUser  } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import { ShoppingOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const navLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Shop",
        link: "/shop"
    },
    {
        name: "Product",
        link: "/product"
    },
    {
        name: "Offer",
        link: "/offer"
    },
    {
        name: "Page",
        link: "/page"
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]
export default function Menu() {
    const [count, setCount] = useState(0)

  return (
    <div className='container flex items-center justify-between py-3'>
        <div className="logo">
           <a href="/"> <img src="https://themes.pixelstrap.net/katie/assets/images/logo/logo.png" alt="" className='w-[150px]'/></a>
        </div>
    <ul className='flex items-center gap-5 text-accent font-semibold'>
        {navLinks.map(link=> 
            <li key={link.name} className='text-[16px]'>
                {link.name}
            </li>
        )}
    </ul>
    <div className="flex items-center gap-5 ">
        <CiSearch  className='text-[30px]'/>
        <div className="relative">
        <CiHeart className='text-[30px]'/>
        <span className='absolute -top-1 -right-2 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center'>1</span>
        </div>

        <Badge count={count} showZero color="#cca370">
        <BsBasket3 className="text-2xl" />
        </Badge>

        <CiUser  className='text-[30px]'/>
        <span className='text-lg'>0 items</span>
    </div>
    </div>
  )
}
