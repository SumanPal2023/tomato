import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => { // comming from app comp
  const [menu,setMenu] =useState("home")
  return (
    <div className='navbar'>
     <Link to="/"> <img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#food-display' onClick={()=>setMenu("manu")} className={menu==="manu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart"> <img src={assets.basket_icon} alt="" /> </Link>
       
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
     
    </div>
  )
}

export default Navbar
