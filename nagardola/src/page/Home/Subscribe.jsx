import React from 'react';
import { ArrowRightOutlined, SwapRightOutlined } from '@ant-design/icons';


export default function Subscribe() {
  return (
    <div className='section flex items-center justify-center'>
        <div className="w-2/3">
        <img src="https://themes.pixelstrap.net/katie/assets/images/banner/banner-6.png" alt="" />
        </div>

        <div className="w-1/3 px-10 py-3 relative -left-40 bg-white">
            <p className='text-2xl text-primary uppercase py-4'>get 20% off</p>
            <h2 className='title'>Subscibe To Our Newsletter!</h2>
            <p className='text_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, sapiente. Sequi, perferendis impedit eos eum, maiores </p>

            <input type="text" className='w-full p-4 border focus:none outline-none mt-4' placeholder='Your email address' />
            <div className="relative my-5 cursor-pointer group overflow-hidden">
          <div className='absolute  top-0 left-0 w-full group-hover:-top-full  transition-all cursor-pointer duration-300 font-bold text-xl text-primary underline'>Subscribe Now <ArrowRightOutlined /></div>
          <div className="relative -bottom-20 text-xl text-accent font-bold  underline group-hover:bottom-0 transition-all duration-300">
          Subscribe Now <ArrowRightOutlined />
          </div>
        </div>
        </div>

        
    </div>
  )
}
