import React from 'react'
import "./Sidebar.css"
import Category from '../category/Category'
import Price from '../price/Price'

function Sidebar() {
  return (
    <section className='sidebar'>
        <div>
            <h1 className='sidebar-title'>Filter Options</h1>
        </div>
        <Category/>
        <Price/>
    </section>
  )
}

export default Sidebar