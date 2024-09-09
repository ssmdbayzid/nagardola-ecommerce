import React from 'react'
import Menu from './Menu'

export default function Header() {
  return (
    <div data-aos="fade-down">
      <div className="bg-secondary text-center text-white py-2 font-semibold">
        <p>Free Coupe Code: Summer Sale On Selected items Use:
          <button className='uppercase px-3 py-.5 bg-primary text-white mx-2'>New 26</button> 
          <button className='uppercase underline'>Shop Now</button>
        </p>
      </div>
      <Menu />
    </div>
  )
}
