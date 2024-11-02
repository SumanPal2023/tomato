import React from 'react'
import "./appdownload.css"
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
      <p>For Better Experience ownload <br/> Tomato APP</p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
