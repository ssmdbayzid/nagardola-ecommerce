import React, { useState } from 'react'
import {Button, Input, Space} from 'antd'
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { RxHeart, RxRulerHorizontal, RxShare1 } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoIosGitCompare } from "react-icons/io";
import { GiTimeTrap } from "react-icons/gi";

import logo1 from '../../assets/payment-logo (1).png'
import logo2 from '../../assets/payment-logo (2).png'
import logo3 from '../../assets/payment-logo (3).png'
import logo4 from '../../assets/payment-logo (4).png'


const product = [  
    {
        name: "Greciilooks Women's Stylish Top",
        discount_price: 100.00,
        previous_price: 140.00,
        images: [
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/8.jpg",
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/12.jpg"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse aspernatur voluptatibus quas eum, nam at quae, accusantium autem totam eligendi? Tempora possimus sed praesentium aliquid inventore, ut obcaecati provident?",
    }
]

export default function ProductDetails() {
  const [size, setSize] = useState('s')
  const [color, setColor] = useState('golded')

  
  return (
    <div className="">
      <div className="bg-accent/20 py-5">
      <div className="container flex items-center justify-between bg">
        <h2 className='heading'>Product</h2>
        <h2 className='text_para text-secondary'>Home / Product</h2>
      </div>
      </div>
    <div className='py-10 container'>      
     {product.map(pro=> 
     <div className="flex flex-start  gap-5">
        <div className=" w-1/2 h-[500px] sticky top-10 ">
          <img src={pro.images[0]} className='h-full w-full object-fill' alt="" />
        </div>
        <div className="w-1/2 float-left">
        <Button size="large" className='bg-accent/10 border-none'>Move Fast</Button>
        <h2 className='title'>{pro.name}</h2>
        <h3 className='heading font-bold flex items-center gap-3'>${pro.discount_price} <del className='text-accent'>${pro.previous_price}</del>
        <Button className='text-red-600 bg-red-100 border-none font-  bold'>{pro.previous_price / pro.discount_price * 10 }</Button> </h3>
        <div className='flex gap-2 items-center'>
          <span className='flex gap-1'>{
          [...Array(5).keys()].map((_,index)=> <FaStar keys={index} className='text-primary'/>)
        }</span>
        <span className='font-semibold text-lg'>4.3</span>      
        </div>
        <p className='text_para'>{pro.description}</p>
        <div className="flex items-center gap-3 text-lg text-accent py-3">
          <span className="flex items-center gap-2">
          <RxRulerHorizontal />
          <span>Size Chart</span>          
          </span>
        
          <span className="flex items-center gap-2">
          <CiDeliveryTruck />
          <span>Delivery Terms & Condition</span>          
          </span>

          <span className="flex items-center gap-2">
          <RxQuestionMarkCircled />
          <span>Ask a Question</span>          
          </span>
        </div>
        <hr />
        <p className='text-xl font-bold py-2'>Size</p>
        <div className="flex items-center gap-3">
        <Button onClick={()=>setSize('s')} className={`${size == 's' && 'text-white bg-primary'} font-semibold`} shape="circle">S</Button>  
        <Button onClick={()=>setSize('m')} className={`${size == 'm' && 'text-white bg-primary'} font-semibold`} shape="circle">M</Button>  
        <Button onClick={()=>setSize('l')} className={`${size == 'l' && 'text-white bg-primary'} font-semibold`} shape="circle">L</Button>  
        <Button onClick={()=>setSize('xl')} className={`${size == 'xl' && 'text-white bg-primary'} font-semibold`} shape="circle">XL</Button>  
        </div>

        <p className='text-xl font-bold py-2'>Color</p>

        <div className="flex items-center gap-3">
        <Button onClick={()=>setColor('golden')} className={`${color == 'golden' && 'outline outline-accent/20'} text-white bg-primary font-semibold`} shape="circle"></Button>  
        <Button onClick={()=>setColor('black')} className={`${color == 'black' && 'outline outline-accent/20'} text-white bg-secondary font-semibold`} shape="circle"></Button>  
        <Button onClick={()=>setColor('gray')} className={`${color == 'gray' && 'outline outline-accent/20'} text-white bg-accent font-semibold`} shape="circle"></Button>  
        <Button onClick={()=>setColor('white')} className={`${color == 'white' && 'outline outline-accent/20'} text-white bg-white font-semibold`} shape="circle"></Button>  
        </div>
        <div className="flex items-center gap-5 mt-3">
                  <Button size="large" className='bg-primary text-white font-bold rounded-none'>Add to Cart</Button>
          <Button size="large" className=' font-bold rounded-none'>Buy Now</Button>
        </div>
        <div className="flex items-center gap-3 text-lg text-accent py-3">
          <span className="flex items-center gap-2">
          <RxHeart />
          <span>Add to Wishlist</span>          
          </span>
        
          <span className="flex items-center gap-2">
          <IoIosGitCompare />
          <span>Add to Compare</span>          
          </span>

          <span className="flex items-center gap-2">
          <RxShare1 />
          <span>Share</span>          
          </span>
        </div>
        <div className="p-3 bg-accent/20">
          <span className='flex items-center gap-2'>
          <GiTimeTrap className='text-accent'/>
          Limited Time Left: Hurry!! Sale Ending
          </span>
        </div>

        <ul className='list-disc pl-4 mb-5'>
          <li className='my-2'> <span className='font-semibold mr-2 '>Sky:</span> SKU_45</li>
          <li className='my-2'> <span className='font-semibold mr-2 '>Available:</span> Pre-Order.</li>
          <li className='my-2'> <span className='font-semibold mr-2 '>Tags:</span> Color Pink Clay, Athletic, Accessories, Vendor Kollies</li>
          <li className='my-2'> <span className='font-semibold mr-2 '>Vendor:</span> Banalchagia</li>
        </ul>
        <hr />
        <p className='font-bold text-lg py-2'>Secure Checkout</p>
        <div className="flex items-center gap-5">
          <img src={logo1} className='w-24 object-cover' alt="" />        
          <img src={logo2} className='w-24 object-cover' alt="" />        
          <img src={logo3} className='w-24 object-cover' alt="" />        
          <img src={logo4} className='w-24 object-cover' alt="" />        
        </div>
        </div>        
      </div>) }
    </div>
    </div>
  )
}
