import { createBrowserRouter } from "react-router-dom";
import { Home, ProductDetails, ShoppingCart } from "../page";
import MainLayout from "../Layout/MainLayout"
import CheckOut from "../page/CheckOut/CheckOut";

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
        },
        {
          path: "/checkout",
          element: <CheckOut />
        },
      ],
    },
  ]);

  export default router;