import { createBrowserRouter } from "react-router-dom";
import { Home, ProductDetails, ShoppingCart } from "../page";
import MainLayout from "../Layout/MainLayout"

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,      
      children: [
        {
          path: "/",
          element: <Home />,          
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,          
        },
        {
          path: "/cart",
          element: <ShoppingCart />
        }
      ],
    },
  ]);

  export default router;