import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../app/features/cartSlice';
import { Button } from 'antd';
import { LuTags } from "react-icons/lu";

export default function ShoppingSidebar() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getTotal())
    }, [])
    return (
        <div className=''>
            <h2 className='heading text-center py-2'>Cart Summary</h2>
            <hr />
            <h3 className='font-semibold text-lg mt-2'>Price Details ({cart?.cartItems.length} items)</h3>
            <p className='flex items-center justify-between text-accent font-semibold mb-4'>
                <span>Bag Total</span>
                <span>${cart.cartTotalAmount.toFixed(2)}</span>
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
                <span> ${cart.cartTotalAmount - 20 + 50}</span>
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
    )
}
