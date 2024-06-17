import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Card from './pages/Card'

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
