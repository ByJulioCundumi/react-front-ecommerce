import React from 'react'
import "./Products.css"
import Card from '../card/Card'
import data from '../../api/data'
import { useEffect } from 'react'
import { useFilterDispatchContext, actionTypes, useFilterState } from '../../context/FilterContext'

function Products() {
    const dispatch = useFilterDispatchContext()
    const state = useFilterState()
    const {filteredProducts, products} = state;

    useEffect(()=>{

        dispatch({
            type: actionTypes.SET_PRODUCTS,
            payload: data
        })

        if(state.filteredProducts.length <= 0){
            dispatch({
                type: actionTypes.SET_FILTERED_PRODUCTS,
                payload: products
            })
        }

    },[state.filteredProducts])
    

  return (
    <section className='card-container'>
        {filteredProducts.length > 0 ? filteredProducts.map(({title, img, prevPrice, newPrice}, index)=>{
            return <Card key={index}
                title={title}
                img={img}
                prevPrice={prevPrice}
                newPrice={newPrice}
            />
        }) : <span>No hay productos para mostrar</span>}
    </section>
  )
}

export default Products