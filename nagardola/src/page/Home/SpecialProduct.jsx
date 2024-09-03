import { Button } from 'antd'
import React, { useState } from 'react'

export default function SpecialProduct() {
        const [selectedButton, setSelectedButton] = useState("new_product")

    return (
        <div className='section container'>
            <div className="flex items-center justify-between">
                <div className="">
                    <p className='sub_title flex items-center'>Trandy collecion <span className='w-[70px] inline-block bg-accent/30 h-1 ms-3'></span></p>
                    <h1 className='title'>Special Product</h1>
                </div>
            <div className="flex items-center gap-5 mt-auto">
            <Button 
            onClick={()=>setSelectedButton("new_product")}
            size="large" className={`${selectedButton === "new_product" && "bg-primary text-white"} rounded-none  font-semibold`}>
                New Products
            </Button>
            <Button
            onClick={()=>setSelectedButton("featured")}            
            size="large" className={`${selectedButton === "featured" && "bg-primary text-white"} rounded-none  font-semibold`}>
                Featured Products
            </Button>
            <Button 
            onClick={()=>setSelectedButton("best_seller")}                        
            size="large" className={`${selectedButton === "best_seller" && "bg-primary text-white"} rounded-none  font-semibold`}>
                Best Seller
            </Button>
            </div>
            </div>

        </div>
    )
}
