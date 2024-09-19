import { Button, FloatButton, Modal, Skeleton } from 'antd'
import React, { useState, useEffect } from 'react'
import { IoIosStar } from 'react-icons/io'
import SpecialProductCard from '../../components/SpecialProductCard'
import { productData } from '../../assets/data/data'
import { useGetproductsQuery } from '../../app/features/productApiSlice'

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

export default function SpecialProduct() {
    const  {data, error, isLoading, isFetching, isError} = useGetproductsQuery()
    const [selectedButton, setSelectedButton] = useState("new_product");
  
    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <p>Loading....</p>    
    return (
        <div className='section container'>
            <div className="flex  mb-10 items-center md:flex-row flex-col md:justify-between">
                <div className="mb-5 md:mb-0">
                    <p className='sub_title flex justify-center items-center'>Trandy collecion <span className='w-[70px] inline-block bg-accent/30 h-1 ms-3'></span></p>
                    <h1 className='title'>Special Product</h1>
                </div>
                <div className="flex overflow-x-auto items-center gap-5 mt-auto">
                    <Button
                        onClick={() => setSelectedButton("new_product")}
                        size="large" className={`${selectedButton === "new_product" && "bg-primary text-white"} rounded-none  font-semibold`}>
                        New Products
                    </Button>
                    <Button
                        onClick={() => setSelectedButton("featured")}
                        size="large" className={`${selectedButton === "featured" && "bg-primary text-white"} rounded-none  font-semibold`}>
                        Featured Products
                    </Button>
                    <Button
                        onClick={() => setSelectedButton("best_seller")}
                        size="large" className={`${selectedButton === "best_seller" && "bg-primary text-white"} rounded-none  font-semibold`}>
                        Best Seller
                    </Button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5">
                {
                  data?.data &&   data?.data.map((product, index) => <SpecialProductCard product={product} key={index} />)
                }
            </div>        
        </div>
    )
}


/*

{data.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          disabled={isFetching}
        />
      ))}
*/