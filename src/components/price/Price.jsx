import React from 'react'
import "./Price.css"
import { useFilterDispatchContext, useFilterState, actionTypes } from '../../context/FilterContext'

function Price() {
  const dispatch = useFilterDispatchContext()
  const state = useFilterState()
  const {filteredProducts, products} = state;

  const handlePrice = (e)=>{
    switch(e.target.value){

      case "All":
        dispatch({
          type: actionTypes.SET_FILTERED_PRODUCTS,
          payload: products
        })
      break;

      case "0-50":
        const filtered = products.filter((p)=>{
          return p.newPrice > 0 && p.newPrice <= 50;
        })
        dispatch({
          type: actionTypes.SET_FILTERED_PRODUCTS,
          payload: filtered
        })
      break;

      case "50-100":
        const filteredTwo = products.filter((p)=>{
          return p.newPrice >= 50 && p.newPrice <= 100;
        })
        dispatch({
          type: actionTypes.SET_FILTERED_PRODUCTS,
          payload: filteredTwo
        })
      break;

      case "100-150":
        const filteredThree = products.filter((p)=>{
          return p.newPrice >= 100 && p.newPrice <= 150;
        })
        dispatch({
          type: actionTypes.SET_FILTERED_PRODUCTS,
          payload: filteredThree
        })
      break;

      case "over150":
        const filteredFour = products.filter((p)=>{
          return p.newPrice > 150;
        })
        dispatch({
          type: actionTypes.SET_FILTERED_PRODUCTS,
          payload: filteredFour
        })
      break;
    }
  }

  return (
    <section className='price-container'>

      <div>
        <h2 className="price-title">Price</h2>
      </div>
      <div className="price-items">

        <label className="label-item">
          <input onChange={handlePrice} type="radio" value="All" name='price'/> All
        </label>

        <label className="label-item">
          <input onChange={handlePrice} type="radio" value="0-50" name='price'/> $0 - $50
        </label>

        <label className="label-item">
          <input onChange={handlePrice} type="radio" value="50-100" name='price'/> $50 - $100
        </label>

        <label className="label-item">
          <input onChange={handlePrice} type="radio" value="100-150" name='price'/> $100 - $150
        </label>

        <label className="label-item">
          <input onChange={handlePrice} type="radio" value="over150" name='price'/> Over $150
        </label>
      </div>
    </section>
  )
}

export default Price