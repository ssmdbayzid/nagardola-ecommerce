import { Rate } from 'antd';
import React from 'react'
import { FiUser } from "react-icons/fi";
import { SlClock } from "react-icons/sl";

export default function Comments() {
    const comments = [
        {
            name: "S S Md. Bayzid",
            rating: 3.5,
            comments  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus fugiat iure quod, nam sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit laudantium odit quo exercitationem veniam a sit, iusto sapiente! Dolores, molestias.",
            img: "https://themes.pixelstrap.net/katie/assets/images/user/1.jpg"            
        }
    ]
  return (
    <div>
        <h2 className="title text-xl mb-3">Comments</h2>
        <div className="">
            {
                comments.map((comment, index)=> 
                <div key={index} className="flex gap-5">
                    <img src={comment.img} alt="" className='w-24 h-24 rounded-md' />
                    <div className="px-4 border-l">
                        <div className="flex items-start justify-between">
                            <div className="">
                            <p className='flex items-center gap-2 text-lg font-bold'><FiUser />  S S Md. Bayzid</p>
                            <Rate defaultValue={4.5} allowHalf disabled className='text-md'/>
                            </div>
                            <p className="flex items-center gap-2">
                            < SlClock /> Mar 29, 2022
                            </p>
                        </div>
                        <hr className='w-full mt-2' />
                        <p className='text_para text-justify'>{comment.comments}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
