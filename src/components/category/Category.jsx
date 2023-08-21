import React from 'react'
import "./Category.css"

function Category() {
  return (
    <div className='category-container'>
      <h2 className="category-title">Category</h2>
      <div className="category-items">

        <label className="category-label-item">
          <input type="radio" name='category'/>All
        </label>

        <label className="category-label-item">
          <input type="radio" name='category'/>Sneakers
        </label>

        <label className="category-label-item">
          <input type="radio" name='category'/>Flats
        </label>

        <label className="category-label-item">
          <input type="radio" name='category'/>Sandals
        </label>

        <label className="category-label-item">
          <input type="radio" name='category'/>Heels
        </label>

      </div>
    </div>
  )
}

export default Category