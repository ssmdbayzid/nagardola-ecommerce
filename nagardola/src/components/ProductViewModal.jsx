import React, { useState } from 'react'
import { Button, Card } from 'antd';
import { Carousel } from 'antd';
import { MinusCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { HiOutlineShoppingBag  } from "react-icons/hi2"


const contentStyle = {
  margin: 0,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function ProductViewModal({ product }) {
  const [orderQty, setOrderQty] = useState(1)
  return (
    <div className='md:flex'>
      <Carousel arrows dots={false} infinite={false} className='w-full md:w-[350px]'>
        {
          product.images.map(img =>
            <div className=" ">
              <img src={img} className="w-full object-cover" />
            </div>
          )}
      </Carousel>
      {/* <!-- Product Details --> */}
      <div class="w-full md:w-1/2 px-4">
        <h2 class="title ">Premium Wireless</h2>        
        <div class="mb-2">
          <span class="text-xl font-bold mr-2">$349.99</span>
          <span class="text-gray-500 line-through">$399.99</span>
        </div>

        <div class="mb-2">
          <h3 class="text-lg font-semibold mb-2">Color:</h3>
          <div class="flex space-x-1">
            <button
              class="w-6 h-6 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button
              class="w-6 h-6 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            <button
              class="w-6 h-6 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          </div>
        </div>
        <h3 className='sub_title text-secondary'>Descripion</h3>      
        <p class=" mb-3">Experience premium sound quality and industry-leading noise cancellation
          with
          these wireless headphones. Perfect for music lovers and frequent travelers.</p>     
          <hr />
          <div class="flex py-2 space-x-2">
            <button
              class="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">s</button>
            <button
              class="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">m</button>
            <button
              class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">l</button>
            <button
              class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">xl</button>
          </div>

          <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
        <div class="mb-6">
          <Button
          disabled={orderQty === 1}
          onClick={()=>setOrderQty(orderQty - 1)}          
          shape="circle" icon={<MinusOutlined />} />
          <input  id="quantity" name="quantity" min="1" value={orderQty}
            class="w-24 mx-2 px-5 py-1.5 font-semibold text-center rounded-md border border-accent/20
            y/20  shadow-sm focus:border-primary/30 focus:ring  focus:ring-opacity-50" />
          <Button
          onClick={()=>setOrderQty(orderQty + 1)}
          shape="circle" icon={<PlusOutlined />} />          
        </div>

        <div class="flex space-x-4 ">
        <Button className='bg-primary text-white'        
        icon={<HiOutlineShoppingBag />} size='large'>
            Add to Card
          </Button>
        <Button className='bg-primary text-white' size='large'>
            <a href="/product/15">View Details</a> 
          </Button>
        </div>        
      </div>
    </div>
  )
}
