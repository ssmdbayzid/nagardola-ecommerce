import { Rate } from 'antd'
import React from 'react'

export default function ReviewModal({product}) {    
    
  return (
    <div>
              
        {product.map(prod=> <div keys={prod.name} className="">
        <div className="flex items-center justify-between pb-2">
        {/* <h2 className='title'>{Write A Review}</h2> */}
        <h2 className='text-secondary font-bold text-2xl'>{prod.name}</h2>
        <h2 className='sub_title'>X</h2>
        </div>
        <hr />
        <div className="flex items-center gap-3 mt-4">
        <img src={prod.images[0]} className='w-24' alt="" />
        <div className="">
            <h2 className='sub_title text-secondary'>{prod.name}</h2>
            <p className='sub_title'>${(prod.discount_price).toFixed(2)} <del>${(prod.previous_price).toFixed(2)}</del></p>
        </div>
        </div>

        <div className="flex items-center gap-2">
            <p className='text-secondary font-bold text-lg'>Review Content : </p>
            <Rate defaultValue={3.5} allowHalf allowClear />
        </div>
        </div>
        )}
    </div>
  )
}
