import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

export const Cart = () => {
    const cartItem=useSelector(store=>store.cart.items);
    console.log(cartItem)

    const dispatch=useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }

  return (
    <div >
        <h1>Cart iteml</h1>
        <button className="m-2 p-2 bg-green-600" onClick={handleClear}>Clear Card</button>
        <div className="flex flex-wrap">
        {cartItem.map((item)=> <FoodItem key={item.id} {...item}></FoodItem>)}
       
        </div>
    </div>
  )
};
export default Cart;
