import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreateCartQty, getTotal } from '../../app/features/cartSlice'
import { Table } from 'antd'

import { FiPlus, FiMinus } from "react-icons/fi";


export default function ShoppingCart() {
  
  const [pageSize, setPageSize] = useState(3); // Default items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page

  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[dispatch, cart])
  

  
  
  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      width: '50%',
      render: (product)=> (
        <div className="flex items-center gap-3 w-full">
          <div className="w-24 h-20 border">
          <img src={product?.images[0]} alt="" className='w-full h-full object-fill'/>
          </div>
          <div className="overflow-hidden">
            <p className='font-semibold text-secondary text-ellipsis overflow-hidden text-nowrap'>{product?.name}</p>
            <p className='text-ellipsis overflow-hidden text-nowrap'> Sold By: {product.soldBy}</p>
            <p> Size: {product.size[0]}</p>
          </div>
        </div>
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width:'10%',
      render: (price) => <p>${price}</p>
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render: (product)=> (
      <div className="flex gap-2 items-center justify-center">        
         <p onClick={()=>dispatch(decreateCartQty(product))}
          className='border p-2 cursor-pointer'> <FiMinus  /></p>
          <input type="text" value={product?.cartQty} className='border w-12 text-center text-md py-1' />
         <p 
         onClick={()=>dispatch(addToCart(product))}
         className='border p-2 cursor-pointer'> <FiPlus  /> </p>       
      </div>
      )
    },
    {
      title: 'Total',
      dataIndex: 'total',
      width:'15%',
      render: (total)=> <p>{total.toFixed(2)}</p> ,
    },
  ];

  const tableData = cart?.cartItems.map(item=> ({
    product: item,
    price: item.discountPrice,
    quantity: item,
    total: (item.discountPrice * item.cartQty),
  }))


  return (
    <div className='container flex items-start'>
      <div className="w-2/3">
      <div className="flex items-center justify-between mt-5 pb-5 border-b">
        <h2 className='heading'>Shopping Cart</h2>
        <h2 className='heading'>{cart.cartItems?.length} Items</h2>
      </div>
      <div className="pt-5">
      <Table dataSource={tableData} columns={columns} bordered sticky
      pagination={{
        pageSize: pageSize,        
        pageSizeOptions: [3, 5, 10],        
        showSizeChanger: true,                 
        onShowSizeChange: (current, size)=>{
          setPageSize(size);
          setCurrentPage(1);
        },        
        current: currentPage,
        onChange: (page) => setCurrentPage(page), 
      }}
      />
      </div>
      </div>

    </div>
  )
}
