import React from 'react'
import { useFilterDispatchContext, actionTypes, useFilterState } from '../../context/FilterContext'
import data from '../../api/data'
import "./Recommended.css"

function Recommended() {
  const dispatch = useFilterDispatchContext()
  const state = useFilterState()
  const {filteredProducts, products} = state;

  const handleOnClick = (value)=>{

    if(value === "All"){
    dispatch({
        type: actionTypes.SET_FILTERED_PRODUCTS,
        payload: products
    })
    } else {
      const filtered = products.filter((p)=>{
         return p.company.toLowerCase() === value.toLowerCase()
      })
      dispatch({
        type: actionTypes.SET_FILTERED_PRODUCTS,
        payload: filtered
      })
    }
  }

  return (
    <div className='recommended-flex'>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btns">
            <button onClick={()=> handleOnClick("All")} className="recommended-btn">All Products</button>
            <button onClick={()=> handleOnClick("Nike")} className="recommended-btn">Nike</button>
            <button onClick={()=> handleOnClick("Puma")} className="recommended-btn">Puma</button>
            <button onClick={()=> handleOnClick("Adidas")} className="recommended-btn">Adidas</button>
            <button onClick={()=> handleOnClick("Vans")} className="recommended-btn">Vans</button>
        </div>
    </div>
  )
}

export default Recommended