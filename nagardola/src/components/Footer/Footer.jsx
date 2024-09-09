import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";


export default function Footer() {


  const pages = [
    {
      displayName: "Home",
      link: "/home"
    },
    {
      displayName: "Shop",
      link: "/shop"
    },
    {
      displayName: "About",
      link: "/about"
    },
    {
      displayName: "Blog",
      link: "/blog"
    },
    {
      displayName: "Contact",
      link: "/contact"
    },
  ]
  const categories = [
    {
      displayName: "Latest Shoes",      
    },
    {
      displayName: "Branded Jeans",      
    },
    {
      displayName: "New Jackets",      
    },
    {
      displayName: "Colorful Hoodies",
    },
    {
      displayName: "Best Perform",      
    },
  ]

  const helps = [
    {
      displayName : "Your Orders"
    },
{
  displayName : "Your Account"
},
{
  displayName : "Track Orders"
},
{
  displayName : "Your Wishlist"
},
{
  displayName : "Shopping FAQs"
}
  ]

  const accounts = [ 
    {displayName : "My Account"},
    {displayName :"Login/Register"},
    {displayName :"Cart"},
    {displayName :"Order History"},
    {displayName : "Delivery FAQs"},
  ]

  return (
    <div className="mt-20 bg-[url('https://themes.pixelstrap.net/katie/assets/css/fc4584f9f8a0cf77ff69.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container py-20 grid grid-cols-5 gap-5">
        <div className="">
          <img
          className='mb-2'
          src="https://themes.pixelstrap.net/katie/assets/images/logo/logo-white-1.png" alt="" />
          <div className="flex gap-2">

          </div>          
          <p className='footer_text flex items-center'> <IoLocationOutline  className='w-10 h-10 mr-3'/> Address: Suite 3245 Cottonwood, United States</p>
          <p className='footer_text flex items-center'> <BsTelephone  className='mr-3'/> + 185659635</p>
          <p className='footer_text flex items-center'> <BsTelephone  className='mr-3'/> contact@katie.com</p>          
        </div>
        <ul>
          <h2 className='footer_text text-center border-r border-2'>About Us</h2>
          {
            pages.map(list=><li key={list.displayName} className='footer_text'><a href={list.link}>{list.displayName}</a></li>)
          }
        </ul>
        <div className="">
        <ul>
          <h2 className='footer_text text-center border-r border-2'>New Category</h2>
          {
            categories.map(list=><li key={list.displayName} className='footer_text'>{list.displayName}</li>)
          }
        </ul>
        </div>
        <div className="">
        <ul>
          <h2 className='footer_text text-center border-r border-2'>Helps</h2>
          {
            helps.map(list=><li key={list.displayName} className='footer_text'>{list.displayName}</li>)
          }
        </ul>
        </div>
        <div className="">
        <ul>
          <h2 className='footer_text text-center border-r border-2'>Accounts</h2>
          {
            accounts.map(list=><li key={list.displayName} className='footer_text'>{list.displayName}</li>)
          }
        </ul>
        </div>
      </div>
    </div>
  )
}
