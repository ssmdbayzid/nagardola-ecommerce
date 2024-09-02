import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function MainLayout() {
  return (
    <div>
      <Header />   
      <div className="">
      <Outlet />
      </div>     
      <Footer />
    </div>
  )
}
