import React,{useState} from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/wishlistSlice';
const WishlistIcon = ({prod}) => {
    const dispatch = useDispatch();
    const wishlistProducts = useSelector(store => store.wishlist?.products)
    const filteredWishlist = wishlistProducts.some((p) => p.id === prod.id);
    
    const [show, setShow] = useState(filteredWishlist);
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(!show);
        

        if(!show){
            dispatch(addItem(prod))
        }
        else{
            dispatch(removeItem(prod))
        }
       
       
        
    }

  return (
    <div>
         <div className="absolute top-2 right-2    text-right">
       <div className=" relative cursor-pointer text-red-500 text-3xl" onClick={handleClick}>
          
          { show   ? <AiFillHeart />  : <AiOutlineHeart  /> }
         </div>
       </div>
    </div>
  )
}

export default WishlistIcon