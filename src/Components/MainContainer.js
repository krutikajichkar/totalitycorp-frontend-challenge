import React from 'react'
import Categories from './Categories'
import ProductList from './Product/ProductList'

const MainContainer = () => {
  return (
    <div className='mt-[100px]'>
        <Categories/>
        <ProductList/>
    </div>
  )
}

export default MainContainer