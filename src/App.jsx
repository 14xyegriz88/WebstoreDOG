import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Card from './pages/Card'
import Catalog from './pages/Catalog'


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


const router = createBrowserRouter([{
  path: '/', 
  element: <Home/>
},
{
  path: '/cart',
  element: <Cart/>
},
{
  path: '/card',
  element: <Card/>
},
{
  path: '/catalog',
  element: <Catalog/>
}

])


const App = () => {
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
