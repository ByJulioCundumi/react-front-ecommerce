import React from 'react'
import "./Price.css"

function Price() {
  return (
    <section className='price-container'>
      <div>
        <h2 className="price-title">Price</h2>
      </div>
      <div className="price-items">

        <label className="label-item">
          <input type="radio" name='price'/> All
        </label>

        <label className="label-item">
          <input type="radio" name='price'/> $0 - $50
        </label>

        <label className="label-item">
          <input type="radio" name='price'/> $50 - $100
        </label>

        <label className="label-item">
          <input type="radio" name='price'/> $100 - $150
        </label>

        <label className="label-item">
          <input type="radio" name='price'/> Over $150
        </label>
      </div>
    </section>
  )
}

export default Price