import React from 'react'
import { useFilterDispatchContext, actionTypes, useFilterState } from '../../context/FilterContext'
import "./Category.css"

function Category() {
  const dispatch = useFilterDispatchContext()
  const state = useFilterState()
  const {filteredProducts, products} = state;

  const handleCategory = (e)=>{
    if(e.target.value === "All"){
      dispatch({
        type: actionTypes.SET_FILTERED_PRODUCTS,
        payload: products
      })
    } else {
      const filtered = products.filter((p)=>{
        return p.category.toLowerCase() === e.target.value.toLowerCase()
      })
      dispatch({
        type: actionTypes.SET_FILTERED_PRODUCTS,
        payload: filtered
      })
    }
  }

  return (
    <div className='category-container'>
      <h2 className="category-title">Category</h2>
      <div className="category-items">

        <label className="category-label-item">
          <input onChange={handleCategory} type="radio" name='category' value="All"/>All
        </label>

        <label className="category-label-item">
          <input onChange={handleCategory} type="radio" name='category' value="Sneakers"/>Sneakers
        </label>

        <label className="category-label-item">
          <input onChange={handleCategory} type="radio" name='category' value="Flats"/>Flats
        </label>

        <label className="category-label-item">
          <input onChange={handleCategory} type="radio" name='category' value="Sandals"/>Sandals
        </label>

        <label className="category-label-item">
          <input onChange={handleCategory} type="radio" name='category' value="Heels"/>Heels
        </label>

      </div>
    </div>
  )
}

export default Category