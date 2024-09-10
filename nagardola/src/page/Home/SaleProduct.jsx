import { FloatButton } from 'antd'
import React from 'react'
import { IoIosStar } from 'react-icons/io'

export default function SaleProduct() {
    
    return (
        <div className='section container flex gap-4 '>
            <div className="w-1/2 relative overflow-hidden">
                <img
                    className=' w-full h-[92%]  object-cover '
                    src="https://themes.pixelstrap.net/katie/assets/images/banner/banner-10.jpg" alt="" />
                <div className="absolute bg-white/50 p-8 top-1/2 left-10 -translate-y-1/2">
                <h2 className='title'>40% - 80%Off</h2> 
                <p className='text_para mb-10'>Men's Special Offer</p>      
                
                <div className="flex items-center gap-3">
                <div className="">
                <h2 className='title'>10</h2> 
                <p className='text_para'>Day's</p>   
                </div>
                <div className="">
                <h2 className='title'>16</h2> 
                <p className='text_para'>Hour</p>   
                </div>
                <div className="">
                <h2 className='title'>30</h2> 
                <p className='text_para'>Minute's</p>   
                </div>
                <div className="">
                <h2 className='title'>30</h2> 
                <p className='text_para'>Second's</p>   
                </div>
                </div>
                            
                </div>
                {/* <div className="flex items-center gap-10 border">
                    <img src="https://themes.pixelstrap.net/katie/assets/images/banner/6.jpg" alt="" />                    
                        <div className="">
                            <span className='flex items-center gap-1 '>
                                {[...Array(5).keys()].map((_, index) => <IoIosStar className='text-primary text-lg' />)}
                                <span className='text-lg font-semibold ps-2'>4.3</span>
                            </span>
                            <FloatButton icon={IoIosStar} />
                            <p className='text-xl font-bold'>Greciilooks Women's Stylish Top</p>
                            <p className='text-lg font-bold'>$100.00 <del className='text-accent'>$140.00</del></p>
                        </div>                                            
                </div> */}
            </div>
            <div className="w-1/2 ">
            {[...Array(2).keys()].map((_, index)=>
             <div className="flex items-center gap-2 border mb-10">
             <img src="https://themes.pixelstrap.net/katie/assets/images/banner/6.jpg" alt="" />                    
                 <div className="">
                     <span className='flex items-center gap-1 '>
                         {[...Array(5).keys()].map((_, index) => <IoIosStar className='text-primary text-lg' />)}
                         <span className='text-lg font-semibold ps-2'>4.3</span>
                     </span>
                     <FloatButton icon={IoIosStar} />
                     <p className='text-xl font-bold'>Greciilooks Women's Stylish Top</p>
                     <p className='text-lg font-bold'>$100.00 <del className='text-accent'>$140.00</del></p>
                 </div>                                            
     </div>
            )}
            
           
            </div>
        </div>
    )
}
