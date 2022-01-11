import React from 'react'

export const Button: React.FC = ({ children }) => {
  return(
    <button className="px-4 py-2 font-semibold flex justify-center items-center bg-orange-400 rounded-sm border-2 border-orange-400 hover:bg-white hover:text-orange-400 transition-colors duration-300">
      {children}
    </button>
  )
}