import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {BsFillBagFill} from "react-icons/bs"
import { useCartContext } from '../../context/CartContext'
import { cartActionTypes } from '../../context/CartContext'

function Card({title, img, newPrice, prevPrice}) {
    const {cartItems, cDispatch} = useCartContext();

    const addToTheCart = ()=>{

        cDispatch({
            type: cartActionTypes.ADD_TO_CART,
            payload: {
                img,
                title,
                newPrice,
                prevPrice,
                quantity: 1
            }
        })
    }

  return (
    <section className="card">
            <img className='card-img' src={img} alt="" />
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                    <AiFillStar className='card-stars'/><AiFillStar className='card-stars'/><AiFillStar className='card-stars'/><AiFillStar className='card-stars'/>
                    <span className="total-reviews">4</span>
                </section>
                <section className="card-price">
                    <div className="price"><del>{prevPrice}</del> {newPrice}</div>
                </section>
                <div className="card-bag" >
                    <BsFillBagFill onClick={()=> addToTheCart()} className='bag'/>
                </div>
            </div>
        </section>
  )
}

export default Card