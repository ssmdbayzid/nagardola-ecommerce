import { createBrowserRouter } from "react-router-dom";
import { Home, ProductDetails } from "../page";
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
      ],
    },
  ]);

  export default router;