import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts";
import Root from "../components/layouts/root";
import Cart from "../pages/cart";
import Category from '../pages/category'
import Product from '../pages/productPage'
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
           
            element: <Home/>
          },
          {
            path: '/category/:category',
            
            element: <Category/>
          },
          {
            path: '/product/:id',
            element: <Product/>
          },
          {
            path: '/cart',
            element: <Cart/>
          },
        ]
      },
    ],
  },
]);

export default router;


