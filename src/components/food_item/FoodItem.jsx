 import React, { useContext } from 'react'
import "./fooditem.css"
import { assets } from './../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, description, price, image }) => {
    const {cardItem,addToCart,removeFromCart} = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className="food-item-img-cnt">
                <img src={image}  className='food-item-img' alt="" />
                { !cardItem[id] 
                    ? <img className='add' src={assets.add_icon_white } onClick={()=>addToCart(id)}/>
                    : <div className='food-item-counter' >
                        {/* //decrement */}
                       <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" /> 
                       <p>{cardItem[id]}</p>
                       {/* increment */}
                       <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
                <div className="food-item-info">
                    <div className="food-item-name-ratings">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                    <p className="food-item-desc">
                        {description}
                    </p>
                    <p className="food-item-price">$ {price}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
