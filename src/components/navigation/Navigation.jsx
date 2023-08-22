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