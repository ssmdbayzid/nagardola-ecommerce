import { createBrowserRouter } from "react-router-dom";
import { Address, Dashboard, EditAddress, EditProfile, Home, OrderDetails, OrderHistory, Password, PaymentCancel, PaymentFailed, PaymentSuccess, ProductDetails, ShoppingCart } from "../page";
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
        {
          path: "/payment/success",
          element: <PaymentSuccess />
        },
        {
          path: "/payment/cancel",
          element: <PaymentCancel />
        },
        {
          path: "/payment/failed",
          element: <PaymentFailed />
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "edit-address",
              element: <EditAddress />,
            },
            {
              path: "edit-profile",
              element: <EditProfile />,
            },
            {
              path: "order-details",
              element: <OrderDetails />,
            },
            {
              path: "order-history",
              element: <OrderHistory />,
            },
            {
              path: "address",
              element: <Address />,
            },
            {
              path: "password",
              element: <Password />,
            }
          ]
        }
      ],
    },
  ]);

  export default router;