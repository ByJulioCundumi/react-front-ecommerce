import React from 'react'
import { useFilterDispatchContext, actionTypes } from '../../context/FilterContext'
import "./Recommended.css"

function Recommended() {
  const dispatch = useFilterDispatchContext()

  const handleOnClick = (value)=>{
    dispatch({
      type: actionTypes.SET_CATEGORY,
      payload: value
    })
    dispatch({
      type: actionTypes.SET_SELECTED,
      payload: "category"
  })
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