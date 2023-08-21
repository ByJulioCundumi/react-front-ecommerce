import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {BsFillBagFill} from "react-icons/bs"
import "./Products.css"

function Products() {
  return (
    <section className='card-container'>
        <section className="card">
            <img className='card-img' src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="" />
            <div className="card-details">
                <h3 className="card-title">Nike Air Vapormax Plus</h3>
                <section className="card-reviews">
                    <AiFillStar className='card-stars'/><AiFillStar className='card-stars'/><AiFillStar className='card-stars'/><AiFillStar className='card-stars'/>
                    <span className="total-reviews">4</span>
                </section>
                <section className="card-price">
                    <div className="price"><del>$500</del> $200</div>
                </section>
                <div className="card-bag">
                    <BsFillBagFill className='bag'/>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Products