import React from 'react'
import Navbar_cart from '../components/cart/Navbar_cart'
import Block1 from '../components/cart/Block1'
import Block2 from '../components/cart/Block2'
import FootarCart from '../components/cart/FootarCart'

const cart = () => {
  return (
    <div>
       <Navbar_cart/>
       <Block1/>
       <Block2/>
       <FootarCart />
    </div>
  )
}

export default cart
