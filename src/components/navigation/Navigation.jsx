import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { useFilterDispatchContext, actionTypes } from '../../context/FilterContext'
import "./Navigation.css"

function Navigation() {
    const dispatch = useFilterDispatchContext()
    
    const handleOnChange = (e)=>{
        dispatch({
            type: actionTypes.SET_QUERY,
            payload: e.target.value
        })
        dispatch({
            type: actionTypes.SET_SELECTED,
            payload: "query"
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