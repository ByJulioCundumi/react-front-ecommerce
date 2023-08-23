import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { useFilterDispatchContext, actionTypes, useFilterState } from '../../context/FilterContext'
import { useCartContext } from '../../context/CartContext'
import { cartActionTypes } from '../../context/CartContext'
import "./Navigation.css"

function Navigation() {
    const dispatch = useFilterDispatchContext()
    const state = useFilterState()
    const {filteredProducts, products} = state;
    const {isCartOpen, cDispatch, cartItems} = useCartContext()
    
    const handleOnChange = (e)=>{
        const filtered = products.filter((p)=>{
            return p.title.toLowerCase().includes(e.target.value.toLowerCase());
        })
        dispatch({
            type: actionTypes.SET_FILTERED_PRODUCTS,
            payload: filtered
        })
    }

    const openCart = ()=>{
        cDispatch({
            type: cartActionTypes.SET_CART_STATUS,
            payload: true
        })
    }

    const closeCart = ()=>{
        cDispatch({
            type: cartActionTypes.SET_CART_STATUS,
            payload: false
        })
    }

    const increaseItems = (title)=>{
        cDispatch({
            type: cartActionTypes.INCREASE_ITEM_QUANTITY,
            payload: title
        })
    }

    const decreaseItems = (title)=>{
        cDispatch({
            type: cartActionTypes.DECREASE_ITEM_QUANTITY,
            payload: title
        })
    }

    const removeItems = (title)=>{
        cDispatch({
            type: cartActionTypes.REMOVE_FROM_CART,
            payload: title
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
            <a href="#" className='cart-icon' onClick={()=> isCartOpen ? closeCart() : openCart()}>
                <AiOutlineShoppingCart className='nav-icons'/>
                <span className="cart-icon-span">{cartItems.length}</span>
            </a>
            <a href="#">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
        </div>

        <div className={`cart-modal ${isCartOpen ? 'open-cart' : 'close-cart'}`}>
            <div className="cart-header">
                <h2 className="cart-title">Shopping Cart</h2>
                <button className='cart-btn' onClick={()=> isCartOpen ? closeCart() : openCart()}>x</button>
            </div>
            <div className="cart-items">
                {cartItems.length > 0 ? cartItems.map((i)=>{
                    return <div className="cart-item">
                    <img className='cart-img' src={i.img} alt="" />
                    <div className="cart-item-details">
                        <h3 className='cart-details-title'>{i.title}</h3>
                        <p className="cart-details-price">
                            <del>{i.prevPrice}</del> {i.newPrice}
                        </p>
                    </div>
                    <div className="cart-actions">
                        <button onClick={()=> increaseItems(i.title)} className='cart-btn'>+</button>
                        <p>{i.quantity}</p>
                        <button onClick={()=> decreaseItems(i.title)} className='cart-btn'>-</button>
                    </div>
                    <div className="cart-total-price">
                        <p>{parseInt(i.quantity) * parseInt(i.newPrice)}</p>
                    </div>
                    <div className="cart-delete">
                        <button onClick={()=> removeItems(i.title)} className='cart-btn'>x</button>
                    </div>
                </div>
                }) : <span>Your shopping cart is Empty</span>}
            </div>
            <div className="total">
                <h3 className="total-title">Total:</h3>
                <p>{cartItems.length > 0 ? cartItems.reduce((prev, i)=>{
                    return prev += parseInt(i.newPrice * i.quantity);
                },0) : "$0"}</p>
            </div>
        </div>
    </nav>
  )
}

export default Navigation