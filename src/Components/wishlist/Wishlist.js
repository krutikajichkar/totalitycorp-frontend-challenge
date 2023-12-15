import React from 'react'
import { useSelector } from 'react-redux'
import WishlistCard from './WishlistCard'

const Wishlist = () => {
    const wishlist = useSelector((store) => store.wishlist?.products);
    if(wishlist.length===0){
      return <h1 className='absolute top-[50%] left-[37%] text-4xl font-bold'>Your Wishlist is Empty</h1>
    }
  return (
    <div className='mt-[80px]  bg-white w-[70%] mx-auto'>
        <div>
          <div className='border-b-2 p-4'>
          <h1 className='text-3xl font-semibold '>My Wishlist ({wishlist?.length})</h1>
          </div>
            {
              wishlist.map((prod) => {
                return(
                  <WishlistCard prod = {prod}/>
                )
              })
            }
        </div>
        
    </div>
  )
}

export default Wishlist