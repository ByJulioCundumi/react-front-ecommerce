import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import "./Navigation.css"

function Navigation() {
  return (
    <nav className='nav'>
        <div>
            <input className='search' type="text" placeholder='Search a product'/>
        </div>
        <div className='icons'>
            <a href="#">
                <AiOutlineHeart className='nav-icons'/>
            </a>
            <a href="#">
                <AiOutlineShoppingCart className='nav-icons'/>
            </a>
            <a href="#">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
        </div>
    </nav>
  )
}

export default Navigation