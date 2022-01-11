import React from 'react'
import {  
  Navbar,
  Main,
  Footer
} from '../components'
import { useScrollToTop } from '../hooks'

export const Home = () => {
  useScrollToTop()
  
  return(
    <div className="flex flex-col justify-between w-full max-w-screen-2xl 2xl:mx-auto md:px-16 lg:px-24 px-5 py-10">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}