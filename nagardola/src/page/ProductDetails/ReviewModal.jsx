import { Button, Rate } from 'antd'
import React, { useState } from 'react'

export default function ReviewModal({ product, openModal, setOpenModal }) {
  const [rating, setRating] = useState(0)

  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // console.log(form.comment.value)
  }
  return (
    <div>
      {product.map(prod => <div keys={prod.name} className="">
        <div className="flex items-center justify-between pb-2">
          {/* <h2 className='title'>{Write A Review}</h2> */}
          <h2 className='text-secondary font-bold text-2xl'>{prod.name}</h2>
          <h2 onClick={() => setOpenModal(!openModal)} className='sub_title cursor-pointer'>X</h2>
        </div>
        <hr />
        <div className="flex items-center gap-3 mt-4">
          <img src={prod.images[0]} className='w-24' alt="" />
          <div className="">
            <h2 className='sub_title text-secondary'>{prod.name}</h2>
            <p className='sub_title text-secondary font-bold'>${(prod.discountPrice).toFixed(2)} <del className='text_para'>${(prod.price).toFixed(2)}</del></p>
          </div>
        </div>

        <div className="flex items-center gap-2 py-5">
          <p className='text-secondary font-bold text-lg'>Rating Content : </p>
          <Rate onChange={(value) => setRating(value)}
            defaultValue={rating} allowHalf allowClear />
        </div>

        <p className='text-secondary font-bold text-lg pb-2'>Review Content</p>
        <form onSubmit={handleSubmit}>
          <textarea
            name="comment"
            className="w-full border-2 rounded-md p-3 text-lg"
            placeholder="Write your comments here"
            rows={4} id="" required />
          <div className='flex gap-3 justify-end'>
            <Button
              onClick={() => setOpenModal(!openModal)}
              size="large" className='bg-primary text-white'>Cancel</Button>
            <Button
              htmlType='submit'
              //  onClick={()=>setOpenModal(!openModal)}
              size="large" className='bg-secondary text-white'>Submit</Button>
          </div>
        </form>
      </div>
      )}
    </div>
  )
}
