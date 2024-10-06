import React, { useContext, useState } from 'react'
import { CiSearch, CiHeart, CiUser  } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import { ShoppingOutlined, SmileOutlined, SettingOutlined   } from '@ant-design/icons';
import { Badge, Button, Drawer,  } from 'antd';
import { useSelector } from 'react-redux'
import { IoMdClose } from "react-icons/io";
import ShoppingCart from '../ShoppingCart';
import { AuthContext } from '../../context/AuthProvider';
import { DownOutlined } from '@ant-design/icons';
import {  Divider, Dropdown, Space, theme } from 'antd';


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


const items = [
    {
      key: '1',
      label: <a href="/dashboard">My Account</a>,
      
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: ( <a href="/signup">Sign Up</a>),
      extra: '⌘P',
    },
    {
      key: '3',
      label: ( <a href="/login">Log In</a>),
      extra: '⌘B',
    },    
  ];

export default function Menu() {
    const [openDrawer, setOpenDrawer] = useState(false)
    
    const {user} = useContext(AuthContext)
    console.log(user)

    
    const cartItems = useSelector((state)=>state.cart.cartItems);
    const favoriteItems = useSelector(state => state.favorite.favoriteItems)    
  return (
    <div className="">
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
        
        <Badge count={favoriteItems.length} showZero color="#cca370">
        <CiHeart className='text-[30px] cursor-pointer'/>
        </Badge>
        

        <Badge count={cartItems.length} showZero color="#cca370">
        <BsBasket3 
        onClick={()=>setOpenDrawer(!openDrawer)}
        className="text-2xl cursor-pointer" />
        </Badge>

        <Dropdown 
        placement="bottom"
        menu={{items}}>
        <CiUser  className='text-[30px] cursor-pointer'/>
        </Dropdown>
        <span className='text-lg'>0 items</span>
    </div>
    </div>
    <Drawer                
        placement="right"
        closable={false}        
        onClose={()=>setOpenDrawer(!openDrawer)}
        open={openDrawer}                 
        style={{padding: '0'}}
      >              
        <ShoppingCart openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
      </Drawer>
    </div>
  )
}
