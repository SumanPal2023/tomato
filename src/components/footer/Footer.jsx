import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-cnt-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sint nobis libero harum! Quos sit, aliquam modi quod incidunt, quasi quae odio fugiat sunt eveniet libero error facilis consequatur laudantium.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-cnt-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-cnt-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+91 8956887985</li>
                <li> contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Tomato.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
