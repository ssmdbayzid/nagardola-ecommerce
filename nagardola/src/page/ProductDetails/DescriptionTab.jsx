import React from 'react'

export default function DescriptionTab({product}) {
  return (
    <div className='pt-5'>
        {
            product.map((pro, index)=>
                <div keys={index} className="">
                    <h2 className='sub_title font-normal'>{pro.details}</h2>
                    <div className="grid grid-cols-3 gap-8 mt-5">
                        <div className="">
                        <h2 className=' text-2xl font-bold '>Product Specifications</h2> 
                        <ul className='list-disc ps-4 py-5'> {pro.specification.map(item=> <li className='mb-2 text_para' key={item}>{item}</li>)}
                        </ul>                         
                        </div>
                     <div className="">
                     <h2 className=' text-2xl font-bold '>Washing Instruction</h2> 
                     <ul className='list-disc ps-4 py-5'> {pro.washingInstructions.map(item=> <li className='mb-2 text_para' key={item}>{item}</li>)}
                     </ul>
                     </div>
                      <div className="">
                        <h2 className=' text-2xl font-bold '>Size & Fit</h2> 
                       <ul className='list-disc ps-4 py-5'> {pro.sizeAndFit.map(item=> <li className='mb-2 text_para' key={item}>{item}</li>)}
                       </ul>
                       </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}
