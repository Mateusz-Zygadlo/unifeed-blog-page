import React, {
  useState,
  useEffect,
} from 'react'
import { Images } from '../assets'
import { Button } from './Button'
import { 
  useWindowSize,
  useMeasure,
} from '../hooks'
import { MOBILE_SIZE } from '../constants'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width, setWidth } = useWindowSize()
  const [rect, myRef]: any = useMeasure()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div
      className="sticky top-0 py-5"
      ref={myRef}
    >
      <div className="flex items-center justify-between relative">
        <img 
          src={Images.Logo}
          alt="Logo icon"
        />
        {width > MOBILE_SIZE ? (
          <div className="flex items-center">
            <ul className="flex mr-3">
              <li className="nav-link">Home</li>
              <li className="nav-link">Features</li>
              <li className="nav-link">Pricing</li>
            </ul>
            <Button>Subscribe</Button>
          </div>
        ) : isOpen ? (
          <div className="flex flex-col items-center absolute top-0 -right-1 w-full py-10 px-10 bg-white border-2 border-black">
            <img 
              src={Images.Close}
              alt="Close icon"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 scale-150"
            />
            <ul className="flex flex-col items-center mr-3">
              <li className="mobile-nav-link">Home</li>
              <li className="mobile-nav-link">Features</li>
              <li className="mobile-nav-link">Pricing</li>
            </ul>
            <div className="my-5 scale-125">
              <Button>Subscribe</Button>
            </div>
          </div>
        ) : (
          <img 
            src={Images.HamburgerMenu}
            alt="close"        
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </div>
  )
}