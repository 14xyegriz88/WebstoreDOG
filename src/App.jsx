import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'

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
