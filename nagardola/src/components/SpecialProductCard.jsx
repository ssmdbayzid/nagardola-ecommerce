import React, { useState , useRef} from 'react'
import { Button, Modal, Tooltip } from 'antd';

import { IoIosStar } from 'react-icons/io';
import { HeartOutlined, CarOutlined } from '@ant-design/icons';
import { HiArrowsUpDown, HiOutlineShoppingBag  } from "react-icons/hi2"
import { IoEyeOutline } from "react-icons/io5";

import ProductViewModal from './ProductViewModal';

const contentStyle = {
    margin: 0,
    height: '100%',
    color: '#222222',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function SpecialProductCard({ product }) {    
    const [openModal, setOpenModal] = useState(false);
    
    const handleOk = () => {
        setOpenModal(!openModal);
    };
    const handleCancel = () => {
        setOpenModal(!openModal);
    };



    return (
        <div className="p-4 border rounded-lg overflow-hidden">
            <div className='group '>
                <div className="relative">
                    <img src={product.images[0]} className='w-full h-full object-cover group-hover:opacity-0 transition-all duration-500' style={contentStyle} />
                    <img src={product.images[1]} className='w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 absolute -translate-x-full group-hover:translate-x-0 top-0 left-0' style={contentStyle} />

                    <div className="absolute w-full top-5 px-4">
                        <div className="relative flex items-start justify-between ">
                        
                            <Button                            
                                type="primary" size="small"
                                style={{ 'border-radius': "0px", color: "#fff", 'background': "#222" }}
                            >New</Button>
                            
                            <div className="flex group flex-col gap-1">
                                <Tooltip size="small" color='#CCA270' title="Add to Wishlist">
                                <Button icon={<HeartOutlined />} shape='circle' />
                                </Tooltip>

                                <Tooltip size="small" color='#CCA270' placement="right" title="Add to Cart">
                                <Button className='relative -top-3 opacity-0 group-hover:top-0 group-hover:opacity-100 transition-all duration-300 delay-75' icon={<HiOutlineShoppingBag />} shape='circle' />
                                </Tooltip>
                                
                                <Tooltip size="small" color='#CCA270' placement="right" title="Compare">
                                <Button className='relative -top-3 opacity-0 group-hover:top-0 group-hover:opacity-100 duration-300 delay-[50] transition-all ' icon={<HiArrowsUpDown />} shape='circle' />                                
                                </Tooltip>

                                <Tooltip size="small" color='#CCA270' placement="right" title="Quick View">
                                <Button
                                onClick={()=>setOpenModal(!openModal)}
                                className='relative -top-3 opacity-0 group-hover:top-0 group-hover:opacity-100 duration-300 delay-[30] transition-all ' icon={<IoEyeOutline />} shape='circle' />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-2">
                    <div className="relative">
                        <span className='flex items-center gap-1 '>
                            {[...Array(5).keys()].map((_, index) => <IoIosStar className='text-primary text-lg' />)}
                            <span className='text-lg font-semibold ps-2'>4.3</span>
                        </span>

                        <p className='text-xl font-bold  text-nowrap text-ellipsis overflow-hidden'>{product.name}</p>
                        <p className='text-lg font-bold'>${product.discountPrice} <del className='text-accent'>${product.price}</del></p>
                    </div>
                </div>
            </div>
            
             <Modal width={700}
             footer={false} centered open={openModal} onOk={handleOk} onCancel={handleCancel}>
             <ProductViewModal   className="w-full" product={product} />
           </Modal>
        </div>
    )
}
