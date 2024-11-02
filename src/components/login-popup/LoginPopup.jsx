import React, { useState } from 'react'
import "./loginpopup.css"
import { assets } from './../../assets/assets';
const LoginPopup = ({setShowLogin}) => { // comming from app comp
  const[currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
     <form action="" className="login-popup-cnt">
      <div className="login-popup-title">
        <h2>{currState}</h2>
        <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
      </div>
      <div className="login-popup-inputs">
        {
          currState==="Login"?<></>: <input type="text" placeholder='Your name ' required />

        }
        <input type="email" placeholder='Your mail' required />
        <input type="password" placeholder='Your password' />
      </div>
      <button>{currState==="sign-up"?"Create Account":"Login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing, I agree to the terms of use & policy</p>
      </div>
      {currState==="Login"
      ?<p>create a new account? <span onClick={()=>setCurrState("sign-up")}>click here</span></p>
      :<p>Already have an account? <span onClick={()=>setCurrState("Login")}> login here</span></p>}
     
   
     </form>
    </div>
  )
}

export default LoginPopup
