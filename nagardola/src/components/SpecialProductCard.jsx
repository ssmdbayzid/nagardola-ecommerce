import { Button, FloatButton } from 'antd';
import React from 'react'
import { IoIosStar } from 'react-icons/io';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
const contentStyle = {
    margin: 0,
    height: '100%',
    color: '#222222',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function SpecialProductCard({ product }) {
    return (
        <div className="p-4 border rounded-lg overflow-hidden">
            <div className='group '>
                <div className="relative">
                    <img src={product.images[0]} className='w-full h-full object-cover group-hover:opacity-0 transition-all duration-500' style={contentStyle} />
                    <img src={product.images[1]} className='w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 absolute -translate-x-full group-hover:translate-x-0 top-0 left-0' style={contentStyle} />

                    <div className="absolute w-full flex justify-between top-5 px-4">
                        <Button
                            type="primary"
                            size="small" style={{ 'border-radius': "0px", color: "#fff", 'background': "#222" }} >New</Button>

                    </div>
                </div>
                <div className="pt-2">
                    <div className="relative">
                        <span className='flex items-center gap-1 '>
                            {[...Array(5).keys()].map((_, index) => <IoIosStar className='text-primary text-lg' />)}
                            <span className='text-lg font-semibold ps-2'>4.3</span>
                        </span>
                        <FloatButton.Group
                        trigger="hover"
                        type="primary"
                        closeIcon={<CustomerServiceOutlined />}                        
                        style={{                            
                            position: 'absolute'
                        }}
                        icon={<CustomerServiceOutlined />}
                        >
                        <FloatButton />
                        <FloatButton icon={<CommentOutlined />} />
                        </FloatButton.Group>
                        <p className='text-xl font-bold  text-nowrap text-ellipsis overflow-hidden'>{product.name}</p>
                        <p className='text-lg font-bold'>${product.discount_price} <del className='text-accent'>${product.previous_price}</del></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
