import React from 'react';
import { Button, Carousel, Flex } from 'antd';
import { IoIosStar } from "react-icons/io";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';   

const contentStyle = {
    margin: 0,
    height: '100%',
    color: '#222222',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const spacialProducts = [
    {
        name: "Greciilooks Women's Stylish Top",
        discount_price: 100.00,
        previous_price: 140.00,
        images: [
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/8.jpg",
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/12.jpg"
        ]
    },
    {
        "name": "Vibrant Summer Dress",
        "discount_price": 75.00,
        "previous_price": 100.00,
        "images": [
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/5.jpg",
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/6.jpg"
        ]
    },
    {
        "name": "Elegant Evening Gown",
        "discount_price": 150.00,
        "previous_price": 200.00,
        "images": [
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/5.jpg",
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/6.jpg"
        ]
    },
    {
        "name": "Casual Denim Jacket",
        "discount_price": 60.00,
        "previous_price": 80.00,
       "images": [
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/5.jpg",
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/6.jpg"
        ]
    },
    {
        "name": "Classic White Shirt",
        "discount_price": 40.00,
        "previous_price": 55.00,
        "images": [
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/5.jpg",
            "https://themes.pixelstrap.net/katie/assets/images/product/product-3/6.jpg"
        ]
    }


]
export default function SpecialOfferCard() {
    return (
        <div className="p-4 border rounded-lg">
            <h2 className='heading pb-3'>Special Offer</h2>
            <Carousel arrows infinite={false}
                // dots={false}
            >
                {
                    spacialProducts.map((product, index) =>
                        <div keys={index} className='group '>
                            <div className="relative">
                            <img src={product.images[0]} className='w-full h-full object-cover group-hover:opacity-0 transition-all duration-500' style={contentStyle} />
                            <img src={product.images[1]} className='w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 absolute -translate-x-full group-hover:translate-x-0 top-0 left-0' style={contentStyle} />

                            <div className="absolute w-full flex justify-between top-5 px-4">                                                           
                            <Button 
                            type="primary"  
                            size="middle" style={{borderRadius: "0px", color:"#fff", background: "#222"}} >New</Button>
                                                  
                            </div>
                            </div>
                            <div className="pt-2">
                                <div className="">
                                    <span className='flex items-center gap-1 '>
                                        {[...Array(5).keys()].map((_, index) => <IoIosStar className='text-primary text-lg' />)}
                                        <span className='text-lg font-semibold ps-2'>4.3</span>
                                    </span>
                                <FloatButton icon={IoIosStar} />
                                    <p className='text-xl font-bold'>{product.name}</p>
                                    <p className='text-lg font-bold'>${product.discount_price} <del className='text-accent'>${product.previous_price}</del></p>
                                </div>                                                           
                            </div>
                        </div>
                    )}
            </Carousel>
        </div>
    )
}


