import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from './../../context/StoreContext';
const Cart = () => {
  const { food_list, cardItem, removeFromCart } = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            // here we are checking that inside our selected cart list(that is cardItem) item._id(from all food_list present in assets) present or not .
            if (cardItem[item._id]) {
              return (
                <>
                  <div className="cart-items-title cart-items-items">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                    <p>{cardItem[item._id]}</p>
                    <p>$ {item.price * cardItem[item._id]}</p>
                    <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
                  </div>
                  <hr />
                </>
              )
            }
          })
        }
      </div>
      <div className="card-buttom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div> <hr />
            <div className="cart-total-details">
              <p>Delivery Fees</p>
              <p>{2}</p>
            </div> <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{0}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div >
            <p>If You have a promocode, Enter It here</p>
          <div className="cart-promo-input">
          <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
