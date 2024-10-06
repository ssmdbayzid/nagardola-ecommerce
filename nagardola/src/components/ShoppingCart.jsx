
import React, { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { GoTrash, } from "react-icons/go";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button, Input } from 'antd';
import { addToCart, decreateCartQty, getTotal, removeCartItem } from '../app/features/cartSlice';

export default function ShoppingCart({openDrawer, setOpenDrawer}) {
    const cart = useSelector(state=>state.cart);    
    const cartTotalAmount = useSelector(state=>state.cart.cartTotalAmount);    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTotal())
    },[dispatch, cart])
    
    return (
        <div className='flex flex-col h-full'>
            <div className="flex items-center justify-between bg-slate-300 py-5 px-4">
                <h2 className='heading'>Shopping Cart</h2>
                <IoMdClose onClick={()=>setOpenDrawer(!openDrawer)} className='text-2xl cursor-pointer' />
            </div>
            <div className="p-3  flex-1 overflow-y-auto">
            {cart.cartItems.map((item, index)=> 
            <div className="flex gap-3  justify-between mb-2">
                <div className="w-1/3 h-24 border">
                    <img src={item.images[0]} alt="" className='w-full h-full object-fill p-1 ' />
                </div>
                <div className=" overflow-hidden">
                    <h3 className='sub_title text-secondary  text-ellipsis text-nowrap overflow-hidden'>{item.name}</h3>
                    <p  className='text-lg font-bold '>${item.discountPrice} <del className='text-accent'>${item.price}</del></p>
                    <div className="flex items-center gap-2">    
                        <Button
                        onClick={()=>dispatch(decreateCartQty(item))}                        
                        size="small"><FiMinus /> </Button>     
                        <Input size='small' value={item.cartQty} className='w-14 text-center'/>                               
                        <Button
                        onClick={()=>dispatch(addToCart(item))}
                        size="small"><FiPlus /> </Button>               
                        <Input size='middle' value={"$" + item.discountPrice * item.cartQty} className='w-28 border-primary text-md text-primary font-semibold text-center'/>                               
                    </div>
                </div>
                <GoTrash 
                onClick={()=>dispatch(removeCartItem(item))}                                        
                className='text-2xl cursor-pointer hover:text-red-600'/>
            </div>
            )}
            </div>
            <div className='pb-5'>
                <div className="flex items-center justify-between px-3 pb-2">
                    <p className='font-bold text-lg'>Total :</p>
                    <p className='text-lg font-semibold text-accent'>$ {cartTotalAmount.toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex gap-3 px-3 mt-3">
                <a href="/cart" className='block w-1/2 bg-slate-700'><Button  className='rounded-none w-full' size="large">View Cart </Button></a>
                <a href="/checkout" className='block w-1/2 bg-slate-700'><Button  className=' rounded-none bg-secondary text-white w-full' size="large">Checkout </Button></a>                    
                </div>
            </div>
        </div>
    )
}
