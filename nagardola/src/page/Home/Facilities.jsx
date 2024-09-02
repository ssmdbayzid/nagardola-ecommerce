import React from 'react'

const data = [
    {
        title: "Free Shipping",
        descriotion: "Apply to all orders over ..",
        icon: "https://themes.pixelstrap.net/katie/assets/images/svg-icon/1.svg"
    },
    {
        title: "Return & Exchange",
        descriotion: "Complete warranty",
        icon: "https://themes.pixelstrap.net/katie/assets/images/svg-icon/2.svg"
    },
    {
        title: "Technical Support",
        descriotion: "Service support 24/7",
        icon: "https://themes.pixelstrap.net/katie/assets/images/svg-icon/3.svg"
    },
    {
        title: "Daily Gift Vouchers",
        descriotion: "Shopping now is more fun",
        icon: "https://themes.pixelstrap.net/katie/assets/images/svg-icon/4.svg"
    },
]

export default function Facilities() {
  return (
    <div className='container grid grid-cols-4 my-10'>
        {
            data.map(d=>
            <div className="flex items-center gap-3">               
                <img src={d.icon} alt="" className=' w-14 h-10' />            
                <div className="">
                    <h4 className='font-semibold'>{d.title}</h4>
                    <p className='text_para'>{d.descriotion}</p>
                </div>
            </div>
        )}
    </div>
  )
}
