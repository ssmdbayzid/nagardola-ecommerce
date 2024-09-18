import React from 'react'
import { Outlet } from 'react-router-dom'
import store from '../app/store'
import { Provider } from 'react-redux'


export default function Wrapper() {    
  return (
    <>    
    <Provider store={store}>
    <Outlet />    
    </Provider>
    </>
  )
}
