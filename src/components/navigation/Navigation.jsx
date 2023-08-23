import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { useFilterDispatchContext, actionTypes, useFilterState } from '../../context/FilterContext'
import "./Navigation.css"

function Navigation() {
    const dispatch = useFilterDispatchContext()
    const state = useFilterState()
    const {filteredProducts, products} = state;
    
    const handleOnChange = (e)=>{
        const filtered = products.filter((p)=>{
            return p.title.toLowerCase().includes(e.target.value.toLowerCase());
        })
        dispatch({
            type: actionTypes.SET_FILTERED_PRODUCTS,
            payload: filtered
        })
    }

  return (
    <nav className='nav'>
        <div>
            <input className='search' onChange={handleOnChange} type="text" placeholder='Search a product'/>
        </div>
        <div className='icons'>
            <a href="#">
                <AiOutlineHeart className='nav-icons'/>
            </a>
            <a href="#" className='cart-icon'>
                <AiOutlineShoppingCart className='nav-icons'/>
                <span className="cart-icon-span">0</span>
            </a>
            <a href="#">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
        </div>

        <div className="cart-modal">
            <div className="cart-header">
                <h2 className="cart-title">Shopping Cart</h2>
                <button className='cart-btn'>x</button>
            </div>
            <div className="cart-items">
                <div className="cart-item">
                    <img className='cart-img' src="https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg" alt="" />
                    <div className="cart-item-details">
                        <h3 className='cart-details-title'>Nike Men's Sneaker</h3>
                        <p className="cart-details-price">
                            <del>500</del> 200
                        </p>
                    </div>
                    <div className="cart-actions">
                        <button className='cart-btn'>+</button>
                        <p>1</p>
                        <button className='cart-btn'>-</button>
                    </div>
                    <div className="cart-total-price">
                        <p>200</p>
                    </div>
                    <div className="cart-delete">
                        <button className='cart-btn'>x</button>
                    </div>
                </div>
            </div>
            <div className="total">
                <h3 className="total-title">Total:</h3>
                <p>500</p>
            </div>
        </div>
    </nav>
  )
}

export default Navigation