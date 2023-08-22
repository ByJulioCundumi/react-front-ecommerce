import React from 'react'
import "./Products.css"
import Card from '../card/Card'
import { useEffect } from 'react'
import data from '../../api/data'
import { useFilterDispatchContext, actionTypes, useFilterState } from '../../context/FilterContext'

function Products() {
    const dispatch = useFilterDispatchContext()
    const state = useFilterState()
    const {filteredProducts} = state;

    useEffect(()=>{
        switch(state.selected){
            case "":
                dispatch({
                    type: actionTypes.SET_FILTERED_PRODUCTS,
                    payload: data
                })
                console.log(data)
                break;
            //
            case "query":
                const queryFiltered = data.filter((p)=>{
                    return p.title.toLowerCase().includes(state.query.toLowerCase());
                })
                dispatch({
                    type: actionTypes.SET_FILTERED_PRODUCTS,
                    payload: queryFiltered
                })
                console.log(queryFiltered)
                break;
            //
            case "category":
                const categoryFiltered = data.filter((p)=>{
                    return p.category.toLowerCase() === state.category.toLowerCase();
                })
                dispatch({
                    type: actionTypes.SET_FILTERED_PRODUCTS,
                    payload: categoryFiltered
                })
                console.log(categoryFiltered)
                break;
        }
    },[state.selected, state.query, state.category])
    

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