import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Owner from './Owner'
import Test from './Test'

//Create routes for path
const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={routerPath} /> //add routerPath 
)