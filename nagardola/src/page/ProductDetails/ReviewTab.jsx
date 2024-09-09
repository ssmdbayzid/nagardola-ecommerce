import { Button, Modal, Rate } from 'antd';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { Flex, Progress } from 'antd';
import ReviewModal from './ReviewModal';


export default function ReviewTab({product}) {
  const [openModal, setOpenModal] = useState(false)
  
  const customHeader = <>
  <h2 className='title'>
  Write A Review
  </h2>
  </>


  return (
    <div className='flex gap-5'>
      <div className="w-1/3 border-r">
      <div className="flex gap-2">
      <h2 className='text-5xl font-bold'>4.5</h2>
      <div className="">
        <p className='text-lg font-medium'>Average Rating</p>
        <p className='flex items-center gap-2'>
        <Rate allowHalf defaultValue={2.5} />         
          (14)
        </p>
      </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
     <div className="flex items-center gap-4">
     <span className='text_para text-nowrap font-bold'>5 Star</span> <Progress percent={80} size={[300, 15]} strokeColor="#cca370"/>
     </div>     
     <div className="flex items-center gap-4">
     <span className='text_para text-nowrap font-bold'>4 Star</span> <Progress percent={75} size={[300, 15]} strokeColor="#cca370"/>
     </div>     
     <div className="flex items-center gap-4">
     <span className='text_para text-nowrap font-bold'>3 Star</span> <Progress percent={62} size={[300, 15]} strokeColor="#cca370"/>
     </div>     
     <div className="flex items-center gap-4">
     <span className='text_para text-nowrap font-bold'>2 Star</span> <Progress percent={70} size={[300, 15]} strokeColor="#cca370"/>
     </div>     
     <div className="flex items-center gap-4">
     <span className='text_para text-nowrap font-bold'>1 Star</span> <Progress percent={44} size={[300, 15]} strokeColor="#cca370"/>
     </div>     
      </div>
      <Button
      onClick={()=> setOpenModal(!openModal)}
      size='large' className='w-full my-5 bg-primary text-white rounded-none'>
      Write a remove
     </Button>    
      </div>
      <div className="w-2/3"></div>
      <Modal      
      centered
      open={openModal}          
      onCancel={()=>setOpenModal(!openModal)}      
      customHeader={customHeader}
      closeIcon={false}
      >
        <ReviewModal product={product} />
      </Modal>
    </div>
  )
}
