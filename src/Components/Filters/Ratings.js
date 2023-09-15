import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFileteredProducts } from '../../redux/productsSlice';

const Ratings = () => {
    const ratings = [4.5 , 4, 3 , 2]
    const dispatch = useDispatch();
   
  
    const ratingsHandler = (r) => {
     
        dispatch(getFileteredProducts(r));
      
    };
   
  return (
    <div className='px-4 py-2'>

        <ul>
           { ratings.map((r,index) => {
            return(
                <li className='flex gap-3 text-xl font-semibold p-2 cursor-pointer' key={index} onClick={() => ratingsHandler(r)} >
                {r} above
            </li>
            )
           }) }
           
        </ul>

    </div>
  )
}

export default Ratings