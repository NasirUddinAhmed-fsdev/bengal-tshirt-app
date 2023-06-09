import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Grandpa from './components/Grandpa/Grandpa.jsx';
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: 'review',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);