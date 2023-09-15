import React from 'react'
import ProductList from './Product/ProductList'
import Filter from './Filters/Filter'

const MainContainer = () => {
  return (
    <div className='mt-[60px] flex p-3 gap-3 '>
        <div>
        <Filter/>
        </div>
        <ProductList/>
    </div>
  )
}

export default MainContainer