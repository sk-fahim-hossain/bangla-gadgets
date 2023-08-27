import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home.jsx'
import Shop from './component/Shop.jsx'
import About from './component/About.jsx'
import ProductDetails from './component/ProductDetails.jsx'
import LoaderSpinner from './component/LoaderSpinner.jsx'
import Cart from './component/Cart.jsx'
import useDataLoader from './component/useDataLoader/useDataLoader.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/shop',
        element:<Shop></Shop>,
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/spinner',
        element:<LoaderSpinner></LoaderSpinner>,
      },
      {
        path:'/cart',
        element:<Cart></Cart>,
      },
      {
        path:'/shop/:name',
        element:<ProductDetails></ProductDetails>,
        loader:()=> fetch('fakeData.json')
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
