import React from 'react'
import "./Recommended.css"

function Recommended() {
  return (
    <div className='recommended-flex'>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btns">
            <button className="recommended-btn">All Products</button>
            <button className="recommended-btn">Nike</button>
            <button className="recommended-btn">Puma</button>
            <button className="recommended-btn">Adidas</button>
            <button className="recommended-btn">Vans</button>
        </div>
    </div>
  )
}

export default Recommended