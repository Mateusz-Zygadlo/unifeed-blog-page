import React from 'react'
import {  
  Navbar
} from '../components'

export const Home = () => {
  return(
    <div className="flex flex-col justify-between w-full max-w-screen-2xl 2xl:mx-auto md:px-16 lg:px-24 px-5 py-10">
      <Navbar />
      <div className="h-[400rem]"></div>
    </div>
  )
}