import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/router.jsx'



import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { Provider } from 'react-redux'
import store from './app/store.js'

// Initialize AOS
AOS.init({
  duration: 1200, // Duration of animations
  // You can add other options here
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>      
    <Provider store={store}>
    <RouterProvider router={router}/>         
    </Provider> 
  </StrictMode>,
)
