import React from 'react'
import { useFilterDispatchContext, actionTypes } from '../../context/FilterContext'
import "./Category.css"

function Category() {
  const dispatch = useFilterDispatchContext()

  const handleCategory = (e)=>{
    dispatch({
      type: actionTypes.SET_CATEGORY,
      payload: e.target.value
    })
    dispatch({
      type: actionTypes.SET_SELECTED,
      payload: "category"
  })
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