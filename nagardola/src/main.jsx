import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/router.jsx'
import Wrapper from './Wrapper/Wrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <RouterProvider router={router}/>        
  </StrictMode>,
)
