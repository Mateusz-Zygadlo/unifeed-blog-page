import React from 'react'
import { Images } from '../assets'

export const Footer = () => {
  return(
    <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
      <img 
        src={Images.Logo}
        alt="logo"
        className="w-32 mb-2 sm:mb-0"
      />
      <p>Unifeed @ 2017 ALl Copyrights Not Reserved</p>
    </div>
  )
}