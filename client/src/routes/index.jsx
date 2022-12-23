import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts";
import Root from "../components/layouts/root";
import Category from '../pages/category'
import Product from '../pages/productPage'

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
            path: '/category/:category',
            element: <Category/>
          },
          {
            path: '/product/:id',
            element: <Product/>
          },
        ]
      },
    ],
  },
]);

export default router;

// {
//   path: "contact",
//   element: <Contact />,
// },
// {
//   path: "dashboard",
//   element: <Dashboard />,
//   loader: ({ request }) =>
//     fetch("/api/dashboard.json", {
//       signal: request.signal,
//     }),
// },
// {
//   element: <AuthLayout />,
//   children: [
//     {
//       path: "login",
//       element: <Login />,
//       loader: redirectIfUser,
//     },
//     {
//       path: "logout",
//       action: logoutUser,
//     },
//   ],
// },
