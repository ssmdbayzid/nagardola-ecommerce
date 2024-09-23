import React, { useEffect, useState } from 'react'

import { CloseSquareFilled } from '@ant-design/icons';
import { Button, Checkbox, Divider } from 'antd'
import { LuTags } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../app/features/cartSlice';

export default function CheckOut() {
    const [billingAddress, setBillingAddress] = useState(null)
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTotal())
    },[cart, dispatch])


    const address = [
        {
            title:"Shipping Address",
            location: "26, Starts Hollow Colony, Denver, Colorado, United States",
            post_code: 8004,
            mobile: "01619-788808",
        },
        {
            title:"Billing Address",
            location: "201 Maple Drive, Placeholder Town, USA 44556",
            post_code: 94654,
            mobile: "015-17833810",
        },
    ]

      console.log(cart)
  return (
    <div className='container'>
    <div className="flex mt-5  gap-5 item-start">
    <div className="w-2/3 sticky top-20">    
    <p className='pb-3 heading'>Address: </p>  
    <hr />  
    {
        address.map((add, index)=> 
            <div className="mb-5 flex items-start p-5 border gap-5" key={index}>
                <Checkbox checked={add?.title ===  billingAddress?.title}
                value={add}  className="pt-1"/>
                <div onClick={()=>setBillingAddress(add)} className="w-full cursor-pointer">
                <p className='font-bold text-xl'>{add.title}</p>
                <p className='font-bold'>Address: <span className='font-normal'>{add.location}</span> </p>
                <p className='font-bold'>Post Code: <span className='font-normal'>{add.post_code}</span> </p>
                <p className='font-bold'>Phone: <span className='font-normal'>{add.mobile}</span> </p>
                </div>  
            </div>
        )
    }
    </div>
    <div className="w-1/3 bg-accent/20 px-4 py-5">
    <div className=''>
            <h2 className='heading text-center '>Cart Summary</h2>
            <Divider style={{
                borderColor: 'rgb(var(--primary-color))'
            }}/>                  
            <h3 className='font-semibold text-lg '>Price Details ({cart?.cartItems.length} items)</h3>    
            {
                cart?.cartItems.map(item=>
                    <div className="flex gap-2 my-2 justify-between bg-white p-2">
                    <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-16 h-16">
                    <img src={item.images[0]} alt="" className='h-full w-full object-fill' />
                    </div>
                    <div className="overflow-hidden">
                        <p className='text-lg font-bold text-ellipsis overflow-hidden text-nowrap'>{item.name}</p>
                        <p>{item.availableColors[0]}</p>
                    </div>
                    </div>
                    <p>${item.discountPrice * item.cartQty}</p>
                    </div>
                )
            }
           <Divider style={{
                borderColor: 'rgb(var(--primary-color))'
            }}/>     

            <p className='flex items-center justify-between text-accent font-semibold mb-4'>
                <span>Bag Total</span>
                <span>${cart?.cartTotalAmount.toFixed(2)}</span>
            </p>
            <p className='flex items-center justify-between text-accent font-semibold mb-4'>
                <span>Discount</span>
                <span>- $20</span>
            </p>
            <p className='flex items-center justify-between text-accent font-semibold mb-4'>
                <span>Delivery Charge</span>
                <span> $50</span>
            </p>
            <hr />
            <p className='flex items-center justify-between text-secondary font-semibold my-4'>
                <span>Sub Total</span>
                <span> ${cart?.cartTotalAmount - 20 + 50}</span>
            </p>
            <p className='font-semibold py-3'>Taxes and shipping calculated at checkout</p>
            <hr />
            <p className='text-lg font-semibold'>Coupon</p>
            <div className="flex gap-2 mt-5">
                <div className="relative ">
                <input type="text"  placeholder='Coupon' className='w-full py-1.5 ps-8 text-xl border border-accent/20' />     
                <LuTags className='absolute text-accent text-xl top-[55%] left-2 -translate-y-1/2'/>
                </div>           
                
                <Button size='large' className='bg-primary text-white rounded-none '>Apply</Button>
            </div>
            <Button className='w-full mt-5 bg-secondary text-white rounded-none' size='large'><a href="/checkout" className='w-full'>Check Out</a> </Button>
        </div>
    </div>
    </div>
    </div>
  )
}
