import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider =({children})=>{
const [cardItem,setCartItem] =useState({}) // to store item which can be access globally
const addToCart = (itemId)=>{
    if (!cardItem[itemId]) {
        setCartItem((prev=>({...prev,[itemId]:1}))) // for first time to add product in cart then id 1
    }else{
        setCartItem((prev=>({...prev,[itemId]:prev[itemId]+1}))) // if the item is present then it increase the number
    }
}
const removeFromCart =(itemId)=>{
    setCartItem(prev=>({...prev,[itemId]:prev[itemId]-1})) // decrease the value by 1
}
// useEffect(()=>{
//     console.log(cardItem)
// },[cardItem])
    const contextValue ={
food_list,cardItem,setCartItem,addToCart,removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;