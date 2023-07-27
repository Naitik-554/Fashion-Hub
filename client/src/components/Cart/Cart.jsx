import React from 'react'
import './Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import {useDispatch} from 'react-redux'

const Cart = () => {

   const products = useSelector(state=>state.cart.products)
   const dispatch = useDispatch()
   const totalPrice = () => {
      let total = 0;
      products.forEach((item) => (total += item.quantity*item.price))
      return total.toFixed(2);
   }
   
  return (
    <div className='cart'>
      <h1>Products in your Cart</h1>
      {products?.map(item => (
         <div className="cart-item" key={item.id}>
            <img src={"http://localhost:1337" + item.img} alt="" />
            <div className="details">
               <h1>{item.title}</h1>
               <p>{item.desc?.substring(0,100)}</p>
               <div className="cart-price">{item.quantity} X ₹ {item.price}</div>
            </div>
            <DeleteIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
         </div>
      ))}
      <div className="total">
         <span>SUBTOTAL</span>
         <span>₹ {totalPrice()}</span>
      </div>
      <button className='cart-btn'>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart